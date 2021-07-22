import * as challenge from "./js13";

test("should return correct string", () => {
    expect(challenge.greet()).toBe("Hello, nice to meet you")
});

test("should add two numbers together", () => {
    expect(challenge.sumTwoNumbers(2, 3)).toBe(5);
    expect(challenge.sumTwoNumbers(-2, 3)).toBe(1);
    expect(challenge.sumTwoNumbers(-2, -43)).toBe(-45);
})

test("should return larger number", () => {
    expect(challenge.checkLarger(3, 5)).toBe("5 is bigger than 3");
    expect(challenge.checkLarger(49, 35)).toBe("49 is bigger than 35");
    expect(challenge.checkLarger(-3, -5)).toBe("-3 is bigger than -5");
    expect(challenge.checkLarger(-9, 0)).toBe("0 is bigger than -9");
    expect(challenge.checkLarger(5, 5)).toBe("Both numbers are equal");
})

test("should return array of names with 6 or fewer letters or string", () => {
    expect(challenge.filterByLength(["Bob", "Sue", "Nathalia"])).toBe(["Bob", "Sue"]);
    expect(challenge.filterByLength(["Romina", "Rita", "Josh"])).toBe(["Romina", "Rita", "Josh"]);
    expect(challenge.filterByLength(["Nathalia", "Antigone"])).toBe("Sorry, no valid names supplied");
})

test("should reduce numbers by given value if reduced number is between 0 and 255, or return 0 if less than 0 or 255 if more than 255", () => {
    expect(challenge.reduceNumbers([0, 255, 276], 20)).toBe([0, 235, 255]);
    expect(challenge.reduceNumbers([354, 124, 250], 100)).toBe([254, 25, 150]);
    expect(challenge.reduceNumbers([678, 349, 8090], 1)).toBe([255, 255, 255]);
    expect(challenge.reduceNumbers([-9, -5, -6], 20)).toBe([0, 0, 0]);
})