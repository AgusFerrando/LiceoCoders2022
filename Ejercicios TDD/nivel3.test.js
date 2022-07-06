const factorial = require('./nivel3.js')

test("Debe devolver el factorial del numero dado", () => {
    const expected = 6;
    const result = factorial(3);
    expect(expected).toStrictEqual(result);
});