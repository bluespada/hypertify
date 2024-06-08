import { app, shell, BrowserWindow, ipcMain } from 'electron';
import { join } from 'path';
import { electronApp, optimizer, is } from '@electron-toolkit/utils';

function createWindow() {
    const window = new BrowserWindow({
        width: 900,
        height: 670,
        show: true,
        hasShadow: true,
        autoHideMenuBar: true,
        webPreferences: {
            preload: join(__dirname, '../preload/index.js'),
            sandbox: false,
        }
    });

    window.setTitle("hypertify");

    window.setContentProtection(true);

    window.on("ready-to-show", () => {
        window.show();
    });

    window.webContents.setWindowOpenHandler((detail) => {
        shell.openExternal(detail.url);
        return { action: "deny" };
    });

    if(is.dev && process.env.ELECTRON_RENDERER_URL){
        window.loadURL(process.env.ELECTRON_RENDERER_URL);
    }else{
        window.loadFile(join(__dirname, "../renderer/index.html"));
    };
}

app.whenReady().then(() => {
    electronApp.setAppUserModelId("com.github.bluespada.hypertify");

    app.on('browser-window-created', (_, window) => {
        optimizer.watchWindowShortcuts(window)
    });

    ipcMain.on('ping', () => console.log('pong'));

    createWindow();

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    });
})
