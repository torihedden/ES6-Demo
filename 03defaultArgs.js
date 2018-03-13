// default arguments in functions

// old and busted:

function greet (x, greeting) {
  x = x || 'userName';
  greeting = greeting || 'hi';

  return greeting + ', ' + x;
}

console.log(greet());
console.log(greet(undefined, undefined));
console.log(greet('tori'));
console.log(greet('tori', 'good afternoon'));

/////////////////////////////////////////////////////////////////////////////

// new hotness:

const greeting = 'hello';
const user = 'userName';

function greetES6 (x = user, greet = greeting) {
  return `${greet}, ${x}`;
}

console.log(greetES6());
console.log(greetES6(undefined, undefined));
console.log(greetES6('tori'));
console.log(greetES6('tori', 'good afternoon'));
