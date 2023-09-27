/**
 * Validates a password based on certain criteria.
 * @param {string} password - The password to be validated.
 * @returns {boolean} - True if the password is valid, false otherwise.
 */
function validatePassword(password) {
  let isValid = true;
  if (password.length < 8) {
    isValid = false;
  }
  if (!password.match(/[A-Z]/g) || !password.match(/[a-z]/g) || !password.match(/[\d+]/g)) {
    isValid = false;
  }
  return isValid;
}

module.exports = validatePassword;
