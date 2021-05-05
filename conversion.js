const convertingToDecimal = (string) => {
  const romanArray = string.split("");
  /** 
  // Test value
  testValue = "MCXIIIIV";

  testArray = testValue.split("");
  */

  // assuming there is no need for vinicilum roman numerals
  const romanNumerals = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  let finalDecimalValue = 0;
  let current, currentvalue, next, nextvalue;

  for (i = 0; i < romanArray.length; i++) {
    current = romanArray[i];
    currentvalue = romanNumerals[current];

    next = romanArray[i + 1];
    nextvalue = romanNumerals[next];

    if (currentvalue < nextvalue) {
      finalDecimalValue -= currentvalue;
    } else {
      finalDecimalValue += currentvalue;
    }
  }

  return finalDecimalValue;
};

module.exports = { convertingToDecimal };
