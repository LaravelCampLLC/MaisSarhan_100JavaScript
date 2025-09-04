/*83. Include a JS File in Another JS File 
• Write code to include one JavaScript file in another using import or 
require. */

// In another file (array.js)
import { greet } from "../Array/array.js";
greet();

//---------------------------------------------------------------------------------------------------------


/*84. Get File Extension 
• Write a function that returns the file extension of a given file name. */

function getFileExtension(filename) {
  return filename.split('.').pop();
}

console.log(getFileExtension("script.js"));   // js
console.log(getFileExtension("style.css"));   // css

//---------------------------------------------------------------------------------------------------------


/*85. Check if a Variable is Undefined or Null 
• Write a program that checks if a variable is either undefined or null. */

function checkVar(value) {
  if (value === null || value === undefined) {
    return "Value is null or undefined";
  }
  return "Value exists";
}

let a;
console.log(checkVar(a));   // undefined
console.log(checkVar(null));// null

//---------------------------------------------------------------------------------------------------------


/*86. Set a Default Parameter Value for a Function 
• Write a function that has a default parameter value if no argument 
is provided.*/

function greetH(name = "Guest") {
  console.log(`Hello, ${name}`);
}

greetH();       // Hello, Guest
greetH("Mais");  // Hello, Mais


//---------------------------------------------------------------------------------------------------------

/*87. Illustrate Different Set Operations 
• Write a JavaScript code to illustrate different set operations like 
union, intersection, and difference using Set. */

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

// Union
const union = new Set([...setA, ...setB]);

// Intersection
const intersection = new Set([...setA].filter(x => setB.has(x)));

// Difference
const difference = new Set([...setA].filter(x => !setB.has(x)));

console.log("Union:", union);
console.log("Intersection:", intersection);
console.log("Difference:", difference);

//---------------------------------------------------------------------------------------------------------


/*89. Get the Current URL 
• Write a JavaScript code to get and display the current URL. */

console.log("Current URL:", window.location.href);

//---------------------------------------------------------------------------------------------------------


/*90. Validate an Email Address 
• Write a function that validates if a given email address is valid or 
not. */

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

console.log(validateEmail("test@example.com"));
console.log(validateEmail("invalid@com"));    

//---------------------------------------------------------------------------------------------------------


/*91. Check if a Variable is a Function 
• Write a JavaScript code that checks if a variable is of function 
type. */

function isFunction(variable) {
  return typeof variable === "function";
}

console.log(isFunction(function(){}));
console.log(isFunction(123));        

//---------------------------------------------------------------------------------------------------------


/*92. Work With Constants 
• Write a JavaScript code that uses constants to store values that 
should not change. */

const PI = 3.14159;
const APP_NAME = "MyApp";

console.log("PI:", PI);
console.log("App Name:", APP_NAME);

//---------------------------------------------------------------------------------------------------------


/*93. Pass Parameter to a setTimeout() Function 
• Write a function that passes parameters to a function inside 
setTimeout(). */

function greet(name) {
  console.log(`Hello, ${name}`);
}

setTimeout(greet, 2000, "Mais"); // Pass parameter

//---------------------------------------------------------------------------------------------------------


/*95. Perform Function Overloading 
• Write a function that handles different numbers of arguments and 
returns the result accordingly (overloading). */

function add(...args) {
  if (args.length === 1) return args[0] + 10;
  if (args.length === 2) return args[0] + args[1];
  return "Invalid arguments";
}

console.log(add(5));       // 15
console.log(add(5, 10));   // 15
console.log(add());        // Invalid arguments

//---------------------------------------------------------------------------------------------------------


/*96. Implement a Stack 
• Write a JavaScript program to implement a stack with push, pop, 
and peek operations. */

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.peek()); // 2
console.log(stack.pop());  // 2

//---------------------------------------------------------------------------------------------------------


/*97. Implement a Queue 
• Write a JavaScript program to implement a queue with enqueue, 
dequeue, and peek operations. */

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.peek());   // 1
console.log(queue.dequeue());// 1

//---------------------------------------------------------------------------------------------------------


/*99. Pass a Function as a Parameter 
• Write a function that accepts another function as a parameter and 
calls it within the function. */

function executeFunction(fn) {
  fn();
}

function sayHello() {
  console.log("Hello!");
}

executeFunction(sayHello);

//---------------------------------------------------------------------------------------------------------


/*100. Get the Dimensions of an Image 
• Write a JavaScript code that gets the dimensions (width and 
height) of an image element on a webpage. */

const img = document.querySelector("img");
img.onload = () => {
  console.log("Width:", img.width, "Height:", img.height);
};
