const timer = document.getElementById('stopWatch');
const lapData = document.getElementById('lapData');

let hr = 0;
let min = 0;
let sec = 0;
let stoptime = 1;

function startTimer() {
  if (stoptime == 1) {
        stoptime = 0;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == 0) {
    stoptime = 1;
  }
}

function timerCycle() {
    if (stoptime == 0) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    timer.innerHTML = hr + ':' + min + ':' + sec;

    setTimeout("timerCycle()", 1000);
  }
}

function resetTimer() {
    timer.innerHTML = '00:00:00';
    stoptime = 1;
    hr = 0;
    sec = 0;
    min = 0;

}

function lapTimer() {
    let div = document.createElement('div');
    //console.log(lapData);
    div.innerHTML = hr + ':' + min + ':' + sec;
    div.classList.add('saveTimer');
    lapData.appendChild(div);

}

function clearTimer() {
    resetTimer();
 
    //console.log(lapData,parentNode);
    lapData.innerHTML = '';
    
}