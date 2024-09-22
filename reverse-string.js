// Note: Only works for ASCII characters
const reverseString = (string) => {
  return string.split("").reverse().join("");
};

module.exports = reverseString;
