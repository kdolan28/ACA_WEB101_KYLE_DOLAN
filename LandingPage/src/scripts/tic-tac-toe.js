var gameMarker = "x";

function changeMarkerToX() {
  document.getElementById("btn-x").innerHTML = "X";
  var gameMarker = "X";
  console.log("The x button was clicked!");
}

function changeMarkerToO() {
  document.getElementById("btn-o").innerHTML = "O";
  var gameMarker = "O";
  console.log("The o button was clicked!");
}

function placeMark() {
  document.getElementById("q0").innerHTML = gameMarker;
}
