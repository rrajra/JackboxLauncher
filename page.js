const {remote, Debugger} = require('electron');
const { electron } = require('process');
var win = remote.getCurrentWindow();
const { BrowserWindow } = require('electron').remote

var pack2 = remote.pack2
var pack3 = remote.pack3
var pack4 = remote.pack4
var pack5 = remote.pack5
var pack6 = remote.pack6
var pack7 = remote.pack7

document.getElementById('pp').addEventListener('click', hidePack1);
document.getElementById('pp2').addEventListener('click', hidePack2);
document.getElementById('pp3').addEventListener('click', hidePack3);
document.getElementById('pp4').addEventListener('click', hidePack4);
document.getElementById('pp5').addEventListener('click', hidePack5);
document.getElementById('pp6').addEventListener('click', hidePack6);
document.getElementById('pp7').addEventListener('click', hidePack7);
document.getElementById('home').addEventListener('click', toHome);
document.getElementById('plus').addEventListener('click', settingsWindow);
document.getElementById('myInput').addEventListener('keyup', search);

const wrapper = document.getElementById('b1');
const wrapper2 = document.getElementById('b2');
const wrapper3 = document.getElementById('b3');
const wrapper4 = document.getElementById('b4');
const wrapper5 = document.getElementById('b5');
const wrapper6 = document.getElementById('b6');
const wrapper7 = document.getElementById('b7');

// If true, JBL will exit after launching selected pack.
var quitOnLoad = false;

document.getElementById('closeSwitch').addEventListener('click', switch1)

// Scrolls to top of page 
function toHome() {
    var window = remote.getCurrentWindow()
    var title = document.getElementById('title');
    title.scrollTo({ top: 0, behavior: 'smooth' });
}

//#region Adding event listeners to buttons
wrapper.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }

  launchPP1();
  window.setTimeout(checkToQuit, 250);
})
wrapper2.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
      return;
    }
  
    launchPP2();
    window.setTimeout(checkToQuit, 250);
  })
wrapper3.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
      return;
    }
  
    launchPP3();
    window.setTimeout(checkToQuit, 250);
  })

  wrapper4.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
      return;
    }
  
    launchPP4();
    window.setTimeout(checkToQuit, 250);
  })
  wrapper5.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
      return;
    }
  
    launchPP5();
    window.setTimeout(checkToQuit, 250);
  })
  wrapper6.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
      return;
    }
  
    launchPP6();
    window.setTimeout(checkToQuit, 250);
  })
  wrapper7.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
      return;
    }
  
    launchPP7();
    window.setTimeout(checkToQuit, 250);
  })
  //#endregion
  
  function checkToQuit() {
    if(quitOnLoad == true) {
        win.close();
    }
  }

//#region Hide packs
function hidePack1() {
    const toHide = document.getElementById('b1');
    if(toHide.style.display == "block") {
        toHide.style.display = "none"
    }
    else {
        console.log(toHide.style.display);
        toHide.style.display = "block"
    }
}
function hidePack2() {
    const toHide = document.getElementById('b2');
    if(toHide.style.display == "block") {
        toHide.style.display = "none"
    }
    else {
        toHide.style.display = "block"
    }
}
function hidePack3() {
    const toHide = document.getElementById('b3');
    if(toHide.style.display == "block") {
        toHide.style.display = "none"
    }
    else {
        toHide.style.display = "block"
    }
}
function hidePack4() {
    const toHide = document.getElementById('b4');
    if(toHide.style.display == "block") {
        toHide.style.display = "none"
    }
    else {
        toHide.style.display = "block"
    }
}
function hidePack5() {
    const toHide = document.getElementById('b5');
    if(toHide.style.display == "block") {
        toHide.style.display = "none"
    }
    else {
        toHide.style.display = "block"
    }
}
function hidePack6() {
    const toHide = document.getElementById('b6');
    if(toHide.style.display == "block") {
        toHide.style.display = "none"
    }
    else {
        toHide.style.display = "block"
    }
}
    function hidePack7() {
        const toHide = document.getElementById('b7');
        if(toHide.style.display == "block") {
            toHide.style.display = "none"
        }
        else {
            toHide.style.display = "block"
        }
    }
    //#endregion

function launchPP1() {
    window.location.href = "steam://run/250900"
}
function launchPP2() {
    window.location.href = "steam://run/397460"
}
function launchPP3() {
    window.location.href = "steam://run/434170"
}
function launchPP4() {
    window.location.href = "steam://run/610180"
}
function launchPP5() {
    window.location.href = "steam://run/774461"
}
function launchPP6() {
    window.location.href = "steam://run/1005300"
}
function launchPP7() {
    window.location.href = "steam://run/1211630"
}
function switch1() {
    quitOnLoad = document.getElementById("closeSwitch").checked;
    saveQuitInfo();  
}

document.addEventListener('DOMContentLoaded', function() {
    hideThings();
}, false);

var newWindow = null;

// Opens settings window
// Allows users to select / deselect packs
function settingsWindow() {
        newWindow = new BrowserWindow( {
        height: 485,
        width: 900,
        title: 'Settings',
        fullscreenable: false,
        webPreferences: {
            nodeIntegration: true
        }
        })
        newWindow.loadFile('settings.html')
}

function search() {
        // Declare variables
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById('myInput');
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = document.querySelectorAll(".ul li");
      
        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          txtValue = a.textContent || a.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].parentElement.style.display = "";
          } else {
            li[i].parentElement.style.display = "none";
          }
        }
      }
 
      function saveQuitInfo() {
          
      }

function hideThings() {
    var jsonLocation = __dirname + "\\data";
    var fileName = "\\packData.json"
    var file = jsonLocation + fileName;
            
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

            if(pack1 == false) {
                const localHideVar1 = document.getElementById('b1');
                localHideVar1.style.display = "none";
            }
            if(pack2 == false) {
                const localHideVar2 = document.getElementById('b2');
                localHideVar2.style.display = "none";
            }
            if(pack3 == false) {
                const localHideVar3 = document.getElementById('b3');
                localHideVar3.style.display = "none";
            }
            if(pack4 == false) {
                const localHideVar4 = document.getElementById('b4');
                localHideVar4.style.display = "none";
            }
            if(pack5 == false) {
                const localHideVar5 = document.getElementById('b5');
                localHideVar5.style.display = "none";
            }
            if(pack6 == false) {
                const localHideVar6 = document.getElementById('b6');
                localHideVar6.style.display = "none";
            }
            if(pack7 == false) {
                const localHideVar7 = document.getElementById('b7');
                localHideVar7.style.display = "none";
            }
})
}