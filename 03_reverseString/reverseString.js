const reverseString = function(inputString) {
    let reversedString = "";
    let posOfLastLetter = inputString.length -1 ;
    for (let i = posOfLastLetter; i >= 0; i--)
    {
    reversedString = reversedString + inputString.charAt(i)
    
    }
    return reversedString;   
};

// Do not edit below this line
module.exports = reverseString;


