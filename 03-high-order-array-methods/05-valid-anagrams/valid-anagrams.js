/**
 * Determines whether two strings are valid anagrams.
 * @param {string} str1 - The first string.
 * @param {string} str2 - The second string.
 * @returns {boolean} - True if the strings are valid anagrams, false otherwise.
 */
function validAnagrams(str1, str2) {
  const arr1 = str1.split("");
  const arr2 = str2.split("");
  arr1.sort();
  arr2.sort();

  return arr1.join("") === arr2.join("");
}

module.exports = validAnagrams;
