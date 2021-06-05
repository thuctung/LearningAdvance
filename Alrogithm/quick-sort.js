console.log("Quick sort");

// Cách 1: Đặt pivot = giá trị đầu, từ bé đến lớn

const data = [4, 1, 2, 6, 7, 8, 3, 0, 7, 10, 9];
//           [4, 1, 2, 3, 7, 8, 6, 6, 7, 10, 9] i = 3, j = 6
//           [3, 1, 2, 4, 7, 8, 6, 6, 7, 10, 9] i = 3, j = 6
const partition = (arr, left, right) => {
  let pivot = arr[left];
  let i = left + 1;
  let j = right - 1;

  while (true) {
    while (i <= j && arr[i] >= pivot) i++;
    while (j >= i && arr[j] < pivot) j--;
    if (i < j) {
      let t = arr[i];
      arr[i] = arr[j];
      arr[j] = t;
      i++;
      j--;
    } else {
      break;
    }
  }
  let t = arr[j];
  arr[j] = arr[left];
  arr[left] = t;
  return j;
};

const quickSort = (arr, left, right) => {
  if (left < right) {
    const index = partition(arr, left, right);
    quickSort(arr, left, index);
    quickSort(arr, index + 1, right);
  }
};

console.time("Time: ");
quickSort(data, 0, data.length);
console.log(data);
console.timeEnd("Time: ");
