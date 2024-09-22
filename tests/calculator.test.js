const Calculator = require("../calculator");

let testCalculator = new Calculator();

describe("Test Calculator Object", () => {
  test("Test addition", () => {
    expect(testCalculator.add(4, 5)).toEqual(9);
  });
  test("Test subtraction", () => {
    expect(testCalculator.subtract(9, 6)).toEqual(3);
  });
  test("Test division with a remainder of 0", () => {
    expect(testCalculator.divide(9, 3)).toEqual(3);
  });
  test("Test division with a non-zero remainder", () => {
    expect(testCalculator.divide(1, 3)).toBeCloseTo(0.33);
  });
  test("Test multiplication", () => {
    expect(testCalculator.multiply(4, 5)).toEqual(20);
  });
});
