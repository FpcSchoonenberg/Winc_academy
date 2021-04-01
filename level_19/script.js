//get alll buttons and in an array
const getBigFiveButtons = Array.from(document.getElementsByClassName("big-five-button"));
const getRemoveFirstButton = document.getElementById("remove-first-item-button");
const getRemoveAllButton = document.getElementById("remove-all-button");
console.log(getRemoveAllButton);

//determine which bigfive-button has been used and pass button.innerText to animals spotted list
const spottedAnimal = (Event) => {
    const newAnimalsSpottedListItem = document.createElement("li");
    const newAnimalsSpottedlistItemText = document.createTextNode(event.target.innerText);
    newAnimalsSpottedListItem.appendChild(newAnimalsSpottedlistItemText);
    document.getElementById("spotted-animals-list").appendChild(newAnimalsSpottedListItem);
}

//add eventlisteners to buttons and call function 
const addEventListenerOnButtons =() => getBigFiveButtons.forEach(bigFiveButton => bigFiveButton.addEventListener("click",spottedAnimal));
const addEventListeneronRemoveFirstButton = () => getRemoveFirstButton.addEventListener("click", removeFirstAnimalFromList);
const addEventListeneronRemoveAllButton = () => getRemoveAllButton.addEventListener("click", removeAllAnimalsFromList);

//remove first spotted animal from the list by using remove first button
const listSpottedAnimals = document.getElementById("spotted-animals-list");
const removeFirstAnimalFromList = () => listSpottedAnimals.removeChild(listSpottedAnimals.childNodes[0]);

//remove all animals from spotted animals list
const removeAllAnimalsFromList =()=> listSpottedAnimals.innerHTML = "";




//program starts bij calling functions, these are created to test the seperate functionality
addEventListenerOnButtons();
addEventListeneronRemoveFirstButton();
addEventListeneronRemoveAllButton();





    

