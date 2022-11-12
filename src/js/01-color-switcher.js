function switchColor(interval) {
  document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.log('Смена цвета');

const buttons = {
  startButton: document.querySelector('[data-start]'),
};
console.log(buttons.startButton);
const intervalId = setInterval(switchColor, 1000, 1000);
