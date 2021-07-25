function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let random;
//8A
console.log('-----8A----');



do {
    random = rand(10, 25);
    console.log(random);

} while (random >= 12)


console.log('-----8B----');
let visoCiklu = 0;


do {
    random = rand(10, 25);
    visoCiklu++;

} while (random >= 12)
console.log(visoCiklu);


console.log('-----8C----');

let suma = 0;


do {
    random = rand(10, 25);
    suma += random > 18 ? 0 : random;

} while (random >= 12)
console.log(suma);

console.log('-----8D----');

let sumaa = 0; 
let atmesta = 0;

let suma1 = 0;
let atmesta1 = 0;
do {
    random = rand(10, 25);
    sumaa += random > 18 ? atmesta : sumaa += random;

    console.log(random);
    if (random <= 18) {
        suma1 = suma1 + random;
    }
    else {
        atmesta1++;
    }

} while (random >= 12);
console.log(sumaa, atmesta);
console.log(suma1, atmesta1);


console.log('-----8E----');

let lyginis = 0;
let nelyginis = 0;

do {
    random = rand(10, 25);
    if (random % 2 == 0) {
        lyginis++;
    }
    else {
        nelyginis++;
    }

} while (random >= 12)
console.log(lyginis, nelyginis);


console.log('------8F------');

let visoMazuCiklu = 0;
// let visoDideliuCiklu = 0;
do {
    visoMazuCiklu = 0;
    // visoDideliuCiklu++;



    do {
        random = rand(10, 25);
        visoMazuCiklu++;

    } while (random >= 12);

} while (visoMazuCiklu <= 20);
console.log(visoMazuCiklu);



//9a

console.log('------9a------');

let isridenta;
let mCiklas = 0;
let dCiklas = 0;
do {
    isridenta = rand(1, 6);
    dCiklas++;

    for (let i = 0; i < isridenta; i++) {
        mCiklas++;
    }

} while (isridenta != 5);

console.log(dCiklas, mCiklas);