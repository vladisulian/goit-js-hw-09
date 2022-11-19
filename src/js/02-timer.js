import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const flatpickr = require('flatpickr');

// all modules
import Notiflix from 'notiflix';

// one by one
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Block } from 'notiflix/build/notiflix-block-aio';

const startButton = document.querySelector('[data-start]');

startButton.disabled = true;

const clockface = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const choosenDate = selectedDates[0];

    if (choosenDate < new Date()) {
      Notiflix.Notify.warning('Please, choose correct date.', {
        clickToClose: true,
      });
      // console.log(choosenDate);
      // alert('Please, choose correct date.');
      // location.reload();
      return;
    }
    Notiflix.Notify.success('You can start to count', {
      clickToClose: true,
    });
    startButton.disabled = false;
  },
};
// console.log(Date.now());
startButton.addEventListener('click', () => {
  timer.start();
});

// ! Date.parse(choosenDate)

const timer = {
  start() {
    setInterval(() => {
      const userDate = document.querySelector('#datetime-picker');
      const currentTime = Date.parse(userDate.value);

      // console.log('Выбранная дата', currentTime);
      // console.log('Стартовая дата', startTime);

      const deltaTime = currentTime - Date.now();
      const { days, hours, minutes, seconds } = convertMs(deltaTime);

      // * console.log(
      //   `${new Date(deltaTime).getUTCHours()}:${new Date(
      //     deltaTime
      //   ).getMinutes()}:${new Date(deltaTime).getSeconds()}`
      // );

      updateClockface({ days, hours, minutes, seconds });
      addLeadingZero();
      console.log(clockface.days.textContent.length < 2);
    }, 1000);
  },
};

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
function updateClockface({ days, hours, minutes, seconds }) {
  clockface.days.textContent = `${days}`;
  clockface.hours.textContent = `${hours}`;
  clockface.minutes.textContent = `${minutes}`;
  clockface.seconds.textContent = `${seconds}`;
}
function addLeadingZero() {
  clockface.days.textContent = clockface.days.textContent.padStart(2, '0');
  clockface.hours.textContent = clockface.hours.textContent.padStart(2, '0');
  clockface.minutes.textContent = clockface.minutes.textContent.padStart(
    2,
    '0'
  );
  clockface.seconds.textContent = clockface.seconds.textContent.padStart(
    2,
    '0'
  );
}
flatpickr('#datetime-picker', options);
