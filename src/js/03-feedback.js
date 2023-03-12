import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

console.log(input);
console.log(textarea);

const formData = {};

formEl.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  console.log(formData);

  event.currentTarget.reset();
});

formEl.addEventListener(
  'input',
  throttle(event => {
    formData[event.target.name] = event.target.value;

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }, 500)
);

if (localStorage.getItem('feedback-form-state')) {
  const email = JSON.parse(localStorage.getItem('feedback-form-state')).email;
  const message = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).message;

  input.textContent = email;
  textarea.textContent = message;
}
