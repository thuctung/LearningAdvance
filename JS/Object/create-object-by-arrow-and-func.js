// function Person(name, age) {
//   this.name = name;
//   this.age = age;

//   this.getName = () => {
//     console.log(this.name);
//   };
// }

// const ps1 = new Person("Anh", 12);

// ps1.getName();

// const ps2 = new Person("Tung", 3);

// ps2.name = "Tung";
// console.log(ps2);
// console.log(ps1);
// ps1.getName();

// ps2.getName.call(ps2, 1);

const obj = {
  name: "Tung",
  getName: function () {
    console.log(this.name);
  },
};

obj.getName();
let x = {};
Object.assign(x, obj);

x.name = "Anh";

x.getName();
