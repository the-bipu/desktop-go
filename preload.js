const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  checkLive: (url) => ipcRenderer.invoke("check-live", url),
  openApp: (url) => ipcRenderer.invoke("open-app", url),
});
