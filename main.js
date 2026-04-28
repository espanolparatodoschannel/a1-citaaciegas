/**
 * main.js — Español Para Todos
 * Motor de renderizado de fichas desde contenido.json.
 * No modificar para crear nuevas guías.
 */

// =============================================
// Configuración visual por tipo de ficha
// =============================================
const TIPO = {
    expresiones: {
        gradient: 'card-gradient-1',
        badge: 'text-indigo-600',
        bg: 'bg-indigo-50',
        border: 'border-indigo-100',
        icono: 'fas fa-comment-dots'
    },
    gramatica: {
        gradient: 'card-gradient-2',
        badge: 'text-emerald-600',
        bg: 'bg-emerald-50',
        border: 'border-emerald-100',
        icono: 'fas fa-book'
    },
    vocabulario: {
        gradient: 'card-gradient-3',
        badge: 'text-amber-600',
        bg: 'bg-amber-50',
        border: 'border-amber-100',
        icono: 'fas fa-font'
    },
    reglas: {
        gradient: 'card-gradient-2',
        badge: 'text-emerald-600',
        bg: 'bg-emerald-50',
        border: 'border-emerald-100',
        icono: 'fas fa-ruler'
    },
    ortografia: {
        gradient: 'card-gradient-4',
        badge: 'text-rose-600',
        bg: 'bg-rose-50',
        border: 'border-rose-100',
        icono: 'fas fa-spell-check'
    }
};

// =============================================
// Renderizado de ejemplos según formato
// =============================================
function renderEjemplos(ejemplos, cfg) {
    const { formato, items } = ejemplos;

    switch (formato) {
        case 'lista':
            return `<div class="${cfg.bg} p-4 rounded-2xl mb-4 border ${cfg.border} italic space-y-2 text-sm">
                ${items.map(i => `<p>• ${i}</p>`).join('')}
            </div>`;

        case 'dialogo':
            return items.map(i => `
                <div class="bg-slate-100 p-4 rounded-2xl mb-4 text-sm">
                    <p class="text-slate-500 italic mb-1">— ${i.pregunta}</p>
                    <p class="font-bold text-emerald-600">→ ${i.respuesta}</p>
                </div>`).join('');

        case 'grid':
            return `<div class="grid grid-cols-2 gap-2 mb-4">
                ${items.map(i => `<div class="${cfg.bg} p-2 rounded-xl text-center text-xs font-bold border ${cfg.border}">${i}</div>`).join('')}
            </div>`;

        case 'categorias':
            return `<ul class="space-y-2 text-sm ${cfg.bg} p-4 rounded-2xl mb-4">
                ${items.map(i => `<li><span class="font-bold ${cfg.badge}">${i.categoria}:</span> ${i.valores}</li>`).join('')}
            </ul>`;

        case 'comparacion':
            return `<div class="flex justify-around items-center ${cfg.bg} p-4 rounded-2xl border ${cfg.border} mb-4">
                <div class="text-center">
                    <p class="text-xs uppercase text-slate-400 mb-1">${items[0].etiqueta}</p>
                    <p class="font-bold text-indigo-600">${items[0].valor}</p>
                </div>
                <i class="fas fa-sync text-emerald-300"></i>
                <div class="text-center">
                    <p class="text-xs uppercase text-slate-400 mb-1">${items[1].etiqueta}</p>
                    <p class="font-bold text-pink-600">${items[1].valor}</p>
                </div>
            </div>`;

        case 'transformacion':
            return `<div class="space-y-3 bg-white/60 p-4 rounded-2xl mb-4">
                ${items.map(i => `
                    <div class="flex justify-between text-sm">
                        <span>${i.de}</span>
                        <i class="fas fa-arrow-right text-slate-300"></i>
                        <span class="font-bold">${i.a}</span>
                    </div>`).join('')}
            </div>`;

        case 'formula':
            return items.map(i => `
                <div class="${cfg.bg} p-4 rounded-2xl mb-4 border ${cfg.border} text-sm font-mono">
                    <p class="${cfg.badge} font-bold">${i.correcto}</p>
                    <p class="text-slate-500 mt-2">// No: ${i.incorrecto}</p>
                </div>`).join('');

        case 'ecuacion':
            return `<div class="flex items-center justify-center space-x-4 ${cfg.bg} p-4 rounded-2xl border ${cfg.border} mb-4">
                <span class="font-bold">${items[0]}</span>
                <i class="fas fa-equals text-amber-300"></i>
                <span class="font-bold">${items[1]}</span>
            </div>`;

        case 'contraste':
            return `<div class="${cfg.bg} p-5 rounded-2xl mb-4 border ${cfg.border} space-y-4">
                <div>
                    <p class="${cfg.badge} font-bold">${items[0].texto}</p>
                    <p class="text-[10px] text-slate-500">${items[0].nota}</p>
                </div>
                <div class="border-t ${cfg.border} pt-4">
                    <p class="text-slate-800 font-bold">${items[1].texto}</p>
                    <p class="text-[10px] text-slate-500">${items[1].nota}</p>
                </div>
            </div>`;

        case 'pregunta':
            return `<div class="bg-indigo-600 text-white p-5 rounded-2xl shadow-inner mb-4">
                <p class="text-indigo-200 text-[10px] uppercase font-bold mb-1">Pregunta:</p>
                <p class="text-lg">${items[0]}</p>
            </div>`;

        default:
            return '';
    }
}

