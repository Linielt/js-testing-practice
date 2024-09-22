const caesarCipher = require("../caesar");

describe("Test Caesar cipher function", () => {
  test("Test single word", () => {
    expect(caesarCipher("hello", 3)).toBe("khoor");
  });
  test("Test wrapping lower case", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });
  test("Test wrapping uppercase", () => {
    expect(caesarCipher("XYZ", 5)).toBe("CDE");
  });
  test("Test case preservation", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });
  test("Test punctuation", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});
