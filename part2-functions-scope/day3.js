// TASK 1: square(n) - Arrow function with implicit return

const square = (n) => n * n;

console.log("\nTASK 1: square()");
console.log(square(4));  
console.log(square(5));  
console.log(square(0));  


// TASK 2: isEven(n) - Returns a boolean

const isEven = (n) => n % 2 === 0;

console.log("\nTASK 2: isEven()");
console.log(isEven(8));  
console.log(isEven(7));  
console.log(isEven(0));  


// TASK 3: Celsius and Fahrenheit conversion

const celsiusToFahrenheit = (c) => (c * 9 / 5) + 32;
const fahrenheitToCelsius = (f) => (f - 32) * 5 / 9;

console.log("\nTASK 3: Temperature conversion");
console.log(celsiusToFahrenheit(0));    
console.log(celsiusToFahrenheit(25));   
console.log(celsiusToFahrenheit(-40));  

console.log(fahrenheitToCelsius(32));  
console.log(fahrenheitToCelsius(212));  
console.log(fahrenheitToCelsius(-40)); 


// TASK 4: formatPrice(amount, currency = "RWF")

function formatPrice(amount, currency = "RWF") {
    return `${amount.toLocaleString()} ${currency}`;
}

console.log("\nTASK 4: formatPrice()");
console.log(formatPrice(15000));          
console.log(formatPrice(2500, "USD"));    
console.log(formatPrice(0));              


// TASK 5: getGrade(score) - Guard clause

function getGrade(score) {
    if (typeof score !== "number" || score < 0 || score > 100) {
        return "Invalid score";
    }

    if (score >= 80) {
        return "A";
    } else if (score >= 70) {
        return "B";
    } else if (score >= 60) {
        return "C";
    } else if (score >= 50) {
        return "D";
    } else {
        return "F";
    }
}

console.log("\nTASK 5: getGrade()");
console.log(getGrade(85));  
console.log(getGrade(55));   
console.log(getGrade(101)); 


// TASK 6: Find the largest number without using Math.max().

function max(...numbers) {
    if (numbers.length === 0) {
        return undefined;
    }

    let largest = numbers[0];

    for (const number of numbers) {
        if (number > largest) {
            largest = number;
        }
    }

    return largest;
}

console.log("\nTASK 6: max()");
console.log(max(4, 9, 2, 15, 7));  
console.log(max(-8, -3, -10));     
console.log(max());                


// TASK 7: capitalize(word)

function capitalize(word) {
    if (typeof word !== "string" || word.length === 0) {
        return "";
    }

    return word.charAt(0).toUpperCase() +
           word.slice(1).toLowerCase();
}

console.log("\nTASK 7: capitalize()");
console.log(capitalize("kigali"));  
console.log(capitalize("RWANDA"));  
console.log(capitalize(""));        


// TASK 8: countVowels(text)

function countVowels(text) {
    if (typeof text !== "string") {
        return 0;
    }

    let count = 0;
    const vowels = "aeiou";

    for (const character of text.toLowerCase()) {
        if (vowels.includes(character)) {
            count++;
        }
    }

    return count;
}

console.log("\nTASK 8: countVowels()");
console.log(countVowels("Kigali"));     
console.log(countVowels("EDUCATION"));   
console.log(countVowels("rhythm"));      


// TASK 9: isPalindrome(word)

function isPalindrome(word) {
    if (typeof word !== "string") {
        return false;
    }

    const normalized = word.toLowerCase();
    const reversed = normalized.split("").reverse().join("");

    return normalized === reversed;
}

console.log("\nTASK 9: isPalindrome()");
console.log(isPalindrome("racecar"));  
console.log(isPalindrome("hello"));    
console.log(isPalindrome(""));         


// TASK 10: repeatAction(times, callback)

function repeatAction(times, callback) {
    for (let round = 1; round <= times; round++) {
        callback(round);
    }
}

console.log("\nTASK 10: repeatAction()");

repeatAction(3, (round) => {
    console.log(`Round ${round}`);
});

repeatAction(2, (round) => {
    console.log(`Practice ${round}`);
});

repeatAction(0, (round) => {
    console.log(round);
}); // No output because times is 0


// TASK 11: createCounter(start = 0) - Closure

function createCounter(start = 0) {
    let count = start;

    return {
        increment: function () {
            count++;
            return count;
        },

        decrement: function () {
            count--;
            return count;
        },

        getValue: function () {
            return count;
        }
    };
}

console.log("\nTASK 11: createCounter()");

const counter1 = createCounter();
console.log(counter1.getValue());   
console.log(counter1.increment());  
console.log(counter1.decrement());  // 0

const counter2 = createCounter(10);
console.log(counter2.getValue());   
console.log(counter2.increment());  
console.log(counter2.getValue());   

const counter3 = createCounter(-1);
console.log(counter3.getValue());   
console.log(counter3.decrement());  
console.log(counter3.getValue());   


// TASK 12: makeDiscount(percent) - Returns a function

function makeDiscount(percent) {
    return function (price) {
        return price - (price * percent / 100);
    };
}

console.log("\nTASK 12: makeDiscount()");

const discount10 = makeDiscount(10);
console.log(discount10(1000));  
console.log(discount10(500));   
console.log(discount10(0));     

const discount20 = makeDiscount(20);
console.log(discount20(1000));  









