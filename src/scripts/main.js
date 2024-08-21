const birthday = new Date('2025-02-02T19:00:00');

function updateCountdown() {
    const now = new Date();
    const timeDifference = birthday - now;
    
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
 
    document.getElementById('countdown').textContent = `${days} dias, ${hours}h ${minutes}min ${seconds}s `;
}

setInterval(updateCountdown, 1000);

updateCountdown();
