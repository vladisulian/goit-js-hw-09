import Notiflix from 'notiflix';
const formElements = {
  delay: document.querySelector('[name="delay"]'),
  delayStep: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
  submitButton: document.querySelector('[type="submit"]'),
};
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

// createPromise(2, 1500)
//   .then(() => console.log(result))
//   .catch(() => console.log(error));

const form = document.querySelector('form');
// console.log(form)
formElements.submitButton.addEventListener('click', element => {
  element.preventDefault();
  let firstDelay = Number(formElements.delay.value);
  let delayStep = Number(formElements.delayStep.value);
  for (let i = 0; i < formElements.amount.value; i++) {
    createPromise(1 + i, firstDelay + i * delayStep)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
});
