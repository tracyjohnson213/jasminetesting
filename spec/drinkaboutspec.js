describe("Drink About", function () {

    describe("Age function", function () {
        beforeEach(function () {
            drink = new whatCanIDrink();
        });

        it("should for younger than 0 return - Sorry. I can’t tell what drink because that age is incorrect!", function () {
            drink = whatCanIDrink(-60);
            expect(drink).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        it("should for older than 130 return - Sorry. I can’t tell what drink because that age is incorrect!", function () {
            drink = whatCanIDrink(160);
            expect(drink).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        it("should for 0 to 14 return - Drink Toddy", function () {
            drink =  whatCanIDrink(12);
            expect(drink).toBe("Drink Toddy");
        });
        it("should for 14 to 18 return - Drink Coke", function () {
            drink = whatCanIDrink(17);
            expect(drink).toBe("Drink Coke");
        });
        it("should for 18 to 21 return - Drink Beer", function () {
            drink = whatCanIDrink(20);
            expect(drink).toBe("Drink Beer");
        });
        it("should for over 21 to 130 return - Drink Whisky", function () {
            drink = whatCanIDrink(42);
            expect(drink).toBe("Drink Whisky");
        });
    });
});