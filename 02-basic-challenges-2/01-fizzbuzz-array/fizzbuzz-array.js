/**
 * Returns an array of numbers from 1 to the number passed in.
 * @param {number} num - The number to loop up to.
 * @returns {any[]} - The array of numbers.
 */
function fizzBuzzArray(num) {
  const fbArray = [];

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      fbArray.push("FizzBuzz");
    } else if (i % 3 === 0) {
      fbArray.push("Fizz");
    } else if (i % 5 === 0) {
      fbArray.push("Buzz");
    } else {
      fbArray.push(i);
    }
  }

  return fbArray;
}

module.exports = fizzBuzzArray;
