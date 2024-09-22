const analyzeArray = require("../analyze-array");

describe("Testing array analysis function", () => {
  test("Testing for correct calues returned in object", () => {
    const analysis = analyzeArray([1, 8, 3, 4, 2, 6]);

    expect(analysis.average).toEqual(4);
    expect(analysis.min).toEqual(1);
    expect(analysis.max).toEqual(8);
    expect(analysis.length).toEqual(6);
  });
});
