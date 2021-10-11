function Ride_Function() {                                                   //This is The Tech Academy example of a ternary operation, not my own
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {                                                   //This is my ternary operation to display if someone is old enough to vote based on their input
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to vote.":"You can vote!";
    document.getElementById("Vote").innerHTML = Can_vote;
}

function Vehicle(Make, Model, Year, Color) {                                 //This is another one of The Tech Academy's examples-of a constructor function
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}

function Pet(Species, Breed, Age, Color) {                                   //This is my constructor function, which contains the new and this keywords
    this.Pet_Species = Species;
    this.Pet_Breed = Breed;
    this.Pet_Age = Age;
    this.Pet_Color = Color;
}
var Hiro = new Pet("cat", "DMH", 14, "white");
var Luna = new Pet("dog", "Rottweiler", 5, "black and brown");
var Mystic = new Pet("cat", "DMH", 1.5, "black and white");
function myPets() {
    document.getElementById("New_and_This").innerHTML =
    "Hiro is a " + Hiro.Pet_Age + " year old, " + Hiro.Pet_Color + " " + 
    Hiro.Pet_Breed + " " + Hiro.Pet_Species + ".";
}

var Z = abstract;                                             //This was my use of a JS reserved word as a value for a variable
document.write(Z);

function a_Function() {                                       //This is the function that contains my nested function
    document.getElementById("Nested_Function").innerHTML = Multiply();
    function Multiply() {
        var M = 3;
        function Times_two() {M *= 2;}                        //Nested Function
        Times_two();
        return M;
    }
}