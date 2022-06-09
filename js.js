//Steps:
//1.Create loop that applys a event listener to each button when the dom loads.(see step2 for what the EL does)
//2.Capture the button that was pressed "Value"
//3.Create a new div and class everytime a button is clicked
//4. Within the div it will need a:
            //A.LI (tied to the button value) & class 
            //B.Play button 
            //C.Stop button
            //D.TimeElapsed 
            //E.Trash Icon
//5. Create functionality for the play button/stop button to control elapsed time
//6. Store elapsed time & category
//7. Add delete functionality

//Bonus1: Local Storage
//Bonus2: Charts

//{PROJECT STARTS HERE!!} --->>>


const btnLength = document.querySelectorAll(".opt-btn").length;
const mainDiv = document.getElementById("activities");


 for (let i = 0; i < btnLength; i++){
document.querySelectorAll(".opt-btn")[i].addEventListener("click", function() {
    const buttonValue = this.value;
    addActivity(buttonValue);
})
    }

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
    newDiv.appendChild(newPlay);

    const newStop =document.createElement('i');
    newStop.classList.add("fa-solid");
    newStop.classList.add("fa-circle-stop");
    newDiv.appendChild(newStop);

 
     mainDiv.appendChild(newDiv);
    }


