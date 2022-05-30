function perimetroCirculo(r){
    return 2*Math.PI*r; 
}

console.log(perimetroCirculo(4));


function areaCirculo(r){
    return Math.PI*Math.pow(r,2);
}

console.log(areaCirculo(5));


function perimetroCuadrado(l){
    return l*4;
}

console.log(perimetroCuadrado(5));


function hipotenusa(a,b){
    let h= Math.pow(a,2)+Math.pow(b,2);
    return Math.sqrt(h)
}

console.log(hipotenusa(6,9));
