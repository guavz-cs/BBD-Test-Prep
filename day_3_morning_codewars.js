function resolver(guess, solution) {
  const summary = solution.split("").reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  const result = [];
  for (let i = 0; i < solution.length; i++) {
    console.log(summary);

    if (guess[i] === solution[i]) {
      result.push("g");
      summary[solution[i]]--;
    } else if (summary[guess[i]] >= 1) {
      let indexCheck = solution.indexOf(guess[i]);
      console.log(indexCheck);

      if (indexCheck >= i && guess[indexCheck] === solution[indexCheck]) {
        result.push("b");
        continue;
      }
      summary[guess[i]]--;
      result.push("y");
    } else {
      result.push("b");
    }
  }
  return result.join("");
}

// console.log(resolver("wooer", "ivory"));

// console.log(resolver("reads", "sales"));
// console.log(resolver("xxxxz", "yyyyx"));

function resolver(guess, solution) {
  let result = [];
  let found = [];
  for (let i = 0; i < guess.length; i++) {
    if (solution.includes(guess[i])) {
      found.push(guess[i]);
      result.push("y");

      //   if (solution.indexOf(guess[i]) === i) {
      //     result.push("g");
      //   } else {
      //     if (solution[i] === guess[i]) {
      //       result.push("g");
      //     } else {
      //       result.push("y");
      //     }
      //   }
      // } else {
      //   result.push("b");
    } else {
      result.push("b");
    }
  }

  for (let i = 0; i < found.length; i++) {}

  return result.join("");
}

console.log(resolver("blows", "world")); // byyyb
console.log(resolver("bleed", "world")); //bybbg
console.log(resolver("world", "world")); //ggggg
console.log(resolver("reads", "sales")); // byybg

console.log(resolver("wooer", "ivory")); // bbgby ***********************

console.log(resolver("xxxxz", "yyyyx")); // ybbbb ***********************
