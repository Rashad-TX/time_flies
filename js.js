

//display current date
let date = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
let showDate = document.getElementById("insert-date");
showDate.innerText=date;



//Get number of activity buttons for loop to add event listener to each
const btnLength = document.querySelectorAll(".opt-btn").length;

//Will append new div's here
const mainDiv = document.getElementById("activities");

//Add event listeners to each activity button & captures the buttonValue(activity name)
 for (let i = 0; i < btnLength; i++){
document.querySelectorAll(".opt-btn")[i].addEventListener("click", function() {
    const buttonValue = this.value;
    addActivity(buttonValue);
});
   

    //Onclick event creates the div, i, p , play, stop, timer text and appends to the main div
function addActivity(buttonValue){
 
 
        const newDiv = document.createElement('div');
     newDiv.classList.add("activity");

     const newP = document.createElement('p');
     newP.innerText = buttonValue;
     newP.classList.add("act-p");
     newDiv.appendChild(newP);

     const newPlay =document.createElement('i');
     newPlay.classList.add("fa-solid");
     newPlay.classList.add("fa-play");
     let activityInterval;
     newPlay.addEventListener('click', () => {
     activityInterval = setInterval(() => {
            elapsedSeconds++
            updateTimerValue()
          }, 1000)
        })
       newDiv.appendChild(newPlay);

    const newStop =document.createElement('i');
    newStop.classList.add("fa-solid");
    newStop.classList.add("fa-circle-stop");
    newStop.addEventListener("click", () =>clearInterval(activityInterval));
    newDiv.appendChild(newStop);

    const newElapsedTime = document.createElement('p');
    newElapsedTime.classList.add("elapsedTime-Text");
    newElapsedTime.innerText = "00:00:00";
    newDiv.appendChild(newElapsedTime);
    mainDiv.appendChild(newDiv);

    let elapsedSeconds = 0;
    updateTimerValue()


    function updateTimerValue() {
        // Count the seconds, minutes and hours, convert to strings and pad the strings with leading 0's
        const seconds = String(elapsedSeconds % 60).padStart(2, '0')
        const minutes = String(parseInt(elapsedSeconds / 60 % 60)).padStart(2, '0')
        const hours = String(parseInt(elapsedSeconds / 60 / 60)).padStart(2, '0')
    
        // Use string interpolation for formatting the timer string
        newElapsedTime.innerText = `${hours}:${minutes}:${seconds}`
      }

                 


    }

 }