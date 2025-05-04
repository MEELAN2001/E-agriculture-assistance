

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
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            // Here you would typically filter the items based on the selected category
        });
    });
    
    // Remove item functionality
    const removeButtons = document.querySelectorAll('.action-btn.remove');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const item = this.closest('.saved-item');
            item.style.opacity = '0';
            setTimeout(() => {
                item.remove();
                // Check if there are any items left
                const items = document.querySelectorAll('.saved-item');
                if (items.length === 0) {
                    showEmptyState();
                }
            }, 300);
        });
    });
    
    function showEmptyState() {
        const itemsGrid = document.querySelector('.saved-items-grid');
        itemsGrid.innerHTML = `
            <div class="empty-state">
                <i class="far fa-heart"></i>
                <h3>No Saved Items</h3>
                <p>Items you save will appear here</p>
                <a href="index.html#products" class="btn">Browse Products</a>
            </div>
        `;
    }
