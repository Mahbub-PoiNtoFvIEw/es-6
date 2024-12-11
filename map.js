// map =  loops trough each element of the array and do the operation that you passed in call back function and hold the result from each operation in an array and finally returns you the array


const double = (num) => num*2;

const numbers = [4,5,2,8,10];
const output =numbers.map(double);
console.log(output);

const square = numbers.map(num => num*num);
console.log(square)

const friends = ['Tom','John','Micheal','Oliver'];
const length = friends.map( friend => friend.length);
console.log(length);
