/**
 * Returns the number of occurrences of a character in a string.
 * @param {string} str - The string to search.
 * @param {string} char - The character to search for.
 * @returns {number} - The number of occurrences of the character in the string.
 */
function countOccurrences(str, char) {
  const occurrences = {};
  str.split("").map((value) => {
    if (!occurrences[value]) {
      occurrences[value] = 1
    } else {
      occurrences[value] += 1
    }
  });
  return occurrences[char];
}

module.exports = countOccurrences;
