
let numbers=[];

function random(){
    let x = Math.ceil(Math.random()*6)
    return x;
}

for (let i=0; i <= 50;i++) {
    let y = random();
    numbers.push(y);
}

function resultado(numbers){
    var max= Math.max(...numbers);
    var min= Math.min(...numbers);
    var resFinal= `El valor más grande es ${max} y el menor es ${min}`;
    document.write(resFinal);
console.log(max);}


resultado(numbers);


