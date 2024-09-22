const reverseString = require("../reverse-string");

describe("Reverse string function", () => {
  test("Reverse one word", () => {
    expect(reverseString("Hello")).toBe("olleH");
  });
  test("Reverse a sentence", () => {
    expect(reverseString("Hello world")).toBe("dlrow olleH");
  });
  test("Return empty string when given empty string", () => {
    expect(reverseString("")).toBe("");
  });
});
