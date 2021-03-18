
const transLeft = function () {   
    document.querySelector('.menu-content').style.transition= "left 1000ms" ;
}
const listenerMenu = function () {
    document.querySelector(".container").addEventListener("mouseOver" ,transLeft());
}
// select all listitems and convert to array, so it can be used as argument for another function 
function selectListItems() {
    const listItemArray = Array.from(document.querySelectorAll('li'));
    return listItemArray;
}

/* add listener to all list - items listener responds on click with function
function uses classname of list - item and stored in variable color which is passed as argument to set backgroundcolor */
const Listener = function (listItemArray) {
    listItemArray.forEach(listItem => {
        listItem.addEventListener("click", function () {
            const colorClass = listItem.className;
            const bodyColor = document.querySelector('body').style.backgroundColor = colorClass;
            const textColor = document.querySelector('.textwrapper').innerHTML = `Backgroundcolor: ${colorClass}`;
        });
    })
}

Listener(selectListItems());
listenerMenu();



