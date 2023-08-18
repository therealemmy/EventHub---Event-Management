let form = document.getElementById('form');
let fullName = document.getElementById('fullName');
let phoneNo = document.getElementById('phoneNo');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');


form.addEventListener('submit', e => {

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error')
};


const validateInputs = () => {
    const fullNameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if(fullNameValue === '') {
        setError(fullName, 'Full Name is required');
    } else {
        setSuccess(fullName);
    }

    if (phoneNoValue === '') {
        setError(phoneNo, 'Phone Number is required');
    } else {
        setSuccess(phoneNo);
    }

    if (emailValue === '') {
        setError(email,'Email is required');
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 characters');
    } else {
        setSuccess(password);
    }

    if (confirmPassword === '') {
        setError(confirmPassword, 'Please confirm your password');
    } else if (confirmPasswordValue !== passwordValue) {
        setError(confirmPassword, 'Passwords does not match');
    } else {
        setSuccess(confirmPassword);
    }

};

