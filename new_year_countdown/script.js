const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.querySelector('.countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');
const time = document.querySelector('.time');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Set Backgroud year
year.innerText = currentYear + 1;

// Update countdown time
function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;
  // console.log(diff); //milliseconds from now until then

  const dayss = Math.floor(diff / 1000 / 60 / 60 / 24); // convert to seconds (1000)/ minutes(60) / hours (60) / hours (24)
  const hourss = Math.floor(diff / 1000 / 60 / 60) % 24; //(module (%)24 to take into account the hours that have already passed)
  const minutess = Math.floor(diff / 1000 / 60) % 60; // (module (%)60 to take into account the minutes that have already passed))
  const secondss = Math.floor(diff / 1000) % 60; // (module (%)60 to take into account the seconds that have already passed))

  // Add values to DOM
  days.innerHTML = dayss;
  hours.innerHTML = hourss < 10 ? '0' + hourss : hourss;
  minutes.innerHTML = minutess < 10 ? '0' + minutess : minutess;
  seconds.innerHTML = secondss < 10 ? '0' + secondss : secondss;
}

// Show spinner before countdown
setTimeout(() => {
  loading.remove();
  countdown.style.display = 'flex';
}, 1000);

// setUnterval take a function and run it every second we pass as a second parameter
setInterval(updateCountdown, 1000);
