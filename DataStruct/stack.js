// const word = "Stack";
// let reWord = "";
// const stack = [];

// for (let i = 0; i < word.length; i++) {
//   stack.push(word[i]);
// }

// for (let i = 0; i < word.length; i++) {
//   reWord += stack.pop(i);
// }

const Stack = function () {
  this.count = 0;
  this.stack = {};

  this.push = function (value) {
    this.stack[this.count] = value;
    this.count++;
  };

  this.pop = function () {
    if (this.count === 0) return undefined;
    this.count--;
    let result = this.stack[this.count];
    delete this.stack[this.count];
    return result;
  };

  this.peek = function () {
    return this.stack[this.count - 1];
  };
};

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
console.log(stack.peek());
