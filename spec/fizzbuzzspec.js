
describe("FizzBuzz", function () {


    describe("Problem function", function () {
        it("should return FizzBuzz", function () {
            fizzbuzz(60);
            expect(fizzbuzz(60)).toBe("FizzBuzz");
        });
        it("should return Fizz", function () {
            fizzbuzz(6);
            expect(fizzbuzz(6)).toBe("Fizz");
        });
        it("should return Buzz", function () {
            fizzbuzz(5);
            expect(fizzbuzz(5)).toBe("Buzz");
        });
        it("should return number", function () {
            fizzbuzz(2);
            expect(fizzbuzz(2)).toBe(2);
        });
        it("should return number", function () {
            fizzbuzz(-2);
            expect(fizzbuzz(-2)).toBe(-2);
        });
        it("should return number", function () {
            fizzbuzz("name");
            expect(fizzbuzz("name")).toBe("name");
        });
    });
});