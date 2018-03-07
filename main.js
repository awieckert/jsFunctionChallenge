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

// Challenge-3 START-------!

// Challenge-3 END ------!

// Challenge-4 Start -----!


var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
var challenge4 = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"];


function geeseSuck (birds) {
    var antiGeeseCoalition = birds;
    console.log(antiGeeseCoalition);
    for(var i = 0; i < birds.length; i++){
        var currentBird = birds[i];
        for(var j = 0; j < geese.length; j++){
            var currentGoose = geese[j];
            if(currentGoose === currentBird){
                antiGeeseCoalition.splice(currentBird, 1);
                i - 1;
            }
        }
        
    }

    console.log(antiGeeseCoalition);

}

geeseSuck(challenge4);

// Adding comment so I can commit on branch and then push.

// Challenge-5 Functions START-----!

// challenge5("I love pie"); //["love", "pie", "I"]
// challenge5("bears live in the woods"); //["live", "the", "in", "bears", "woods"]


function weirdSort (someString) {
    var arrayOfSomeString = someString.toLowerCase().split(' ');
    var arrayOfLastLetters = [];
    console.log('arrayOfSomeString: ', arrayOfSomeString);
    for(var i = 0; i < arrayOfSomeString; i++){
        arrayOfLastLetters += arrayOfSomeString[i].splice(-1);
    }
    console.log("ArrayofLastLetters: ", arrayOfLastLetters);
}

weirdSort("bears live in the woods");