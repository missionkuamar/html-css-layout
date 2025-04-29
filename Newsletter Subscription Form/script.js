document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for demo purposes

    const emailInput = document.getElementById('email');
    const successMessage = document.getElementById('success-message');

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(emailInput.value)) {
        // Show success message and clear form
        successMessage.classList.add('active');
        emailInput.value = '';
        setTimeout(() => {
            successMessage.classList.remove('active');
        }, 3000); // Hide message after 3 seconds
    } else {
        alert('Please enter a valid email address.');
    }
});