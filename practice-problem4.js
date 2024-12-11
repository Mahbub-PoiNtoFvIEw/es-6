const getMaximum = (arr1,arr2) =>{
    const combineTwoArray = [...arr1,...arr2];
    const max = Math.max(...combineTwoArray);
    return max;
}

const array1 = [10,49,5,16,4];
const array2 = [8,6,14,20,39];
const maxiNumber = getMaximum(...[array1],...[array2]);
console.log(Math.max(maxiNumber));