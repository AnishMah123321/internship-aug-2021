//let sym= Symbol.for('test');
sym= Symbol('hello');

console.log( Symbol.keyFor(sym) );
console.log( Symbol.valueOf(sym) );
console.log( sym );