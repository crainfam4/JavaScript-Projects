function my_dictionary() {               //This creates a dictionary function
    var Baby = {                         //The dictionary provides information about our baby
        First:"Kevin",                   //These are the various KVP about "Baby"
        Middle:"Ray",
        Last:"Crain",
        Suffix:"Jr.",
        Nickname:"KJ",
        Gender:"Male",
        Due_Date:"February 18, 2022",
        Gestational_Age:"20w, 5d"
    };
    delete Baby.Gestational_Age;         //This is a delete operator, which is deleting the KVP that is supposed to be displayed by the getElementById method
    document.getElementById("Dictionary").innerHTML = Baby.Gestational_Age;        //The result is undefined, since this KVP was deleted in line 12
}