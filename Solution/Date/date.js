/*61. Display Date and Time 
• Write a program that displays the current date and time in the 
console.*/


const now = new Date();
console.log("Current Date and Time:", now.toString());

//---------------------------------------------------------------------------------------------------------


/*62. Check Leap Year 
• Write a function that checks whether a given year is a leap year or 
not.*/

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(isLeapYear(2024));
console.log(isLeapYear(2023)); 

//---------------------------------------------------------------------------------------------------------


/*63. Format the Date 
• Write a program that formats a given date in the format 
"MM/DD/YYYY".*/


function formatDate(date) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

const today = new Date();
console.log("Formatted Date:", formatDate(today));


//---------------------------------------------------------------------------------------------------------


/*64. Display Current Date 
• Write a JavaScript code to display the current date in the console.*/

const currentDate = new Date();
console.log("Current Date:", currentDate.toDateString());

//---------------------------------------------------------------------------------------------------------


/*65. Compare the Value of Two Dates 
• Create a function that compares two dates and returns whether they 
are equal, or if one is before the other.*/

function compareDates(date1, date2) {
  if (date1.getTime() === date2.getTime()) {
    return "Dates are equal";
  } else if (date1.getTime() < date2.getTime()) {
    return "First date is before the second";
  } else {
    return "First date is after the second";
  }
}

const d1 = new Date("2025-09-01");
const d2 = new Date("2025-09-10");

console.log(compareDates(d1, d2)); 

//---------------------------------------------------------------------------------------------------------


/*66. Create a Countdown Timer 
• Write a JavaScript program to create a countdown timer that 
displays the remaining time.*/

function countdown(seconds) {
  let counter = seconds;

  const interval = setInterval(() => {
    console.log("Remaining time:", counter, "seconds");
    counter--;

    if (counter < 0) {
      clearInterval(interval);
      console.log("Time's up!");
    }
  }, 1000);
}

countdown(5);
