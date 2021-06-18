const msgEl = document.getElementById('msg');

const randomNum = function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
};

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

// Start recognition and game
recognition.start();

console.log(randomNum());

// SPeak result
