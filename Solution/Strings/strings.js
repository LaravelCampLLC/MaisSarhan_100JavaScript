/*33. Check Whether a String is Palindrome 
• Write a function that checks if a string is a palindrome.*/

function isPalindrome(str){
    const length = str.length;
    for(let i=0; i<length/2; i++){
        if(str[i].toLowerCase()!=str[length-i-1].toLowerCase()){
            return false;
        }
    }
    return true;
}

//example
console.log(isPalindrome("Madam"))
console.log(isPalindrome("Mais"))


//---------------------------------------------------------------------------------------------------------



/*34. Sort Words in Alphabetical Order 
• Create a JavaScript function that sorts the words in a given string 
in alphabetical order.*/

const sortWord = function(str){
    const words= str.split(" ");
    const sortWord = words.sort();
    return sortWord.join(" ");
}

//example
console.log(sortWord("Mais Anwar Sarhan"))


//---------------------------------------------------------------------------------------------------------


/*35. Replace Characters in a String
• Write a JavaScript function that replaces all occurrences of a 
character in a string.*/

function replaceOcc(str, oldChar, newChar) {
    return str.split(oldChar).join(newChar);
}


//example
console.log(replaceOcc("mais m", "m", "M"))

//---------------------------------------------------------------------------------------------------------


/*36. Reverse a String 
• Write a program that reverses a string without using the built-in 
reverse method.*/

function reverseString(str){
    let rev = "";
    for(let i=str.length-1 ;i>=0 ; i--){
        rev += str[i];
    }
    return rev;
}

//example
console.log(reverseString("hello"));

//---------------------------------------------------------------------------------------------------------


/*38. Count the Occurrences of a Character in a String 
• Write a JavaScript code to count the number of occurrences of a 
character in a string.*/

function countOcc (str, char){
    let count = 0;
    for( let i=0;i<str.length ;i++){
        if(str[i] == char){
            count ++;
        }
    }
    return count;
}

//example
console.log(countOcc("banana", "a"))

//---------------------------------------------------------------------------------------------------------


/*39. Convert First Letter of a String to Uppercase 
• Write a function that converts the first letter of a string into 
uppercase.*/

function UpperFirstLetter(str) {
    let spl = str.split(" ");
    for (let i = 0; i < spl.length; i++) {
        let word = spl[i];
        if (word.length > 0) {
            spl[i] = word[0].toUpperCase() + word.slice(1);
        }
    }
    return spl.join(" ");
}

//example

console.log(UpperFirstLetter("mais anwar sarhan"));


//---------------------------------------------------------------------------------------------------------


/*40. Count the Number of Vowels in a String 
• Create a function to count the number of vowels in a given string.*/

function countVowel (str){
    let vowel = ['a', 'i' , 'o' ,'u' , 'e'];
    let count = 0;
    for(let i=0; i<str.length ; i++){
        if(vowel.includes(str[i].toLowerCase())){
            count ++;
        }
    }
    return count;
}

console.log(countVowel ("Mais"))


//---------------------------------------------------------------------------------------------------------


/*42. Check Whether a String Starts and Ends with Certain 
Characters 
• Write a function that checks if a string starts and ends with the 
specified characters.*/

function startEndChar(str, start, end) {
    return str.startsWith(start) && str.endsWith(end);
}

console.log(startEndChar("Mais" , "M" , "s"))


//---------------------------------------------------------------------------------------------------------


/*49. Replace All Occurrences of a String 
• Write a JavaScript code to replace all occurrences of a string in 
another string.*/

function repOcc (str , old , newC){
    arr = str.split(old);
    return arr.join(newC);
}

console.log(repOcc("mais mais", "mais", "anwar"))


//---------------------------------------------------------------------------------------------------------

/*50. Create Multiline Strings 
• Write a program that creates a multiline string using template 
literals. */

multiline = `
line 1
line 2
line 3`

console.log(multiline)


//---------------------------------------------------------------------------------------------------------

/*51. Format Numbers as Currency Strings 
• Write a function that formats a number into a currency string.*/

function formatCurrency(num, locale = "en-US", currency = "USD") {
    return num.toLocaleString(locale, { style: "currency", currency: currency });
}

// Examples
console.log(formatCurrency(123456.789));              // $123,456.79
console.log(formatCurrency(123456.789, "en-GB", "GBP")); // £123,456.79
console.log(formatCurrency(123456.789, "de-DE", "EUR")); // 123.456,79 €


//---------------------------------------------------------------------------------------------------------

/*52. Generate a Random String 
• Write a function that generates a random alphanumeric string of a 
given length.*/


function randomString(length) {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        result += chars[randomIndex];
    }
    return result;
}

// Example
console.log(randomString(8));  
console.log(randomString(12)); 

//---------------------------------------------------------------------------------------------------------


/*54. Trim a String 
• Write a program that removes any whitespace from both ends of a 
string. */

function trimString(str) {
    return str.trim();
}

// Example
console.log(trimString("   mais sarhan   ")); 

//---------------------------------------------------------------------------------------------------------


/*55. Convert Objects to Strings 
• Write a function to convert an object into a JSON string.*/

function objectToString(obj) {
    return JSON.stringify(obj);
}

// Example
let user = { name: "Mais", age: 22, city: "Nablus" };

console.log(objectToString(user));

//---------------------------------------------------------------------------------------------------------


/*56. Check Whether a String Contains a Substring 
• Write a function that checks if a string contains a specific 
substring. */

function containsSubstring(str, sub) {
  return str.includes(sub);
}

console.log(containsSubstring("Mais Sarhan", "Mais")); // true


//---------------------------------------------------------------------------------------------------------


/*57. Compare Two Strings 
• Write a JavaScript code to compare two strings and check if they 
are equal.*/

function compareStrings(str1, str2) {
  return str1 === str2;
}

console.log(compareStrings("test", "test")); // true


//---------------------------------------------------------------------------------------------------------


/*58. Encode a String to Base64 
• Write a function to encode a string into Base64.*/

function encodeBase64(str) {
  return btoa(str);
}

console.log(encodeBase64("hello")); // aGVsbG8=


//---------------------------------------------------------------------------------------------------------


/*60. Replace All Line Breaks with <br> 
• Create a function that replaces all line breaks in a string with <br> 
tags. */

function replaceLineBreaks(str) {
  return str.replace(/\n/g, "<br>");
}

let text = "This is line one\nThis is line two\nThis is line three";
console.log(replaceLineBreaks(text));

