/*37. Create Objects in Different Ways 
• Write code to create an object in different ways using object 
literals, constructors, and Object.create().*/

// 1. Using Object Literal
const obj1 = { name: "Mais", age: 22 };

// 2. Using Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const obj2 = new Person("Mais", 22);

// 3. Using Object.create()
const proto = { greet() { console.log("Hello!"); } };
const obj3 = Object.create(proto);
obj3.name = "Mais";
obj3.age = 22;

console.log(obj1, obj2, obj3);


//---------------------------------------------------------------------------------------------------------



/*41. Remove a Property from an Object 
• Write a JavaScript code to remove a specific property from an 
object.*/

const user = { name: "Mais", age: 22, country: "Palestine" };

delete user.age;

console.log(user);



//---------------------------------------------------------------------------------------------------------



/*43. Check If a Key Exists in an Object
• Create a function that checks if a key exists in an object.*/

function keyExists(obj, key) {
  return key in obj;
}

const car = { brand: "Toyota", year: 2020 };

console.log(keyExists(car, "brand"));  // true
console.log(keyExists(car, "color"));  // false


//---------------------------------------------------------------------------------------------------------



/*44. Clone a JavaScript Object 
• Write a function that clones an object using various methods. */

function cloneObject(obj) {
  // Method 1: Using Object.assign()
  const clone1 = Object.assign({}, obj);

  // Method 2: Using Spread Operator
  const clone2 = { ...obj };

  // Method 3: Deep clone using JSON
  const clone3 = JSON.parse(JSON.stringify(obj));

  return { clone1, clone2, clone3 };
}

const original = { name: "Ali", details: { age: 25 } };
console.log(cloneObject(original));


//---------------------------------------------------------------------------------------------------------


/*45. Loop Through an Object 
• Write a JavaScript code to loop through the properties of an object 
and print them.*/

const student = { name: "Sara", age: 22, grade: "A" };

// Using for...in
for (let key in student) {
  console.log(key + ":", student[key]);
}

// Using Object.keys()
Object.keys(student).forEach(key => {
  console.log(key, ":", student[key]);
});


//---------------------------------------------------------------------------------------------------------


/*46. Merge Properties of Two Objects 
• Write a function that merges properties of two objects into one 
object. */

function mergeObjects(obj1, obj2) {
}

const a = { x: 1, y: 2 };
const b = { y: 3, z: 4 };

console.log(mergeObjects(a, b)); 


//---------------------------------------------------------------------------------------------------------


/*47. Count the Number of Keys/Properties in an Object 
• Create a function that counts the number of keys in an object. */

function countKeys(obj) {
  return Object.keys(obj).length;
}


console.log(countKeys(user)); 


//---------------------------------------------------------------------------------------------------------


/*48. Add Key/Value Pair to an Object 
• Write a function to add a key-value pair to an object. */

function addKeyValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

let book = { title: "JavaScript Basics" };
book = addKeyValue(book, "author", "John Doe");

console.log(book);
