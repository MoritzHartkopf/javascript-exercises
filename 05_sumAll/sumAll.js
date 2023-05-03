
// function that takes two numbers and sums them and the numbers in between
const sumAll = function(numberA, numberB) {
    let sum = 0;

  // works if first number is bigger than second one 

    if (numberA > numberB){
        [numberA, numberB] = [numberB, numberA];
    }

// Error if element is non number character 
    if (typeof numberA != "number" || typeof numberB != "number")
    {
        return "ERROR"
}

// ERROR if one of the numbers or both are negativ
    if (numberA <0 || numberB < 0)
    {
     return "ERROR";
    } 
    

// Actual summing 
    for (i = numberA; i <= numberB; i++)
    { 
        sum += i;
    
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
