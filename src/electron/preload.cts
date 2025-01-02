const electron = require("electron");

electron.contextBridge.exposeInMainWorld("electron", {
  ipcRenderer: electron.ipcRenderer,
  shell: electron.shell,
  clipboard: electron.clipboard,
  app: electron.app,
  dialog: electron.dialog,
  dog: () => console.log("dog"),
});
