// Mobile Menu Toggle
document.getElementById('mobile-menu-btn').addEventListener('click', function() {
    document.getElementById('navbar').classList.toggle('active');
    const icon = this.querySelector('i');
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Back to top button visibility
    const backToTop = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#') return;
        
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            document.getElementById('navbar').classList.remove('active');
            const icon = document.querySelector('.mobile-menu-btn i');
            if (icon.classList.contains('fa-times')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
});

// Check login state
window.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    const loginLink = document.getElementById('open-login');

    if (isLoggedIn) {
        // Change login to account
        loginLink.textContent = 'My Account';
        loginLink.href = '#account';
        
        // Add logout button
        const logoutBtn = document.createElement('li');
        const logoutLink = document.createElement('a');
        logoutLink.textContent = 'Logout';
        logoutLink.href = '#';
        logoutLink.addEventListener('click', () => {
            localStorage.removeItem('loggedIn'); // Clear login state
            window.location.href = 'index.html'; // Redirect to home page
        });
        logoutBtn.appendChild(logoutLink);
        document.querySelector('.navbar').appendChild(logoutBtn);
    } else {
        // Redirect to login page if not logged in
        // Uncomment the following line if you want to restrict access to services page
        // window.location.href = 'login.html';
    }
});
