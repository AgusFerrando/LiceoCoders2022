const fizzbuzz = require("./fizzbuzz.js")

describe('fizzbuzz', () => {
    test("test", () => {
        expect(true).toBe(true);
    });


    test("Debe devolver 0 si le paso un 0", () => {
        const expected =0;
        const result = fizzbuzz(0);
        expect(expected).toBe(result);
    });

    test("Debe devolver 1 si le paso un 1", () => {
        const expected =1;
        const result = fizzbuzz(1);
        expect(expected).toBe(result);
    });

    test("Debe devolver 'Fizz' si le paso un 3", () => {
        const expected = 'Fizz';
        const result = fizzbuzz(3);
        expect(expected).toBe(result);
    });

    test("Debe devolver 'Fizz' si le paso un 9", () => {
        const expected = 'Fizz';
        const result = fizzbuzz(9);
        expect(expected).toBe(result);
    });

    test("Debe devolver 'Fizz' si le paso un 13", () => {
        const expected = 'Fizz';
        const result = fizzbuzz(13);
        expect(expected).toBe(result);
    });

    test("Debe devolver 'Buzz' si le paso un 5", () => {
        const expected = 'Buzz';
        const result = fizzbuzz(5);
        expect(result).toBe(expected);
    });

    test("Debe devolver 'Buzz' si le paso un 10", () => {
        const expected = 'Buzz';
        const result = fizzbuzz(10);
        expect(expected).toBe(result);
    });

    test("Debe devolver 'Fizzbuzz' si le paso un 3.5", () => {
        const expected = 'Fizzbuzz';
        const result = fizzbuzz(3.5);
        expect(expected).toBe(result);
    });

    test("Debe devolver 'FizzBuzz' si le paso un 11.53", () => {
        const expected = 'Fizzbuzz';
        const result = fizzbuzz(11.53);
        expect(expected).toBe(result);
    });

    test("Debe devolver 'FizzBuzz' si le paso un 30", () => {
        const expected = 'Fizzbuzz';
        const result = fizzbuzz(30);
        expect(expected).toBe(result);
    });

});    