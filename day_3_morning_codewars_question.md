# Wordle Clues

**Original challenge:** [PASTE CODEWARS KATA LINK HERE](https://www.codewars.com/kata/)
**Game reference:** [Wordle on NYT Games](https://www.nytimes.com/games/wordle/index.html)

---

## Description

Wordle is a game where users try to guess a hidden 5-letter word. Feedback is given for each guess in the form of colored tiles, indicating when letters match or occupy the correct position.

## The Brief

Make a function that takes in a 5-letter guess and, comparing it to a known solution, returns clues for the user to solve the Wordle puzzle.

## Requirements

- The function takes in two strings of 5 letters each: a **guess** and a **solution**.
- The function returns a string of 5 letters.
- The returned string is composed of letters, each corresponding to a letter of the guess:
  - `'b'` (black): the letter is not present in the answer
  - `'y'` (yellow): the letter is present, but in a different location
  - `'g'` (green): the letter is present and in the right location

## Duplicates

- A letter appearing in the correct place is always green, including if it appears elsewhere in the word.
- A letter can only be green or yellow as many times as it appears in the correct answer. Extra occurrences of that letter are marked `'b'`.
- Letters are evaluated left to right.

### Examples

| Guess   | Answer  | Expected Output | Explanation                          |
| ------- | ------- | --------------- | ------------------------------------ |
| `xxxxx` | `yxxxx` | `bgggg`         | Extra letters are marked `b`         |
| `xxxxz` | `aaaax` | `ybbbb`         | First `x` is `y`, each one after `b` |

See the example tests on the original kata page for more.
