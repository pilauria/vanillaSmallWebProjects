const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionariesBtn = document.getElementById('show-millionaries');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];

// FETCH RANDOM USER AND MONEY
// function getRandomUser() {
//   fetch('https://randomuser.me/api').then(res => res.json()).then(data =>   );
// }

getRandomUser();
getRandomUser();
getRandomUser();

async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api'); //returns a promise
  const data = await res.json(); // returns a promise

  console.log(data);
}
