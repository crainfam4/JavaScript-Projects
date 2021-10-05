function subtraction() {
    var difference = 9 - 3;
document.getElementById("Math").innerHTML = "9 - 3 = " + difference;
}

function multiplication() {
    var product = 3 * 9;
document.getElementById("Math2").innerHTML = "3 * 9 = " + product;
}

function division() {
    var quotient = 36 / 4;
document.getElementById("Math3").innerHTML = "36 / 4 = " + quotient;
}

function addition() {
    var sum = 4 + 9;
document.getElementById("Math4").innerHTML = "4 + 9 = " + sum;
}

function multiple_operators() {
    var operators = 6 + 7 * 3 / 5 - 8;
document.getElementById("Simple").innerHTML = "Add six to seven times three, divided by five, and finish by adding eight, which equals " + operators;
}

function remainder() {
    var remainder = 36 % 8;
document.getElementById("Modulus").innerHTML = "The remainder when you divide 36 by 8 = " + remainder;
}

function negation_operator() {
    var x = 9;
document.getElementById("Negate").innerHTML = -x;
}

function increment_operator() {
    let B = 12;
    const C = ++B;
document.getElementById("increment").innerHTML = C;
}

function decrement_operator() {
    let M = 5.5;
    const N = --M;
document.getElementById("decrement").innerHTML = N;
}

window.alert(Math.random() * 99);

document.getElementById("PI").innerHTML = "<p>Math.PI: " + Math.PI + "</p>";