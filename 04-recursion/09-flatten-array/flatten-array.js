/**
 * Returns a flattened array.
 * @param {number[]} arr - The array containing nested arrays.
 * @returns {number[]} - The flattened array.
 */
function flattenArray(arr) {
  let flattened = [];
  for (const element of arr) {
    if (!Array.isArray(element)) {
      flattened.push(element);
    } else {      
      flattened = flattened.concat(flattenArray(element))
    }
  }
  return flattened
}

module.exports = flattenArray;
