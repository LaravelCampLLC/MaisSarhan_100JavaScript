/*1. Print "Hello, World!"
• Write a JavaScript code to print "Hello, World!" to the console.*/

console.log("Hello, World!");


//---------------------------------------------------------------------------------------------------------
  


/*2. Add Two Numbers
• Write a JavaScript function that takes two numbers as input and
returns their sum*/

function AddNumber(num1 , num2){
    return num1 + num2;
}


console.log(AddNumber(1,2))


//---------------------------------------------------------------------------------------------------------


/*3. Calculate Square Root
• Write a JavaScript code to find the square root of a given number.*/

function SquareRoot(num){
    return Math.sqrt(num)
}

console.log(SquareRoot(25))


//---------------------------------------------------------------------------------------------------------


/*4. Calculate the Area of a Triangle
• Create a function that calculates the area of a triangle given its base
and height.*/

function triangleArea(base , height){
    return 0.5 * base * height;
}

console.log(triangleArea(5,2))


//---------------------------------------------------------------------------------------------------------

/*5. Swap Two Variables
• Write a JavaScript program to swap the values of two variables
without using a temporary variable.*/

let a = 5, b = 10;
    [a, b] = [b, a];
console.log(`a = ${a} ,b= ${b}`);


//---------------------------------------------------------------------------------------------------------

/*6. Solve a Quadratic Equation
• Create a JavaScript function that solves a quadratic equation of the
form ax^2 + bx + c = 0.*/

function QuadraticEquation(a,b,c){
    const d =  b**2 - 4 * a * c;
        if (d > 0) {
            let x1= (-b + Math.sqrt(d) )/ (2 * a);
            let x2= (-b - Math.sqrt(d) )/ (2 * a);
            return [x1 , x2]
        } else if (d === 0) {
            return [-b / (2 * a)];
        } else {
            return [];
        }
  
}

console.log(QuadraticEquation(1,4,4))
console.log(QuadraticEquation(1,-4,2))

//---------------------------------------------------------------------------------------------------------

/*7. Convert Kilometers to Miles
• Write a JavaScript function to convert kilometers to miles.*/

function KiloToMil (km){
    const milesPerKm = 0.621371; // 1 kilometer = 0.621371 miles
    return km * milesPerKm;
}

console.log(KiloToMil(5));

//---------------------------------------------------------------------------------------------------------

/*8. Convert Celsius to Fahrenheit
• Create a function that converts temperature from Celsius to
Fahrenheit.*/

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

console.log(celsiusToFahrenheit(37))

//---------------------------------------------------------------------------------------------------------  

/*9. Generate a Random Number
• Write a function that generates a random number between 1 and 100.*/

function randomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

console.log(randomNumber()); 

//---------------------------------------------------------------------------------------------------------  

/*10. Check If a Number is Positive, Negative, or Zero
• Create a function that checks whether a number is positive, negative, or zero.*/

function checkNumberSign(num) {
    if (num > 0) return "Positive";
    else if (num < 0) return "Negative";
    else return "Zero";
}

console.log(checkNumberSign(-5)); 

//---------------------------------------------------------------------------------------------------------  

/*11. Check If a Number is Odd or Even
• Write a function that checks if a number is odd or even.*/

function isOddOrEven(num) {
    return (num % 2 === 0) ? "Even" : "Odd";
}

console.log(isOddOrEven(7)); 

//---------------------------------------------------------------------------------------------------------  

/*12. Find the Largest Among Three Numbers
• Write a JavaScript function that finds the largest number among three numbers.*/

function largestOfThree(a, b, c) {
    return Math.max(a, b, c);
}

console.log(largestOfThree(5, 12, 9)); 

//---------------------------------------------------------------------------------------------------------  

/*13. Check If a Number is Prime
• Write a function that checks whether a number is prime.*/

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(11));

//---------------------------------------------------------------------------------------------------------  

/*14. Print All Prime Numbers in an Interval
• Write a function that prints all prime numbers between two given numbers.*/

function primesInInterval(start, end) {
    let primes = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) primes.push(i);
    }
    return primes;
}

console.log(primesInInterval(10, 50)); //  [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]

//---------------------------------------------------------------------------------------------------------  

