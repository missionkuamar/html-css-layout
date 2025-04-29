const images = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeLightbox = document.getElementById('close-lightbox');
const prevArrow = document.getElementById('prev-arrow');
const nextArrow = document.getElementById('next-arrow');

let currentIndex = 0;

function showImage(index) {
    const image = images[index];
    lightboxImage.src = image.dataset.full;
    lightboxImage.alt = image.alt;
    lightboxCaption.textContent = image.dataset.caption || '';
    currentIndex = index;
    lightbox.classList.add('active');
}

function closeLightboxFunc() {
    lightbox.classList.remove('active');
}

images.forEach((image, index) => {
    image.addEventListener('click', () => showImage(index));
});

closeLightbox.addEventListener('click', closeLightboxFunc);

prevArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

nextArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target === lightboxImage) {
        closeLightboxFunc();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
            prevArrow.click();
        } else if (e.key === 'ArrowRight') {
            nextArrow.click();
        } else if (e.key === 'Escape') {
            closeLightboxFunc();
        }
    }
});