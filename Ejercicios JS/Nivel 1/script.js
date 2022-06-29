// ejercicio 13

function IMC(peso, altura){
    let calculo = peso / Math.pow(altura, 2);
    let indiceMC = calculo.toFixed(2);
    console.log(indiceMC);

    if(indiceMC > 30){
        return 'Grupo: Obeso';
    } if ( indiceMC > 25){
        return 'Grupo: Sobrepeso';
    } if (indiceMC > 18.5){
        return 'Grupo: Peso Normal';
    } if (indiceMC < 18.5){
        return 'Grupo: Bajo peso';
    }
}

console.log(IMC(52, 1.67));

// ejercicio 15

function findMax (a,b,c) {
    if (a > b && a > c){
        return a;
    } if ( b > a && b > c){
        return b;
    } else return c;
} 

console.log(findMax(-1,4,3));