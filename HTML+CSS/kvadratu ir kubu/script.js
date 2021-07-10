let input = document.getElementById('skaicius');
function calculate() {
    document.getElementById('kvadratu').textContent = kvadratu(input.value);
    document.getElementById('kubu').textContent = kubu(input.value);
}

function kvadratu(skaicius) {
    return skaicius * skaicius;
}
function kubu(skaicius) {
    return skaicius * skaicius * skaicius;
}