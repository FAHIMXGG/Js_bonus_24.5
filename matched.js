const numbers = [34, 434, 55, 545, 45, 654];
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
    
}

//short- for off loop
for(const number of numbers){
    console.log(number);
}

const products = [
    {id: 1, name: 'xiami phone One night', price: 19000},
    {id: 2, name: 'iphone', price: 19000},
    {id: 3, name: 'mac book air', price: 119000},
    {id: 4, name: 'lenovo yoga laptop 2025', price: 19000},
    {id: 5, name: 'Dell inspiron laptop', price: 19000},
    {id: 6, name: 'Samsung phone note 7', price: 19000},
    {id: 7, name: 'Nokia old age phone gone', price: 19000},
    {id: 8, name: 'Phone one', price: 19000},
];
// for(const product of products){
//     console. log(product)
// }