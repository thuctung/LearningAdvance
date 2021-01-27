/** Mean:
 *  Tạo một array với size tùy ý
 * Bắm key theo công thức chuyên key thành kiểu Int
 * Cover key thành index của array theo công thức, key % array.lengh
 * lưu  mảng [key, value] vào index mới tạo được của array
 * Nếu index trùng nhau thì add [key, value] vào index  thông qua push
 * Get: có index => tìm key === các item trong arr[index]
 **/

function hashKeyStringToInt(key, table) {
  let newIndex = 0;
  for (let i = 0; i < key.length; i++) {
    newIndex += key.charCodeAt(i);
  }

  return (newIndex %= table.length);
}

function HashTable() {
  this.table = new Array(100);

  this.setItem = (key, value) => {
    let index = hashKeyStringToInt(key, this.table);
    if (this.table[index]) {
      this.table[index].push([key, value]);
    } else {
      this.table[index] = [[key, value]];
    }
  };

  this.getItem = (key) => {
    let index = hashKeyStringToInt(key, this.table);
    return this.table[index].find((item) => item[0] === key)[1];
  };
}

const myTable = new HashTable();

console.log(myTable.table);
myTable.setItem("tung", { name: "tung", age: 12 });
myTable.setItem("gnut", { name: "tung nguyen", age: 13 });

console.log(myTable.getItem("tung"));
console.log(myTable.getItem("gnut"));
