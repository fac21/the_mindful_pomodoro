const alarm = document.querySelector("audio");

let start = document.getElementById('start');
let pause = document.getElementById('breathe');
let reset = document.getElementById('reset');

let focusMins = document.getElementById('focus-mins');
let focusSecs = document.getElementById('focus-secs');

let restMins = document.getElementById('rest-mins');
let restSecs = document.getElementById('rest-secs');

let beginCountdown;

start.addEventListener('click', function(){
    if(beginCountdown === undefined){
        beginCountdown = setInterval(pomodoro, 1000)
    }
});

reset.addEventListener('click', function(){
    focusMins.innerText = 25;
    focusSecs.innerText = "00";

    restMins.innerText = 5;
    restSecs.innerText = "00";


});

pause.addEventListener('click', function(){
    stopInterval()
    beginCountdown = undefined;
});


//Pomodoro function
function pomodoro(){
    //Focus time countdown

    if(focusSecs.innerText != 0){
        focusSecs.innerText--;
    } else if(focusMins.innerText != 0 && focusSecs.innerText == 0){
        focusSecs.innerText = 59;
        focusMins.innerText--;
}

if (focusSecs.innerText < 10 && focusSecs.innerText > 0) {
    focusSecs.innerText = "0" + focusSecs.innerText;
}

if (focusMins.innerText == 0 && focusSecs.innerText == 0 && restMins.innerText == 5 && restSecs.innerText == "00") {
        alarm.play();
        alert("You're totally in the zone! Click OK to take a 5 minute rest 🧘");

}

    //Rest interval countdown
    if(focusMins.innerText == 0 && focusSecs.innerText == 0){
      if(restSecs.innerText != 0){
          restSecs.innerText--;
      } else if(restMins.innerText != 0 && restSecs.innerText == 0){
          restSecs.innerText = 59;
          restMins.innerText--;
      }  if (restSecs.innerText < 10 && restSecs.innerText > 0) {
          restSecs.innerText = "0" + restSecs.innerText;
      } else if (restMins.innerText ==  0 && restSecs.innerText == 0)  {
 alarm.play();
 alert("You're all Zenned out! Click OK to rest for 5 more minutes. OR, press reset to restart the timer! 🙏")
 restMins.innerText = 1;
}
}

}
//Stop countdown function
function stopInterval(){
    clearInterval(beginCountdown);
}
