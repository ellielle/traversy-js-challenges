/**
 * Returns a string representing a phone number.
 * @param {number[]} numbers - The numbers to use in the phone number.
 * @returns {string} - The formatted phone number.
 */
function formatPhoneNumber(numbers) {
  const areacode = numbers.join("").slice(0, 3);
  const regionCode = numbers.join("").slice(3, 6);
  const line = numbers.join("").slice(6, 10);

  return `(${areacode}) ${regionCode}-${line}`
}

module.exports = formatPhoneNumber;
