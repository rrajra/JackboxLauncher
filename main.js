// Modules to control application life and create native browser window
const {app, BrowserWindow, dialog} = require('electron')
const path = require('path')
const jetpack = require('fs-jetpack');
const { exists } = require('fs-jetpack');
const { fstat, appendFileSync, fsync } = require('fs');
const { parseJSON } = require('jquery'); 

const CHANNEL_NAME = 'main';

// This bool is if a config file exists
var yesno;

var img_dir = '/images/';
var jsonLocation = __dirname + "\\data";
var fileName = "\\packData.json"

var pack1;
var pack2;
var pack3;
var pack4;
var pack5;
var pack6;
var pack7;


function createWindow () {0
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    icon: path.join(__dirname, img_dir, 'frame.ico'),
    titleBarStyle: 'customButtonsOnHover',
    frame: false,
    backgroundColor: 'black',
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'menuHandler.js'),
      preload: path.join(__dirname, 'preload.js')
    }
  })


  mainWindow.on('close', function() { //   <---- Catch close event
});

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// Opens window that allows user to select which packs
// they own
function createSecWindow () {0
  // Create the browser window.
  const secWindow = new BrowserWindow({
    width: 600,
    height: 380,
    icon: path.join(__dirname, img_dir, 'frame.ico'),
    titleBarStyle: 'customButtonsOnHover',
    frame: false,
    backgroundColor: 'black',
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'menuHandler.js'),
    }
  })


  secWindow.on('close', function() { //   <---- Catch close event
    createWindow();
});

  // and load the index.html of the app.
  secWindow.loadFile('selection.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {

  var file = jsonLocation + fileName;

        exists(file);
        yesno = exists(file);

        //If the config file exists, it'll load the data and set
        //Whether or not user owns that pack
        if(yesno == "file") {
            createWindow()
            console.log("Works");
            const fs = require('fs');
            var userData = fs.readFile(__dirname + '\\data' + "\\packData.json", 'utf8', function (err, data) {
            var parsed = JSON.parse(data);
            pack1 = parsed.jackpack1;
            pack2 = parsed.jackpack2;
            pack3 = parsed.jackpack3;
            pack4 = parsed.jackpack4;
            pack5 = parsed.jackpack5;
            pack6 = parsed.jackpack6;
            pack7 = parsed.jackpack7;
            })
        }
        // If pack doesn't exist a pack selection screen will open up
        else {
            createSecWindow();
        }

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.