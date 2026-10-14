// What date corresponds to the nth day of the year?
// The answer depends on whether the year is a leap year or not.

// Write a function that will help you determine the date if you know the number of the day in the year, as well as whether the year is a leap year or not.
// The function accepts the day number and a boolean value isLeap as arguments, and returns the corresponding date of the year as a string "Month, day".
// Only valid combinations of a day number and isLeap will be tested.

// Examples:
// * With input `41, false` => return "February, 10"
// * With input `60, false` => return "March, 1
// * With input `60, true` => return "February, 29"
// * With input `365, false` => return "December, 31"
// * With input `366, true` => return "December, 31"

function getDay(day, isLeap){
  let year = isLeap ? 2024 : 2026;
  let date = new Date(Date.UTC(year, 0, day));
  let month = date.toLocaleString("en-US", {month: "long"});
  day = date.getUTCDate();
  
  return [month, day].join(", ");
}

//incomplete

// Complete the following function that will return the difference in years (age) for a birthdate, and optionally a "now" date. Both arguments to the function are expected to be Date objects. The returned difference can be either positive or negative.

// getAge(new Date('1980/01/01')) === 33 // assuming today's date is 2013/08/01
// getAge(new Date('1913/01/01'), new Date('2013/01/01') === 100
// getAge(new Date('2008/02/29'), new Date('2032/03/01')) === 24
// getAge(new Date('2008/01/01'), new Date('2000/01/01')) === -8

/**
 * Return the difference between a birthdate and an optional "now" date, in years
 * 
 * @param {Date} birthDate
 * @param {Date} nowDate
 * @return  {Number}
 */
function getAge(birthDate, nowDate) {
  let bDate = new Date(birthDate);
  let nDate = new Date(nowDate);
  let result = nDate.getFullYear() - bDate.getFullYear();
  //if(nDate.getMonth() >= bDate.getMonth && nDate.getDate() >= bDate.getDate())
  return result;
  //else
    //return result - 1;
}