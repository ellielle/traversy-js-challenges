function rollDice() {
  const dice1 = Math.floor(Math.random() * 6 + 1);
  const dice2 = Math.floor(Math.random() * 6 + 1);
  return { dice1, dice2 };
}

/**
 * Simulates the dice game.
 * @param {number} numSimulations - The number of times to simulate the dice game.
 * @returns {Array} - An array of simulation result objects.
 */
function diceGameSimulation(numSimulations) {
  const conditions = {
    win: [7, 11],
    lose: [2, 3, 12],
  };
  let resultArr = [];

  for (let i = 1; i <= numSimulations; i++) {
    const { dice1, dice2 } = rollDice();
    const sum = dice1 + dice2;

    if (conditions.win.includes(sum)) {
      resultArr.push({ dice1, dice2, sum, result: "win" });
    } else if (conditions.lose.includes(sum)) {
      resultArr.push({ dice1, dice2, sum, result: "lose" });
    } else {
      resultArr.push({ dice1, dice2, sum, result: "roll again" });
    }
  }

  return resultArr;
}

module.exports = diceGameSimulation;
