var today = moment();
// var times = document.querySelectorAll('.time');
var time = $(".time").html();
var planInput = $("#inputLg");

var timeBlock = $(".form-group");
var currentTime = today.format("hh A");
var times = document.querySelectorAll(".time");
console.log(currentTime);

$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));
function setColors() {
  for (var i = 0; i < times.length; i++) {
    if (times[i].textContent === currentTime) {
      times[i].style.background = "red";
    } else if (times[i].textContent > currentTime) {
      times[i].style.background = "lightgreen";
    } else {
      times[i].style.background = "gray";
    }
  }
}
setColors()