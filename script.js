const firstDate = new Date(2024, 10, 30); // Nov 30, 2024

function updateTimer() {
    const diff = new Date() - firstDate;
    const minutes = Math.floor(diff / (1000 * 60));
    const counter = document.getElementById('minutesCounter');
    if(counter) counter.innerText = minutes.toLocaleString();
}
setInterval(updateTimer, 1000);
updateTimer();

const noBtn = document.getElementById('noBtn');
noBtn.addEventListener('mouseover', () => {
    // Moves button to a random spot on the entire screen
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

document.getElementById('yesBtn').addEventListener('click', () => {
    document.getElementById('setupContent').classList.add('hidden');
    document.getElementById('successContent').classList.remove('hidden');
    document.getElementById('valentineMusic').play().catch(e => console.log("Audio play blocked"));
    
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 200,
            spread: 100,
            origin: { y: 0.6 }
        });
    }
});

// Heart background generator
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.cssText = `
        position: fixed;
        top: -20px;
        left: ${Math.random() * 100}vw;
        font-size: ${Math.random() * 20 + 10}px;
        color: rgba(255, 77, 109, 0.2);
        pointer-events: none;
        z-index: 0;
    `;
    document.body.appendChild(heart);
    
    heart.animate([
        { transform: 'translateY(0) rotate(0deg)' },
        { transform: `translateY(110vh) rotate(${Math.random() * 360}deg)` }
    ], {
        duration: Math.random() * 3000 + 4000,
        easing: 'linear'
    });
    
    setTimeout(() => heart.remove(), 7000);
}
setInterval(createHeart, 400);