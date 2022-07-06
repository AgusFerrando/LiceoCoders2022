const {reverseArray, capitalizeArray, sumOfNumbers} = require('./nivel2.js')

test("Debe invertir el orden del array que le pase", () => {
    const expected = [3,2,1];
    const result = reverseArray([1,2,3]);
    expect(expected).toStrictEqual(result);
});

test("Debe pasar a matuscula la primer letra de cada elemento del array", () => {
    const expected = ["Manzana", "Banana", "Pera"];
    const result = capitalizeArray(["manzana", "banana", "pera"]);
    expect(expected).toStrictEqual(result);
});

test("Debe sumar todos los numero del array", () => {
    const expected = 6;
    const result = sumOfNumbers([1,2,3]);
    expect(expected).toStrictEqual(result);
});