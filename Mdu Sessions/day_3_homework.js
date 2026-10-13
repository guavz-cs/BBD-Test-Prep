// Home work:

// Build a calculator that performs different mathematical operations using functions, switch statements, arrays, objects, and loops.

// Part 1: Build the Calculator

// Create a function called calculate(value1, value2, operator).

// The function must support the following operators:

// "add" — addition
// "subtract" — subtraction
// "multiply" — multiplication
// "divide" — division
// "modulus" — returns the remainder using %
// "power" — raises the first number to the power of the second using **

// Examples:

// calculate(10, 5, "add");       // 15
// calculate(10, 5, "subtract");  // 5
// calculate(10, 5, "multiply");  // 50
// calculate(10, 5, "divide");    // 2
// calculate(10, 3, "modulus");  // 1
// calculate(2, 3, "power");      // 8

// Requirements:

// Use a switch statement.
// Return the result from the function.
// Each operator must have its own case.
// Use default for an unsupported operator.
// Do not use if/else to replace the switch statement.

// Part 2: Store Calculation History

// Create an array called history.

// Every time a calculation is performed, store an object containing:

// value1
// value2
// operator
// result

// For example, after these calculations:

// calculate(10, 5, "add");
// calculate(8, 2, "multiply");
// calculate(20, 4, "divide");

// Your history should contain objects similar to these:

// [
//   {
//     value1: 10,
//     value2: 5,
//     operator: "add",
//     result: 15
//   },
//   {
//     value1: 8,
//     value2: 2,
//     operator: "multiply",
//     result: 16
//   },
//   {
//     value1: 20,
//     value2: 4,
//     operator: "divide",
//     result: 5
//   }
// ]

// Create a separate function called showHistory() that returns the entire history.

// Part 3: Analyse the History

// Using the stored calculation history, create the following functions:

// 1. getTotalResults()

// Return the sum of all the results stored in the history.

// Example: if the results are 15, 16, and 5, the function should return 36.

// 2. getMultiplicationHistory()

// Return only the calculations that used the "multiply" operator.

// 3. getLargestResult()

// Return the largest result in the history.

// 4. countOperations()

// Return an object showing how many times each operator was used.

// Example:

// {
//   add: 2,
//   multiply: 3,
//   divide: 1
// }

const history = [];

function calculate(value1, value2, operator) {
    if(typeof value1 !== "number" || typeof value2 !== "number") {
        return "Error: Both value1 and value2 must be numbers.";
    }

    if(typeof operator !== "string") {
        return "Error: Operator must be a string.";
    }

    operator = operator.trim().toLowerCase();

    let result;

    switch (operator) {
        case "add":
            result = value1 + value2;
            break;
        case "subtract":
            result = value1 - value2; 
            break;
        case "multiply":
            result = value1 * value2;
            break;
        case "divide":
            if(value2 === 0) {
                return "Error: Division by zero is not allowed.";
            }
            result = value1 / value2;
            break;
        case "modulus":
            result = value1 % value2;
            break;
        case "power":
            result = value1 ** value2;
            break;
        default:
            result = "Error: Unsupported operator. Please use 'add', 'subtract', 'multiply', 'divide', 'modulus', or 'power'.";
    }

    history.push({
        "value1": value1,
        "value2": value2,
        "operator": operator,
        "result": result
    });

    return result;
}

console.log(calculate(10, 5, "add"));       // 15
console.log(calculate(10, 5, "subtract"));  // 5
console.log(calculate(10, 5, "multiply"));  // 50
console.log(calculate(10, 5, "divide"));    // 2
console.log(calculate(10, 3, "modulus"));  // 1
console.log(calculate(2, 3, "power"));      // 8

function showHistory() {
    return history;
}

console.log(showHistory());

function getTotalResults(history) {
    return history.reduce((total, operation) => total + operation.result, 0); 
}

console.log(getTotalResults(history)); //81

function getMultiplicationHistory() {
    return history.filter((item) => item.operator === "multiply");
}

console.log(getMultiplicationHistory(history));

function getLargestResult() {
    let largest = history[0].result;

    for(let i = 1; i < history.length; i++) {
        if(history[i].result > largest) {
            largest = history[i].result;
        }
    }

    let sorted = [...history].sort((a, b) => b.result - a.result);



    return sorted[0].result;
}

console.log(getLargestResult())

function countOperations() {
    return history.reduce((acc, cur) => {
        acc[cur.operator] = (acc[cur.operator] || 0) + 1;
        return acc;
    }, {})
}

console.log(countOperations());


