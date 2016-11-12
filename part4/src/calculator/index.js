const sum = function (a, b) {
  a = a ? a : 0;
  b = b ? b : 0;
  return a + b;
};

module.exports = { sum: sum };
