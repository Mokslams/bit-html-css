function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



// let salyga = rand(1, 5);

// let k = 'krokodilas';
// let z = 'zebras';
// let d = 'dramblys';
// let r = 'raganosis';
// let b = 'babuinas';

// // 1 sprendimo budas su sintakse (?)




// // Antras sprendimo budas su (if)
// let kazkasPriskirtaIf;

// if (salyga == 1) {
//     kazkasPriskirtaIf = k;
// } else if (salyga = 2) {
//     kazkasPriskirtaIf = z;
// } else if (salyga = 4) {
//     kazkasPriskirtaIf = r;
// }
// else if (salyga = 5) {
//     kazkasPriskirtaIf = b;

// }
// else {
//     kazkasPriskirtaIf = d;
// }

// console.log(kazkasPriskirta, kazkasPriskirtaIf);


let a1 = rand(0, 2);
let a2 = rand(0, 2);
let a3 = rand(0, 2);
let a4 = rand(0, 2);

console.log(a1, a2, a3, a4);

let _0 = 0;
let _1 = 0;
let _2 = 0;


(a1 == 2) ? _2++ : ((a1 == 1) ? _1++ : _0++);

(a2 == 2) ? _2++ : ((a2 == 1) ? _1++ : _0++);

(a3 == 2) ? _2++ : ((a3 == 1) ? _1++ : _0++);

(a4 == 2) ? _2++ : ((a4 == 1) ? _1++ : _0++);

console.log(_0, _1, _2);

console.log('-----TENORO KODO PABAIGA-----');

let er = rand(1, 10);

console.log(er);

(er >= 4) ? console.log('Islaikyta') : console.log('neislaikyta');

let rez = (er >= 4) ? 'Islaikyta' : 'neislaikyta';
console.log(rez);

console.log('--------Nr8-------')
let dalyvis1 = rand(1, 4);
let dalyvis2 = rand(1, 4);

(dalyvis1 + dalyvis2 > 6 || dalyvis1 == dalyvis2) ? console.log('Laimejo') :  console.log('nelaimejo') ;


console.log('-----------Grieztosios lygybes(===)');

console.log(1 === 1);
console.log(1 === true);


