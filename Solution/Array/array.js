/*67. Remove Specific Item from an Array 
• Write a function that removes a specific item from an array. */

function removeItem (arr , item){
    return arr.filter(items =>items !== item);
}
console.log(removeItem([1,2,3,4] , 2))


//---------------------------------------------------------------------------------------------------------

/*68. Check if an Array Contains a Specified Value 
• Write a JavaScript code that checks if a specified value exists in an 
array. */

function contVal (arr , value){
    return arr.includes(value);
}

console.log(contVal(['mais', 'anwar', 'sarhan']))

//---------------------------------------------------------------------------------------------------------


/*69. Insert Item in an Array 
• Write a program that inserts an item at a specific position in an 
array. */

function insertItem(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
}

let arri = ['mais', 'anwar', 'sarhan'];
arri=insertItem(arri ,'ahmad' ,2)
console.log(arri);

//---------------------------------------------------------------------------------------------------------

/*70. Append an Object to an Array 
• Write a function that appends an object to the end of an array. */


function appendObject(arr, obj) {
    arr.push(obj);
    return arr;
}

let users = [{id: 1}, {id: 2}];
appendObject(users, {id: 3});
console.log(users); 


//---------------------------------------------------------------------------------------------------------

/*71. Check If an Object is an Array 
• Create a function to check if a given object is an array. */

function isArray(obj) {
    return Array.isArray(obj);
}

console.log(isArray([1,2,3])); 
console.log(isArray({a:1}));   


//---------------------------------------------------------------------------------------------------------


/*72. Empty an Array 
• Write a function that empties an array. */

function emptyArray(arr) {
    arr.length = 0;
    return arr;
}

let nums = [1,2,3];
emptyArray(nums);
console.log(nums); 


//---------------------------------------------------------------------------------------------------------


/*73. Add Element to Start of an Array 
• Write a JavaScript code that adds an element to the start of an 
array. */

function addToStart(arr, element) {
    arr.unshift(element);
    return arr;
}

let letters = ['b','c'];
addToStart(letters,'a');
console.log(letters);


//---------------------------------------------------------------------------------------------------------


/*74. Remove Duplicates from an Array 
• Write a function that removes duplicate elements from an array.*/

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

let numsDup = [1,2,2,3,3,4];
console.log(removeDuplicates(numsDup)); 


//---------------------------------------------------------------------------------------------------------


/*75. Merge Two Arrays and Remove Duplicate Items 
• Write a JavaScript code that merges two arrays and removes 
duplicate items. */

function mergeUnique(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

let a = [1,2,3];
let b = [3,4,5];
console.log(mergeUnique(a,b)); 


//---------------------------------------------------------------------------------------------------------


/*76. Sort Array of Objects by Property Values 
• Write a program that sorts an array of objects by a specific 
property value. */

function sortByProperty(arr, prop) {
    return arr.sort((a,b) => a[prop] - b[prop]);
}

users = [{name:'Osama', age:24},{name:'Mais', age:22}];
console.log(sortByProperty(users,'name'));
console.log(sortByProperty(users,'age'));


//---------------------------------------------------------------------------------------------------------


/*77. Create Two Dimensional Array 
• Write a JavaScript code that creates a two-dimensional array (a 
matrix). */

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(matrix[1][2]); 


//---------------------------------------------------------------------------------------------------------


/*78. Extract Given Property Values from Objects as Array
• Write a function that extracts a given property value from all 
objects in an array and returns them in a new array. */

function pluck(arr, prop) {
    return arr.map(obj => obj[prop]);
}

let usersList = [{id:1, name:'Osama'}, {id:2, name:'Mais'}];
console.log(pluck(usersList,'name'));


//---------------------------------------------------------------------------------------------------------


/*79. Compare Elements of Two Arrays 
• Write a function that compares two arrays and returns whether they 
are equal or not. */

function arraysEqual(a, b) {
    if(a.length !== b.length) return false;
    return a.every((val, index) => val === b[index]);
}

console.log(arraysEqual([1,2,3],[1,2,3])); // true
console.log(arraysEqual([1,2,3],[3,2,1])); // false

//---------------------------------------------------------------------------------------------------------


/*80. Get Random Item from an Array 
• Write a program to get a random item from an array. */

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

console.log(getRandomItem(['mais','anwar','sarhan']));


//---------------------------------------------------------------------------------------------------------


/*81. Perform Intersection Between Two Arrays 
• Write a JavaScript code to perform the intersection between two 
arrays and return the common elements. */

function intersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}

console.log(intersection([1,2,3,4],[3,4,5]));


//---------------------------------------------------------------------------------------------------------


/*82. Split Array into Smaller Chunks 
• Write a function that splits an array into smaller chunks of a 
specified size.*/

function chunkArray(arr, size) {
    let result = [];
    for(let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

console.log(chunkArray([1,2,3,4,5,6], 2)); 
