const $ = require('jquery');

var windy = remote.getCurrentWindow();


$('#minimize').click(function() {

	windy.minimize();
});

$('#close').click(function() {
	windy.close();
});