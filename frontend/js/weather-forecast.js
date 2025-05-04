// JavaScript -->

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navbar = document.getElementById('navbar');
    
    mobileMenuBtn.addEventListener('click', () => {
        navbar.classList.toggle('active');
        mobileMenuBtn.innerHTML = navbar.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Logout functionality
    const logoutBtns = document.querySelectorAll('#logout-btn, #sidebar-logout');
    logoutBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm('Are you sure you want to logout?')) {
                window.location.href = 'login.html';
            }
        });
    });
    
    // Improve mobile scrolling for hourly forecast
    const hourlyForecast = document.querySelector('.hourly-forecast');
    if (hourlyForecast) {
        // Add visual indicator for scrollable content on mobile
        if (window.innerWidth < 768) {
            hourlyForecast.setAttribute('data-scrollable', 'true');
            
            // Add fading edge effect with pseudo-elements via CSS
            const style = document.createElement('style');
            style.textContent = `
                .hourly-forecast[data-scrollable="true"]::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    height: 100%;
                    width: 30px;
                    background: linear-gradient(to right, transparent, white);
                    pointer-events: none;
                }
            `;
            document.head.appendChild(style);
        }
    }
