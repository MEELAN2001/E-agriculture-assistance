// Common authentication functions
function isLoggedIn() {
    return localStorage.getItem('loggedIn') === 'true';
}

function login(username, rememberMe = false) {
    // Set login state
    localStorage.setItem('loggedIn', 'true');
    
    // If remember me is checked, save the username
    if (rememberMe) {
        localStorage.setItem('rememberedUser', username);
    } else {
        localStorage.removeItem('rememberedUser');
    }
}

function logout() {
    localStorage.removeItem('loggedIn');
    // Optionally keep rememberedUser for convenience
}

// Check user authentication status and update UI accordingly
function checkServicesAccess() {
    // This function should be called on page load
    const memberServices = document.getElementById('member-services');
    if (memberServices) {
        if (isLoggedIn()) {
            memberServices.style.display = 'block';
        } else {
            memberServices.style.display = 'none';
        }
    }
    
    // Update navigation based on login status
    updateNavigation();
}

// Update navigation based on login status
function updateNavigation() {
    const loginLink = document.getElementById('open-login');
    
    if (loginLink) {
        if (isLoggedIn()) {
            loginLink.textContent = 'Logout';
            loginLink.href = '#';
            loginLink.onclick = function(e) {
                e.preventDefault();
                logout();
                window.location.reload();
            };
        } else {
            loginLink.textContent = 'Login';
            loginLink.href = 'login.html';
        }
    }
}

// Handle services links click
function setupServicesLinks() {
    const servicesLinks = document.querySelectorAll('.services-link');
    
    servicesLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            if (isLoggedIn()) {
                window.location.href = "services.html";
            } else {
                window.location.href = "login.html";
            }
        });
    });
}

// Initialize common functionality
function initCommon() {
    // Check if user is logged in and update UI
    checkServicesAccess();
    
    // Setup services links
    setupServicesLinks();
    
    // Additional common initialization can go here
}

// Call initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', initCommon);