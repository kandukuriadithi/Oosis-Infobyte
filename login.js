const form = document.getElementById('form');
const firstname_input = document.getElementById('fristname-input'); // Fix ID typo
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const repeat_password_input = document.getElementById('repeat-password-input');
const error_message = document.getElementById('error-message');

form.addEventListener('submit', (e) => {  // Fix typo from 'sumbit' to 'submit'
    let errors = [];

    errors = getSignupFormErrors(firstname_input.value, email_input.value, password_input.value, repeat_password_input.value);

    if (errors.length > 0) {
        e.preventDefault();
        error_message.innerText = errors.join(". ");
    }
});

function getSignupFormErrors(firstname, email, password, repeatpassword) {
    let errors = [];

    if (!firstname) {
        errors.push('Firstname is required');
        firstname_input.parentElement.classList.add('incorrect');
    }
    if (!email) {
        errors.push('Email is required');
        email_input.parentElement.classList.add('incorrect');
    }
    if (!password) {
        errors.push('Password is required');
        password_input.parentElement.classList.add('incorrect');
    }
    if (password !== repeatpassword) {
        errors.push('Passwords do not match');
        repeat_password_input.parentElement.classList.add('incorrect');
    }
    return errors;
}

const allInputs = [firstname_input, email_input, password_input, repeat_password_input];
allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.parentElement.classList.contains('incorrect')) {
            input.parentElement.classList.remove('incorrect');
            error_message.innerText=''
        }
    });
});
