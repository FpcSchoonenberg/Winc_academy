// check age,gender and driverstatus
const age = 50;
const isFemale = true;
const driverStatus = "bob";
const firstName = "Bram";
const totalAmount = 10;




if (age >= 18) {
    console.log("Old enough");
} else {
    console.log("Too young");
}

if (age >= 18 && age <= 25) {
    console.log("you get 50% discount on your drinks");
}

if (age === 50) {
    if (firstName == "Bram" || firstName == "Sara") {
        console.log("Grats, one of the house");
    }
}


if (isFemale) {
    console.log("You're a lady");
} else {
    console.log("You're a man");
}

if (driverStatus === "bob") {
    console.log("Hey Bob,");
} else {
    console.log("Find Bob");
}
    
if (totalAmount > 25 && totalAmount < 50) {
    console.log("you ordered for more than 25 euro, you get free bitterballs");
} else if (totalAmount >= 50 && totalAmount < 100) {
    console.log("you ordered for more than 50 euro, you get free nachos");
} else if (totalAmount >= 100) {
    console.log("you ordered for more than 100 euro, you get free champagne");
} else {
    console.log("spend some more");
}