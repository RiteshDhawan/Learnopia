const form = document.querySelector('form');
const nam = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (nam.value === ' ' || email.value === ' ' || message.value === ' ') {
        alert('Please fill out all fields.');
    } else {
        alert(`Thank you for your message, ${nam.value}!`);
        nam.value = '';
        email.value = '';
        message.value = '';
    }
});
