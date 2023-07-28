//!Last project an leteractive stopwatch program
const btnStart = document.getElementById("btnStart");
const btnPause = document.getElementById("btnPause");
const btnReset = document.getElementById("btnReset");
const time = document.querySelector("#time");

let start;
let elapsed = 0;
let now = 0;
let pause = true;
let intervalID;
let hr;
let min;
let sec;


btnStart.addEventListener("click", () =>{
    if(pause){
        pause = false;
        start = Date.now() - elapsed;
        intervalID = setInterval(updateTime, 1000);
    }
});

btnPause.addEventListener("click", () =>{
    if(!pause){
        pause = true;
        elapsed = Date.now() - start;
        clearInterval(intervalID);
        time.textContent = `${hr}:${min}:${sec}`;
    }
});

btnReset.addEventListener("click", () =>{
    pause = true;
    now = 0;
    start = 0;
    elapsed = 0;
    hr = 0;
    min = 0;
    sec = 0;
    clearInterval(intervalID);
    time.textContent = `00:00:00`;
    btnStart.click();

});

function updateTime(){
    elapsed = Date.now() - start;
    sec = Math.floor( (elapsed/1000) % 60);
    min = Math.floor( elapsed/(1000 * 60) % 60);
    hr = Math.floor( elapsed/(1000 * 60 * 60) % 60);
    
    sec = pad(sec);
    min = pad(min);
    hr = pad(hr);
    
    time.textContent = `${hr}:${min}:${sec}`;

    function pad(unit){
        return (("0") + unit).length > 2? unit : "0" + unit;
    }
    
}








