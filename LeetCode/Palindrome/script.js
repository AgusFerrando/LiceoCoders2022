
var isPalindrome = function(x) {
    let num = x.toString();
    let numInverso = "";
    let numLength = num.length
   
    for (let i = 0; i < numLength; i++) {
       
        let element = num.charAt(numLength-1-i);
        numInverso += element
       
    }
     
    if (num == numInverso){
        return true;
    } else return false;
};


console.log(isPalindrome(343));