console.log("YAY JS!");



function writeToDom(domString, domID) {
    var domElement = document.getElementById(domID);
    domElement.innerHTML += domString;
}

// Challenge 1 start -----!

function howOldAmI (birthDate, otherDate){
    if(birthDate < otherDate){
        var years = otherDate - birthDate;
        var stringToPrint = "<h1>You are " + years + " years old</h1>";
        writeToDom(stringToPrint, "challenge-1");
    } else if (birthDate > otherDate){
        var years = birthDate - otherDate;
        var stringToPrint = "<h1>You will be born in " + years + " years</h1>";
        writeToDom(stringToPrint, "challenge-1");
    } else if (birthDate === otherDate){
        var stringToPrint = "<h1>You were born this very year!</h1>";
        writeToDom(stringToPrint, "challenge-1");
    }
}

howOldAmI(2000, 2010);