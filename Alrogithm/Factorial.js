const factorial = (n) => {
  if (n === 1) {
    return n;
  }
  return n * factorial(n - 1);
};

const useLoop = (n) => {
  if (n === 0) return 0;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};

// super than
function factorial(n) {
  return !(n > 1) ? 1 : factorial(n - 1) * n;
}
