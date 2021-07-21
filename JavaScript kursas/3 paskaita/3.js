function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let a = rand(2, 10);
let b = rand(2, 10);
let c = rand(2, 10);


a = b = 5;

c = 9;


//surasti ir i console.log isvesti dvieju mazesniu kintamuju suma

console.log(a, b, c); //pasirasom kad suzinotumem kintamuju reiksmes


//Tikriname ar a yra didziausias

if (a >= b) {
    if (a > c) {
        console.log('b + c', b + c);
    }
}

//ar b yra didziausias

if (b >= a) {
    if (b > c) {
        console.log('a + c', a + c);
    }
}

//ar c yra didziausias

if (c > a) {
    if (c > b) {
        console.log('a + b', a + b);
    }
}

//&&(end) operatorius

if (a >= b && a >= c) { //ar a didziausias
    console.log('b + c', b + c)
}
else if (b >= c) { //a b didziausias
    console.log('a + c', a + c)
}
else {
    console.log('a + b', a + b)
}
//kita uzduotis
let d = rand(2, 10);
let e = rand(2, 10);

console.log('d', d, 'e', e);


if (d > e) {
    console.log('d yra didesnis');
}
else if (d == e) {
    console.log('d ir e yra lygus')
}
else {
    console.log('e yra didesnis');
}

// LOGINIAI OPERATORIAI
//*operatorius AND (&&)
// 1 && 1 = 1
// 0 && 1 = 0
// 1 && 0 = 0
// 0 && 0 = 0 

// operaotrius (||) OR
// 1 || 1 = 1
// 0 || 1 = 1

// 1 && 0 && 1 = 0 
// 1 || 0 || 0 = 1


//console.log(true && (false || true));


//ND nr 4.
//Pirmas sprendimo budas
console.log('Nr4')

let r1 = rand(0, 2);
let r2 = rand(0, 2);
let r3 = rand(0, 2);
let r4 = rand(0, 2);

console.log(r1, r2, r3, r4);

let _0 = 0;
let _1 = 0;
let _2 = 0;

// if (r1 == 0) _0++;
// if (r2 == 0) _0++;
// if (r3 == 0) _0++;
// if (r4 == 0) _0++;

// if (r1 == 1) _1++;
// if (r2 == 1) _1++;
// if (r3 == 1) _1++;
// if (r4 == 1) _1++;

// if (r1 == 2) _2++;
// if (r2 == 2) _2++;
// if (r3 == 2) _2++;
// if (r4 == 2) _2++;

if (r1 == 0) _0++;
else if (r1 = 1) _1++;
else _2++;

if (r2 == 0) _0++;
else if (r2 = 1) _1++;
else _2++;


if (r3 == 0) _0++;
else if (r3 = 1) _1++;
else _2++;

if (r4 == 0) _0++;
else if (r4 = 1) _1++;
else _2++;



//
console.log(_0, _1, _2);
//antrasis budas

let __2 = 0;

if (r1 == 2) __2++;
if (r2 == 2) __2++;
if (r3 == 2) __2++;
if (r4 == 2) __2++;
//Kiek yra dvejetu ^

let __1 = r1 + r2 + r3 + r4 - (2 * __2);//Suskaiciuojame suma

let __0 = 4 - __1 - __2;

console.log(__0, __1, __2);


//Uzduotis nr 7.

let x1 = rand(0, 100);
let x2 = rand(0, 100);
let x3 = rand(0, 100);

let xxx = x1 + x2 + x3;
let xxxVidurkis = xxx / 3;

console.log(x1, x2, x3);

console.log(xxxVidurkis);

let daliklis = 3;
let kaDalinam = xxx;

if (x1 <= 10 || x1 >= 90) {
    kaDalinam -= x1;
    daliklis--
}
if (x2 <= 10 || x2 >= 90) {
    kaDalinam -= x2;
    daliklis--
}

if (x3 <= 10 || x3 >= 90) {
    kaDalinam -= x3;
    daliklis--
}

console.log(kaDalinam / daliklis, kaDalinam, daliklis);

//Klases uzduotis

