const $ = require('jquery');

var mainWindow = remote.getCurrentWindow();


$('#minimize').click(function() {

	mainWindow.minimize();
});

$('#close').click(function() {
	mainWindow.close();
});