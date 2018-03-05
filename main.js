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

// Challenge 1 end -------!


// Challenge 2 Start -----!


function maths(number){
    var numberProperties = [];

    function isPrime(value) {
        for(var i = 2; i < value; i++) {
            if(value % i === 0) {
                return false
            }
        }
        return true
    }

    var primeOrNot = isPrime(number);
    numberProperties.push(primeOrNot);

    if ((number % 2) === 0){
        numberProperties.push(true);
    } else if ((number % 2) !== 0) {
        numberProperties.push(false);
    }


    if ((number % 10) === 0){
        numberProperties.push(true);
    } else if ((number % 10) !== 0) {
        numberProperties.push(false);
    }
    
    var stringToPrint = "<h1>Is " + number + " prime? " + numberProperties[0] + "</h1>";
    stringToPrint += "<h1>Is " + number + " even? " + numberProperties[1] + "</h1>";
    stringToPrint += "<h1>Is " + number + " divisible by 10? " + numberProperties[2] + "</h1>";
    writeToDom(stringToPrint, "challenge-2");
}

maths(7);


// Challenge-2 END------!
