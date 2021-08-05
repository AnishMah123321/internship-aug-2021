const apple = {
    color: 'red',
    amount : '40',
    cost: 30,

}

const banana = Object.assign({}, apple);


  
banana.name = 'yellow';
banana.amount = '54';
banana.cost = 20;

console.log(apple.color);
console.log(banana.color);