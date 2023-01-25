const { app, BrowserWindow } = require('electron')
var ipc = require('electron').ipcRenderer;
//If the server interupts the program (say, for a mode change), this value gets set to true and the program resets
var interupt = false
//successful server pings increment this by one.
var tickCounter = 0
//load fs
const fs = require('fs')
//set up the config list
var config = JSON.parse(fs.readFileSync('config/config.json'));
module.exports.config = config
//reads if the launch paramater is run

	function server(mode) {
		tick();
	function tick(){
	if (interupt === false){	
		tickCounter++
		console.log(mode + "Contacted Not a Server" + tickCounter)
		setTimeout(tick, 1000)
	}}}

if(config.launchin === "POS") {
console.log("OpenPOS is startnig in standard mode....")
app.whenReady().then(() => {
	const win = new BrowserWindow({
		width: 800,
		height: 600
		
    })
	win.loadFile('index.html')
	server("POS");
})
}
//reads if launch paramater is service
if(config.launchin === "service") {
	console.log("OpenPOS is startnig in service mode....")
	app.whenReady().then(() => {
		const win = new BrowserWindow({
			width: 800,
			height: 600
		})
		win.loadFile('service.html')
		server("service");
	})
}
