
// Initial definition of variables from DOM
const listContainer = document.getElementById('list-container');
const inputBox = document.getElementById('input-box');

// This function will add a task with its designed "delete" button
function addTask(){

    if(inputBox.value === ''){

        // In case the task is empty
        alert('Please enter a task');

    }else{

        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)

        let span = document.createElement("span");

        // This is the value for an "x" symbol
        span.innerHTML = "\u00d7";

        // Append to the LI parent
        li.appendChild(span);
    }

    inputBox.value = '';
    saveData();

}

// Event Listener for desired behavior
listContainer.addEventListener("click", function(e){

    if(e.target.tagName === "LI"){

        // Toggle between checked and unchecked
        e.target.classList.toggle("checked");
        saveData();

    }else if(e.target.tagName === "SPAN"){

        // Deletes the given task
        e.target.parentElement.remove();
        saveData();
    }

});

// Ordinary function to save data in SessionStorage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

// Ordinary function to load data from SessionStorage
function loadData(){
    listContainer.innerHTML = localStorage.getItem("data")
}

loadData();