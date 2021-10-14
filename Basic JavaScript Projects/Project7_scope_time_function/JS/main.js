var X = 6;                       //Global variable
function Add() {
    document.write(X + 35 + "<br>");
}
function Multiply() {
    var Y = 9;                   //Local variable
    document.write(X * Y);
}
Add();
Multiply();

function Darkness() {                     //This is the boot camp example, just adjusted minimally
    if (new Date().getHours() > 17) {
        document.getElementById("Halloween").innerHTML = "Watch out for the clown in the Haunted Woods!";
    }
}

function get_Date() {                    //A function that contains an if statement
    if (new Date().getMinutes() > 50) {
    document.getElementById("Stand").innerHTML = "The Apple Watch says to stand up.";
    }
}

function Weight_Function() {             //This function has an if and an else
    Weight = document.getElementById("Weight").value;
    if (Weight <= 250) {
        Ride = "Giddy-up, Partner!";
    }
    else {
        Ride = "Sorry, but you will not be able to ride at this time.";
    }
    document.getElementById("How_much_do_you_weigh?").innerHTML = Ride;
}

function Time_function() {                  //This is the time function from the boot camp examples
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

function intentional_mishap() {                  //Intentional mistake where the console log tells main.js has unexpected identifier on line 52
    var X = "Peaches ";
    var Y = and cream";
    document.getElementById("to_string_or_not_to_string").innerHTML = X + Y;
}