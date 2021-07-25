function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* salygos
5 == 5 ==> true
5 > 5 ==> false
5 >= 5 ==> true
6 >= 5 ==> true
5 <= 5 ==> true
6 <= 5 ==> false
5 != 5 ==> false

*/

let paspaustoMygtukoNumeris = rand(1, 3);

console.log(paspaustoMygtukoNumeris);

// if (paspaustoMygtukoNumeris == 1) {
// console.log('I krepseli idedam pomidora');
// }

// if (paspaustoMygtukoNumeris == 3) {
//     console.log('I krepseli idedam kriause');
// }  

// if (paspaustoMygtukoNumeris == 2) {
//     console.log('I krepseli idedam agrastus');
// }



if (paspaustoMygtukoNumeris == 1) {
    console.log('I krepseli idedam pomidora');
}

else if (paspaustoMygtukoNumeris == 3) {
    console.log('I krepseli idedam kriause');
}

else {
    console.log('I krepseli idedam agrastus');
}



let uzlenktuPirstu = 0;
let kiekPrabegsAsilu = rand(1, 30);

for (let cikluSkaiciuoklis = 0; cikluSkaiciuoklis < kiekPrabegsAsilu; cikluSkaiciuoklis++) {

    if (rand(1, 5) >= 2) {// ar asilas yra didelis
        console.log('Prabego asilas');
        uzlenktuPirstu++;
    }


}//for pabaiga










console.log('Teta, prabego', uzlenktuPirstu, 'dideli asilai');
console.log('Viso asilu, buvo: ', kiekPrabegsAsilu);



let kiekIpiltaSriubos = rand(280, 300);//kiekis ml
let saukstuSkaitiklis = 0;

do {

    let saukstuPasemta = rand(15, 19);//kiekis ml
    if (saukstuPasemta > kiekIpiltaSriubos) { //neleidzia pasemti daugiau nei yra like
        saukstuPasemta = kiekIpiltaSriubos;
    }

    kiekIpiltaSriubos = kiekIpiltaSriubos - saukstuPasemta;

    saukstuSkaitiklis++;

} while (kiekIpiltaSriubos > 0);

console.log('Viso saukstu buvo: ', saukstuSkaitiklis);
console.log('Sriubos liko: ', kiekIpiltaSriubos);



let steikas = rand(350, 450); // kiekis gramais
let sakuciuSkaitiklis = 0;
let kramtymuSkaitiklis = 0;

do {
    let atpjautaSteiko = rand(10, 30);
    // neatpjaunam daugiau nei yra
    if (atpjautaSteiko > steikas) {
        atpjautaSteiko = steikas;
    }
    steikas = steikas - atpjautaSteiko;
    sakuciuSkaitiklis++;

    do {
        let kiekVienuKrimstelejimuSuvalgomAtpjautoSteiko = rand(1, 7);
        //Nekrimstelim daugiau nei yra
         if (kiekVienuKrimstelejimuSuvalgomAtpjautoSteiko > atpjautaSteiko ) {
             kiekVienuKrimstelejimuSuvalgomAtpjautoSteiko = atpjautaSteiko;
         }
        atpjautaSteiko = atpjautaSteiko - kiekVienuKrimstelejimuSuvalgomAtpjautoSteiko;
        kramtymuSkaitiklis++;
       


    } while (atpjautaSteiko > 0);

    console.log('Kiek liko atpjauto steiko: ', atpjautaSteiko);


} while (steikas > 0);

console.log('kiek kartu dirbta su sakute: ', sakuciuSkaitiklis);
console.log('Viso tiek kramtyta: ', kramtymuSkaitiklis);
console.log('Liko steiku: ', steikas);