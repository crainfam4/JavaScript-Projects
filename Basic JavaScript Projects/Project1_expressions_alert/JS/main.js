var B = "Welcome to my various basics";  //entering a string as a variable
window.alert(B);                         //the variable pops up in a window alert

document.write("Hello, World! ");        //string text

var A = "This is a string. ";            //setting variable A as a string
var A = A.fontcolor("red");              //setting variable A to display with red font
document.write(A);                       //displaying variable A

document.write("\"I looked everywhere for Sally\'s purple shirt,\" sighed Mom. ");    //using the \ so the ' and " display, instead of ending the string

document.write("I am retraining my cats to use the toilet. " + "So far there have been two potties in the toilet today. ");  //concatenated string

var C = "I do not know what to do with our dog. " + "She has inflammatory bowel disease, and when she has kibble of any kind, she has liquid diarrhea. " + "We have been feeding \"The Farmer\'s Dog\", which nearly solves the problem, but she steals food because she is so hungry, and has lost at least five pounds in about a month. ";  //setting a variable with a concatenated string
var C = C.fontcolor("Blue");             //setting the font color for the variable C
document.write(C);                       //displaying concatenated variable C with blue font

var Family = "The Crains", Dad = "Kevin", Mom = "Angela", Cat = "Hiro", Daughter = "Acacia", Dog = "Luna", Cat = "Mystic", FutureSon = "KJ";  //setting multiple variables a once
var Daughter = Daughter.fontcolor("pink");  //setting font color for variable Daughter
document.write(Daughter);                //displaying the pink return of the variable Daughter

document.write(9*3);                     //displaying an expression