const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaries');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');
const reset = document.getElementById('reset');

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

// Fetch random user and add money
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();

  // console.log(data);
  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };
  addData(newUser);
}

// Double everyones Money: array.map()   ****
function doubleMoney() {
  data = data.map(user => {
    user.money = user.money * 2;
    return user;
  });
  updateDOM();
}

// Sort by richest: array.sort()
function sortByRichest() {
  data.sort((a, b) => {
    return b.money - a.money;
  });
  updateDOM();
}

// Show only Millionaries: array.filter()
function displayMillionaries() {
  data = data.filter(user => {
    return user.money > 1000000;
  });
  updateDOM();
}

// Calculate entire wealth
function displayWealth() {
  const wealth = data.reduce((acc, user) => {
    return acc + user.money;
  }, 0);
  // Create a new div elem that contains the wealth value.
  const wealthEl = document.createElement('div'); // create a new div
  wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(
    wealth
  )}</strong></h3>`;

  updateDOM(); // to not display multiple times the total wealth, if we press the whealth button several times
  // Insert wealth into the DOM
  main.appendChild(wealthEl);
}

// Reset / Clear UI
function resetUI() {
  updateDOM();
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';
  data = [];
}

// Add new obj to data arr
function addData(obj) {
  data.push(obj);

  updateDOM();
}

// Display the users in the DOM
function updateDOM(providedData = data) {
  // Clear main div
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

  //
  providedData.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
}

// Format number as money (https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string: 3rd answer)
function formatMoney(number) {
  return '$ ' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Event listener
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
showMillionairesBtn.addEventListener('click', displayMillionaries);
calculateWealthBtn.addEventListener('click', displayWealth);
reset.addEventListener('click', resetUI);

////////////////////////////////////////////
// Reduce with array of object example
// let data3 = [
//   { name: 1, money: 123 },
//   { name: 2, money: 456 },
//   { name: 3, money: 789 },
// ];

// function mamma() {
//   const wealth = data3.reduce((acc, user) => {
//     return acc + user.money;
//   }, 0);
//   console.log(wealth);
// }

// mamma();
