const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)'); //put the selected in a nodeList(similar to an array)
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();

let ticketPrice = +movieSelect.value;

// Save selected movie index and price in the local storage
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Update the total selected seats and the price
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  //get a list of the index of the selected seats
  const seatIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  //save seatIndex in local storage (go to application/local storage)
  localStorage.setItem('selectedSeats', JSON.stringify(seatIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

/////////////////////////////////
// GET DATA FROM LOCAL STORAGE AND POPULATE UI

function populateUI() {
  //pull out the selected seat from local storage
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats')); // JSON.parse do the opposite of JSON.stringify

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1)
        // if selectedSeats is in the array (-1 is when is not in the array(indexOf method))
        seat.classList.add('selected');
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

//////////////////////////////////
////  IMPLEMENTING FUNCTIONALITY

// Movie select event
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Seat click event
container.addEventListener('click', e => {
  /* console.log(e.target); show the element i click on, inside of the container */
  // select/unselect the seat
  if (
    e.target.classList.contains('seat') && // +++
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected'); //classList: add/remove/toggle

    updateSelectedCount();
  }
});

// Initial count and total set
updateSelectedCount();

//+++ we check if what we selected have a class of seat but not a class of occupied

////////////////////////////////
//// SAVE DATA TO LOCAL STORAGE (so we don't lose the data if we reload the page)
// Copy selected seats into arr
// Map through array
// return a new array indexes
