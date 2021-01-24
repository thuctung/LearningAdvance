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

const thuctung = {
  name: "Tung",
  age: 12,
  1: 2,
};
