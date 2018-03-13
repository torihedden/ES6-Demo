// convert a nodelist into an array

const team = document.querySelectorAll('.team-members button');
// console.log(team);

const teamArray = Array.from(team);
// console.log(teamArray);

/////////////////////////////////////////////////////////////////////////////

// or simply convert outright with Array.of

// console.log(Array.of(1, 1, 2, 3, 5, 8, 13));


/////////////////////////////////////////////////////////////////////////////

function listTeam (...teamMates) {

  for (const member of teamMates) {
    console.log(`${member} is a developer`);
  }
  return teamMates;
}

// console.log(listTeam('tori', 'jeff', 'michelle', 'alex', 'ward'));
