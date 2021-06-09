const wrongLettersEl = document.getElementById('wrong-letters');
const wordEl = document.getElementById('word');
const popup = document.getElementById('popup-container');
const playAgainBtn = document.getElementById('play-button');
const finalMessage = document.getElementById('final-message');
const notification = document.getElementById('notification-container');
const figureParts = document.querySelectorAll('.figure-part');

// Create an array of words to pick from. Each time we came to the game, it loads a random word(with a fetch request to a back end database). In this case we hard code some words:
const words = [
  'application',
  'programming',
  'interface',
  'wizard',
  'javascript',
];

// Take a random word from the 'words' array
let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = []; //correct letter will be pushed here
const wrongLetters = []; // wrong letters will be pushed here

// Show hidden word (run initially & after every guess, to tell the user if he won or not)
const displayWord = function () {
  wordEl.innerHTML = `${selectedWord
    .split('') // transform the letter in an array of letters: ['a', 'p', 'p', 'l', 'i', 'c', 'a', 't', 'i', 'o', 'n'];
    .map(
      // ***
      letter => `
      <span class="letter">
      ${correctLetters.includes(letter) ? letter : ''}</span>
      `
    )
    .join('')}`;

  // +++ remove the new line character(if we console.log(wordEl.innerText) right now each letter is diplayed in a new line);
  // console.log(wordEl.innerText, innerWord);  // Now innerWord is diplayed in a line
  const innerWord = wordEl.innerText.replace(/\n/g, '');

  if (innerWord === selectedWord) {
    finalMessage.innerText = ' Congratulations you won! 🏆';
    popup.style.display = 'flex';
  }
};

// Update the wrong letters
const updateWrongLettersEl = function () {
  // Display wron letters
  wrongLettersEl.innerHTML = `
  ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
  ${wrongLetters.map(letter => `<span>${letter}</span>`)}`;

  // Display parts ('figure-part')
  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;

    if (index < errors) {
      part.style.display = 'block';
    } else {
      part.style.display = 'none';
    }
  });
  // check if we lost the game(full figure-part)
  if (wrongLetters.length === figureParts.length) {
    finalMessage.innerText = 'Unfortunately you lost. 😭';
    popup.style.display = 'flex';
  }
};

// Show notification (add/remove the show class)
const showNotification = function () {
  notification.classList.add('show');

  // The notification disappears automatically after a certan amount of time
  setTimeout(() => {
    notification.classList.remove('show');
  }, 2500);
};

// Keydown letter press (only letters 65(a) to 90(z))
window.addEventListener('keydown', e => {
  // console.log(e.keyCode);
  if (e.keyCode <= 90 && e.keyCode >= 65) {
    const letter = e.key;

    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);

        //update the word element to show the new letter
        displayWord();
      } else {
        showNotification();
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);

        updateWrongLettersEl();
      } else {
        showNotification();
      }
    }
  }
});

// Restart game and play again
playAgainBtn.addEventListener('click', () => {
  // Empty arrays
  correctLetters.splice(0);
  wrongLetters.splice(0);

  // Get again a random word from the array
  selectedWord = words[Math.floor(Math.random() * words.length)];

  // Init
  displayWord();
  //clean up the wrong letters and hide the figure
  updateWrongLettersEl();
  //Ide the pop up
  popup.style.display = 'none';
});

displayWord();

/* ***  loop through this array of letters and see if the selected letter is included in that array: if it is we gonna output the letter, if not it's just an empty string and then we simply turn it back into a string */

/* +++  the newline characters in wordEl come from the map method, because each letter is in a span.  .word is displayed flex (in CSS), and all letters are horizontally aligned but this only works in html when css is applied, not in javascript. Javascript will return a bunch of spans with class letter and innerText only returns the content not the elements(spans) and after each letter it will return \n because of combination of split, map and join methods.*/
