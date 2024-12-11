// filter selects elements based on a condition and returns an array with the elements that fulfil the condition

const numbers = [4,5,2,8,10,9,12];

const aboveFive = numbers.filter( Number => Number > 5)
console.log(aboveFive);

const evenNumbers = numbers.filter( number => number % 2 === 0);
console.log(evenNumbers);