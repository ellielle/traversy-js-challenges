/**
 * Returns true if all characters in a string are unique.
 * @param {string} str - The string to check.
 * @returns {boolean} - Whether all characters in the string are unique.
 */
function areAllCharactersUnique(str) {
  const unique = [...new Set(str.split(""))].join("");
  return str === unique;
}

module.exports = areAllCharactersUnique;
