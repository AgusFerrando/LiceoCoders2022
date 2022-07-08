
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

var isPalindrome2 = function(x) {
    if (x === 0) return true
    if (x < 0 || x % 10 === 0) return false
    if (x < 10) return true
    
    let temp = x
    let reverse = 0
    
    while (true) {
        reverse += temp % 10
        temp = Math.floor(temp / 10)
        if (temp === 0) break
        reverse *= 10
    }
    
    return reverse === x
};

console.log(isPalindrome(343));