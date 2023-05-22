const login = document.getElementById('login');
const password = document.getElementById('password');
const enter = document.getElementById('enter');
const form = document.getElementById('form');
const emailFilter = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const errorMessage = document.createElement('p');

 function validateEnter() {
    if (login.value === "" ||  password.value === "") {
        enter.disabled = true;
    } else {
        enter.disabled = false;
    }}

login.addEventListener('input', validateEnter);
password.addEventListener('input', validateEnter);
login.addEventListener('blur', function() {

    if (!emailFilter.test(login.value)) {
        errorMessage.className = 'error';
        errorMessage.textContent = 'Value entered in the wrong format';
        document.body.appendChild(errorMessage);
    }
});

enter.addEventListener('click', (e) => {
    e.preventDefault()
    if (login.value === 'admin@gmail.com' && password.value === 'password123') {
        form.style.display = "none";
        errorMessage.textContent = 'You can login in to your account';
        document.body.appendChild(errorMessage);
    } else if (password.value.length < 6) {
            errorMessage.textContent = 'Incorrect format password entered: minimum 6 characters';
            form.appendChild(errorMessage);
            password.value = '';
    } else if (!emailFilter.test(login.value)) {
        errorMessage.textContent = 'Incorrect format email entered';
        form.appendChild(errorMessage);
        password.value = '';
    } else if (emailFilter.test(login.value) && password.value.length > 6) {
            errorMessage.textContent = 'Incorrect login/password entered';
            form.appendChild(errorMessage);
            password.value = '';
    }
})

