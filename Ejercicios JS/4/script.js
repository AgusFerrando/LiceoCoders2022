let frutas = ["manzana", "banana", "pera", "durazno", "uva"];
let frutas2=[];
let length= frutas.length

for(let i=0; i<length; i++){
    let f=frutas.pop();
    frutas2.push(f)
    console.log(frutas);
    console.log(frutas2);
} 