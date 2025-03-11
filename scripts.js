// Countdown Timer
const meetDate = new Date('2024-12-09T00:00:00'); // Set this to the date you met
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const now = new Date();
    const diff = now - meetDate;

    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    countdownElement.innerHTML = `${years} years, ${months % 12} months, ${days % 30} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
