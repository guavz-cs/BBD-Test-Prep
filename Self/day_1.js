function countEven(numbers) {
    return numbers.filter(num => num % 2 === 0).length;
}

console.log(countEven([0,1,2,3,4,5,6,7,8,9,10]));

function reverseString(str) {
    let result = "";

    for(let i = str.length - 1; i >= 0; i-- ){
        result += str[i];
    }

    return result;
}

console.log(reverseString("Zetu Kuluvuyo Zide"));

function findMax(numbers) {
    let max = -999;

    for(const num of numbers){
        if(num > max)
            max = num;
    }

    return max;
}

console.log(findMax([0, 82, 12, 97, 3, 51, 100, 2]));

function twoSum(numbers, target) {
    let result = [];

    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            if(numbers[i] + numbers[j] === target) {
                result.push(i, j);
            }
        }
    }

    return result;
}

console.log(twoSum([1,2,3,4], 4));

function firstUnique(str) {
    const arr = str.split("");
    let curUnique = arr[0];

    for(let i = 1; i < arr.length; i++) {
        if(curUnique === arr[i]) {
            curUnique = arr[i];
        }
    }

    return curUnique;
}

console.log("Output is " + firstUnique("aabbcdd"));

