/**
 * Returns the first non-repeating character in a string.
 * @param {string} str - The string to search.
 * @returns {string | null} - The first non-repeating character in the string or null if there are no non-repeating characters.
 */
function findFirstNonRepeatingCharacter(str) {
  const strArr = str.split("");
  const found = strArr.map((value) => {
    if (strArr.indexOf(value) === strArr.lastIndexOf(value)) {
      return value;
    }
  }).filter((value) => value !== undefined)[0];

  return found ?? null;
}

module.exports = findFirstNonRepeatingCharacter;
