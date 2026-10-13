// Two Sum

// Given an array of integers and a target number, return the indices of two numbers whose sum equals the target.

// Assume there is exactly one solution.

// Challenge: Try to achieve O(n) time.

// Concepts: arrays, objects/Map, searching, complexity.

function twoSum(numbers, target) {
    // your code
    let result = [];

    for(let i = 0; i < numbers.length; i++){
        if(numbers.includes(target - numbers[i]) && numbers.indexOf(target - numbers[i]) !== i){
            result.push(i, numbers.indexOf(target - numbers[i]));
            break;
        }
    }
    return result;
}

console.log(twoSum([2, 7, 11, 15], 9));
// [0, 1]

console.log(twoSum([3, 2, 4], 6));
// [1, 2]