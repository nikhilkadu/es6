/*jshint esversion: 6 */
/*jshint esversion: 8 */

// Template string
console.log("\n==== Template string");
const x = "Love at first sight";
console.log(`She said, "${x}.
           That is the name of the book."`);

// Map
console.log("\n==== Map");
const colors = ["red", "green", "blue"];
const items = colors.map(color => `<li> ${color} </li>`);
console.log(items);

// Filter
console.log("\n==== Filter");
const toys = ["cars", "puzzles", "top", "miniatures"];
const items1 = toys.filter(a => a.length > 4);
console.log(items1);

// find
console.log("\n==== Array.find");
const randNumbers = [5, 4, 20, 3, 44, 2];
console.log(randNumbers.find(x => x > 10));

const admin_users = [
  { login: "sam", admin: false },
  { login: "brook", admin: true }
];
console.log(admin_users.find(x => x.admin));

// Array.from
console.log("\n==== Array.from");
console.log(Array.from("Puzzle"));
console.log(Array.from([5, 6, 7], x => x * x));

// Object Initializer
console.log("\n==== Object Initializer");
const name = "Sambhaji",
  age = 27;
const obj = { name, age };
console.log(obj);

// Destructing
console.log("\n==== Destructuring");
const users = ["sam", "tyler", "brook"]; // Array
const [a, b, c] = users;
console.log("Users are => ", a, b, c);

const address = {
  // Object
  street: "7982 Brightlight Pl,",
  city: "Ellicott City,",
  country: "USA"
};
const { street: st, city, country } = address;
console.log(st, city, country);

// Spread operator
console.log("\n==== Spread Operator");
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = [...first, "a", ...second]; // Array
console.log(combined);

const person1 = { age: 24, name: "Sambhaji" };
const person2 = { gender: "Male" };
const person = { ...person1, ...person2, country: "India" }; // Object
console.log(person);

function calc(...values) {
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    sum += values[i];
  }
  console.log(`Addition of values is ${sum}`);
}
calc(1, 3, 4, 5);

// Define Function in an object
let ObjTrafficRegulator = {
  protocol: "tcp",
  input: 20,
  regulate() {
    // <-- no need to write function key word
    if (input > 10) {
      console.log("Don't pass the traffic");
    }
  }
};

// Object.assign - Cloning or merging the objects
console.log("\n==== Cloning merging");
const firstname = { name: "Tony" };
const last = { lastName: "Stark" };
const options1 = { foo: 1 };
const options2 = { foo: 2 };
const profile = Object.assign(firstname, last, options1, options2);
console.log(profile);

// for.. of loop - for looping over data like values in an array
// for.. in loop is for looping over object properties.
console.log("\n==== for.. of loop");
const myArray = ["red", "black", "orange"];
for (let value of myArray) {
  console.log(value);
}

const phoneBookMap = [
  ["Sambhaji", "442-162-2511"],
  ["Yesu", "452-889-3933"]
];
for (let [key, value] of phoneBookMap) {
  console.log(`${key}'s phone number is ${value}`);
}

const myIterableObject = {
  value: 5,

  [Symbol.iterator]: function() {
    return this;
  },

  next: function() {
    this.value--;
    if (this.value < 0) {
      return { done: true, value: 0 };
    }

    return { done: false, value: this.value };
  }
};
for (let iterater of myIterableObject) {
  console.log(iterater.toString());
}

// Maps
console.log("\n==== Maps");
const m = new Map();
m.set(1, "a");
m.set(2, "b");
m.set(3, "c");
m.set("4", "d");
console.log(m.size);
console.log(m.get(1));
console.log(m.has("4"));
for (let [key, value] of m) {
  console.log(`${key} has ${value}`);
}
for (let entry of m.entries()) {
  console.log(entry);
}
m.forEach((value, key) => {
  console.log(`Foreach ${key} has ${value}`);
});

const iter = m.keys();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

m.clear();
console.log(m.size);

// Weak Maps
console.log("\n==== WeakMaps");
const numR = new WeakMap();
const user1 = {};
const user2 = {};
numR.set(user1, 5);
numR.set(user2, 42);
console.log(numR.get(user1)); // gives 5
console.log(numR.has(user1));
numR.delete(user1);
console.log(numR.get(user1));

// Sets
console.log("\n==== Sets");
const tags = new Set();
tags.add("red");
tags
  .add("green")
  .add("blue")
  .add("orange");
tags.add("red");
console.log(tags.size);

const colours = [...tags];
console.log(colours);

const arr = [5, 4, 3, 2, 2, 24, 5, 24];
const unique = [...new Set(arr)];
console.log(unique);

const iter1 = tags.keys();
console.log(iter1.next());
console.log(iter1.next());
console.log(iter1.next());
console.log(iter1.next());
console.log(iter1.next());

for (let entry of tags.entries()) {
  console.log(entry);
}

// Promises
// Promises are a pattern for delivering results asynchronously.
console.log("\n==== Promise");
function asyncFunc() {
  console.log("Calling asyncFunc");
  return new Promise((resolve, reject) => {
    console.log("New Promise Created");
    resolve();
  });
}

console.log("Start Example");
asyncFunc()
  .then(() => {
    console.log("Promise Inside .then1()");
  })
  .then(() => {
    console.log("Promise Inside .then2()");
  });
console.log("End Example");

// Promises.all
console.log("\n==== Promise All");

var assert = require("assert");
const asyncFunc1 = () => Promise.resolve("One");
const asyncFunc2 = () => Promise.resolve("Two");
Promise.all([asyncFunc1(), asyncFunc2()])
  .then(arr => {
    console.log(".all " + arr);
  })
  .catch(err => {
    assert.fail(err);
  });

function twoTimesAsync(x) {
  return new Promise(resolve => resolve(x * 2));
}
const arr1 = [1, 2, 3];
const promiseArr = arr1.map(twoTimesAsync);
Promise.all(promiseArr).then(result => {
  console.log(".all Result is " + result);
});

// Async
console.log("\n==== Async");
async function asyncFunc54() {
  console.log("async function Starts");
  return "abc";
}
asyncFunc54().then(x => {
  console.log("async Function resolved!");
});
console.log("async function Ends");

const promise1 = Promise.resolve("123");
promise1.then(x => console.log(`Immediately invoked async = ${x} `));

// Await
console.log("\n==== Await");
function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}
async function paused(id) {
  console.log(`Start ${id}`);
  await delay(1000);
  console.log(`Stop ${id}`);
  return id;
}
paused(2);

async function sequentialAwait() {
  const a1 = await paused(4);
  const a2 = await paused(5);
}
sequentialAwait();

async function runAllAsyncConcurrently() {
  const arr = await Promise.all([paused(10), paused(11)]);
  console.log(`runAllAsyncConcurrently Finished ${arr}`);
}
runAllAsyncConcurrently();

// Classes
console.log("\n==== Classes");

class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log(`Classes: Person ${this.name} walks`);
  }
}
const personI = new Person("Sambhaji");
personI.walk();

console.log("\n==== Async code will execute here");
