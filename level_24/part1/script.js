
//----------opdracht1-------------------------------------------------------------------------------------
//sorted list of countries
// console.log(randomPersonData.length);
// const test = randomPersonData.map(item => item.region);
// console.log(test.sort());
// for (i = 0; i < test.length; i++){
//     if (test[i] !== test[i - 1]) {
//         console.log(test[i])
//     }
// }
//----------opdracht2--------------------------------------------------------------------------------
//select females, older then 30, capricor
// const test2 = randomPersonData.filter(item => {
//     if (item.gender === "female" && item.age>=30 && (capriCorn(item.birthday.mdy) <= 119 || capriCorn(item.birthday.mdy)>=1222)){
//         console.log(capriCorn(item.birthday.mdy));
//         return item
//     }
// })
//opdracht3--------------------------------------------------------------------------------
//check expirydate and sort on expirydate and list customers
// const callCustomers = randomPersonData.filter(item => checkExpiryDate(convertExpiryDate(item.credit_card.expiration)));
// callCustomers.sort((a, b) =>(convertExpiryDate(a.credit_card.expiration) - convertExpiryDate(b.credit_card.expiration)))
// callCustomers.forEach(item=>console.log(item.name + item.surname + item.phone+item.credit_card.number+item.credit_card.expiration))

//opdracht4--------------------------------------------------------------------------
// let numberOfPersonsRegions = [];
// const Regions = (randomPersonData.map(item => item.region));
// Regions.sort();
// console.log(Regions)

// for (i = 0; i < Regions.length; i++) {
//     let countPeople = 1;
//     for (j = i + 1; j < Regions.length; j++) {
//         if (Regions[i] === Regions[j]) {
//             countPeople++;
//             Regions.splice(j, 1);
//             j = j - 1;
//         }
//     }
//     numberOfPersonsRegions.push([countPeople, Regions[i]]);
// }
// numberOfPersonsRegions = numberOfPersonsRegions.sort((a, b) => a[0] - b[0]);
// console.log(numberOfPersonsRegions)
// let peoplePerRegion = [];
// justRegions.forEach(region => {
//     if (region in peoplePerRegion) {
//         peoplePerRegion[region]++;
//     } else {
//         peoplePerRegion[region] = 1;
//     }
// })
///opdracht 5--------------------------------------------------------------------------
//calculate the average age per countrie
const countries = listOfCountries(randomPersonData);
countries.forEach(countrie => {
    console.log(`In ${countrie} the average age = ${calcAgePerRegion(countrie)}`)
    
});

const test12 = randomPersonData.map(item => { { item.surname, item.title }})
console.log(test12[0].title)



















