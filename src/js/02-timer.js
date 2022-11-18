// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

const flatpickr = require('flatpickr');

const startButton = document.querySelector('[data-start]');
startButton.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const choosenDate = selectedDates[0];
    console.log(choosenDate);
    if (choosenDate < new Date()) {
      alert('Please, choose correct date.');
      location.reload();
      return;
    }
    startButton.disabled = false;
  },
};

startButton.addEventListener('click', convertMs);

const timer = {
  start() {
    const startTime = Date.now();

    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const { hours, mins, secs } = convertMs(deltaTime);

      // console.log(
      //   `${pad(new Date(deltaTime).getUTCHours())}:${pad(
      //     new Date(deltaTime).getMinutes()
      //   )}:${pad(new Date(deltaTime).getSeconds())}`
      // );

      console.log(
        `${new Date(deltaTime).getUTCHours()}:${new Date(
          deltaTime
        ).getMinutes()}:${new Date(deltaTime).getSeconds()}`
      );
    }, 1000);
  },
};
timer.start();

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
flatpickr('#datetime-picker', options);

console.log(new Date());