/*15. Find the Factorial of a Number
• Create a function that calculates the factorial of a number.*/

function factorial(num) {
    if (num < 0) return "Invalid";
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5)); 

//---------------------------------------------------------------------------------------------------------  

/*16. Display the Multiplication Table
• Write a JavaScript code that displays the multiplication table for a given number.*/

function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

multiplicationTable(7); 

//---------------------------------------------------------------------------------------------------------
/*17. Print Fibonacci Sequence
• Write a function to print the first n numbers in the Fibonacci sequence.*/

function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n);
}

console.log(fibonacci(10));

//---------------------------------------------------------------------------------------------------------

/*18. Check Armstrong Number
• Write a function that checks if a number is an Armstrong number.*/

function isArmstrong(num) {
    let digits = num.toString().split('');
    let power = digits.length;
    let sum = digits.reduce((acc, d) => acc + Math.pow(Number(d), power), 0);
    return sum === num;
}

console.log(isArmstrong(153)); 

//---------------------------------------------------------------------------------------------------------

/*19. Find Armstrong Number in an Interval
• Write a program to find all Armstrong numbers in a given range.*/

function armstrongInRange(start, end) {
    let armstrongNumbers = [];
    for (let i = start; i <= end; i++) {
        if (isArmstrong(i)) armstrongNumbers.push(i);
    }
    return armstrongNumbers;
}

console.log(armstrongInRange(100, 1000));

//---------------------------------------------------------------------------------------------------------

/*20. Create a Simple Calculator
• Write a simple calculator program that can perform addition, subtraction, multiplication, and division.*/

function calculator(a, b, operator) {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : "Cannot divide by zero";
        default: return "Invalid operator";
    }
}

console.log(calculator(10, 5, '+')); 

//---------------------------------------------------------------------------------------------------------

/*21. Find the Sum of Natural Numbers
• Write a JavaScript code to calculate the sum of the first n natural numbers.*/

function sumNaturalNumbers(n) {
    return (n * (n + 1)) / 2;
}

console.log(sumNaturalNumbers(10)); 

//---------------------------------------------------------------------------------------------------------

/*22. Check If Two Numbers Have Same Last Digit
• Write a program that checks if two numbers share the same last digit.*/

function hasSameLastDigit(a, b) {
    return (a % 10) === (b % 10);
}

console.log(hasSameLastDigit(27, 57));

//---------------------------------------------------------------------------------------------------------

/*23. Find HCF (Greatest Common Divisor)
• Write a function that finds the HCF or GCD of two numbers.*/

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(gcd(48, 18)); 

//---------------------------------------------------------------------------------------------------------

/*24. Find LCM (Least Common Multiple)
• Create a JavaScript function that finds the LCM of two numbers.*/

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

console.log(lcm(4, 6)); 

//---------------------------------------------------------------------------------------------------------

/*25. Find the Factors of a Number
• Write a function that finds all the factors of a number.*/

function factors(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) result.push(i);
    }
    return result;
}

console.log(factors(28));

//---------------------------------------------------------------------------------------------------------

/*26. Find Sum of Natural Numbers Using Recursion
•Write a recursive function to calculate the sum of natural numbers
up to n*/

function sumNaturalRecursion(n) {
    if (n === 0) return 0;
    return n + sumNaturalRecursion(n - 1);
}

console.log(sumNaturalRecursion(10)); 

//---------------------------------------------------------------------------------------------------------

/*31. Convert Decimal to Binary
• Write a JavaScript code to convert a decimal number to binary.*/

function decimalToBinary(decimal) {
    return decimal.toString(2);
}

console.log(decimalToBinary(10));

//---------------------------------------------------------------------------------------------------------

/*32. Find ASCII Value of Character
• Write a function that returns the ASCII value of a given character.*/

function asciiValue(char) {
    return char.charCodeAt(0);
}

console.log(asciiValue('O'));

//---------------------------------------------------------------------------------------------------------

/*98. Check if a Number is Float or Integer
• Write a program that checks if a number is an integer or a float.*/

function checkNumberType(num) {
    return Number.isInteger(num) ? "Integer" : "Float";
}

console.log(checkNumberType(5));    
console.log(checkNumberType(5.75));  


