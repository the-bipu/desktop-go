const { app, BrowserWindow, ipcMain } = require("electron");
const http = require("http");
const dns = require("dns");
const path = require("path");

// On some systems (commonly Windows), "localhost" resolves to the IPv6
// address ::1 before the IPv4 127.0.0.1. If the dev server is only
// listening on IPv4, that makes every check fail even though the server
// is running and a browser (which tries both) works fine. This makes
// Node try IPv4 first, matching what actually works in practice.
dns.setDefaultResultOrder("ipv4first");

let mainWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 480,
    height: 360,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.setMenuBarVisibility(false);
  mainWindow.loadFile("index.html");
}

app.whenReady().then(() => {
  createMainWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

// Checks whether something is actually responding at the given URL.
// Simple and honest: just tries to connect, with a short timeout.
function checkIfLive(url) {
  return new Promise((resolve) => {
    let target;
    try {
      target = new URL(url);
    } catch (err) {
      resolve(false);
      return;
    }

    const req = http.request(target, { method: "HEAD", timeout: 10000 }, (res) => {
      resolve(res.statusCode >= 200 && res.statusCode < 500);
      res.resume();
    });

    req.on("timeout", () => req.destroy());
    req.on("error", () => resolve(false));
    req.end();
  });
}

ipcMain.handle("check-live", async (_event, url) => {
  const isLive = await checkIfLive(url);
  if (isLive) return true;

  // If "localhost" failed, try the IPv4 address directly before giving up -
  // covers machines where the DNS fix above still isn't enough.
  if (url.includes("localhost")) {
    return checkIfLive(url.replace("localhost", "127.0.0.1"));
  }
  return false;
});

// Opens the given URL in its own window, the same way a browser would.
ipcMain.handle("open-app", async (_event, url) => {
  const previewWindow = new BrowserWindow({
    width: 420,
    height: 800,
    title: url,
  });
  previewWindow.setMenuBarVisibility(false);
  previewWindow.loadURL(url);
});
