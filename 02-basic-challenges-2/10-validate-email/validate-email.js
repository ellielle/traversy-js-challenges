/**
 * Returns whether the string is a valid email address.
 * @param {string} email - The email address to validate.
 * @returns {boolean} - Whether the email address is valid.
 */
function validateEmail(email) {
  const isValid = email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  return !!isValid;
}

module.exports = validateEmail;
