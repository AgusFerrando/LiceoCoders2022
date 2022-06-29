function indiceMasaCorporal(peso, altura){
    let indiceMC = peso / Math.pow(altura, 2);
    return  indiceMC.toFixed(2);
}

module.exports = indiceMasaCorporal;