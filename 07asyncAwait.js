// Async Functions
// Await keyword

// https://hackernoon.com/es8-was-released-and-here-are-its-main-new-features-ee9c394adf66

function fetchTextByPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("es8");
    }, 2000);
  });
}

async function sayHello() {
  const externalFetchedText = await fetchTextByPromise();
  console.log(`Hello, ${externalFetchedText}`); // Hello, es8
}

console.log('runs immediately');
sayHello();
console.log('doesn\'t get blocked');


// an async function always returns a promise
// "await keyword may only be used in functions marked with the async keyword"