let egzaminoRezultatas = rand(1, 10);
console.log(egzaminoRezultatas);
//isvesti rezultata ir sprendima aaminas islaikytas maziausias islaikymo balas 4
if (egzaminoRezultatas >= 4 ) {
    console.log('Egzaminas islaikytas');
}
else {
    console.log('Egzaminas neislaikytas');
}
//nr 2.

let eksperimentoRezultatas = rand(1, 4);

let z1 = 1;
let z2 = 4;

console.log(z1, z2);

if (z1 == 1 || z2 == 4 ) {
    console.log('Eksperimentas pavyko');
} else {
    console.log('Eksperimentas nepavyko');
}



//3.
let automobilioGreitis = rand(40, 125);
// Išvesti automobilio greitį ir baudos dydį, jeigu greiti didesnis nei 60. Bauda yra viršytas greitis X 5

console.log(automobilioGreitis);

if (automobilioGreitis > 60) {
    console.log('greitis didesnis negu 60 BAUDA: ', automobilioGreitis * 5);
} else {
    console.log('Nevirsytas greitis');
}

//nr 4 
console.log('--------------Ketvirta uzduotis-------------');
let eilesNumeris = rand(1, 30);

if (eilesNumeris % 2 == 0) {
    console.log('Skaicius lyginis');
}
else {
    console.log('Skaicius nelyginis');
}

//nr5 
console.log('-------Nr5--------')
let raideABC = rand(1, 3);
if (raideABC == 1) {
    console.log('A');
} else if (raideABC == 2) {
    console.log('B');
} else {
    console.log('C');
}



//nr 6 
console.log('-------Nr6--------')

let pirmas = rand(0, 2);

let antras = rand(0, 2);

console.log('pirmas', pirmas, 'antras', antras);

if (pirmas + antras > pirmas * antras) {
    console.log('suma');
}
else if (pirmas * antras) {
    console.log('sandauga')
}

//7.
console.log('--------Nr7-------')
let asilai = rand(0, 2);
let karves = rand(0, 2);
// Išvesti asilų ir karvių skaičių ir išvesti rezultatą "gyvulių yra" kai yra nors viena karvė ar asilas arba "gyvulių nėra" jeigu nėra nei karvių nei asilų

console.log(asilai, karves);
if (asilai > 0 || karves > 0) {
    console.log('Gyvuliu yra');

}
else {
    console.log('gyvuliu nera');
}

//8.
console.log('--------Nr8-------')
let dalyvis1 = rand(1, 4);
let dalyvis2 = rand(1, 4);
// Išvesti dalyvių pasirinktus skaičius ir pranešimą "Laimėjo", jeigu dalyvių skaičių suma didesnė nei 6 arba tie skaičiai yra vienodi. Pranešimą "Pralaimėjo" - priešingu atveju

console.log(dalyvis1, dalyvis2);

if (dalyvis1 + dalyvis2 > 6 || dalyvis1 == dalyvis2) {
    console.log('Laimejo');
} else {
    console.log('Pralaimejo');
}

//9.
console.log('--------Nr9-------')
let daug = rand(1000000, 9999999);
// Išvesti skaičių daug ir suskaičiuoti iš kelių duotų skaičių: 5, 10, 33 jis dalijasi be liekanos. Rezultatą išvesti.
let mazai = 0;
console.log(daug);

if (daug % 5 == 0) {
    console.log('dalinasi is 5');
    mazai++;
}
if (daug % 10 == 0) {
    console.log('dalinasi is 10');
    mazai++;
}
if (daug % 3 == 0) {
    console.log('dalinasi is 3');
    mazai++;
}
console.log('sekmingai padalinta be liekanos: ', mazai);


//10.
console.log('--------Nr10-------')

let as = rand(0, 2) ? (rand(0, 1) ? 'popierius' : 'zirklės') : 'akmuo';
let tu = rand(0, 2) ? (rand(0, 1) ? 'popierius' : 'zirklės') : 'akmuo';
// Išvesti as ir tu kintamuosius ir kas laimėjo as ar tu

console.log(as, tu);

if ((as == 'popierius' && tu == 'akmuo') || (as == 'zirklės' && tu == 'popierius') || (as == 'akmuo' && tu == 'zirklės')) {
    console.log('As laimejau');
}
else if (as == tu) {
    console.log('lygiosios');
}
else {
    console.log('As nelaimejau');
}