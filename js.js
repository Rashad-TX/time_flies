const subBtn = document.getElementById("sub-btn").addEventListener("click",addSubmission);
const submission= [];

function addSubmission(event){
    event.preventDefault();
    const progress = {
        id:Date.now(),
        category: document.getElementById("category").value,
        name: input2 = document.getElementById("task").value
    }
    submission.push(progress);
    document.querySelector("form").reset();
}



