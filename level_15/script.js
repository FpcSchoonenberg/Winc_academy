let buttonAlert = document.querySelector('#mybutton');
buttonAlert.addEventListener("click", function () {
    window.alert('Put the radio on')
});

let bgroundBody = document.querySelector('body');
bgroundBody.classList.add("blue-background");

/* const bgroundBodyRed = function () {
    bgroundBody.classList.add("red-background")
} */
/* let button2 = document.querySelector('#button2');
button2.addEventListener("click", bgroundBodyRed); */

const bgroundBodyToggle = function () {
    bgroundBody.classList.toggle("red-background");
}


let button2 = document.querySelector('#button2');
button2.addEventListener("click", bgroundBodyToggle);


