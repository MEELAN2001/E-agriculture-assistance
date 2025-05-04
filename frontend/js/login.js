// Password visibility toggle
document.getElementById('password-toggle').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const icon = this.querySelector('i');
 
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
 });
 
 // Form validation and submission
 document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('remember').checked;
 
    // Reset error messages
    document.getElementById('username-error').style.display = 'none';
    document.getElementById('password-error').style.display = 'none';
    document.getElementById('login-error').style.display = 'none';
 
    // Validate inputs
    let isValid = true;
 
    if (!username || username.trim() === '') {
        document.getElementById('username-error').style.display = 'block';
        isValid = false;
    }
 
    if (!password || password.length < 6) {
        document.getElementById('password-error').style.display = 'block';
        isValid = false;
    }
 
    if (isValid) {
        // Simulate successful login
        localStorage.setItem('loggedIn', 'true');
 
        if (rememberMe) {
            localStorage.setItem('rememberedUser', username);
        } else {
            localStorage.removeItem('rememberedUser');
        }
 
        document.getElementById('login-success').style.display = 'block';
 
        setTimeout(function() {
            window.location.href = 'index.html';
        }, 1500);
    } else {
        document.getElementById('login-error').style.display = 'block';
    }
 });
 
 // Optional: Load remembered username
 window.addEventListener('DOMContentLoaded', () => {
    const remembered = localStorage.getItem('rememberedUser');
    if (remembered) {
        document.getElementById('username').value = remembered;
        document.getElementById('remember').checked = true;
    }
 });
 