function sum (a, b) {

  a = typeof a !== 'number' ? 0 : a;
  b = typeof b !== 'number' ? 0 : b;

  const result = a + b;

  return result;
}

module.exports = {
  sum: sum
};
