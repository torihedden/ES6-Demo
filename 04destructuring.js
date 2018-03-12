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
const {age : memberAge, dependents, paymentHistory : payments} = memberData;
const {dental : isDental, pharmacy : isPharmacy} = memberData.policies;
console.log(memberAge);
console.log(dependents);
console.log(payments);
console.log(isDental);
console.log(isPharmacy);


const paymentThreshold = 200;

function highPayments (amt) {
  return amt > paymentThreshold;
}

// console.log(payments.filter(highPayments));
