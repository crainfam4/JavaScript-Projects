function count_back() {                        //A function that includes a whilel loop
    var Digit = "";
    var X = 36;
    while (X > 23) {
        Digit += "<br>" + X;
       X--;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function today() {
    let str = "Today is Wednesday.";
    document.getElementById("length").innerHTML = str.length;
}

    var Crains = ["Kevin", "Angela", "Acacia", "Hiro", "Luna", "Mystic"];
    var Content = "";
    var C;
    function for_Loop() {                                   //This function contains a for loop
        for (C = 0; C < Crains.length; C++) {
        Content += Crains[C] + "<br>";
        }
        document.getElementById("List_of_Crains").innerHTML = Content;
}

function array_Function() {                                //This function utilizes an array
    var Gift = [];
    Gift[0] = "ear muffs";
    Gift[1] = "a stuffed bear with a galaxy display and sleep sounds";
    Gift[2] = "sleeper outfits";
    Gift[3] = "an elephant toy";
    document.getElementById("Array").innerHTML = "My parents gave us " + Gift[1] + ".";
}

function constant_function() {
    const furniture = {type: "Murphy Bed", color: "white", size: "queen", feature: "storage shelves"};
    furniture.feature = "storage shelves & drawers";
    furniture.placement = "game room";
    document.getElementById("Constant").innerHTML = "One of the best features of this " + furniture.type + " is the " + furniture.feature + " on both sides. We placed it in the " + furniture.placement + ".";
}

function another_function() {                    //Let keyword affects the block, but not the function outside of the block
    var M = 6;
    document.getElementById("type").innerHTML = M;
    {
        let M = 12;
        document.getElementById("type_two").innerHTML = M * 13;
    }
    document.getElementById("type_three").innerHTML = M * 13;
}

function writingFunction(weather) {             //Return statement
    return "Today it is " + weather + ".";
}
document.getElementById("outside").innerHTML = writingFunction("raining");

let village = {
    make: "Hawthorne Village ",
    item: "Santa and Mrs. Claus' Castle",
    year: "2003 ",
    set: "Rudolph's Christmas Town Village collection ",
    description : function() {
        return "The initial piece from " + this.set + "distributed by " + this.make + "is " + this.item + ".";
    }
};
document.getElementById("village_item").innerHTML = village.description();

let text = "";                            //This demonstrates creating a break in, or stopping, a loop
for (let a = 35; a > 27; a--) {
    if (a === 32) {break; }
    text += "The number is " + a + "<br>";
}
document.getElementById("jump_out").innerHTML = text;

let text_two = "";
for (let b = 100; b < 110; b++) {
    if (b === 106) {continue; }
    text_two += "The number is " + b + "<br>";
}
document.getElementById("nother").innerHTML = text_two;


