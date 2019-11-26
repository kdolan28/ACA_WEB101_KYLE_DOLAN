var cookiecount = 0;
var autoClick = 0;
var farms = 0;
var multiplier = 1;

function update() {
  document.getElementById("text").value = cookiecount;
  document.title = cookiecount + " Cookies";
  document.getElementById("amountMultiplier").innerHTML =
    "Multiplier Upgrade x" + (multiplier + 1);
  document.getElementById("amountMultiplier2").innerHTML =
    "x" + (multiplier + 1);
  document.getElementById("costMultiplier").innerHTML =
    (multiplier + 1) * 100 + " Cookies";
  document.getElementById("currentMultiplier").innerHTML =
    "Your multiplier is x" + multiplier;
  document.getElementById("amountAutoClick").innerHTML =
    autoClick + " Auto Clickers";
  document.getElementById("costAutoClick").innerHTML =
    (autoClick + 1) * 12 + " Cookies";
  document.getElementById("amountFarms").innerHTML = farms + " Farms";
  document.getElementById("costFarms").innerHTML =
    (farms + 1) * 15 + " Cookies";
  document.getElementById("cookiesPerSecond").innerHTML =
    autoClick + farms * 2 * multiplier + " Cookies p/s!";
}

function timer() {
  cookiecount = cookiecount + autoClick * multiplier;
  cookiecount = cookiecount + farms * 2 * multiplier;
  update();
}
setInterval(timer, 1000);

function add() {
  cookiecount = cookiecount + 1;
  update();
}

function save() {
  localStorage.setItem("cookiecount", cookiecount);
  localStorage.setItem("autoClick", autoClick);
  localStorage.setItem("farms", farms);
  localStorage.setItem("multiplier", multiplier);
}

function load() {
  cookiecount = localStorage.getItem("cookiecount");
  cookiecount = parseInt(cookiecount);
  autoClick = localStorage.getItem("autoClick");
  autoClick = parseInt(autoClick);
  farms = localStorage.getItem("farms");
  farms = parseInt(farms);
  multiplier = localStorage.getItem("multiplier");
  multiplier = parseInt(multiplier);
  update();
}
function buyAutoClick() {
  if (cookiecount >= (autoClick + 1) * 12) {
    cookiecount = cookiecount - (autoClick + 1) * 12;
    autoClick = autoClick + 1;
    update();
  }
}

function buyFarm() {
  if (cookiecount >= (farms + 1) * 15) {
    cookiecount = cookiecount - (farms + 1) * 15;
    farms = farms + 1;
    update();
  }
}

function buyMultiplier() {
  if (cookiecount >= (multiplier + 1) * 100) {
    cookiecount = cookiecount - (multiplier + 1) * 100;
    multiplier = multiplier + 1;
    update();
  }
}
