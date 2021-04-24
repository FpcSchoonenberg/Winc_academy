//get dayOfBirth
const capriCorn = (birthday) => {
    let stripBirthday = birthday.slice(0, 5);
    stripBirthday = stripBirthday.replace("/", "")
    return stripBirthday;
}

//check age greater then definedAge
const checkAge = (item_birthday, definedAge) => {
    let thisYear = new Date().getFullYear();
    let age = new Date("10-05-1950");
    let yearOfBirth = age.getFullYear();
    if (thisYear - yearOfBirth > definedAge) {
        return true;
    }
}

//convert month of this year, when monthnumber <10 it gets a prefix 0
const getMonthYear = new Date();
let thisYear = String(getMonthYear.getFullYear());
let thisMonth = String(getMonthYear.getMonth());
const convertMonth = (thisMonth) => {
    if (thisMonth < 10) {
        const zero = String(0);
        return zero.concat(thisMonth)
    } else {
        return thisMonth;
    }
}

//determine startdate and enddate,to determine expiry date creditcard,
// uses the date of today as start and ends today over a year
const checkExpiryDate = (item) => {
    let checkToday = (thisYear.concat(convertMonth(thisMonth))).slice(2, 6);
    let checkEndYear = (String(getMonthYear.getFullYear() + 1));
    let checkEndDate = parseInt((checkEndYear + convertMonth(thisMonth)).slice(2, 6));
    if (item > checkToday && item < checkEndDate) {
        return true;
    } else {
        return false
    }

}
//convert creditcardnumber mm/yy to yymm
const convertExpiryDate = (creditCard_Expiration) => {
    if (creditCard_Expiration.length < 5) {
        creditCard_Expiration = "0" + creditCard_Expiration;
    }
    const a = creditCard_Expiration.substr(0, 2);
    const b = creditCard_Expiration.substr(3, 4);
    creditCard_Expiration = b + a;
    return creditCard_Expiration
}

//calculate average age per country
const calcAgePerRegion = (country) => {
    let numberOfPeople = 0;
    let totalAge = 0
    randomPersonData.forEach(item => {
        if (item.region === country) {
            numberOfPeople++;
            totalAge = totalAge + item.age;
        }
    })
    let averAge = totalAge / numberOfPeople;
    return (Math.round(averAge));
}

//get list of countries without doubles
const listOfCountries = (randomPersonData) => {
    const allCountries = randomPersonData.map(item => item.region)
    allCountries.sort()
    for (i = 1; i < allCountries.length; i++) {
        if (allCountries[i] === allCountries[i + 1]) {
            allCountries.splice(i, 1);
            i = i - 1;
        }
    }
    return allCountries
}





