const evetBtn = document.getElementById('evetBtn');
const hayirBtn = document.getElementById('hayirBtn');
const mesaj = document.getElementById('mesaj');

let hayirTiklamaSayisi = 0;

const komikMesajlar = [
    "Emin misin? Şöyle bir daha düşün...",
    "Bak kalbimi kırıyorsun...",
    "Son kararın mı? Bak kaçıyorum!"
];

hayirBtn.addEventListener('click', () => {
    hayirTiklamaSayisi++;
    if (hayirTiklamaSayisi < 3) {
        mesaj.textContent = komikMesajlar[hayirTiklamaSayisi - 1];
    } else {
        mesaj.textContent = komikMesajlar[2];
        hareketEttir();
    }
});

evetBtn.addEventListener('click', () => {
    const container = document.querySelector('.container');
    container.innerHTML = `
        <div class="final-message">
            <img src="6e938c42a32bbe95c58c1a9e8eb68d20.gif" alt="Mutluluk GIF">
            <h1>Yaşasın! Dünyanın en mutlu insanı benim! ❤️</h1>
        </div>
    `;
    container.style.padding = '20px';
    startCelebration();
});

function startCelebration() {
    const celebrationContainer = document.body;
    const particles = ['❤️', '🌸', '🦋'];
    for (let i = 0; i < 100; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.textContent = particles[Math.floor(Math.random() * particles.length)];
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animationDuration = `${Math.random() * 2 + 3}s`;
        particle.style.animationDelay = `${Math.random() * 2}s`;
        celebrationContainer.appendChild(particle);
    }
}

function hareketEttir() {
    const btnRect = hayirBtn.getBoundingClientRect();
    const viewWidth = window.innerWidth;
    const viewHeight = window.innerHeight;

    let yeniTop = Math.random() * (viewHeight - btnRect.height);
    let yeniSol = Math.random() * (viewWidth - btnRect.width);

    hayirBtn.style.position = 'fixed';
    hayirBtn.style.top = `${yeniTop}px`;
    hayirBtn.style.left = `${yeniSol}px`;
}
