document.write(2 + 3 > "4");                                 //document.write method displaying an operator of my choice

function my_Function() {                                     //The square root of a negative is not a possible number
    document.getElementById("NaN").innerHTML = Math.sqrt(-9);
}

function Test_one() {                                        //True that this is not a number
    document.getElementById("one").innerHTML = isNaN("Cat\'s are awesome!");
}

function Test_two() {                                        //False that this is not a number
    document.getElementById("two").innerHTML = isNaN(63);
}

function Big_Number() {                                      //This number is large enough for JS to consider it infinity
    document.getElementById("Infinite").innerHTML = (3E309);
}

function Small_Number() {                                    //This number is a large enough negative number for JS to consider it negative infinity
    document.getElementById("Neg_Infinite").innerHTML = (-3.3E313);
}

function compare() {                                        //A true logic statement
    document.getElementById("Trust").innerHTML = 6 < 9;
}

function compare_two() {                                    //A false logic statement
    document.getElementById("Distrust").innerHTML = 6 > 9;
}

console.log(9 < 3);

function same() {                                            //This statement is true since both are equal
    document.getElementById("Equal").innerHTML = 99 == (33 + 66);
}

function different() {                                       //This statement is false since they are not equal
    document.getElementById("Unequal").innerHTML = 99 == (44 - 66);
}

function same_first() {                                      //The variables are equal because they have the same type and value
    var A = 6;
    var B = 6;
    document.getElementById("peaches").innerHTML = A === B;
}

function different_second() {                                //The variables are not equal because they are a different type, and a different value
    var C = 7; 
    var D = "eight";
    document.getElementById("apples").innerHTML = C ===D;
}

function different_third() {                                 //The variables are not equal because they have the same value, but not the same type
    var E = 13;
    var F = "thirteen";
    document.getElementById("oranges").innerHTML = E === F;
}

function different_fourth() {                                //The two variables are not equal since they have the same type, but not the same value
    var G = "puppies";
    var H = "kittens";
    document.getElementById("plums").innerHTML = G === H;
}

function logic_one() {                                       //A true AND operator since both statements are true
    document.getElementById("first").innerHTML = 6 < 7 && 7 < 8;
}

function logic_two() {                                       //A false AND operator since only one statement is true
    document.getElementById("second").innerHTML = 6 < 7 && 7 > 8;
}

function logic_three() {                                     //A true OR operator since one of the statements is true
    document.getElementById("third").innerHTML = 6 < 7 || 7 > 8;
}

function logic_four() {                                      //A false OR operator since both statements are false
    document.getElementById("fourth").innerHTML = 6 > 7 || 7 > 8;
}

function blue() {                                            //A not operator displaying as false, since the mathematical phrase is accurate
    document.getElementById("best").innerHTML = !(5 < 7);
}

function red() {                                             //A double-negative using the not operator, which displays as true
    document.getElementById("worst").innerHTML = !(5 > 7);
}

document.write(". I would love to have at least " + 3 + " horses.");   //An expression combining a string and a number