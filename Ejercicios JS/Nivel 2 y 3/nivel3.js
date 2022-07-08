// ejercicio 1

function userIdGenerator1(idLength){
  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result= "";
  const charactersLength = characters.length;
  for ( let i = 0; i < idLength; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function userIdGeneratedByUser(){
  let numOfIdsString = prompt("insert Number of Ids to be generate:")
  let idsLengthString = prompt("insert the id's length you want")
  
  let numOfIdsNumber = new Number(numOfIdsString).valueOf();
  
  let idsLengthNumber = new Number(idsLengthString).valueOf();

  let ids = []

  for (let i = 0; i < numOfIdsNumber; i++) { 
    
    ids.push(userIdGenerator1(idsLengthNumber))
    
  };
  return ids;

}

console.log(userIdGeneratedByUser())
  
  
  
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

function isUnique(arr){
  let newArr= arr.sort()
  for (let i=0; i<newArr.length; i++){
      if(newArr[i] == newArr[i+1]){
        return 'Hay elementos repetidos';
      } else return arr;
  }
}

console.log(isUnique([1,2,3,4]));
console.log(isUnique([1,2,2,4])); //revisar



//ejercicio 17

function tipeOfData(arr){
  for (let i=0; i<arr.length; i++){
    let type1= typeof arr[i];
    let type2= typeof arr[i+1];
    if( type1 !== type2){
      return 'Hay elementos diferentes';
    } return arr;
  }
}

console.log(tipeOfData([1,2,3]));
console.log(tipeOfData([1,"a","b"]));


// ejercicio 18
// function sieteNumeros(){
//   let arr=[];
//   let length= 7
//   for (let i = 0; i < length; i++) {
//     let index = Math.floor(Math.random() * length);
//     if (index > 0 )
//     arr.push(index);
//   }

//   return arr;  
// }
     
// console.log(sieteNumeros());
// console.log(sieteNumeros());
// console.log(sieteNumeros());