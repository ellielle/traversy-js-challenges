/**
 * Returns the missing letter in an array of consecutive letters.
 * @param {string[]} arr - An array of consecutive letters.
 * @returns {string} - The missing letter.
 */
function findMissingLetter(arr) {
  const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const start = alpha.indexOf(arr[0]);
  const end = alpha.indexOf(arr[arr.length - 1]);

  for (const letter of alpha.substring(start, end)) {
    if (!arr.includes(letter)) {
      return letter;
    }
  }

  return "";
}

module.exports = findMissingLetter;
