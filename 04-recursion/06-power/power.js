/**
 * Returns the result of raising the base to the power of the exponent.
 * @param {number} base - The base number.
 * @param {number} exponent - The exponent.
 * @returns {number} - The result of the calculation.
 */
function power(base,exponent) {
  if (exponent === 0) {
    return 1;
  }
  let count = base;

  return count * power(count, exponent - 1)
}

module.exports = power;
