// Arrow functions are NOT synonymous with normal functions
// they are not named functions - they are anonymous
// they have concise syntax
// single line functions have implicit returns
// doesn't re-bind value of "this" to within current scope
// "this" is inherited from whatever the parent scope is
// additionally, do not define arguments object, but accesses the arguments object from the enclosing scope


// let's reformat this arrow function to make it more concise
const echo = (x) => {
  return x;
}

// console.log(echo('hello, world'));

/////////////////////////////////////////////////////////////////////////////

// explore and utilize scope differences b/n arrow and conventional functions

const demoButton = document.querySelector('button');

demoButton.addEventListener('click', function () {
  console.log(this, 'first');
  setTimeout( function () {
    console.log(this, 'second');
    this.setAttribute('disabled', 'disabled');
  }, 1000);
})

/*
https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
"The usual rules for setting the 'this' keyword for the called function apply,
and if you have not set this in the call or with bind, it will default to
the global (or window) object in non–strict mode, or be undefined in strict mode.
Note: The default this value of a setTimeout callback will still be the window object, and not undefined, even in strict mode."
*/

/////////////////////////////////////////////////////////////////////////////

// some style choices

const pets = ['rosie', 'jubilee', 'annie', 'dillon'];
const lastName = 'smith';

// const fullPetNames = pets.map(function(pet) {
//   return `${pet} ${lastName}`;
// })

// const fullPetNames = pets.map((pet) => {
//   return `${pet} ${lastName}`;
// })

// const fullPetNames = pets.map(pet => {
//   return `${pet} ${lastName}`;
// })

const fullPetNames = pets.map(pet => `${pet} ${lastName}`);

// console.log(fullPetNames);

/////////////////////////////////////////////////////////////////////////////

// don't use an arrow function if you need to use the arguments object

const count = (x, y) => {
  return Array.from(arguments);
}

// console.log(count(1, 2, 4, 8));

/////////////////////////////////////////////////////////////////////////////

// what is another case where I can't use an arrow function?
// when a method is bound to an object and utilizes 'this'

const dog = {
  breed : 'pomeranian',
  bark : () => {
    return 'bark bark';
  },
  getBreed : function () {
    return `This dog is a ${this.breed}`;
  }
}

// console.log(dog.bark());
// console.log(dog.getBreed());
