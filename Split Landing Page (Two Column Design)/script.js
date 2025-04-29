const leftSplit = document.querySelector('.split-left');
const rightSplit = document.querySelector('.split-right');

leftSplit.addEventListener('mouseenter', () => {
    leftSplit.classList.add('active');
    rightSplit.classList.remove('active');
});

rightSplit.addEventListener('mouseenter', () => {
    rightSplit.classList.add('active');
    leftSplit.classList.remove('active');
});

leftSplit.addEventListener('mouseleave', () => {
    leftSplit.classList.remove('active');
    rightSplit.classList.remove('active');
});

rightSplit.addEventListener('mouseleave', () => {
    rightSplit.classList.remove('active');
    leftSplit.classList.remove('active');
});