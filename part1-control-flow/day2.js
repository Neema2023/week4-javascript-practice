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

// TASK 4: FizzBuzz

// Pseudocode:
// 1. Store a number.
// 2. If divisible by both 3 and 5, print "FizzBuzz".
// 3. Else if divisible by 3, print "Fizz".
// 4. Else if divisible by 5, print "Buzz".
// 5. Otherwise, print the number.

const fizzNumber = 15;

if (fizzNumber % 3 === 0 && fizzNumber % 5 === 0) {
    console.log("FizzBuzz");
} else if (fizzNumber % 3 === 0) {
    console.log("Fizz");
} else if (fizzNumber % 5 === 0) {
    console.log("Buzz");
} else {
    console.log(fizzNumber);
}

// TASK 5: Sum of Numbers from 1 to N

// Pseudocode:
// 1. Store a number N.
// 2. Set total to 0.
// 3. Loop from 1 to N.
// 4. Add each number to total.
// 5. Print the total.

const n = 5;
let total = 0;

for (let i = 1; i <= n; i++) {
    total = total + i;
}

console.log("The sum is:", total);

// TASK 6: Multiplication Table

// Pseudocode:
// 1. Store a number.
// 2. Loop from 1 to 10.
// 3. Multiply the number by i.
// 4. Print the result.

const tableNumber = 3;

for (let i = 1; i <= 10; i++) {
    console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
}

// TASK 8: Factorial of a Number

// Pseudocode:
// 1. Store a non-negative integer.
// 2. Set factorial to 1.
// 3. Loop from 1 to the number.
// 4. Multiply factorial by i.
// 5. Print the result.

const factorialNumber = 5;
let factorial = 1;

for (let i = 1; i <= factorialNumber; i++) {
    factorial = factorial * i;
}

console.log("Factorial is:", factorial);

// TASK 9: Reverse a Number

// Pseudocode:
// 1. Store a positive whole number.
// 2. Set reversed to 0.
// 3. Get the last digit.
// 4. Add it to reversed.
// 5. Remove the last digit.
// 6. Repeat until the number becomes 0.
// 7. Print the reversed number.

let reverseNumber = 1234;
let reversed = 0;

while (reverseNumber > 0) {
    let digit = reverseNumber % 10;
    reversed = reversed * 10 + digit;
    reverseNumber = Math.floor(reverseNumber / 10);
}

console.log("Reversed number:", reversed);

// TASK 10: Check if a Number Is Prime

// Pseudocode:
// 1. Store a number.
// 2. Assume it is prime.
// 3. Numbers below 2 are not prime.
// 4. Check whether any number from 2 to number - 1 divides it evenly.
// 5. If one does, the number is not prime.
// 6. Print the result.

const primeNumber = 7;
let isPrime = true;

if (primeNumber < 2) {
    isPrime = false;
} else {
    for (let i = 2; i < primeNumber; i++) {
        if (primeNumber % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(primeNumber, "is a prime number");
} else {
    console.log(primeNumber, "is not a prime number");
}



/*
CHALLENGE: RIGHT-ANGLED TRIANGLE WITH 5 ROWS

Pseudocode:
1. Start an outer loop from row 1 to row 5.
2. For each row, start an inner loop from 1 to the current row.
3. Add one star during each inner-loop iteration.
4. Print the stars on a new line after each row.
*/

console.log("\nChallenge: Right-angled triangle");

for (let row = 1; row <= 5; row++) {
    let stars = "";

    for (let column = 1; column <= row; column++) {
        stars += "*";
    }

    console.log(stars);
}
