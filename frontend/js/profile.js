// Store original form values for reset functionality
const originalFormValues = {};
const formElements = document.querySelectorAll('#profile-form .form-control');
formElements.forEach(element => {
    originalFormValues[element.id] = element.value;
});

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

// Edit Profile Button Functionality
const editProfileBtn = document.getElementById('edit-profile-btn');
const cancelBtn = document.getElementById('cancel-btn');
const saveBtn = document.getElementById('save-btn');
const avatarUpload = document.getElementById('avatar-upload');

editProfileBtn.addEventListener('click', function() {
    // Toggle edit mode
    const isEditMode = editProfileBtn.classList.contains('active');
    
    if (!isEditMode) {
        // Enable form fields
        formElements.forEach(element => {
            element.disabled = false;
        });
        
        // Enable avatar upload
        avatarUpload.disabled = false;
        
        // Enable action buttons
        cancelBtn.disabled = false;
        saveBtn.disabled = false;
        
        // Update edit button
        editProfileBtn.classList.add('active');
        editProfileBtn.innerHTML = '<i class="fas fa-times"></i> Cancel Edit';
        editProfileBtn.style.backgroundColor = '#F44336';
    } else {
        // Reset form to original values
        resetForm();
        
        // Update edit button
        editProfileBtn.classList.remove('active');
        editProfileBtn.innerHTML = '<i class="fas fa-edit"></i> Edit Profile';
        editProfileBtn.style.backgroundColor = '';
    }
});

// Cancel Button Functionality
cancelBtn.addEventListener('click', function() {
    resetForm();
    
    // Update edit button
    editProfileBtn.classList.remove('active');
    editProfileBtn.innerHTML = '<i class="fas fa-edit"></i> Edit Profile';
    editProfileBtn.style.backgroundColor = '';
});

// Reset form to original values and disable fields
function resetForm() {
    // Reset form values
    formElements.forEach(element => {
        element.value = originalFormValues[element.id];
        element.disabled = true;
    });
    
    // Disable avatar upload
    avatarUpload.disabled = true;
    
    // Disable action buttons
    cancelBtn.disabled = true;
    saveBtn.disabled = true;
}

// Form submission
document.getElementById('profile-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (saveBtn.disabled) {
        return; // Don't submit if save button is disabled
    }
    
    // Get form values
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    
    // Update profile name
    document.getElementById('profile-name').textContent = firstName + ' ' + lastName;
    
    // Update stored user name if using localStorage
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('userName', firstName + ' ' + lastName);
    }
    
    // Update original values for future resets
    formElements.forEach(element => {
        originalFormValues[element.id] = element.value;
    });
    
    // Disable form fields
    formElements.forEach(element => {
        element.disabled = true;
    });
    
    // Disable avatar upload
    avatarUpload.disabled = true;
    
    // Disable action buttons
    cancelBtn.disabled = true;
    saveBtn.disabled = true;
    
    // Update edit button
    editProfileBtn.classList.remove('active');
    editProfileBtn.innerHTML = '<i class="fas fa-edit"></i> Edit Profile';
    editProfileBtn.style.backgroundColor = '';
    
    // Show success message
    alert('Profile updated successfully!');
});

// Check if user is logged in (if using localStorage)
window.addEventListener('DOMContentLoaded', () => {
    if (typeof localStorage !== 'undefined') {
        const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
        if (!isLoggedIn) {
            // Redirect to login page if not logged in
            window.location.href = 'login.html';
        } else {
            // Display user name if available
            const userName = localStorage.getItem('userName');
            if (userName) {
                document.getElementById('profile-name').textContent = userName;
            }
        }
    }
});

// Logout functionality
function handleLogout() {
    if (typeof localStorage !== 'undefined') {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('userName');
    }
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