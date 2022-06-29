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

function addItem(i){
    let arr=[];
    arr.push(i);
    return arr;
}

console.log(addItem(3));


// ejercicio 17

const randomHexaNumberGenerator = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };
  
  console.log(randomHexaNumberGenerator());
  console.log(randomHexaNumberGenerator());
  console.log(randomHexaNumberGenerator());
