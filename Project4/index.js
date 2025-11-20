//the purpose of these variables : keep track of how many seconds has elapsed since we started the clock.
//when the clock stops, we'll stop counting the seconds, if we click 'reset', we reset the clock.
let secondsElapsed = 0;  //start from 0
let interval = null; 
const time = document.getElementById("time")


function setTime() { //this will tell you how many seconds has elapsed and updating the value so that 00:00 will update. 
    const minutes = Math.floor(secondsElapsed / 60 ) // This calculates how many full minutes have passed by dividing the total seconds by 60 and rounding down.
    const seconds = secondsElapsed % 60 //This gets the leftover seconds after removing the full minutes by using the modulo operator.
    time.innerHTML = `${padStart(minutes)}: ${padStart(seconds)}`; //This updates the displayed time on the webpage by setting the element’s HTML to show the minutes and seconds in a timer format.
}

function padStart(value) { 
    return String(value).padStart(2, "0") //It turns the value into a string and adds a “0” in front if it’s only one digit, then gives the final result back.
    //The final string should be at least 2 characters long.
    //So if the value is only one character (like "5"), JavaScript adds a "0" in front to make it two characters ("05").
}


function timer() {
    secondsElapsed++;//++ means add one
     setTime()
}



function startClock() { //we create an interval, which runs at any period of time. e.g, every 2mins, 10 mins, every hour.
    //so we'll call a function whenever that increment hits. eg.every one second, we increment the clock. 
    if (interval) resetClock()
  interval = setInterval(timer, 1000)
} //when we start the clock, we set the variable interval(let interval) to be equal to the setInterval, which calls the timer function every 1000 milliseconds or every second.


function stopClock() {
    clearInterval(interval)
}

function resetClock() {
    stopClock()
    secondsElapsed = 0;
    setTime()
}