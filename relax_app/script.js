const container = document.getElementById('container');
const text = document.getElementById('text');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const pointerContainer = document.querySelector('.pointer-container');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

// breathAnimation();

let intervalAnimation = null;
let holdTimeout = null;
let breathOutTimeout = null;

function breathAnimation() {
  // console.log('Breathe In!');
  text.innerText = 'Breathe In!';
  container.className = 'container grow';

  holdTimeout = setTimeout(() => {
    // console.log('Hold');
    text.innerText = 'Hold';

    breathOutTimeout = setTimeout(() => {
      // console.log('Breathe Out!');
      text.innerText = 'Breathe Out!';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}

// setInterval(breathAnimation, totalTime);

start.addEventListener('click', () => {
  pointerContainer.className = 'pointer-container animation';
  breathAnimation();
  intervalAnimation = setInterval(breathAnimation, totalTime);
});

stop.addEventListener('click', () => {
  // console.log('stop');
  clearInterval(intervalAnimation);
  // intervalAnimation = 0;
  clearTimeout(holdTimeout);
  // holdTimeout = 0;
  clearTimeout(breathOutTimeout);
  // breathOutTimeout = 0;
  text.innerText = 'Press Start';
  pointerContainer.className = 'pointer-container';
  container.className = 'container';
});
