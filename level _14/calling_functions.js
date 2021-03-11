/* const checkAge = function (age) {
    console.log('check checkage function')
    if (age >= 18) {
        return true;
    } else {
        return false;
    }    
};

const greet = (age) => {
    console.log('check function greet')
    const temp = checkAge(age);
    if (temp === false) {
        console.log('hey kiddo');
    } else {
        console.log('hello adult');
    }
};
greet(20); */

/* const amountVat = function (baseprice) {
    return baseprice * 0.09
};
const totalPrice = function (baseprice) {
    return amountVat(baseprice) + baseprice;
}
console.log(totalPrice(200)); */
const priceSpecification = function (totalPrice,basePrice) {
    return totalPrice - basePrice;
}
const calcBaseprice = function (totalPrice, vatPercentage) {
    const basePrice = totalPrice / vatPercentage;
    const amountVat = priceSpecification(totalPrice, basePrice);
    const calcSpecs = [Math.round(basePrice), Math.round(amountVat)];
    return console.log(calcSpecs);
}

calcBaseprice(218, 1.09);

