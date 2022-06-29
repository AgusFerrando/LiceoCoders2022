
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
