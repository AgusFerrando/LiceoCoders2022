const {printName, indiceMasaCorporal} = require ("./nivel1.js")


test('Devolver el nombre completo si le paso el nombre y apellido', () => {
    const expected = 'Agus Ferrando'
    const result = printName("Agus", "Ferrando");
    expect(expected).toBe(result);
});

test("Debe devolverme el IMC calculado segun altura y peso de una persona", () => {
    const expected = "18.65";
    const result = indiceMasaCorporal(52, 1.67);
    expect(expected).toBe(result);
});
