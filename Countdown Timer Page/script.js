// Set the target date for the countdown (June 15, 2025, 09:00:00)
const targetDate = new Date('2025-06-15T09:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    // Calculate days, hours, minutes, seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update the DOM
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    // Check if the countdown has ended
    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown-timer').innerHTML = '<p>The event has started!</p>';
    }
}

// Update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Run once immediately to avoid initial delay
updateCountdown();