/**const convertingToDecimal = (str) => {

  NOTE// EROOR handling was not mentioned just me over thinking 
  // Eroor handling function for checking uppercase or lowercase letters

  let isUpper = (str) => {
    return !/[a-z]/.test(str) && /[A-Z]/.test(str);
  };

  let isUppercase = isUpper(str);

  if (isUppercase === true) {
    const romanArray = str.split("");

    //Hash created to make the comaprision easier
    const romanNumerals = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };

    for (let i = 0; i < romanArray.length; i++) {
      finalDecimalValue += romanNumerals[romanArray[i]];
    }

    return finalDecimalValue;
  } else {
    return "Roman numerals use uppercase alphabets";
  }
};

module.exports = { convertingToDecimal }

*/
