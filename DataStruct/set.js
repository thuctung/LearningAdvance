const newSet = new Set();

newSet.add("1");
newSet.add(1);
newSet.add("2");
newSet.add("3");
newSet.add("3");

for (let i of newSet) {
  console.log(i);
}

newSet.delete("3");
console.log(newSet.has("2"));
