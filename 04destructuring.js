// Destructuring

const memberData = {
  age : 30,
  dependents : {
    sam : {
      age : 15
    },
    josh : {
      age : 18
    }
  },
  paymentHistory : [150.00, 780.00, 325.00, 500, 900],
  policies : {
    dental : true,
    pharmacy: false
  }
}

// old way :
// const age = memberData.age;
// const dental = memberData.policies.dental;
// console.log(age, dental);

// new way :
const {age, dependents, paymentHistory : payments} = memberData;
const {dental : isDental, pharmacy : isPharmacy} = memberData.policies;

console.log(age);
console.log(payments);
console.log(isDental);
console.log(isPharmacy);

/////////////////////////////////////////////////////////////////////////////
// .filter isn't new but is used with arrow functions a lot

const paymentThreshold = 200;

console.log(payments.filter(payment => payment > paymentThreshold));
