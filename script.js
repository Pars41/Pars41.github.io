let light = document.querySelector(".light")
light.addEventListener("click",()=>{
let screen = document.querySelector(".screen")

    screen.classList.toggle("lightOnOff")
})
let alarm = document.querySelector(".alarm")
alarm.addEventListener("click",()=>{
let audio = document.querySelector("#myAudio")

    audio.play()
})
let bool = true;

let mode = document.querySelector(".mode")
mode.addEventListener("click",()=>{

bool = !bool;
})
console.log(bool);

function showTime() {
let date = new Date();
let h = date.getHours(); // 0 - 23
let m = date.getMinutes(); // 0 - 59
let s = date.getSeconds(); // 0 - 59
let d = date.getDay(); // 0 - 6
let a = date.getDate(); // 0 - 30
let session = "AM";

switch (d) {
  case 0:
    d = "Sun";
    break;
  case 1:
    d = "Mon";
    break;
  case 2:
    d = "Tue";
    break;
  case 3:
    d = "Wed";
    break;
  case 4:
    d = "Thu";
    break;
  case 5:
    d = "Fri";
    break;
  case 6:
    d = "Sat";
}



if (h == 0) {
  h = 12;
}

if (h > 12) {
  h = h - 12;
  session = "PM";
}

h = h < 10 ? "0" + h : h;
m = m < 10 ? "0" + m : m;
s = s < 10 ? "0" + s : s;

let time = h + ":" ;
let min = m
let sec = s;
document.getElementById("MyClockDisplay").innerText = bool==true ? time: date.getHours() + ":"
document.getElementById("MyClockDisplay").textContent = bool==true ? time: date.getHours()  + ":"
document.getElementById("min").innerText = min;
document.getElementById("min").textContent = min;
document.getElementById("sec").innerText = sec;
document.getElementById("sec").textContent = sec;
document.getElementById("session").innerText = bool==true ? session: "24H";
document.getElementById("session").textContent = bool==true ? session: "24H";
document.getElementById("day").innerText = d;
document.getElementById("day").textContent = d;
document.getElementById("date").innerText = a;
document.getElementById("date").textContent = a;

setTimeout(showTime, 1000);
}

showTime();