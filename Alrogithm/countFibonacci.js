/*
  Tìm giá trị trong dãy fibonacci tại vị trí n
*/

// normal O(n = 2^n) => over call stack
function normalFib(n) {
  if (n === 1 || n === 2) return n;
  return normalFib(n - 1) + normalFib(n - 2);
}

// O(n) = n; => over call stack
function cacheFib(n, cache = [0, 1, 2]) {
  if (cache[n]) return cache[n];
  cache[n] = cacheFib(n - 1, cache) + cacheFib(n - 2, cache);
  return cache[n];
}
// O(n) = n
function fibWidthLoop(n, cache = [0, 1, 2]) {
  if (cache[n]) return cache[n];
  for (let i = 3; i <= n; i++) {
    cache[i] = cache[i - 2] + cache[i - 1];
  }
  return cache[n];
}

function flashFib(n) {
  if (n <= 2) return n;
  let first = 1,
    second = 2;
  for (let i = 3; i <= n; i++) {
    second = second + first;
    first = second - first;
  }
  return second;
}

// console.time("run");
// console.log(flashFib(100));
// console.timeEnd("run");

// In cac so fibonacci khong qua 10 so

function printFibonacci(limited) {
  let arr = [];
  for (let i = 0; i < limited; i++) {
    if (i + 1 <= 2) {
      arr[i] = i + 1;
    } else {
      arr[i] = arr[i - 2] + arr[i - 1];
    }
  }
  console.log(arr);
}

printFibonacci(100);
