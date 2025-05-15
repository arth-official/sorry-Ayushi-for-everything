function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = ['❤️', '💖', '💝', '💕', '💗'][Math.floor(Math.random() * 5)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.querySelector('.heart-rain').appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

function startHeartRain() {
    const heartRainContainer = document.createElement('div');
    heartRainContainer.className = 'heart-rain';
    document.body.appendChild(heartRainContainer);
    setInterval(createHeart, 300);
}

document.addEventListener('DOMContentLoaded', startHeartRain); 