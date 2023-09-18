/**
 * Returns the highest scoring word from a string.
 * @param {string} str - The input string.
 * @returns {string} - The highest scoring word.
 */
function highestScoringWord(str) {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  const valueMap = new Map(); 
  alpha.split("").forEach((letter, index) => {
    valueMap.set(letter, index + 1);
  })
  const words = str.split(" ");
  let highestScore = {
    word: "",
    score: 0,
  };

  words.forEach((word) => {
    let wordScore = 0;
    for (let i = 0; i < word.length; i++) {
      wordScore += valueMap.get(word[i]);
    }

    if (wordScore > highestScore.score) {
      highestScore.score = wordScore;
      highestScore.word = word;
    }
  });

  return highestScore.word;
}

module.exports = highestScoringWord;
