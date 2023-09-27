/**
 * Checks if a given string is a valid IPv4 address.
 * @param {string} input - The input string to check.
 * @returns {boolean} - True if the input is a valid IPv4 address, false otherwise.
 */
const isValidIPv4 = (input) => {
  const ipSections = input.split(".");

  if (ipSections.length !== 4) {
    return false;
  }

  const valid = ipSections.every((section) => {
    if (Number(section) >= 0 && Number(section) <= 255 && section === Number(section).toString()) {
      return true;
    }
    return false;
  });

  return valid;
};

module.exports = isValidIPv4;
