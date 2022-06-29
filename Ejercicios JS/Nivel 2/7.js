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

// function reverseArray(arr){
//     let reversed;
//    for(let i = 0; i < arr.length; i++){
//     reversed = arr.unshift(arr[i]);
// }   
//     return arr.push(reversed);
// };


// console.log(reverseArray([1,2,3]));

// ejercicio 7
const arr = ['manzana', 'banana', 'pera'];

const capitalizeArray = arr.map(e => {
    return e.charAt(0).toUpperCase() + e.slice(1);
});

console.log(capitalizeArray);