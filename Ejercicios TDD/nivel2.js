
function reverseArray(arr){
    let num= arr.length;
    let output = [];
    for (var i = 0; i < num; i++){
        output.push(arr.pop());
    }

    return output;
}

function capitalizeArray(arr){
    return arr.map(e => e.charAt(0).toUpperCase() + e.slice(1));
}

function sumOfNumbers(arr){
    let suma = 0;

    for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
    }
    return suma;
}

module.exports = {reverseArray, capitalizeArray, sumOfNumbers};