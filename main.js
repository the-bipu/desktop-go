const { app, BrowserWindow, ipcMain } = require("electron");
const http = require("http");
const dns = require("dns");
const path = require("path");

dns.setDefaultResultOrder("ipv4first");

let mainWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 480,
    height: 360,
    resizable: false,
    icon: path.join(__dirname, "build", "icon.ico"),
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

  if (url.includes("localhost")) {
    return checkIfLive(url.replace("localhost", "127.0.0.1"));
  }
  return false;
});

ipcMain.handle("open-app", async (_event, url) => {
  const previewWindow = new BrowserWindow({
    width: 420,
    height: 800,
    title: url,
    icon: path.join(__dirname, "build", "icon.ico"),
  });
  previewWindow.setMenuBarVisibility(false);
  previewWindow.loadURL(url);
});
