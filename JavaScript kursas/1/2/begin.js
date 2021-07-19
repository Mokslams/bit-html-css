
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// + - / *

let box1 = 8;

let box2 = 3;
let result = 10;

// result = result + box1;

result += box1;

// result = result + 1;
result++;

// new theme
result = 10;

let result1 = result-- + --result;

// console.log(result1);
// console.log(result);


// let box3 = 'labas' ;

// box3 = box3 + 1;

// box3++; // NaN not a number

// console.log(box3)


// console.log('3 > 5', 3 > 5);
// console.log('3 > 5', 3 > 5);

// console.log('Z' > 'A', 'Z' > 'A');

// console.log('z > Z', 'a' > 'A');

// console.log(rand(5, 10));

// let check = rand(1, 9)




// if (check < 5) {
//     console.log('TAIP!');
//     console.log(check);
// }


// else if (check == 5) {
//     console.log('LYGU');
//     console.log(check);
// }



// else {
//     console.log('NE!');
//     console.log(check);
// }


// console.log('Ate!');

//1

let r1 = rand(0, 4);

let r2 = rand(0, 4);

if (r1 < r2 == 0) {
    console.log(r2/r1)
}
if(r1*r2 == 0) {
    console.log('dalyba is nulio');
}
else if (r1 > r2) {
    console.log(r1 / r2)
}
else {
    console.log(r1 / r2)
}


// nr2.

