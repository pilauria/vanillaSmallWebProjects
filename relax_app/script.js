const container = document.getElementById('container');
const text = document.getElementById('text');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
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
}

// function stopBreathe() {
//   text.innerText = 'Breathe In!';
//   container.className = 'container';
// }

setInterval(breathAnimation, totalTime);

// start.addEventListener('click', () => {
//   pointerContainer.className = 'pointer container animation';
//   breathAnimation();
//   setInterval(breathAnimation, totalTime);
// });

// stop.addEventListener('click', () => {
//   setInterval(breathAnimation, 0);
// });
