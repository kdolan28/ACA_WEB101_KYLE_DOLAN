var gameMarker = "X";

function changeMarkerToX() {
  document.getElementById("btn-x").innerHTML = "X";
  gameMarker = "X";
  console.log("The x button was clicked!");
}

function changeMarkerToO() {
  document.getElementById("btn-o").innerHTML = "O";
  gameMarker = "O";
  console.log("The o button was clicked!");
}

function placeMark(mySquare) {
  document.getElementById(mySquare).innerHTML = gameMarker;
}
