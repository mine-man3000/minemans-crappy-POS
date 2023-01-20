const { app, BrowserWindow } = require('electron')
var ipc = require('electron').ipcRenderer;
const fs = require('fs')
var launchmode = JSON.parse(fs.readFileSync('config/config.json'));

if(launchmode.launchin === "run") {
console.log("loading in standard mode....")
app.whenReady().then(() => {
	const win = new BrowserWindow({
		width: 800,
		height: 600
    })
	win.loadFile('index.html')
})
}
if(launchmode.launchin === "service") {
	app.whenReady().then(() => {
		const win = new BrowserWindow({
			width: 800,
			height: 600
		})
		win.loadFile('service.html')
	})
}