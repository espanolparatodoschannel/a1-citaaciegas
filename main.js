/**
 * main.js — Español Para Todos
 * Comportamiento compartido para todas las guías.
 * No requiere modificaciones al crear nuevas guías.
 */

// =============================================
// Animación de entrada de las tarjetas
// =============================================
const cards = document.querySelectorAll('.ficha-card');

function showAllCards() {
    cards.forEach((card, index) => {
        card.style.display = 'flex';
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 120);
    });
}

window.addEventListener('DOMContentLoaded', showAllCards);

// =============================================
// Botón Scroll to Top
// =============================================
const scrollBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        scrollBtn.style.display = 'flex';
    } else {
        scrollBtn.style.display = 'none';
    }
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
