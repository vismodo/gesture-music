const { app, BrowserWindow, Menu, MenuItem, dialog } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 480,
    height: 300,
    y:-1,
    x:1060,
    alwaysOnTop:true,
    webPreferences: {
      nodeIntegration:true,
      contextIsolation:false,
      devTools:true,
      enableRemoteModule: true
    }
  })

  win.loadFile('pages/index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})