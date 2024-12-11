const getSquare = (sum) => sum;

const numbers = [4,6,5];
let sumOfSquareNumber = 0;
for(const number of numbers){
    const squareOfEachElements =number*number;
    sumOfSquareNumber = sumOfSquareNumber + squareOfEachElements;
    
}
const average = `sum of square ${sumOfSquareNumber}, 
and average of the sum of square is ${sumOfSquareNumber/numbers.length} `;
console.log(getSquare(average));