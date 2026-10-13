function ArrayChallenge(arr) {
  const sortedArr = [...arr].sort((a, b) => a - b);

  const fisrtHalf = sortedArr.slice(0, Math.floor(sortedArr.length / 2));

  const secondHalf = sortedArr.slice(Math.floor(sortedArr.length / 2));

  for (let i = 0; i < fisrtHalf.length; i++) {
    if (fisrtHalf[i] >= secondHalf[i]) {
      return false;
    }
  }

  return true;
}

console.log(ArrayChallenge([0, 1, 2, 4, 1, 1, 1])); // false
//

console.log(ArrayChallenge([0, 4, 22, 4, 14, 4, 2])); // true

console.log(ArrayChallenge([0, 1, 2, 4, 1, 4])); // true

// a1> a2 < a3 > a4 <a5 wave pattern />/
