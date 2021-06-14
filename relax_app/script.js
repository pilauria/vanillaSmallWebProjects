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

setInterval(breathAnimation, totalTime);

////////////////////////////////////
// Right now the app start as the page is loaded. I want to add 'start/stop' buttons.
// I need to add 2 event listeren (1 for the 'start' button', 1 for the 'stop' button).

// function stopBreathe() {
//   text.innerText = 'Breathe In!';
//   container.className = 'container';
// }

// start.addEventListener('click', () => {
//   pointerContainer.className = 'pointerContainer animation';   <=== I don't know how to change this class
//   breathAnimation();
//   setInterval(breathAnimation, totalTime);
// });

// stop.addEventListener('click', () => {
//   setInterval(breathAnimation, 0);
// });
