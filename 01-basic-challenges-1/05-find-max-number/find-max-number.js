/**
 * Returns the largest number in an array.
 * @param {number[]} arr - The array of numbers.
 * @returns {number} - The largest number in the array.
 */
function findMaxNumber(num) {
  num = num.sort((a,b) => a - b);
  return num[num.length - 1]
}

module.exports = findMaxNumber;
