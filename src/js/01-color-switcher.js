const buttons = {
  startButton: document.querySelector('[data-start]'),
  endbutton: document.querySelector('[data-stop]'),
};
function switchColor() {
  document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttons.endbutton.disabled = true;

let intervalId;

buttons.startButton.addEventListener('click', () => {
  intervalId = setInterval(switchColor, 1000, 1000);

  buttons.startButton.disabled = true;
  buttons.endbutton.disabled = false;
});

buttons.endbutton.addEventListener('click', () => {
  clearInterval(intervalId);

  buttons.startButton.disabled = false;
  buttons.endbutton.disabled = true;
});
