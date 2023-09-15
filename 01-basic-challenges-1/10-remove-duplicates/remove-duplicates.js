/** 
@param {any[]} arr - The array to remove duplicates from.
@returns {any[]} - The new array with duplicates removed
*/
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

module.exports = removeDuplicates;
