
var savedPlan = JSON.parse(localStorage.getItem("savedPlan")) || {};
console.log(savedPlan)
var today = moment();
// var times = document.querySelectorAll('.time');
var time = $(".time").html();
var planInput = $('input#plan').val();
console.log(planInput)
// Array.from(document.querySelectorAll('.form-group input')).reduce((acc, input) => ({...acc, [input.id]: input.value }), {});
var plans = []
// var saveBtn = document.querySelectorAll(".save-btn");
var mainEl = $(".main");
// var plans = document.querySelectorAll("#plan");
var timeBlock = document.querySelectorAll("#time-block");
var currentTime = today.format("H");
var times = document.querySelectorAll(".time");

// for (var i = 0 ; i < saveBtn.length; i++) {
//     saveBtn[i].addEventListener('click' , saveDay); 
// }
// $("button").click(function(){
//     $(this).hide();
//   });
// function savePlan(event) {
//   event.preventDefault();
  
//   var planInput = $('input#plan').val();

// }

$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));


function setColors() {
  for (var i = 0; i < times.length; i++) {
    var hour = times[i].getAttribute("data-time")
    if (hour === currentTime) {
      times[i].style.background = "red";
    } else if (hour > currentTime) {
      times[i].style.background = "lightgreen";
    } else if (hour < currentTime) {
      times[i].style.background = "gray";
    }
  }
}
console.log(plans)


function renderSavedPlans() {
    $('input#plan').val("")
    for (var i = 9; i <= 17; i++) {
      if(savedPlan[i]){
        console.log(savedPlan[i])
        var btnId = "#" + i 
        console.log($(btnId)[0].previousElementSibling)
       $(btnId)[0].previousElementSibling.value = (savedPlan[i])
      }
      
    }
};
function init() {
    var savedPlans = JSON.parse(localStorage.getItem("savedPlan"));
    if (savedPlans !== null) {
        savedPlan = savedPlans;
        console.log(savedPlans)
    }
    renderSavedPlans();
}

function saveDay(event) {
  event.preventDefault()
  var theTime = $(this)[0].id;
  var saveBtn = $(event.target);
  var plan = saveBtn.siblings("input").val();

  savedPlan[theTime] = plan
  localStorage.setItem("savedPlan", JSON.stringify(savedPlan));
}


setColors()
init()
mainEl.on('click','.save-btn', saveDay);