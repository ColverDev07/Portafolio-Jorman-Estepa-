// Menú responsive
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Efecto de partículas
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Tamaño aleatorio
        const size = Math.random() * 5 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Posición inicial aleatoria
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `-10px`;
        
        // Duración de la animación aleatoria
        const duration = Math.random() * 10 + 5;
        particle.style.animation = `fall ${duration}s linear infinite`;
        
        // Retraso inicial aleatorio
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        // Opacidad aleatoria
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        
        particlesContainer.appendChild(particle);
    }
}

// Animación al hacer scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

// Smooth scroll para los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        navLinks.classList.remove('active');
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    animateOnScroll();
});

window.addEventListener('scroll', animateOnScroll)
