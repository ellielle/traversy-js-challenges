/**
 * Returns a string with the first letter of each word capitalized.
 * @param {string} str - The string to capitalize.
 * @returns {string} - The string with the first letter of each word capitalized.
 */
function titleCase(str) {
  const words = str.split(" ");
  const uppercaseWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.substring(1, word.length),
  );

  return uppercaseWords.join(" ");
}

module.exports = titleCase;
