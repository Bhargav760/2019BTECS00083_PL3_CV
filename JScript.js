let email = document.querySelector('#email');
let name = document.querySelector('#name');
let form = document.querySelector('#contact');
function checkName() {
    let valid = false;
    let nm = name.value.trim();
    if (!isRequired(nm)) {
        showError(name, 'First name cannot be blank.');
    } else {
        showSuccess(name);
        valid = true;
    }
    return valid;
};

function checkEmail () {
    let valid = false;
    let mail = email.value.trim();
    if (!isRequired(mail)) {
        showError(email, 'Email cannot be blank.');
    } else if (!isEmailValid(mail)) {
        showError(email, 'Email is not valid.')
    } else {
        showSuccess(email);
        valid = true;
    }
    return valid;
};

function isEmailValid (email)  {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

let isRequired = value => value === '' ? false : true;
function showError  (input, message) {
    let formField = input.parentElement;
    console.log('FormField is'+formField);
    formField.classList.remove('success');
    formField.classList.add('error');
    let error = formField.querySelector('small');
    error.textContent = message;
};

function showSuccess  (input) {
    let formField = input.parentElement;
    formField.classList.remove('error');
    formField.classList.add('success');
    let error = formField.querySelector('small');
    error.textContent = '';
}
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let isNameValid=checkName(),isEmailValid=checkEmail(), 
    let isFormValid = isnameValid  && isEmailValid ;
    if (isFormValid) {
        console.log('showing alert');
alert('Successfully submitted');
    }
});
function debounce  (fn, delay = 500)  {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};
form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'name':
            checkName();
            break;
        case 'email':
            checkEmail();
            break;
        case 'purpose':
            checkPurpose();
            break;
    }
}));
