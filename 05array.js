// convert a nodelist into an array

const team = document.querySelectorAll('.team-members button');
// console.log(team);

const teamArray = Array.from(team);
// console.log(teamArray);

/////////////////////////////////////////////////////////////////////////////

function listTeam (...teamMates) {

  for (const member of teamMates) {
    console.log(`${member} is a developer`);
  }
  // this works because spread converts the arguments object to an array, seen below
  return teamMates;
}

console.log(listTeam('tori', 'jeff', 'michelle', 'alex'));

/////////////////////////////////////////////////////////////////////////////

// or simply convert outright with Array.of

console.log(Array.of(1, 1, 2, 3, 5, 8, 13));
