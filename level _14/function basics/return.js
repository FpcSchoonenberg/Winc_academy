/* checkNumber = function (checkValue) {
    if (checkValue > 100) {
        return true;
    }
    return false;
}
const tarief = checkNumber(10);
console.log(tarief); */

/* const entryChecker = function (peopleIn,age) {
    const maxPeople = 50;
    if (peopleIn > maxPeople) {
        return "it's too busy now, come back later";
    }
    if (age >= 18) {
        return 'come in' 
    }
    return "only adults";
}
const visitor = entryChecker(4,5);
console.log(visitor); */

const collection = function (n1,n2,n3,n4,n5) {
    const sum = Math.round(n1 + n2 + n3 + n4 + n5);
    return sum;
}
const average = collection(1.1, 2.2, 3.3, 4.4, 5.5);
console.log(average);




