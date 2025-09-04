/*9. Generate a Random Number 
• Write a function that generates a random number between 1 and 
100.*/

function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

console.log("Random Number:", randomNumber());

//---------------------------------------------------------------------------------------------------------


/*27. Guess a Random Number 
• Create a number guessing game where the user guesses a randomly 
generated number between 1 and 100. */


function guessGame(userGuess) {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  console.log("Random Number was:", randomNum);

  if (userGuess === randomNum) {
    return "🎉 Correct Guess!";
  } else if (userGuess < randomNum) {
    return "Too Low!";
  } else {
    return "Too High!";
  }
}

console.log(guessGame(50));


//---------------------------------------------------------------------------------------------------------


/*28. Shuffle Deck of Cards 
• Write a JavaScript function to shuffle a deck of cards randomly. */


function shuffleDeck() {
  const suits = ["♠", "♥", "♦", "♣"];
  const values = [
    "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"
  ];
  const deck = [];

  // Create full deck
  for (let suit of suits) {
    for (let value of values) {
      deck.push(value + suit);
    }
  }

  // Shuffle using Fisher-Yates
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  return deck;
}

console.log("Shuffled Deck:", shuffleDeck());


//---------------------------------------------------------------------------------------------------------


/*29. Display Fibonacci Sequence Using Recursion 
• Create a recursive function that generates the Fibonacci sequence.*/


function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Print sequence
function printFibonacci(limit) {
  const seq = [];
  for (let i = 0; i < limit; i++) {
    seq.push(fibonacci(i));
  }
  return seq;
}

console.log("Fibonacci Sequence:", printFibonacci(10));


//---------------------------------------------------------------------------------------------------------


/*30. Find Factorial of a Number Using Recursion 
• Write a recursive function to calculate the factorial of a number.*/


function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

console.log("Factorial of 5:", factorial(5));

//---------------------------------------------------------------------------------------------------------


/*86. Set a Default Parameter Value for a Function 
• Write a function that has a default parameter value if no argument 
is provided.*/

function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet());       
console.log(greet("Mais"));  

//---------------------------------------------------------------------------------------------------------


/*94. Generate a Range of Numbers and Characters 
• Write a JavaScript code that generates a range of numbers and 
characters within a specified range.*/

function generateRange(start, end) {
  const range = [];
  
  // Numbers
  if (!isNaN(start) && !isNaN(end)) {
    for (let i = start; i <= end; i++) {
      range.push(i);
    }
  } 
  // Characters
  else {
    const startCode = start.charCodeAt(0);
    const endCode = end.charCodeAt(0);
    for (let i = startCode; i <= endCode; i++) {
      range.push(String.fromCharCode(i));
    }
  }

  return range;
}

console.log(generateRange(1, 10));     
console.log(generateRange("a", "f"));   
