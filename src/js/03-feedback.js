import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('.feedback-form input');
const messageEl = document.querySelector('.feedback-form textarea');

const formData = {};

const handleFormSubmit = event => {
  formData[emailEl.name] = emailEl.value;
  formData[messageEl.name] = messageEl.value;

  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();

  console.log(formData);
};
const handleFormElInput = event => {
  formData[emailEl.name] = emailEl.value;
  formData[messageEl.name] = messageEl.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};
const populateFormWithLocalStorage = data => {
  emailEl.value = JSON.parse(data).email;
  messageEl.value = JSON.parse(data).message;
};

formEl.addEventListener('submit', handleFormSubmit);

formEl.addEventListener('input', throttle(handleFormElInput, 500));

if (localStorage.getItem('feedback-form-state')) {
  populateFormWithLocalStorage(localStorage.getItem('feedback-form-state'));
}
