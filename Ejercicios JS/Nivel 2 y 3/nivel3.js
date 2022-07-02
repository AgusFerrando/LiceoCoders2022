
  //ejercicio 8

function suffleArray(arr){
  let num = arr.length;
  let temp;
  let index;

  while (num > 0) {
      index = Math.floor(Math.random() * num);          
      num--;
      temp = arr[num];
      arr[num] = arr[index];
      arr[index] = temp;
  }           
  
  return arr;
}

console.log(suffleArray([1,2,3,4,5]));




// ejercicio 9

function factorial(n){
  let total = 1; 
  for (i=1; i<=n; i++) {
  total = total * i; 
}
return total; 
}

console.log(factorial(3));




// ejercicio 10

function isEmpty (param){
  if (param == undefined){
    return "is empty";
  } else return param;
}

console.log(isEmpty());
console.log(isEmpty(2));




// ejercicio 11 -- corregir

function suma(a,b,c){
  return a+b+c;
}

console.log(suma(1,2,3));
console.log(suma(1,2,3,4));




// ejercicio 12

function sumOfArraysItems(arr){
  let total = 0;
  for (let i=0; i<arr.length; i++){
    if (isNaN(arr[i]) == true ){
      return "the items are not all numbers"
    } else total = total + arr[i];
  } return total;
}

console.log(sumOfArraysItems([1,2,3]));
console.log(sumOfArraysItems(["a",2,3]));




// ejercicio 13

function promedio(arr){
  let total = 0;
  for (let i=0; i<arr.length; i++){
    if (isNaN(arr[i]) == true ){
      return "the items are not all numbers"
    } else total = total + arr[i]
  } return total/arr.length
}

  console.log(promedio([2,4,6]));
  console.log(promedio([1,"ba",2]));




// ejecicio 14

function modificarArray(arr){
  let index;
  if (arr.length < 4){
    return "elemento no encontrado";
  }  else for (let i=0; i<arr.length; i++){
    index = arr[4].toUpperCase();
  } arr[4]=index;
    return arr;
}

console.log(modificarArray(["agus","facu","david","karol","carlos"]));
//console.log(modificarArray(["agus","facu","david","karol"])) corregir



// ejercicio 15

function isPrime(num){
  if (num<=1){
    return false;
  } 
  for (var i = 2; i <= num-1; i++){
      if (num % i == 0) return "is not prime";
      return "is prime";
  }
}

console.log(isPrime(20));
console.log(isPrime(13));



// ejercicio 16
