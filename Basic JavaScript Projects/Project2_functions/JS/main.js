function Function_One() {                                      //Creating a function called Function_One
    var A = "Good morning, ", B = "Good afternoon";            //Creating two variables
    var result = (A.fontcolor("Blue") + B.fontcolor("Red"));   //Setting the color of each of the variables
    document.getElementById("Button_Text").innerHTML = result; //Clicking on the button returns the result of the two concatenated variables with their font colors
}

function myFunction() {                                          //Creating a function called myFunction
    var sentence = "My daughter's school is so irritating.";     //Setting the first variable string
    sentence += " They expect the \"Learning Coach\" to spend six hours every day helping with, and reviewing, work."; //Second string to be concatenated
    document.getElementById("Concatenate").innerHTML = sentence; //Clicking on the text provides the concatenated strings
}

function toFahrenheit(c) {
    var temperature = ((c * (9/5)) + 32);    
document.getElementById("conversion").innerHTML = "The temperature is " + temperature + " Fahrenheit";
}