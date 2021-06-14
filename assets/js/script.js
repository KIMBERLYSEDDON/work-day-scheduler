var savedPlan = JSON.parse(localStorage.getItem("savedPlan")) || {};
var today = moment();
var planInput = $('input#plan').val();
var mainEl = $(".main");
var currentTime = today.format("H");
var times = document.querySelectorAll(".time");


$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));


function setColors() {
  for (var i = 0; i < times.length; i++) {
    var hour = times[i].getAttribute("data-time")
    if (hour === currentTime) {
      times[i].nextElementSibling.style.background = "red";
    } else if (hour > currentTime) {
      times[i].nextElementSibling.style.background = "lightgreen";
    } else if (hour < currentTime) {
      times[i].nextElementSibling.style.background = "#adadad";
    }
  }
}

function renderSavedPlans() {
    $('input#plan').val("")
    for (var i = 9; i <= 17; i++) {
      if(savedPlan[i]){
        var btnId = "#" + i;
       $(btnId)[0].previousElementSibling.value = (savedPlan[i]);
      }
      
    }
};
function init() {
    var savedPlans = JSON.parse(localStorage.getItem("savedPlan"));
    if (savedPlans !== null) {
        savedPlan = savedPlans;
    }
    renderSavedPlans();
}

function saveDay(event) {
  event.preventDefault()
  var time = $(this)[0].id;
  var saveBtn = $(event.target);
  var plan = saveBtn.siblings("input").val();

  savedPlan[time] = plan
  localStorage.setItem("savedPlan", JSON.stringify(savedPlan));
}


setColors()
init()
mainEl.on('click','.save-btn', saveDay);