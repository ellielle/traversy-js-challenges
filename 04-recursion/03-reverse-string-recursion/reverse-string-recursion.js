/**
 * Returns the reverse of a string.
 * @param {string} str - The string to reverse.
 * @returns {string} - The reverse of the string.
 */
function reverseString(str) {
  if (str === "") {
    return "";
  }

  return reverseString(str.substring(1)) + str.at(0);
}

module.exports = reverseString;
