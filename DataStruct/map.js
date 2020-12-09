const map = new Map([
  ["firstName", "Luke"],
  ["lastName", "Skywalker"],
  ["occupation", "Jedi Knight"],
]);

let arr = [1, 2];

map.set([1, 2], [3, 4]);
map.set(arr, [5, 5]);
console.log(map.get(arr)); // Nếu sử dụng arr hoặc obj làm key thì Map chi lấy địa chỉ của obj or array chứ không lấy value,
console.log(map.get("firstName"));
console.log(map.set("a", 2));

console.log(map.has("a"));
