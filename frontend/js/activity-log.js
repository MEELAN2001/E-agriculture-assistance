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
    
    // Filter buttons functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const activityItems = document.querySelectorAll('.activity-item');
    const emptyState = document.getElementById('empty-state');
    const activityList = document.getElementById('activity-list');
    
    // Filter activities based on type
    function filterActivities(filterType) {
        let visibleCount = 0;
        
        activityItems.forEach(item => {
            if (filterType === 'all' || item.getAttribute('data-type') === filterType) {
                item.style.display = 'flex';
                visibleCount++;
            } else {
                item.style.display = 'none';
            }
        });
        
        // Show empty state if no activities match the filter
        if (visibleCount === 0) {
            emptyState.style.display = 'block';
            activityList.style.borderBottom = 'none';
        } else {
            emptyState.style.display = 'none';
            activityList.style.borderBottom = '1px solid var(--medium-gray)';
        }
    }
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterActivities(this.getAttribute('data-filter'));
        });
    });
    
    // Reset filters
    document.getElementById('reset-filters').addEventListener('click', function() {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector('[data-filter="all"]').classList.add('active');
        filterActivities('all');
    });
    
    // Date filter functionality
    document.getElementById('apply-date-filter').addEventListener('click', function() {
        // In a real application, this would filter based on the selected dates
        alert('Date filter applied. This would filter activities between the selected dates.');
    });
    
    // Export log functionality
    document.getElementById('export-log').addEventListener('click', function() {
        alert('Activity log would be exported as CSV or PDF file.');
    });
    
    // Clear history functionality
    document.getElementById('clear-history').addEventListener('click', function() {
        if (confirm('Are you sure you want to clear all activity history? This action cannot be undone.')) {
            alert('Activity history cleared successfully.');
            // In a real application, this would clear the activity history
        }
    });
    
    // Pagination functionality
    const paginationButtons = document.querySelectorAll('.pagination-btn');
    paginationButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.classList.contains('active')) {
                paginationButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                // In a real application, this would load the corresponding page of activities
            }
        });
    });