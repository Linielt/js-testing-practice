const capitalize = require("../capitalize");

describe("Capitalize function", () => {
  test("Capitalize one word", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
  test("Capitalize first letter of a sentence", () => {
    expect(capitalize("hello world")).toBe("Hello world");
  });
  test("Return empty string when given an empty string", () => {
    expect(capitalize("")).toBe("");
  });
});
