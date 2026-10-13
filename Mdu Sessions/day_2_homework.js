// # Homework Challenge: Number Analyzer

// Create a function called `numberAnalyzer(num)`.

// The function must count from **1 to `num`** and analyze every number.

// For every number:

// * If the number is divisible by **2 and 3**, add an object containing:

//   * `number`
//   * `label: "EvenFizz"`
// * If the number is divisible by **2**, add an object containing:

//   * `number`
//   * `label: "Even"`
// * If the number is divisible by **3**, add an object containing:

//   * `number`
//   * `label: "Fizz"`
// * Otherwise, add an object containing:

//   * `number`
//   * `label: "Other"`

// ### Example

// ```js
// numberAnalyzer(6);
// ```

// Should produce something similar to:

// ```js
// [
//     { number: 1, label: "Other" },
//     { number: 2, label: "Even" },
//     { number: 3, label: "Fizz" },
//     { number: 4, label: "Even" },
//     { number: 5, label: "Other" },
//     { number: 6, label: "EvenFizz" }
// ]
// ```

// ### Additional requirements

// Your function must also:

// 1. Return the array of objects.
// 2. Create a second function called `getFizzNumbers()` that receives the result from `numberAnalyzer()` and returns **only the numbers labelled `"Fizz"` or `"EvenFizz"`**.
// 3. Create a third function called `getTotal()` that receives the result and calculates the **sum of all the numbers**.
// 4. Do not hard-code the numbers. The functions must work with different inputs.

// ### Example usage

// ```js
// const results = numberAnalyzer(10);

// console.log(results);

// console.log(getFizzNumbers(results));

// console.log(getTotal(results));
// ```

// For `numberAnalyzer(10)`, `getFizzNumbers()` should return:

// ```js
// [3, 6, 9]
// ```

// And `getTotal()` should return:

// ```text
// 55
// ```

// ### Rules

// You may use:

// * `for` loops
// * arrays
// * objects
// * `if / else if / else`
// * `%`
// * `.push()`
// * `.map()`
// * `.filter()`
// * `.reduce()`

// Try to choose the appropriate array method rather than using a loop for everything.

// ### Bonus Challenge

// Create:

// ```js
// getSummary(results)
// ```

// It should return an object showing how many numbers fall into each category.

// For example:

// ```js
// {
//     EvenFizz: 1,
//     Even: 2,
//     Fizz: 1,
//     Other: 2
// }
// ```

// for the numbers `1` through `6`.

// Try to solve the bonus using `reduce()`.

function numberAnalyzer(num) {
    const results = [];

    for(let i = 1; i <= num; i++) {
        if(i % 2 === 0 && i % 3 === 0) {
            results.push({ number: i, label: "EvenFizz" });
        } else if(i % 2 === 0) {
            results.push({ number: i, label: "Even" });
        } else if(i % 3 === 0) {
            results.push({ number: i, label: "Fizz" });
        } else {
            results.push({ number: i, label: "Other" });
        }
    }

    return results;
}

console.log(numberAnalyzer(6));

console.log("\n");

/** function getFizzNumbers(result) {
    const fizzNumbers = [];

    for(const obj of result) {
        if(obj.label === "Fizz" || obj.label === "EvenFizz") {
            fizzNumbers.push(obj.number);
        }
    }

    return fizzNumbers;
} **/

function getFizzNumbers(result) {
    return result.filter(obj => obj.label === "Fizz" || obj.label === "EvenFizz").map(obj => obj.number);
}

/** function getTotal(result) {
    let total = 0;

    for(const obj of result) {
        total += obj.number;
    }

    return total;
} **/

function getTotal(result) {
    return result.reduce((sum, obj) => sum + obj.number, 0);
}

const results = numberAnalyzer(10);
console.log(results);
console.log(getFizzNumbers(results));
console.log(getTotal(results));

// function getSummary(results){
//     let evenFizz = 0;
//     let even = 0;
//     let fizz = 0;
//     let other = 0;

//     for(const obj of results) {
//         if(obj.label === "EvenFizz") {
//             evenFizz++;
//         } else if(obj.label === "Even") {
//             even++;
//         } else if(obj.label === "Fizz") {
//             fizz++;
//         } else if(obj.label === "Other") {
//             other++;
//         }
//     }

//     return {
//         "EvenFizz": evenFizz,
//         "Even": even,
//         "Fizz": fizz,
//         "Other": other
//     };
// }

// [
//     { number: 1, label: "Other" },
//     { number: 2, label: "Even" },
//     { number: 3, label: "Fizz" },
//     { number: 4, label: "Even" },
//     { number: 5, label: "Other" },
//     { number: 6, label: "EvenFizz" }
// ]

function getSummary(results){
    return results.reduce((acc, cur) => {
        //acc[cur.label] = (acc[cur.label] || 0) + 1
        
        if(!acc[cur.label]){
            acc[cur.label] = 0;
        }
        acc[cur.label] ++;

        console.log(acc);
        return acc;
    }, {});
}

let sum = 0;

function sumCalc(arr){
    return arr.reduce((sum, cur) => sum + cur, 0);
}

// function getSummary(results) {
//     const evenFizz = results.filter(obj => obj.label === "EvenFizz").reduce((sum, obj) => sum + 1, 0);

//     const even = results.filter(obj => obj.label === "Even").reduce((sum, obj) => sum + 1, 0);

//     const fizz = results.filter(obj => obj.label === "Fizz").reduce((sum, obj) => sum + 1, 0);
    
//     const other = results.filter(obj => obj.label === "Other").reduce((sum, obj) => sum + 1, 0);

//     return {
//         "EvenFizz": evenFizz,
//         "Even": even,
//         "Fizz": fizz,
//         "Other": other
//     };
// }

console.log(getSummary(results));