function createStar() {
    const starContainer = document.getElementById('starContainer');
    const star = document.createElement('img');
    star.src = '../ressources/images/star.png';
    star.alt = 'etoile qui bouge...';
    star.className = 'star';

    const starHeight = Math.random() * document.documentElement.scrollHeight;
    star.style.top = `${starHeight}px`;
    star.style.left = '-50px'; // Position initiale à gauche de l'écran

    const starSaturation = 0.5 + Math.random() * 2;

    const starHue = -5 + Math.random() * 10;
    star.style.filter = `hue-rotate(${starHue}deg) saturate(${starSaturation}) drop-shadow(0 0 30px rgb(85, 153, 241)) blur(0.2px)`;

    starContainer.appendChild(star);

    const speed = 2 + Math.random() * 3; // Vitesse aléatoire de 2 à 5 pixels par frame
    let positionX = -50;
    let amplitude = 20;
    let frequency = 0.05;
    let initialTop = starHeight;
    let frame = 0;

    function moveStar() {
        if (positionX > window.innerWidth) {
            starContainer.removeChild(star);
        } else {
            positionX += speed;
            frame++;
            star.style.left = `${positionX}px`;
            star.style.top = `${initialTop + Math.sin(frame * frequency) * amplitude}px`;
            requestAnimationFrame(moveStar);
        }
    }
    moveStar();
}

function getRandomInterval(min, max) {
    return Math.random() * (max - min) + min;
}

function startGeneratingStars() {
    createStar();
    const interval = getRandomInterval(5000, 15000);
    setTimeout(startGeneratingStars, interval);
}

startGeneratingStars();
