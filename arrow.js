// function declaration, ES5
function add(a,b){
    return a+b;
}
console.log(add(5,10));

// function expression/anonymous 
const add2 = function(a,b){
    return a+b;
}
console.log(add2(10,15));

// arrow function, ES6
const add3 = (a,b) => a+b;//implicit return, mane sadaron choke dekha jayna
console.log(add3(10,25));

//single parameter or one parameter can used either (), not ()
const getAge = (person) => person.age;
student = {name:'mahbub', age:28}
console.log('s age',getAge(student));

const multiplication = number => number *2;
console.log(multiplication(5));

//large function if needed body
const multiAdd = (a,b,c) =>{
    return (a+b)*c;
}
console.log(multiAdd(5,10,6));
