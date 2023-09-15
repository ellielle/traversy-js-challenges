/**
 * Returns the sum of the squares of the even numbers in the array.
 * @param {number[]} numbers - The array of numbers.
 * @returns {number} - The sum of the squares of even numbers.
 */
function sumOfEvenSquares(numbers) {
  const evenSquares = numbers.filter((num) => num % 2 === 0).map((num) => num ** 2);
  return evenSquares.reduce((prev, curr) => prev + curr, 0);
}

module.exports = sumOfEvenSquares;
