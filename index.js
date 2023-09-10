const { app, BrowserWindow, ipcMain } = require('electron')
var ipc = require('electron').ipcRenderer;

//If the server interupts the program (say, for a mode change), this value gets set to true and the program resets
var interupt = false
//successful server pings increment this by one.
var tickCounter = 0
//load fs
const fs = require('fs')
//Initialize network communication
const net = require('net')
const client = new net.Socket();
//set up the config list
var config = JSON.parse(fs.readFileSync('config/config.json'));
module.exports.config = config
//reads if the launch paramater is run

function server(mode) {
	tick();
	function tick(){
		if (interupt === false){
			tickCounter++
			setTimeout(tick, 1000)
		}
	}
}

if(config.launchin === "POS") {
	console.log("OpenPOS is starting in standard mode....")
	app.whenReady().then(() => {
		const win = new BrowserWindow({
			width: 800,
			height: 600,
			webPreferences: {
				nodeIntegration: true,
				contextIsolation: false
			}
	    })
		win.loadFile('index.html')
		server("POS");
	})
}
//reads if launch paramater is service
else if(config.launchin === "service") {
	console.log("OpenPOS is starting in service mode....")
	app.whenReady().then(() => {
		const win = new BrowserWindow({
			width: 800,
			height: 600,
			webPreferences: {
				nodeIntegration: true,
				contextIsolation: false
			}
		})
		win.loadFile('service.html')
		server("service");
	})
}
else {
	console.log(`invalid mode: ${config.launchin}`)
	return
}

// Define the IP address and port of the server
const serverIP = '192.168.86.60';
const serverPort = 6969;

client.connect(serverPort, serverIP, () => {
	console.log('Connected to server ' + serverIP + ":" + serverPort);
});  

const axios = require('axios');
const apiUrl = 'http://192.168.86.60:6969/v1/order';

ipcMain.on('completeOrder', (event, order) => {
    axios.post(apiUrl, order)
  .then((response) => {
    // Handle the response from the server
    console.log('Response from server:', response.data);
  })
  .catch((error) => {
    // Handle errors
    console.error('Error:', error);
  });

})