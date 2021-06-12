## Implementing 'start/stop' buttons

- Right now the animation starts as I load the page, continiously.
- I want the animation to starts/stops as I press the buttons.
  For the start button if I do:

```
start.addEventListener('click', () => {
  pointerContainer.className = 'pointerContainer animation';   <===
  breathAnimation();
  setInterval(breathAnimation, totalTime);
});
```

the grow/shrink funcionality works. I can't make the pointer move(I don't remember how to select and change the className of the pointer _'.pointer-container.animation'_)

---

- I need some hint to implement the stop functionality
