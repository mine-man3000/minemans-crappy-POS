const { app, BrowserWindow } = require('electron')
var ipc = require('electron').ipcRenderer;
const fs = require('fs')

app.whenReady().then(() => {
	const win = new BrowserWindow({
		width: 800,
		height: 600
    })

	win.loadFile('index.html')
})