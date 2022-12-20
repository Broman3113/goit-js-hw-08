import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
}

const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));

const formData = savedData || {};

console.log(savedData);

refs.form.elements.email.value = savedData?.email || '';
refs.form.elements.message.value = savedData?.message || "";

refs.form.addEventListener('input', throttle(onInputChange, 500));
refs.form.addEventListener('submit', onFormSubmit);

function onInputChange(e) {
    formData[e.target.name] = e.target.value;
    console.log(formData);
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
    console.log(formData);
}