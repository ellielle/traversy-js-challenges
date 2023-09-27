/**
 * Returns an array of numbers from startNum to endNum, inclusive.
 * @param {number} startNum - The starting number.
 * @param {number} endNum - The ending number.
 * @returns {number[]} - An array of numbers.
 */
function numberRange(startNum, endNum) {
  if (startNum === endNum) {
    return [startNum];
  }
  const range = numberRange(startNum, endNum - 1);
  range.push(endNum);
  return range;
}

module.exports = numberRange;
