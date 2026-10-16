
/*
PART 1: CONTROL FLOW AND LOOPS
*/

// TASK 1: Even or Odd

// Pseudocode:
// 1. Store a number.
// 2. Check if the number divided by 2 has a remainder of 0.
// 3. If the remainder is 0, print "even".
// 4. Otherwise, print "odd".

const number = 8;

if (number % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}


// TASK 2: Grade Calculator

// Pseudocode:
// 1. Store a score between 0 and 100.
// 2. Reject the score if it is below 0 or above 100.
// 3. If the score is 80 or above, print A.
// 4. Otherwise, check the other grade ranges.
// 5. Print the correct grade.

const score = 85;

if (score < 0 || score > 100) {
    console.log("Invalid score");
} else if (score >= 80) {
    console.log("A");
} else if (score >= 70) {
    console.log("B");
} else if (score >= 60) {
    console.log("C");
} else if (score >= 50) {
    console.log("D");
} else {
    console.log("F");
}


// TASK 3: Ticket Price

// Pseudocode:
// 1. Store the person's age and student status.
// 2. If the person is over 65, the ticket is free.
// 3. Otherwise, if the person is under 12, the price is 2000 RWF.
// 4. Otherwise, if the person is a student, the price is 3000 RWF.
// 5. Otherwise, the adult price is 5000 RWF.
// 6. Print the ticket price.

const age = 20;
const isStudent = true;
let ticketPrice;

if (age > 65) {
    ticketPrice = 0;
} else if (age < 12) {
    ticketPrice = 2000;
} else if (isStudent) {
    ticketPrice = 3000;
} else {
    ticketPrice = 5000;
}

if (ticketPrice === 0) {
    console.log("Ticket is free");
} else {
    console.log("Ticket price:", ticketPrice, "RWF");
}


// TASK 4: Day Planner

// Pseudocode:
// 1. Store a day name.
// 2. Use switch to check the day.
// 3. Print the class activity for Monday to Friday.
// 4. Print "No class" on weekends.

const day = "Monday";

switch (day) {
    case "Monday":
        console.log("Monday: JavaScript basics");
        break;
    case "Tuesday":
        console.log("Tuesday: Conditions");
        break;
    case "Wednesday":
        console.log("Wednesday: Loops");
        break;
    case "Thursday":
        console.log("Thursday: Functions");
        break;
    case "Friday":
        console.log("Friday: Practice and review");
        break;
    case "Saturday":
    case "Sunday":
        console.log("No class");
        break;
    default:
        console.log("Invalid day");
}


// TASK 5: Countdown

// Pseudocode:
// 1. Start at 10.
// 2. Print each number while counting down to 1.
// 3. Print "Liftoff!" after the countdown.

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("Liftoff!");


// TASK 6: Sum and Average Using for...of

// Pseudocode:
// 1. Store the given array of numbers.
// 2. Set sum to 0.
// 3. Use for...of to add each number to sum.
// 4. Calculate the average.
// 5. Print the sum and average.

const scores = [45, 78, 90, 62, 88];
let sum = 0;

for (const value of scores) {
    sum += value;
}

const average = sum / scores.length;

console.log("Sum:", sum);
console.log("Average:", average);


// TASK 7: Find the First Number Greater Than 100

// Pseudocode:
// 1. Store an array of numbers.
// 2. Loop through the array.
// 3. If a number is greater than 100, print it.
// 4. Use break to stop the loop.

const numbers = [25, 60, 95, 120, 150];

for (const value of numbers) {
    if (value > 100) {
        console.log("First number greater than 100:", value);
        break;
    }
}


// TASK 8: Skip Negatives

// Pseudocode:
// 1. Store an array containing positive and negative numbers.
// 2. Loop through the array.
// 3. If a number is negative, skip it using continue.
// 4. Otherwise, print the number.

const values = [10, -5, 20, -3, 0, 8];

for (const value of values) {
    if (value < 0) {
        continue;
    }

    console.log(value);
}


// TASK 9: Multiplication Table

// Pseudocode:
// 1. Loop from 1 to 12.
// 2. Multiply 7 by each number.
// 3. Print the result in the required format.

for (let i = 1; i <= 12; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}


// TASK 10: FizzBuzz with Kigali

// Pseudocode:
// 1. Loop through numbers from 1 to 100.
// 2. If a number is divisible by both 3 and 5, print "FizzBuzz".
// 3. Otherwise, if divisible by 7, print "Kigali".
// 4. Otherwise, if divisible by 3, print "Fizz".
// 5. Otherwise, if divisible by 5, print "Buzz".
// 6. Otherwise, print the number.

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 7 === 0) {
        console.log("Kigali");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
