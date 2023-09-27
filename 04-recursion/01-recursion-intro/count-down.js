function countDown(num) {
  if (num <= 0) {
    return;
  }
  num--;
  countDown(num);
}

module.exports = countDown;
