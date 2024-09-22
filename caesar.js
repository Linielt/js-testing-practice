const caesarCipher = (string, shiftFactor) => {
  let charCodesArray = [];
  for (let i = 0; i < string.length; i++) {
    let charCode = string.charCodeAt(i);
    if (charCode < 65 && charCode > 90 && charCode < 97 && charCode > 122) {
      charCodesArray.push(charCode);
    } else {
      if (charCode >= 65 && charCode <= 90) {
        charCode += shiftFactor % 26;
        if (charCode > 90) {
          charCode -= 26;
        }
      }

      if (charCode >= 97 && charCode <= 122) {
        charCode += shiftFactor % 26;
        if (charCode > 122) {
          charCode -= 26;
        }
      }

      charCodesArray.push(charCode);
    }
  }

  return String.fromCharCode(...charCodesArray);
};

// Use Modulus operator % 26
module.exports = caesarCipher;
