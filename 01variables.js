// scoping review
// var scoped to a function- if not in function, scoped globally

var test = 'foo';

function testFunction () {
  var bar = true;
  return test;
}

console.log(testFunction());

console.log(bar);

/////////////////////////////////////////////////////////////////////////////
// let and const are block scoped

if (true) {
  var animals = true;
  let dogs = false;
  const birds = 'mango';
}

console.log(animals);
// console.log(dogs);
// console.log(birds);

/////////////////////////////////////////////////////////////////////////////
// cannot re-assign a const, but that does NOT mean it is immutable - it is immutable binding
// (properties of a const variable can be changed)
// if you need to freeze an object, use Object.freeze(obj)

const me = {
  name : 'tori',
  age : 28
}

me = 'tori';

me.age = 40;

console.log(me);
