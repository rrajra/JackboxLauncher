const {remote, Debugger} = require('electron');
const jetpack = require('fs-jetpack');
var os = require('os');
const { exists } = require('fs-jetpack');
window.$ = window.jQuery = require('jquery');

document.getElementById('close').addEventListener('click', closeWindow);
document.getElementById('minimize').addEventListener('click', minimizeWindow);
document.getElementById('continue').addEventListener('click', nextMove);
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      nextMove();
    }
    else {
        console.log("not enter it's. " + e.key);
    }
});
document.getElementById('back').addEventListener('click', backMove);
document.getElementById('editInfo').addEventListener('click', editBtnInfo);
document.getElementById('viewPast').addEventListener('click', viewHistory);
document.getElementById('plus').addEventListener('click', settingsWindow);
document.getElementById('closeSwitch').addEventListener('click', switch1)

var quitOnLoad;
var warning = document.getElementById('invalidNum');
var income = document.getElementById('minc');
var allowance = document.getElementById('mal');
var bills = document.getElementById('mbi');
var backBtn = document.getElementById('back');
var currency = "$";

var currentDate = new Date();
var month = currentDate.getMonth();

var inputIncome = document.getElementById('mIncome');

var incomeInt = 0;
var allowanceInt = 0;
var billsInt = 0;
var savings = 0;

function closeWindow() {
    var window = remote.getCurrentWindow()
    window.close()
}

function minimizeWindow() {
    var window = remote.getCurrentWindow();
    window.minimize();
}

function nextMove() {

    var introText = document.getElementById('introText');

    if(income.style.display === "") {
        income.style.display = "block";
    }

    if(income.style.display === "block") {
        var xyz = document.getElementById('mIncome').value;
        incomeInt = xyz;

        if(incomeInt >= 0 && incomeInt != "") {
            income.style.display = "none";
            allowance.style.display = "block";
            bills.style.display = "none";
            backBtn.style.display = "flex";
            introText.style.display = "none";
            warning.style.display = "none";
            console.log(incomeInt + " go forward");
            console.log(incomeInt);
        }
        else {
            warning.style.display = "flex";
            console.log("error! enter a valid int");
        }
    }
    else if (allowance.style.display === "block") {
        var x = document.getElementById('mAllowance').value;
        allowanceInt = x;
        
        if(allowanceInt >= 0 && allowanceInt != "") {
        income.style.display = "none";
        allowance.style.display = "none";
        bills.style.display = "block";
        warning.style.display = "none";
        }
        else {
            warning.style.display = "flex";
            console.log("error! enter a valid int");
        }
    }
    else if (bills.style.display === "block") {
        var x = document.getElementById('mBills').value;
        billsInt = x;

        if(billsInt >= 0 && billsInt != "") {
        income.style.display = "none";
        allowance.style.display = "none";
        bills.style.display = "none";
        backBtn.style.display = "none";
        warning.style.display = "none";

        var continuationBtn = document.getElementById('continue').style.display = "none";
        var done = document.getElementById('mainmenu').style.display = "flex";
        console.log(month);
        saveData();
        EnterMenu();
        }
        else {
            warning.style.display = "flex";
            console.log("error! enter a valid int");
        }
    }
}

    function viewHistory() {
        console.log("viewing history");
        window.open();
    }

    // Back button will only show up after income is entered
    function backMove() {

        if (allowance.style.display == "block") {
            income.style.display = "block";
            allowance.style.display = "none";
            bills.style.display = "none";
            backBtn.style.display = "none";
            warning.style.display = "none";
        }
        if (bills.style.display == "block") {
            income.style.display = "none";
            allowance.style.display = "block";
            bills.style.display = "none";
            warning.style.display = "none";
        }
    }

    function EnterMenu() {
        var disInc = document.getElementById('displayInc');
        var disAllow = document.getElementById('displayAllow');
        var disBills = document.getElementById('displayBills');
        var disName = document.getElementById('userName');

        savings = incomeInt - allowanceInt - billsInt;
        console.log(savings);

        disInc.innerHTML = "Your monthly income is: " + currency + incomeInt;
        disAllow.innerHTML = "Your monthly allowance is: " + currency + allowanceInt;
        disBills.innerHTML = "Your monthly bill costs are: "+ currency + billsInt;
        const computerName = os.userInfo().username;
        disName.innerHTML = "Welcome, " + computerName;
        makeGraph();
    }

    function editBtnInfo() {
        var editBtn = document.getElementById("editInfo");

        if(editBtn.value == "Edit Info") {
            //Editing
            editBtn.value = "Done"
            editBtn.textContent ="Done"
            var editText = document.getElementById("lS");
            editText.style.color = "yellow";
        }
        else if(editBtn.value == "Done") {
            //Done editing
            editBtn.value = "Edit Info"
            editBtn.textContent = "Edit Info"
        }
        else {
            console.log(editBtn.value);
        }
    }

    function switch1() {
        quitOnLoad = document.getElementById("closeSwitch").checked;
        saveQuitInfo();  
    }
    function saveQuitInfo() {

    }

    function lookForFile(){
        var file = __dirname + "\\data.json"
        incomeInt = file.income;
        allowanceInt = file.allowance;
        billsInt = file.billsInt;


        if(exists.file = true) {
            console.log("Works");
        }
        else {
            console.log("not working");
        }

    }

    function saveData() {
        var toSave = {
            income: incomeInt, 
            allowance: allowanceInt, 
            bills: billsInt
        }
        jetpack.write('data.json', toSave);
    }


    function makeGraph () {
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Income', 'Allowance', 'Bills', 'Savings'],
        datasets: [{
            label: 'Budget',
            data: [incomeInt, allowanceInt, billsInt, savings],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
});
}
