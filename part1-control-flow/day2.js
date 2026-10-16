// TASK 1: Even or Odd
// Pseudocode:
// 1. Store a number.
// 2. Check if the number divided by 2 has a remainder of 0.
// 3. If the remainder is 0, print "even".
// 4. Otherwise, print "odd".
const number = 8;

if (number % 2 === 0) {
    console.log(" this is even number");
} else {
    console.log("this is odd number");
}

// TASK 2: Positive, Negative, or Zero

// Pseudocode:
// 1. Store a number.
// 2. If the number is greater than 0, print "positive".
// 3. If the number is less than 0, print "negative".
// 4. Otherwise, print "zero".

const number2 = -5;

if (number2 > 0) {
    console.log("positive");
} else if (number2 < 0) {
    console.log("negative");
} else {
    console.log("zero");
}

// TASK 3: Find the Largest of Three Numbers

// Pseudocode:
// 1. Store three numbers.
// 2. Check if the first number is greater than or equal to both others.
// 3. Otherwise, check if the second number is greater than or equal to both others.
// 4. Otherwise, the third number is the largest.
// 5. Print the largest number.

const first = 15;
const second = 27;
const third = 10;

if (first >= second && first >= third) {
    console.log("The largest number is:", first);
} else if (second >= first && second >= third) {
    console.log("The largest number is:", second);
} else {
    console.log("The largest number is:", third);
}