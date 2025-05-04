

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
    
    // Check if user is logged in
    window.addEventListener('DOMContentLoaded', () => {
        const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
        if (!isLoggedIn) {
            // Redirect to login page if not logged in
            window.location.href = 'login.html';
        }
    });
    
    // Logout functionality
    function handleLogout() {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('userName');
        window.location.href = 'login.html';
    }
    
    document.getElementById('logout-btn').addEventListener('click', function(e) {
        e.preventDefault();
        handleLogout();
    });
    
    document.getElementById('sidebar-logout').addEventListener('click', function(e) {
        e.preventDefault();
        handleLogout();
    });
    
    // Filter change handlers
    document.getElementById('crop-select').addEventListener('change', function() {
        // Here you would typically update the chart and data based on the selected crop
        console.log('Selected crop:', this.value);
    });
    
    document.getElementById('market-select').addEventListener('change', function() {
        // Here you would typically update the chart and data based on the selected market
        console.log('Selected market:', this.value);
    });
    
    document.getElementById('time-select').addEventListener('change', function() {
        // Here you would typically update the chart and data based on the selected time period
        console.log('Selected time period:', this.value);
    });
