const saveButton = document.getElementById('save-btn');
const clearButton = document.getElementById('clear-btn');
const displayName = document.getElementById('display-name');
const nameInput = document.getElementById('name');

//event listeners for the buttons
saveButton.addEventListener('click', saveName);
clearButton.addEventListener('click', clearName);

function updateDisplay(){ //function for updating the diplay with the saved name
    const savedName = localStorage.getItem('nameInput'); //getting the saved name
    const greet = timeGreet();
        if (savedName) {
            nameInput.value = savedName; //set the input to be the saved name
            displayName.textContent = greet + savedName ; //outputting the saved name
        } else {
            displayName.textContent = 'no name saved'; //message for if there's no saved name
        }
}

function saveName (){ //function to save the name
    if (nameInput) {
        localStorage.setItem('nameInput', nameInput.value); //saving input in local storage
        updateDisplay();
    }
}

function clearName(){ //function to clear the saved name
    localStorage.removeItem('nameInput'); //removes saved name from local storage
    updateDisplay();
}

function timeGreet() { //funtion to greet user depedning on time of day 
    const time = new Date().getHours();
    if (time >= 5 && time <=10 ) { //the moring time
        return 'Good Moring and size the day,  '; //moring greeting
    }

    else if (time >= 11 && time <= 17 ) { //afternoon
        return 'Good Afternoon and keep working hard, '; //afternoon greeting
    }

    else if (time >= 18 && time <= 22){ //night time 
        return 'Good Evening and rest well, '; //night greeting
    }

    else {
        return 'Hey it is late! You Should be Sleeping! '; //it's way too late at night greeting
    }
}

updateDisplay(); //updates the display when refreshed 


