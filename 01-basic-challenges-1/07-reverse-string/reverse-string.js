/**
 * Returns the reverse of a string.
 * @param {string} str - The string to reverse.
 * @returns {string} - The reverse of the string.
 */
function reverseString(str) {
  const reversedString = [];
  for (let i = str.length; i >= 0; i--) {
    reversedString.push(str.charAt(i))
  }

  return reversedString.join("");
}

module.exports = reverseString;
