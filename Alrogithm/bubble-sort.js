const arr = [6, 5, 4, 3, 2, 1, 0, -1, -2, 3, 4, 5];
let n = arr.length;
let co = 0;
// while (n > 1) {
//   co++;
//   console.log(n);
//   for (let i = 0; i < n - 1; i++) {
//     co++;
//     if (arr[i] > arr[i + 1]) {
//       let tamp = arr[i];
//       arr[i] = arr[i + 1];
//       arr[i + 1] = tamp;
//     }
//   }
//   n--;
// }
for (let i = n - 1; i >= 1; i--) {
  co++;
  for (let j = 0; j < i; j++) {
    co++;
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(co);
console.log(arr);
