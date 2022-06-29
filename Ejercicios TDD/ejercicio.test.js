const indiceMasaCorporal = require ("./ejercicio.js")


test("Debe devolverme el IMC calculado segun altura y peso de una persona", () => {
    const expected = 18.65;
    const result = indiceMasaCorporal(52, 1.67);
    expect(expected).toBe(result);
});
