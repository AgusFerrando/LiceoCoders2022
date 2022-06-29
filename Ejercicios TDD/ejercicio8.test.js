

const addItem = require("./ejercicio8.js");

test("Should add the given element to an array and return it", () => {
    const expected = [2];
    const result = addItem(2);
    expect(expected).toBe(result);
});