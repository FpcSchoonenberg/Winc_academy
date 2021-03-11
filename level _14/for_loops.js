/* for (number = 1; number <= 20; number++) {
    if (number % 2 == 0) {
        console.log(number + ' is even');
    } else {
        console.log(number + ' is oneven');
    }
}
 */
/* for (tafelNummer = 1; tafelNummer <= 10; tafelNummer++) {
    for (teller = 1; teller <= 10; teller++) {
        const product = teller * tafelNummer;
        console.log(teller + '*' + tafelNummer + '=' + product);
    }
    console.log('Dit was de tafel van ' + tafelNummer + '________________')
} */
for (score = 60; score <= 100; score++){
    console.log('Voor ' + score + ' punten, krijg je een ' + assignGrade(score));
}

function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    }
}