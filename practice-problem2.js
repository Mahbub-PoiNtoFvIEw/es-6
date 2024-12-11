const getEven = (even) =>{
    return even;
}

const friends = ['mahbub','alamin','prince','masud','rajib','kazol'];
const evenFFriend = [];
for(const friend of friends){
    if(friend.length % 2 === 0){
        evenFFriend.push(friend);
        // console.log(friend)
    }
}
console.log(getEven(...[evenFFriend]));