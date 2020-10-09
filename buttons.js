const $ = require('jquery');
const { remote } = require('electron');

var clientWindow = remote.getCurrentWindow();

$(document).ready(function(){
	alert("woo");
});