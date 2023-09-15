/**
 * Returns the number of vowels in a string.
 * @param {string} str - The string to search.
 * @returns {number} - The number of vowels in the string.
 */
function countVowels(str) {
  let count = 0;
  str
    .toLowerCase()
    .split("")
    .map((letter) => {
      if (letter.match(/[aeiou]/)) {
        count += 1;
      }
    });
    
  return count;
}

module.exports = countVowels;
