/**
 * Returns the missing number in an array of unique numbers from 1 to n (inclusive).
 * @param {number[]} arr - The array of numbers.
 * @returns {number} - The missing number.
 */
function findMissingNumber(arr) {
  const constraintNum = arr.sort((a, b) => a - b)[arr.length - 1];
  const fullNums = Array(constraintNum)
    .fill(1)
    .map((_, i) => i + 1);

  const missingNo = fullNums.filter((x) => !arr.includes(x))[0];

  return missingNo;
}

module.exports = findMissingNumber;
