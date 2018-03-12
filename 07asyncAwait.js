// Async Functions
// Await keyword

// https://hackernoon.com/es8-was-released-and-here-are-its-main-new-features-ee9c394adf66

const successCondition = false;
const delayAmount = 1000;

function fetchTextByPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (successCondition) {
        resolve('es8');
      } else {
        reject('Something went wrong');
      }
    }, delayAmount);
  });
}

// old busted:

// function sayHello () {
//   fetchTextByPromise()
//     .then(function(result) {
//       console.log('This isn\'t ' + result);
//     })
//     .catch(function(error) {
//       console.log('Error: '+ error);
//     })
// }

// new hotness:

async function sayHello() {
  try {
    const externallyFetchedText = await fetchTextByPromise();
    console.log(`Hello, ${externallyFetchedText} prints ${delayAmount} ms later`);
  } catch (err) {
    console.log(err);
  }
}

console.log('runs immediately');
sayHello();
console.log('doesn\'t get blocked');


// an async function always returns a promise
// "await keyword may only be used in functions marked with the async keyword"
