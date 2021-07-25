function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/*
AAA
B
B
B
AAA
B
B
B
AAA
B
B
B
AAA
B
B
B
*/



// console.log('---------- Loop ---------');
// let kint = 'didelis start';
// let kint1 = 'B';
// let kint2 = 'didelis end';
// let kint3 = 3;

// for (let i = 0; i < 4; i++) {
//     console.log(kint);
//     for (let j = 0; j < kint3;) {
//         console.log(kint1);
//     }
//     console.log(kint3);
//     kint3++;
// }

// console.log('---------- paprasta uzduotis ---------');


// for (let aa = 0; aa < 4; a++) {
//     console.log('Startas');
//     for (let bb = 0; bb < 3; bb++) {
//         console.log('B');
//     }
//     console.log('Vidurys')
//     for (let cc = 0; cc < 3; cc++) {
//         console.log('C');

//     }
//     console.log('Pabaiga');
// }


console.log('---------- wth ---------');

for (let i = 1; i < 4; i++) {
    console.log('BIG START');
    for (let j = 1; j <= 7; j++) {
        if (j <= 3) {
            console.log('B');
        }
        else if (j == 4) {
            console.log('BIG MID');
        }
        else {
            console.log('C');
        }
    }
    console.log('BIG END');
}


console.log('---------- Bandom ---------');

let A = 'A';
let B = 1;
let eilute = '';
let C = 1;
let j;

for (let i = 0; i <= 9; i++) {

    console.log('eiluciu ciklas');
    for ( j = 0; j < C; j++) {
        eilute += A; 
        } 
       
        

   
let eilute = '';
let kiekis = 1; 
let pirmyn =  true;
for (let i = 1; i < 9; i++) {
for ( j = 0; j < kiekis; j++) {
        eilute += A;
    
    }
    
    eilute += ' ';
    if (i == 4) {
        pirmyn = !pirmyn
    }
    pirmyn ? kiekis++ : kiekis--;
}

console.log(eilute);

}