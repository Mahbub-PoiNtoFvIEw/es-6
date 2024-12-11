/*
** ways to get undefined 
1. variable that is not initialized will give undefined
2. function with no return
3. parameter that is not passed will be undefined
4. if return has nothing on the right side will return undefined
5. property that doesn't exists on an object that will give undefined
6. accessing array elements outside of the array index range that will give undefined
7. deleting an element inside an array
8. set a value directly to undefined
*/
// 1
let first ;
console.log(first);

// 2
function second(a, b){
    const total = a + b;
}
const result = second(1,2);
console.log(result);

// 3
function third(a, b, c, d){
    const total = a + b + c + d;
    console.log(a, b , c, d);
}
third(5, 10);

// 4
function noNegative(a, b){
    if(a < 0 || b < 0){
        return;
    }
    return a + b;
}
const total = noNegative(5, -10);
console.log(total);

// 5
const fifth = {id: 201 , name:'ponchom', age: 40}
console.log(fifth.age, fifth.salary);

// 6
const sixth = [5,10,15,20,30]
console.log(sixth[1], sixth[5], sixth[200]);

// 7
const seventh = [5,10,15,20,30];
// should not do it, Instead use splice
delete seventh[1];
console.log(seventh[1], seventh[4]);

// 8
const eight = undefined; //instead use, eight = null;