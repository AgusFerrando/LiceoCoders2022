// ejercicio3

function printArray(arr){
        arr.forEach(element => console.log(element));
    }
    

console.log(printArray(['perro', 'gato', 'pajaro']));

// ejercicio 4

function showDataTime(){
    let dataTime = new Date();
    let date = dataTime.toLocaleDateString();
    
    let hour = dataTime.toString().slice(16,21);
 
    return date + " " + hour
    
}

console.log(showDataTime());



// ejercicio 5

function swapValues(x, y){
    let a= x;
    let b= y;
    let temp;

    temp = x;
    a = y;
    b = temp;

    console.log(a,b)
}

console.log(swapValues(3,4));


// ejericio 6

function reverseArray(arr){
    let num= arr.length;
    let output = [];
    for (var i = 0; i < num; i++){
        output.push(arr.pop());
    }

    return output;
}

console.log(reverseArray([1,2,3,4,5,6,7]));

// ejercicio 7
const arr = ['manzana', 'banana', 'pera'];

const capitalizeArray = arr.map(e => {
    return e.charAt(0).toUpperCase() + e.slice(1);
});

console.log(capitalizeArray);

//ejercicio 8

function addItem(arr, val){
    arr.push(val);
    return arr;
}

console.log(addItem([1,2], 3));

// ejercicio 9

const removeItem = (arr, val) => {
    let index = arr.indexOf(val)
    if (index > -1) {
        arr.splice(index, 1)
    }
    return arr
}

console.log(removeItem([1,2,3], 2));



// ejercicio 10

function sumOfNumbers(arr){
    let suma = 0;

    for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
    }
    return suma;
}

console.log(sumOfNumbers([2,3,4]));


// ejercicio 11

function sumOfOdds(arr){
    let newArr= [];
    for( let i=0; i < arr.length; i++){
        if (arr[i]%2 !== 0){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(sumOfOdds([2,3,4,5]));

// ejercicio 12

function sumOfEven(arr){
    let newArr= [];
    for( let i=0; i < arr.length; i++){
        if (arr[i]%2 == 0){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(sumOfEven([2,3,4,5]));

// ejercicio 13

function evenAndOdds(n){
    let even=[];
    let odds= [];
    for( let i=0; i <= n; i++){
        if (i%2 == 0){
            even.push(i);
        } else odds.push(i);
        }       
        return even, odds;
}
console.log(evenAndOdds(6));



//ejercicio 14

function sumOfArgs(nums){
    let total=0;
    for (i=0; i<nums.length; i++){
        total = total + parseFloat(nums[i]);
    }
    return total;
}

console.log(sumOfArgs(1,2,3));

// ejercicio 17

const randomHexaNumberGenerator = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };
  
  console.log(randomHexaNumberGenerator());
  console.log(randomHexaNumberGenerator());
  console.log(randomHexaNumberGenerator());

 // ejercicio 18

 function userIdGenerator(){
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result= "";
    const charactersLength = characters.length;
    for ( let i = 0; i < 7; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

console.log(userIdGenerator());
console.log(userIdGenerator());
console.log(userIdGenerator());