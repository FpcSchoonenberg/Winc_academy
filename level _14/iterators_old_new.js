// let color = ['yellow', 'green', 'blue'];
/*let i = 0;
console.log(i);
while ( color[i]!== undefined) {
    console.log('entering loop');
    console.log(color[i]);
    i++;
    console.log(i);
}
console.log('leaving loop'); */
/* const totalColor = color.length;
console.log(totalColor);
for (i = 0; i < totalColor; i++){
    console.log(color[i]);
} */
/* let color = ['yellow', 'green', 'blue'];
const toScreen = function (item) {
    console.log(item);
}
color.forEach(toScreen); */


let objectje = {formaat:'klein', aantal_armen:2,verkrijgbare_kleuren:['rood','geel','bruin'],karakter:undefined};

for (const i in objectje) {
    console.log(typeof objectje[i]);
    if (typeof objectje[i] == 'object') {
        console.log('nou nou');
    }
    console.log(objectje[i]);
}