// =============================================
// Construir una ficha
// =============================================
function buildFicha(ficha, index) {
    const cfg = TIPO[ficha.tipo] || TIPO.vocabulario;
    const label = `${ficha.id}. ${ficha.tipo.charAt(0).toUpperCase() + ficha.tipo.slice(1)}`;

    return `
        <section class="ficha-card glass-effect rounded-3xl overflow-hidden shadow-lg border border-white/40">
            <div class="p-1 ${cfg.gradient}"></div>
            <div class="p-6 md:p-8">
                <span class="text-xs font-bold uppercase tracking-widest ${cfg.badge} mb-2 block">${label}</span>
                <h2 class="text-2xl font-bold mb-2">${ficha.tema}</h2>
                ${ficha.uso ? `<div class="inline-block px-3 py-1 rounded-xl text-sm font-bold mb-4 ${cfg.bg} ${cfg.badge} border ${cfg.border}">${ficha.uso}</div>` : ''}
                <p class="mb-4 text-slate-700 leading-relaxed text-sm">${ficha.explicacion}</p>
                ${renderEjemplos(ficha.ejemplos, cfg)}
                <div class="mt-auto pt-4 border-t border-slate-100">
                    <p class="text-xs text-indigo-500 font-semibold">
                        <i class="fas fa-lightbulb mr-1"></i> ${ficha.consejo}
                    </p>
                </div>
            </div>
        </section>`;
}

// =============================================
// Construir la ficha resumen (última card)
// =============================================
function buildResumen(resumen) {
    const pasos = resumen.pasos.map((p, i) =>
        `<li>${p.texto} <span class="${p.color} font-bold">${p.ejemplo}</span></li>`
    ).join('');

    return `
        <section class="ficha-card glass-effect rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl border border-white/40 md:col-span-2 lg:col-span-3">
            <div class="p-2 bg-gradient-to-r from-indigo-500 via-emerald-500 to-amber-500"></div>
            <div class="p-8 md:p-16 flex flex-col lg:flex-row items-center gap-10">
                <div class="lg:w-1/2">
                    <h2 class="text-3xl md:text-5xl font-black mb-6 leading-tight">
                        ${resumen.titulo.replace(' a una', '<br><span class="text-indigo-600"> a una</span>')}
                    </h2>
                    <p class="mb-6 text-slate-500 italic">${resumen.intro}</p>
                    <ol class="space-y-4 text-slate-700 list-decimal list-inside font-medium text-sm md:text-base">
                        ${pasos}
                    </ol>
                    <div class="mt-8 p-4 bg-amber-50 rounded-2xl border border-amber-100 text-xs md:text-sm">
                        <p class="font-bold text-amber-800 mb-1">💡 Consejo para A1:</p>
                        <p>${resumen.consejo}</p>
                    </div>
                </div>
                <div class="lg:w-1/2 bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl">
                    <p class="text-indigo-400 font-bold text-xs mb-4 uppercase tracking-widest">Ejemplo completo:</p>
                    <p class="italic text-xl md:text-2xl leading-relaxed">${resumen.ejemplo_completo}</p>
                </div>
            </div>
        </section>`;
}

// =============================================
// Animación de entrada de las tarjetas
// =============================================
function animarFichas() {
    const cards = document.querySelectorAll('.ficha-card');
    cards.forEach((card, index) => {
        card.style.display = 'flex';
        setTimeout(() => card.classList.add('visible'), index * 120);
    });
}

// =============================================
// Inicialización: cargar JSON y renderizar
// =============================================
async function init() {
    try {
        const res = await fetch('contenido.json');
        const data = await res.json();
        const { meta, fichas, resumen } = data;

        // Actualizar meta
        document.title = meta.titulo_pagina;
        document.getElementById('hero-title').innerHTML =
            meta.titulo_hero.replace(' a las', '<br><span class="text-indigo-200"> a las</span>');
        document.getElementById('objetivo').textContent = meta.objetivo;
        document.getElementById('video-link').href = meta.video_url;
        document.getElementById('video-label').textContent = meta.video_label;
        document.getElementById('hero-img').src = meta.ilustracion;

        // Renderizar fichas
        const grid = document.getElementById('fichasGrid');
        grid.innerHTML = fichas.map((f, i) => buildFicha(f, i)).join('') + buildResumen(resumen);

        // Animar
        animarFichas();

    } catch (err) {
        console.error('Error cargando contenido.json:', err);
    }
}

// =============================================
// Botón Scroll to Top
// =============================================
const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 400 ? 'flex' : 'none';
});
scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Arrancar
window.addEventListener('DOMContentLoaded', init);
