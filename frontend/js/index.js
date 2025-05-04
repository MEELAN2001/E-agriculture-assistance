
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
});

// Check login state and show/hide services section
window.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    const loginLink = document.getElementById('open-login');
    const footerLoginLink = document.getElementById('footer-login-link');

    // Handle service links
    document.querySelectorAll('.service-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const service = this.getAttribute('data-service');
            
            if (isLoggedIn) {
                window.location.href = `services.html#${service}`;
            } else {
                // Store the service they were trying to access
                localStorage.setItem('requestedService', service);
                window.location.href = 'login.html';
            }
        });
    });

    if (isLoggedIn) {
        // Change login to account and redirect to dashboard.html
        loginLink.textContent = 'My Account';
        loginLink.href = 'dashboard.html';
        
        // Also update footer login link
        if (footerLoginLink) {
            footerLoginLink.textContent = 'My Account';
            footerLoginLink.href = 'dashboard.html';
        }
        
        // Add logout button
        const logoutBtn = document.createElement('li');
        const logoutLink = document.createElement('a');
        logoutLink.textContent = 'Logout';
        logoutLink.href = '#';
        logoutLink.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('loggedIn'); // Clear login state
            localStorage.removeItem('userName'); // Clear user name
            window.location.reload(); // Reload page
        });
        logoutBtn.appendChild(logoutLink);
        document.querySelector('.navbar').appendChild(logoutBtn);
    }
});

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the form data to a server
    // For demo purposes, we'll just show an alert
    alert(`Thank you, ${name}! Your message has been sent. We'll contact you at ${email} soon.`);
    this.reset();
});

// Sample product data (for demonstration)
const products = [
    {
        id: 1,
        name: 'Fresh Tomatoes',
        description: 'Locally grown organic tomatoes',
        price: 'Rs. 390/kg',
        image: 'https://plus.unsplash.com/premium_photo-1671395501275-630ae5ea02c4?q=80&w=3077&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 2,
        name: 'Russet Potatoes',
        description: 'Premium quality potatoes',
        price: 'Rs. 195/kg',
        image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
        id: 3,
        name: 'Organic Carrots',
        description: 'Fresh and nutritious carrots',
        price: 'Rs. 260/kg',
        image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
        id: 4,
        name: 'Red Onions',
        description: 'Sweet and flavorful onions',
        price: 'Rs. 170/kg',
        image: 'https://images.unsplash.com/photo-1729292933757-5e9d9e8d4ead?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
];

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
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


function validateAndRedirect() {
const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
if (isLoggedIn) {
    window.location.href = 'services.html';
} else {
    window.location.href = 'login.html';
}
}



function redirectToProducts() {
const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

if (isLoggedIn) {
    window.location.href = 'products.html';
} else {
    window.location.href = 'login.html';
}
}
