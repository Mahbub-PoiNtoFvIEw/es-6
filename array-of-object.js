const products = [
    {id:1, name:'Lenovo', price: 48000},
    {id:2, name:'Dell', price: 45000},
    {id:3, name:'Hp', price: 80000},
    {id:4, name:'Mack Book', price: 165000},
];

// map
const names = products.map(product => product.name)
console.log(names);

// forEach
products.forEach(product => console.log(product.id));

// filter
const expensive =products.filter(product => product.price >= 80000);
console.log(expensive);

// find 
const affordable = products.find(p => p.price < 50000)
console.log(affordable)