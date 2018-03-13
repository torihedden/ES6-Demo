
// rest operator can take an arbitrary number of parameters and convert to an array, can use array methods on args
function formatMoney (...x) {
  return x.map(x => `$${x}.00`);
}

console.log(formatMoney(25, 45, 100, 500));

/////////////////////////////////////////////////////////////////////////////

function totalPayments (...y) {
  console.log(y);
  return y.reduce((a, b) => a + b, 0);
}

console.log(totalPayments(500, 300, 200));

/////////////////////////////////////////////////////////////////////////////

// spread operator also provides nice array construction and manipulation

const places = ['raleigh', 'durham'];
const triangle = [...places, 'chapel hill'];

console.log(triangle);

// let capital, cities;
// [capital, ...cities] = triangle;

// the following line is equivalent to the preceeding two commented-out lines
const [capital, ...cities] = triangle;

console.log(triangle);
console.log(capital);
console.log(cities);


/*
"When using spread, you are expanding a single variable into more"

"When using rest arguments, you are collapsing all remaining arguments of a function into one array"

"Spread syntax allows an iterable such as an array expression or string to be expanded
in places where zero or more arguments (for function calls) or elements
(for array literals) are expected, or an object expression to be expanded
in places where zero or more key-value pairs (for object literals) are expected."

"Rest syntax looks exactly like spread syntax, but is used for destructuring arrays and objects.
In a way, rest syntax is the opposite of spread syntax: spread 'expands' an array into its elements,
while rest collects multiple elements and 'condenses' them into a single element."
*/


// A nice way to convert to diff currencies rather than hand-roll currency formatting:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString#Using_options
