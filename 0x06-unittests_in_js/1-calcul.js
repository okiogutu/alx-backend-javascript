function calculateNumber(type, a, b = 0) {
  const num_a = Number(a);
  const num_b = Number(b);
  if (Number.isNaN(num_a) || Number.isNaN(num_b)) {
    throw TypeError;
  }
  switch (type) {
    case 'SUM':
      return Math.round(num_a) + Math.round(num_b);
    case 'SUBTRACT':
      return Math.round(num_a) - Math.round(num_b);
    case 'DIVIDE':
      if (Math.round(num_b) === 0) {
        return 'Error';
      } else {
        return Math.round(num_a) / Math.round(num_b);
      }
    default:
      throw TypeError;
  }
}

module.exports = calculateNumber;
