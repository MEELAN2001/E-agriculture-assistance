

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

// Check login state
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

// Filter functionality
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        this.classList.add('active');
        
        // Here you would typically filter the products based on the selected category
        // For demo purposes, we'll just show an alert
        const category = this.textContent;
        if (category !== 'All') {
            alert(`Filtering products by: ${category}`);
        }
    });
});

// Sort functionality
document.getElementById('sort-select').addEventListener('change', function() {
    const sortBy = this.value;
    // Here you would typically sort the products based on the selected option
    // For demo purposes, we'll just show an alert
    alert(`Sorting products by: ${sortBy}`);
});

// Search functionality
document.querySelector('.search-bar').addEventListener('submit', function(e) {
    e.preventDefault();
    const searchTerm = this.querySelector('.search-input').value;
    // Here you would typically search the products based on the search term
    // For demo purposes, we'll just show an alert
    alert(`Searching for: ${searchTerm}`);
});

// Pagination functionality
document.querySelectorAll('.pagination-btn').forEach(button => {
    button.addEventListener('click', function() {
        if (!this.classList.contains('active')) {
            document.querySelectorAll('.pagination-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            // Here you would typically load the corresponding page of products
            // For demo purposes, we'll just show an alert
            if (this.textContent) {
                alert(`Loading page ${this.textContent}`);
            }
        }
    });
});

// Add to Cart functionality
document.querySelectorAll('.product-actions .btn:not(.btn-outline)').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.closest('.product-card').querySelector('h3').textContent;
        alert(`${productName} added to cart!`);
    });
});
