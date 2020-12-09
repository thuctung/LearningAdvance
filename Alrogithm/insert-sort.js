const arr = [4, 3, 4, 8, 1, 5, 10, 2];

for (let i = 1; i < arr.length; i++) {
  const key = arr[i];
  let j = i - 1;
  while (j >= 0 && arr[j] < key) {
    arr[j + 1] = arr[j];
  }
}
