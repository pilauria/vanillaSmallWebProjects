const container = document.getElementById('container');
const text = document.getElementById('text');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const pointerContainer = document.querySelector('.pointer-container');
let intervalAnimation = null;

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

// breathAnimation();

let breathAnimation = function () {
  // console.log('Breathe In!');
  text.innerText = 'Breathe In!';
  container.className = 'container grow';

  setTimeout(() => {
    // console.log('Hold');
    text.innerText = 'Hold';

    setTimeout(() => {
      // console.log('Breathe Out!');
      text.innerText = 'Breathe Out!';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
};

// setInterval(breathAnimation, totalTime);

// function stopBreathe() {
//   text.innerText = 'Breathe In!';
//   container.className = 'container';
// }

start.addEventListener('click', () => {
  pointerContainer.className = 'pointer-container animation';
  breathAnimation();
  intervalAnimation = setInterval(breathAnimation, totalTime);
});

stop.addEventListener('click', () => {
  pointerContainer.className = 'pointer-container';
  container.className = 'container';
  text.innerText = 'Press start';
  clearInterval(intervalAnimation);
});
