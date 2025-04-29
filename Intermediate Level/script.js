const form = document.getElementById('multi-step-form');
const steps = document.querySelectorAll('.form-step');
const progressSteps = document.querySelectorAll('.progress-step');
const nextButtons = document.querySelectorAll('.next-button');
const prevButtons = document.querySelectorAll('.prev-button');
const errorMessage = document.getElementById('error-message');

let currentStep = 1;

function updateStep(step) {
    // Update form step
    steps.forEach(s => s.classList.remove('active'));
    document.querySelector(`.form-step[data-step="${step}"]`).classList.add('active');

    // Update progress bar
    progressSteps.forEach(p => p.classList.remove('active'));
    document.querySelector(`.progress-step[data-step="${step}"]`).classList.add('active');

    // Update confirmation step
    if (step === 3) {
        document.getElementById('confirm-first-name').textContent = document.getElementById('first-name').value;
        document.getElementById('confirm-last-name').textContent = document.getElementById('last-name').value;
        document.getElementById('confirm-email').textContent = document.getElementById('email').value;
        document.getElementById('confirm-phone').textContent = document.getElementById('phone').value;
    }

    currentStep = step;
}

// Validate form inputs for a given step
function validateStep(step) {
    const inputs = document.querySelectorAll(`.form-step[data-step="${step}"] input[required]`);
    let isValid = true;
    errorMessage.classList.remove('active');
    errorMessage.textContent = '';

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            errorMessage.textContent = `Please fill out all required fields in Step ${step}.`;
            errorMessage.classList.add('active');
        } else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
            isValid = false;
            errorMessage.textContent = 'Please enter a valid email address.';
            errorMessage.classList.add('active');
        }
    });

    return isValid;
}

// Next button event listeners
nextButtons.forEach(button => {
    button.addEventListener('click', () => {
        const nextStep = parseInt(button.dataset.next);
        if (validateStep(currentStep)) {
            updateStep(nextStep);
        }
    });
});

// Previous button event listeners
prevButtons.forEach(button => {
    button.addEventListener('click', () => {
        const prevStep = parseInt(button.dataset.prev);
        updateStep(prevStep);
    });
});

// Form submission
form.addEventListener('submit', e => {
    e.preventDefault();
    if (validateStep(currentStep)) {
        // Simulate form submission (replace with actual backend logic)
        alert('Form submitted successfully!');
        form.reset();
        updateStep(1); // Reset to first step
    }
});