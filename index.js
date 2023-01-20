const { app, BrowserWindow } = require('electron')
var ipc = require('electron').ipcRenderer;
//load fs
const fs = require('fs')
//set up the config list
var config = JSON.parse(fs.readFileSync('config/config.json'));
module.exports.config = config
//reads if the launch paramater is run
if(config.launchin === "run") {
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
if(config.launchin === "service") {
	app.whenReady().then(() => {
		const win = new BrowserWindow({
			width: 800,
			height: 600
		})
		win.loadFile('service.html')
	})
}