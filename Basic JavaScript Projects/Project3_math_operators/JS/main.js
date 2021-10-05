function subtraction() {               //This is the subtraction function
    var difference = 9 - 3;
document.getElementById("Math").innerHTML = "9 - 3 = " + difference;
}

function multiplication() {            //Here is the multiplication function
    var product = 3 * 9;
document.getElementById("Math2").innerHTML = "3 * 9 = " + product;
}

function division() {                  //This is the division function
    var quotient = 36 / 4;
document.getElementById("Math3").innerHTML = "36 / 4 = " + quotient;
}

function addition() {                  //This is the addition function
    var sum = 4 + 9;
document.getElementById("Math4").innerHTML = "4 + 9 = " + sum;
}

function multiple_operators() {       //This function uses multiple operators
    var operators = 6 + 7 * 3 / 5 - 8;
document.getElementById("Simple").innerHTML = "Add six to seven times three, divided by five, and finish by adding eight, which equals " + operators;
}

function remainder() {                //This function returns only the remainder for a given division problem
    var remainder = 36 % 8;
document.getElementById("Modulus").innerHTML = "The remainder when you divide 36 by 8 = " + remainder;
}

function negation_operator() {        //This function gives the opposite, or the negative, of a given number
    var x = 9;
document.getElementById("Negate").innerHTML = -x;
}

function increment_operator() {       //This function increases a given number by one
    let B = 12;
    const C = ++B;
document.getElementById("increment").innerHTML = C;
}

function decrement_operator() {       //This function decreases a given number by one
    let M = 5.5;
    const N = --M;
document.getElementById("decrement").innerHTML = N;
}

window.alert(Math.random() * 99);     //This function provides an alert window that provides a random number between 0 and 99 each time the page is loaded

function Math_PI() {                  //This function provides the constant mathematical value of PI
    Math.PI;
document.getElementById("PI").innerHTML = "Math: PI = " + Math.PI;
}

function Math_Power() {               //This function gives the value of a numeral taken to the power of the second numeral: in this case, 9 to the power of 3, or 9 * 9 * 9
    Math.pow(9, 3);
    document.getElementById("power").innerHTML = "Nine to the power of three is: " + Math.pow(9, 3);
}