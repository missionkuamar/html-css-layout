// Sticky Navbar
const navContainer = document.querySelector('.nav-container');
const navOffset = navContainer.offsetTop;

window.addEventListener('scroll', () => {
    if (window.pageYOffset >= navOffset) {
        navContainer.classList.add('sticky');
    } else {
        navContainer.classList.remove('sticky');
    }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', hamburger.classList.contains('active'));
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});