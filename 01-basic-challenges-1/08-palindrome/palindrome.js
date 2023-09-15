/**
 * Returns true if the string is a palindrome.
 * @param {string} str - The string to check.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
  const reversedString = str.replace(/[\s,]/g, "").split("").reverse().join("").toLowerCase();
  const removedSpaces = str.replace(/[\s,]/g, "").toLowerCase();
  
  return removedSpaces === reversedString;
}

module.exports = isPalindrome;
