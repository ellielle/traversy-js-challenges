/**
 * Returns all possible permutations of the characters in a string.
 * @param {string} str - The string to permute.
 * @returns {string[]} - An array of all possible permutations of the characters in the string.
 */
function permutations(str) {
  const resultArr = [];
  if (str.length === 0) {
    resultArr.push("");
    return resultArr;
  }
  for (let i = 0; i < str.length; i++) {
    const firstLetter = str.at(i);
    const newStr = str.slice(0, i) + str.slice(i + 1);
    const letterPermutations = permutations(newStr);

    for (let j = 0; j < letterPermutations.length; j++) {
      resultArr.push(`${firstLetter}${letterPermutations[j]}`);
    }
  }

  return resultArr;
}

module.exports = permutations;
