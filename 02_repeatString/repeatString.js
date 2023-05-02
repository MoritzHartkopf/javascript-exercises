const repeatString = function(message, numberOfRepetitions) {
   
    let repeatedString = "";

    if (numberOfRepetitions < 0){
        return "ERROR"
    }
    else
    {
    }
        for (let i = 0; i < numberOfRepetitions; i++){
            repeatedString += message
        }
        return repeatedString
    }

// Do not edit below this line
module.exports = repeatString;
