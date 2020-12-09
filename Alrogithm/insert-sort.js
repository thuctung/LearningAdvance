const arr = [4, 3, 4, 8, 1, 5, 10, 2];

for (let i = 1; i < arr.length; i++) {
  const key = arr[i];
  let j = i - 1;
  while (j >= 0 && arr[j] < key) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = key;
}

//Best case: O(n): mang da sap xep
//Bad case: O(n^2)

// console.log(arr);

// advance hight score
let obj = [
  { name: "Tung", score: 10 },
  { name: "A", score: 10 },
  { name: "B", score: 9 },
  { name: "X", score: 9 },
  { name: "Y", score: 8 },
  { name: "ANH", score: 8 },
  { name: "HY", score: 7 },
  { name: "KA", score: 6 },
  { name: "T", score: 6 },
  { name: "XIM", score: 6 },
  { name: "M", score: 5 },
  { name: "DO", score: 4 },
  { name: "HIE", score: 3 },
  { name: "TRANG", score: 3 },
];

function insertSort(arr) {
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    const currentStudent = arr[i];

    let index = i - 1;
    count++;
    while (index >= 0 && arr[index].score < currentStudent.score) {
      arr[index + 1] = arr[index];
      index--;
      count++;
    }
    arr[index + 1] = currentStudent;
  }
  sortByName(arr);
  return count;
}

function sortByName(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].score === arr[i + 1].score) {
      if (arr[i].name > arr[i + 1].name) {
        let tamp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tamp;
      }
    }
  }
}

obj = [{ name: "Kha", score: 8 }, ...obj];

console.log(insertSort(obj));
console.log(obj);
