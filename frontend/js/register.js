// Toggle password visibility
function togglePassword(inputId) {
    const passwordInput = document.getElementById(inputId);
    const icon = event.currentTarget.querySelector('i');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

// DOM references
const passwordInput = document.getElementById('password');
const strengthBar = document.getElementById('password-strength');
const strengthText = document.getElementById('strength-text');
const confirmInput = document.getElementById('confirmPassword');
const confirmError = document.getElementById('confirm-error');
const passwordError = document.getElementById('password-error');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const nameInput = document.getElementById('fullName');
const nameError = document.getElementById('name-error');

// Input events
passwordInput.addEventListener('input', checkPasswordStrength);
confirmInput.addEventListener('input', checkPasswordMatch);
emailInput.addEventListener('input', validateEmail);
nameInput.addEventListener('input', validateName);

function checkPasswordStrength() {
    const password = passwordInput.value;
    let strength = 0;

    if (password.length >= 8) strength += 1;
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1;
    if (password.match(/([0-9])/)) strength += 1;
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1;

    strengthBar.className = 'password-strength';
    strengthText.className = 'strength-text';

    if (password.length === 0) {
        strengthBar.style.width = '0';
        strengthText.textContent = '';
        passwordError.classList.remove('error-visible');
    } else if (strength < 2) {
        strengthBar.classList.add('weak');
        strengthText.classList.add('text-weak');
        strengthText.textContent = 'Weak';
        passwordError.classList.add('error-visible');
    } else if (strength < 4) {
        strengthBar.classList.add('medium');
        strengthText.classList.add('text-medium');
        strengthText.textContent = 'Medium';
        passwordError.classList.remove('error-visible');
    } else {
        strengthBar.classList.add('strong');
        strengthText.classList.add('text-strong');
        strengthText.textContent = 'Strong';
        passwordError.classList.remove('error-visible');
    }

    if (confirmInput.value) checkPasswordMatch();
}

function checkPasswordMatch() {
    if (confirmInput.value === '') {
        confirmError.classList.remove('error-visible');
        return;
    }

    if (passwordInput.value !== confirmInput.value) {
        confirmError.classList.add('error-visible');
    } else {
        confirmError.classList.remove('error-visible');
    }
}

function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value === '' || emailRegex.test(emailInput.value)) {
        emailError.classList.remove('error-visible');
    } else {
        emailError.classList.add('error-visible');
    }
}

function validateName() {
    if (nameInput.value.trim() !== '') {
        nameError.classList.remove('error-visible');
    } else {
        nameError.classList.add('error-visible');
    }
}

// Show toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = toast.querySelector('.toast-message');
    toastMessage.textContent = message;

    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// Form submission
document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const fullName = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmInput.value;
    let isValid = true;

    if (fullName.trim() === '') {
        nameError.classList.add('error-visible');
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.classList.add('error-visible');
        isValid = false;
    }

    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1;
    if (password.match(/([0-9])/)) strength += 1;
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1;
    if (strength < 2) {
        passwordError.classList.add('error-visible');
        isValid = false;
    }

    if (password !== confirmPassword) {
        confirmError.classList.add('error-visible');
        isValid = false;
    }

    if (!isValid) return;

    localStorage.setItem('userName', fullName);
    localStorage.setItem('userEmail', email);
    showToast('Account created successfully!');
    setTimeout(() => window.location.href = 'login.html', 2000);
});

// Social login
document.querySelector('.google').addEventListener('click', function (e) {
    e.preventDefault();
    showToast('Connecting to Google...');
    setTimeout(() => {
        localStorage.setItem('socialLogin', 'google');
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'index.html';
    }, 1500);
});

document.querySelector('.facebook').addEventListener('click', function (e) {
    e.preventDefault();
    showToast('Connecting to Facebook...');
    setTimeout(() => {
        localStorage.setItem('socialLogin', 'facebook');
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'index.html';
    }, 1500);
});
