
function fizzbuzz(n){
    let isNumber = typeof(n) == 'number';
    if(!isNumber){
        return "you must enter a number"
    }
    let includes3= n.toString().includes(3);
    let includes5= n.toString().includes(5);
    if (n == 0){
        return 0;
    }
    if((n%3 == 0 && n%5 == 0) || (includes3 && includes5)){
        return 'Fizzbuzz';
    }

    if (n%3 == 0 || includes3){
        return 'Fizz';
    } 
    
    if (n%5 == 0 || includes5){
        return 'Buzz';
    }
    
    return n;
    
}

console.log(fizzbuzz(11.3));
console.log(fizzbuzz(15));
console.log(fizzbuzz(123));
console.log(fizzbuzz(12));
console.log(fizzbuzz('abc'));

module.exports = fizzbuzz;