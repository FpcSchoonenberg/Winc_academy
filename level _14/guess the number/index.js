//simle javascript game, prompting user for input and alerting for feedback in the browser
//program runs not in node.js

const generateNumber = function(){
    let min = parseInt(window.prompt('enter min value'));
    let max =  parseInt(window.prompt('enter max value'));
    // const genoNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    // return window.alert(genoNumber);
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

let userName = window.prompt('Welcome, what is your name?');
window.alert('Hey ' + userName);
let genNumber = generateNumber();
for (poging = 1; poging <= 3; poging++) {
    let userNumber = parseInt(window.prompt('please enter a number'));
    if (userNumber == genNumber) {
        window.alert('you won. \nThe game is over');
        break;
    }
    window.alert('That was not correct. \n try ' + poging + ' of 3');
    if (poging == 3) {
        window.alert('No more tries left, you lose');
    }   
}
window.alert(`Bye ${userName}, \nSee you next time.`);












