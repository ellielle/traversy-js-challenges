/**
 * Returns the intersection of two arrays.
 * @param {number[]} arr1 - The first array.
 * @param {number[]} arr2 - The second array.
 * @returns {number[]} - The intersection of the two arrays.
 */
function arrayIntersection(arr1, arr2) {
  const intersection = [];

  arr1.map((i) => {
    if (arr2.includes(i)) {
      intersection.push(i);
    }
  })

  return intersection;
}

module.exports = arrayIntersection;
