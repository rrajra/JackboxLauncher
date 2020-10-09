const {remote, Debugger} = require('electron');
const jetpack = require('fs-jetpack');

var win = remote.getCurrentWindow();

document.getElementById('btnOn').addEventListener('click', contOn);

document.getElementById('switchVal1').addEventListener('click', switch1)
document.getElementById('switchVal2').addEventListener('click', switch2)
document.getElementById('switchVal3').addEventListener('click', switch3)
document.getElementById('switchVal4').addEventListener('click', switch4)
document.getElementById('switchVal5').addEventListener('click', switch5)
document.getElementById('switchVal6').addEventListener('click', switch6)



var pack1 = false;
var pack2 = false;
var pack3 = false;
var pack4 = false;
var pack5 = false;
var pack6 = false;
var closeGame;


function contOn() {
    saveSettings();
    window.setTimeout(close, 250);
    hideThings();
}

function saveSettings() {
    var toSave = {
        jackpack1: pack1, 
        jackpack2: pack2, 
        jackpack3: pack3,
        jackpack4: pack4,
        jackpack5: pack5,
        jackpack6: pack6,
        closeonlaunch: closeGame
    }
    jetpack.write(__dirname + '\\data' + "\\packData.json", toSave);
}

function switch1() {
    pack1 = document.getElementById("switchVal1").checked;  
}
function switch2() {
    pack2 = document.getElementById("switchVal2").checked;  
}
function switch3() {
    pack3 = document.getElementById("switchVal3").checked;  
}
function switch4() {
    pack4 = document.getElementById("switchVal4").checked;  
}
function switch5() {
    pack5 = document.getElementById("switchVal5").checked;  
}
function switch6() {
    pack6 = document.getElementById("switchVal6").checked;  
}