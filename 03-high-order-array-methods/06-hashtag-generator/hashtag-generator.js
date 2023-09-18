// - Return `false` if the input string is empty or contains only whitespace characters.
// - Return `false` if the generated hashtag string is longer than 140 characters.
// - Every word in the hashtag should start with a capital letter.
// - The input string may contain leading/trailing whitespace characters.

/**
 * Generates a hashtag from the input string.
 * @param {string} str - The input string.
 * @returns {string|boolean} - The generated hashtag string or false.
 */
function generateHashtag(str) {
  if (str.trim() === "") {
    return false;
  }

  const words = str.trim().split(/\s+/);

  const capialized = words.map((word) => word.at(0).toUpperCase() + word.slice(1));
  const hashtag = capialized.join("")

  if (hashtag.length > 140) {
    return false;
  } else {
    return `#${hashtag}`;
  }
}

module.exports = generateHashtag;
