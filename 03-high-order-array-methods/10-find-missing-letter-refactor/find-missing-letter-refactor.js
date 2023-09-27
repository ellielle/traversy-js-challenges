/**
 * Returns the missing letter in an array of consecutive letters.
 * @param {string[]} arr - An array of consecutive letters.
 * @returns {string} - The missing letter.
 */
function findMissingLetter(arr) {
  const alpha = "abcdefghijklmopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const startIndex = alpha.indexOf(arr[0]);
  const yank = alpha.slice(startIndex, startIndex + arr.length).split("");
  const missing = yank.filter((letter) => !arr.includes(letter)).join("");

  return missing;
}

module.exports = findMissingLetter;
