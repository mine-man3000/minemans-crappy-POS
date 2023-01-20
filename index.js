const { app, BrowserWindow } = require('electron')
var ipc = require('electron').ipcRenderer;
//load fs
const fs = require('fs')
//set up the launch mode paramater
var launchmode = JSON.parse(fs.readFileSync('config/config.json'));
//reads if the launch paramater is run
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
//reads if launch paramater is service
if(launchmode.launchin === "service") {
	app.whenReady().then(() => {
		const win = new BrowserWindow({
			width: 800,
			height: 600
		})
		win.loadFile('service.html')
	})
}