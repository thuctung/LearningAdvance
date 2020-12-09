class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    console.log(this.name);
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}

class Cat extends Animal {
  constructor(name, age, legs) {
    super(name, age);
    this.leg = legs;
  }

  run() {
    console.log(`${this.name} is running...`);
  }
}

const tom = new Cat("Tom", 12, 4);

// tom.getName();
// tom.run();
let instance;
class SingleTonClass {
  constructor(counter = 0) {
    this.counter = counter;
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  getCounter() {
    console.log(this.counter);
  }
  setCounter(value) {
    this.counter = value;
  }
}

const x = new SingleTonClass();
x.setCounter(3);
x.getCounter();

const b = new SingleTonClass();
b.getCounter();
