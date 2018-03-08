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

// challenge3([ 1, 2, 3]) //6
// challenge1([ 1, 3, 8, 1, 8]) //12
// challenge1([ -1, -1, 5, 2, -7])//-1
// Loop through each index
// Check if index appears more than once
// if appears more than once remove it

function summinator(arrayToSum) {
    var arrayToUse = arrayToSum;

    for(var i = 0; i < arrayToUse.length; i++){
        var currentIndex = arrayToUse[i];
            for(var j = i + 1; j < arrayToUse.length; j++) {
                if(currentIndex === arrayToUse[j]){
                arrayToUse.splice(j, 1);
                j--;
            } 
        }
    }
    var sumOfArray = 0;
    
    for(var k = 0; k < arrayToUse.length; k++){
        sumOfArray += arrayToUse[k];
    }

    var stringToPrint = "<h1>The sum of the Array is: " + sumOfArray + "</h1>";
    writeToDom(stringToPrint, "challenge-3");
}
var testArray = [-1, -1, -1, 5, 5, 2, -7];
summinator(testArray);




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


// function weirdSort (someString) {
//     var arrayOfSomeString = someString.toLowerCase().split(' ');
//     var arrayOfLastLetters = [];
//     console.log('arrayOfSomeString: ', arrayOfSomeString);
//     var checkingIndex;
//     var nextIndex; 
//     console.log("Checking char code: ", checkingIndex);

//     for(var i = 0; i < arrayOfSomeString.length; i++){
//             checkingIndex = arrayOfSomeString[i].charCodeAt(arrayOfSomeString[i].length - 1);
//             if( arrayOfSomeString[i+1] <= ((arrayOfSomeString.length) - 1) ){
//             nextIndex = arrayOfSomeString[i+1].charCodeAt(arrayOfSomeString[i+1].length - 1);
//             };
//             console.log("Next Index: ", nextIndex);
//             console.log("Checking index: ", checkingIndex);
             
//     }
//     console.log("checkingIndex: ", checkingIndex, "nextIndex: ", nextIndex);
// }

// weirdSort("Bears live in the woodz");

function ezSort (anotherString){
    var arrayOfString = anotherString.split(' ');
    arrayOfString.sort((a,b) => a.charCodeAt(a.length -1) - b.charCodeAt(b.length -1));
    stringToPrint = "<h1>" + arrayOfString + "</h1>"
    writeToDom(stringToPrint, "challenge-5");
}

ezSort("Bears live in the woodz");





