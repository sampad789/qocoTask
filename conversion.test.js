const { convertingToDecimal } = require("./conversion");

test("should output decimal number 5756", () => {
  const testOutput = convertingToDecimal("MMMMMDCCLVI");
  expect(testOutput).toEqual(5756);
});

test("should output decimal number 4", () => {
  const testOutput = convertingToDecimal("IV");
  expect(testOutput).toEqual(4);
});
