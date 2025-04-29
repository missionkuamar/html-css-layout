document.querySelectorAll('.gallery-item img').forEach(image => {
    image.addEventListener('click', () => {
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightbox-image');
        lightboxImage.src = image.dataset.full;
        lightboxImage.alt = image.alt;
        lightbox.classList.add('active');
    });
});

document.getElementById('close-lightbox').addEventListener('click', () => {
    document.getElementById('lightbox').classList.remove('active');
});

// Close lightbox when clicking outside the image
document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        e.currentTarget.classList.remove('active');
    }
});