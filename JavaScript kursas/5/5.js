function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



// let i;

// if (i < 5) {
//     console.log('IF');
// }
// // nuo 0 iki daug (WHILE Ciklas)
// while (i != 55) {
//     i = rand(0, 100);
//     console.log('WHILE', i);


// }
// // Nuo 1 iki daug
// do {
//     i = rand(0, 100);
//     console.log('Do WHILE', i);


// } while (i != 55);

// let j = 0;

// while (j < 5) {

//     console.log('Jotas: ', j);
//     j++;
// }

// for (let t = 0; t < 5; t++) {
// console.log('Totas: ', t);
// }

//1a

let i = rand(5, 25);
let i2 = rand(5, 25);
let i3 = rand(5, 25);
let i4 = i + i2 + i3;
console.log(i4);

//1b

let d = '' + i + i2 + i3; //trumpasis budas

let b = String(i) + String(i2) + String(i3); //ilgasis budas
console.log(b);

//1c

let c = i + ' ' + i2 + ' ' + i3;
console.log(c);

//1d


let e = (i + i2 + i3);
console.log(e);

//2

let pasisveikinimas = 'labas';
for (let hi = 0; hi < 5; hi++) {
    console.log(pasisveikinimas);
}

//3

let morning = 'labas';
for (let hi = 0; hi < 7; hi++) {
    console.log(morning);
}

//4
let kint = rand(5, 10);
console.log('------', kint);

for (let i = 0; i < 7; i++) {
    console.log('-4-', kint);
}
//5
for (let i = 0; i < kint; i++) {
    console.log('-5-', kint);
}

//6

for (let i = 0; i < kint; i++) {
    if (i > 7) {
        console.log('ciklas kiek kartu lygu i jeigu didesnis uz7', i);
    }
    else {
        console.log('-6-', kint);
    }

}

//7

let kint55;

for (let hi = 0; hi < 5; hi++) {
    console.log('--7A--');
}

//7b


let kint7a;
for (let i = 0; i < 5; i++) {
    kint7a = rand(10, 25);
    console.log('-7a-', kint7a);
}

//7b

let kint7b = 0;
for (let i = 0; i < 5; i++) {
    kint7b += rand(10, 20);
    console.log('-7b-', kint7b);
}

//7c

let kint7c = '';
for (let i = 0; i < 5; i++) {
    kint7c += rand(10, 20) + ' ';

}
console.log('-7c-', kint7c);


//7d

let kint7d = '';
let suma7d = 0;
for (let i = 0; i < 5; i++) {
    let randomas = rand(10, 20);
    kint7d += randomas + ' ';
    suma7d += randomas;

}
kint7d += suma7d;
console.log('-7d-', kint7d);



//8a

let di;


do {
    di = rand(10, 25);
    console.log('Do WHILE');
} while (di > 12);
console.log(di);

//8b ;
let db = 0;

do {
    db = rand(10, 25);
    console.log('Do WHILE', db++);
} while (db > 12);
console.log('---8b--',db);

//8c



//8e

let e8rand;
let lyg = 0;
let nelyg = 0;
let row = '';
do {
    e8rand = rand(10, 25);
    row += e8rand + ' '; //kad galetume paskaiciuoti rezultata
    e8rand % 2 ? nelyg++ : lyg++;
}while (e8rand >= 12)

console.log('--8e--',lyg, nelyg, row);




