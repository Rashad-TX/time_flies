//display current date
let date = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
let showDate = document.getElementById("insert-date");
showDate.innerText=date;

//Global Variables for timer function
let timer;
let sec = 0;
let min = 0;
let hour = 0
let newElapsedTime;

//Get number of buttons for loop to add event listener
const btnLength = document.querySelectorAll(".opt-btn").length;

//Will append new div's here
const mainDiv = document.getElementById("activities");

//Add event listeners to each activity button & captures the buttonValue(activity name)
 for (let i = 0; i < btnLength; i++){
document.querySelectorAll(".opt-btn")[i].addEventListener("click", function() {
    const buttonValue = this.value;
    addActivity(buttonValue);
})
    }

    //Onclick event creates the div, li, i, p , play, stop, timer text and appends to the main div
function addActivity(buttonValue){
 
 
        const newDiv = document.createElement('div');
     newDiv.classList.add("activity");

     const newLi = document.createElement('li');
     newLi.innerText = buttonValue;
     newLi.classList.add("act-li");
     newDiv.appendChild(newLi);

     const newPlay =document.createElement('i');
     newPlay.classList.add("fa-solid");
     newPlay.classList.add("fa-play");
     newPlay.addEventListener("click",function(e){
        
     timer = setInterval(startTimer, 1000);
     })
    newDiv.appendChild(newPlay);

    const newStop =document.createElement('i');
    newStop.classList.add("fa-solid");
    newStop.classList.add("fa-circle-stop");
    newStop.addEventListener("click", stopTimer)
    newDiv.appendChild(newStop);

    newElapsedTime = document.createElement('p');
    newElapsedTime.classList.add("elapsedTime-Text");
    newElapsedTime.innerText = "00:00:00";
    newDiv.appendChild(newElapsedTime);

          mainDiv.appendChild(newDiv);
    }

    function startTimer(e) {
        sec++;
        if(sec === 60){
            sec === 0
            min++;
        }
    if (min === 60){
        min === 0;
        hour++;
        
    }
    displayTime(e)
    
    }

    function displayTime(e){
        let sec_format = sec;
        let min_format = min;
        let hour_format = hour;
     
    
      
        if(sec < 10){
            sec_format = "0"+sec;
        }
        if(min < 10){
            min_format = "0"+min;
        }
        if (hour <10){
            hour_format = "0"+hour;
        }
        newElapsedTime.innerHTML = hour_format + " :" + min_format +" : " + sec_format;
    }



     

function stopTimer(){
    clearInterval(startTimer);
    console.log("pressed");
}