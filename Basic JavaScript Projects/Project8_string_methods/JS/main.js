function connect() {                             //The concat() function to combine the different strings into one sentence
    var str1 = "I am done with this month. ";
    var str2 = "Can it just be November already, so all these struggles can be over? ";
    var str3 = "Of course, knowing our life, November will have its own struggles,...";
    var str4 = "but maybe I can handle those better."
    var whole_sentence = str1.concat(str2, str3, str4);
    document.getElementById("together").innerHTML = whole_sentence;
}

function slice_Method() {                         //A function using the slice method to display just a section of the string
    var Sentence = "Hiro and Mystic are both awesome kitties; they both use the toilet, which is a dream for a pregnant woman.";
    var Section = Sentence.slice(0, 15);
    document.getElementById("Slice").innerHTML = Section;
}

function Upper() {                       //A function that makes all the letters in a string into upper case.
    let text = document.getElementById("Cap").innerHTML;
    document.getElementById("Cap").innerHTML =
    text.toUpperCase();   
}

function spy() {                               //The string search function that displays at which point on a line the word searched begins
let str = "Please find where the text begins.";
document.getElementById("look").innerHTML = str.search("text");
}

function number_string() {                     //The toString() function changes a number into a string
    var S = 134;
    document.getElementById("change").innerHTML = S.toString();
}

function precision() {                         //The toPrecision() function where it displays the number rounded to 12 characters-including the decimal
    var M = 43692.78501129456789;
    document.getElementById("Precise").innerHTML = M.toPrecision(12);
}

function tofixed() {                           //This is the toFixed() method where a number is returned rounded to the given number of decimal places, in this case: 4
    let num = 298.27956587456;
    let n = num.toFixed(4);
    document.getElementById("cut-off").innerHTML = n;
}

function myFunction() {                        //This is a valueOf() method where the function returns the value of the string
    let str = "It's raining cats and dogs.";
    document.getElementById("raining").innerHTML = str.valueOf();
}