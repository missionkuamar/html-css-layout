document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const isExpanded = button.getAttribute('aria-expanded') === 'true';

        // Toggle the answer visibility
        answer.classList.toggle('active');
        button.setAttribute('aria-expanded', !isExpanded);

        // Update the icon
        const icon = button.querySelector('.faq-icon');
        icon.textContent = isExpanded ? '+' : '−';
    });
});