import { app, BrowserWindow } from "electron";
import path from "path";
import { isDev } from "./utils.js";
import { getPreloadPath } from "./pathResolver.js";

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    // title: "Tovo Assistant",
    // center: true,
    webPreferences: {
      // nodeIntegration: true,
      preload: getPreloadPath(),
    },
  });
  if (isDev()) {
    mainWindow.loadURL("http://localhost:5123");
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
  }

  console.log("app ready");

  console.log(getPreloadPath());
});
