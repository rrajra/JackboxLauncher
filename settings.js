const {remote, Debugger} = require('electron');
const jetpack = require('fs-jetpack');

var pack1 = false;
var pack2 = false;
var pack3 = false;
var pack4 = false;
var pack5 = false;
var pack6 = false;
var closeGame;

document.getElementById('btnOn').addEventListener('click', contOn);

document.getElementById('switchVal1').addEventListener('click', switch1)
document.getElementById('switchVal2').addEventListener('click', switch2)
document.getElementById('switchVal3').addEventListener('click', switch3)
document.getElementById('switchVal4').addEventListener('click', switch4)
document.getElementById('switchVal5').addEventListener('click', switch5)
document.getElementById('switchVal6').addEventListener('click', switch6)

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


function contOn() {
    saveSettings1();
    //window.setTimeout(close, 250);
}

function saveSettings1() {
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
    window.close();
}

document.addEventListener('DOMContentLoaded', function() {
    load();
}, false);

function load() {
        console.log("loaded")

            const fs = require('fs');
            var userData = fs.readFile(__dirname + '\\data' + "\\packData.json", 'utf8', function (err, data) {
            var parsed = JSON.parse(data);
            pack1 = parsed.jackpack1;
            pack2 = parsed.jackpack2;
            pack3 = parsed.jackpack3;
            pack4 = parsed.jackpack4;
            pack5 = parsed.jackpack5;
            pack6 = parsed.jackpack6;  
            console.log(pack1);
            syncBtns();
        })
}

function syncBtns() {
    if(pack1 == true) 
    {
        document.getElementById("switchVal1").checked = true;
    }
    if(pack2 == true) 
    {
        document.getElementById("switchVal2").checked = true;
    }
    if(pack3 == true) 
    {
        document.getElementById("switchVal3").checked = true;
    }
    if(pack4 == true) 
    {
        document.getElementById("switchVal4").checked = true;
    }
    if(pack5 == true) 
    {
        document.getElementById("switchVal5").checked = true;
    }
    if(pack6 == true) 
    {
        document.getElementById("switchVal6").checked = true;
    }
}