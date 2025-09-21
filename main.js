import $ from 'jquery';
import { 
    Mensaje, 
    Notificacion, 
    savels, 
    getls, 
    witip,
    Tiempo,
    Capi,
    showLoading,
    infoo
} from './widev.js';
 

// ===============================
// MAIN.JS - FUNCIONES PRINCIPALES Y INICIALIZACIÓN
// ===============================

// Variables globales
let isAnimationActive = false;
let musicVisualizerActive = false;
let heartCount = 0;

// ===============================
// INICIALIZACIÓN DE LA APLICACIÓN
// ===============================

$(document).ready(function() {
    initializeApp();
});

function initializeApp() {
    console.log('💛 Inicializando aplicación de Flores Amarillas...');
    
    // Configurar eventos principales
    setupMainEventListeners();
    
    // Inicializar animaciones base
    initializeBaseAnimations();
    
    // Configurar observadores de scroll
    setupScrollObservers();
    
    // Inicializar contadores
    initializeCounters();
    
    // Configurar corazones interactivos
    setupInteractiveHearts();
    
    // Activar efectos de teclado
    enableKeyboardEffects();
    
    console.log('✅ Aplicación inicializada con amor 💛');
}

// ===============================
// CONFIGURACIÓN DE EVENTOS PRINCIPALES
// ===============================

function setupMainEventListeners() {
    // Botones mágicos principales
    $('#generateFlowers').off('click').on('click', handleGenerateFlowers);
    $('#showMessage').off('click').on('click', handleShowSpecialMessage);
    $('#playMusic').off('click').on('click', handlePlayMusic);
    
    // Botones de flores en galería
    $('.flower-btn').off('click').on('click', handleFlowerCardClick);
    
    // Navegación suave
    $('.bounce-arrow').off('click').on('click', handleSmoothScroll);
    
    // Eventos de hover para tarjetas
    setupCardHoverEffects();
    
    // Eventos de redimensión de ventana
    $(window).off('resize').on('resize', debounce(handleWindowResize, 250));
    
    console.log('🎯 Event listeners configurados');
}

function setupCardHoverEffects() {
    $('.flower-card').each(function() {
        const card = $(this);
        
        card.off('mouseenter mouseleave').on('mouseenter', function() {
            $(this).css({
                'transform': 'scale(1.05) translateY(-5px)',
                'box-shadow': '0 15px 30px rgba(255, 215, 0, 0.3)',
                'transition': 'all 0.3s ease'
            });
            createMiniCardSparkles($(this));
        }).on('mouseleave', function() {
            $(this).css({
                'transform': 'scale(1) translateY(0px)',
                'box-shadow': 'none'
            });
        });
    });
}


function createMiniCardSparkles(card) {
    const rect = card[0].getBoundingClientRect();
    
    for (let i = 0; i < 3; i++) {
        const sparkle = $('<div class="card-sparkle">✨</div>');
        
        sparkle.css({
            'position': 'fixed',
            'left': rect.left + Math.random() * rect.width + 'px',
            'top': rect.top + Math.random() * rect.height + 'px',
            'font-size': '12px',
            'pointer-events': 'none',
            'z-index': '1000',
            'opacity': '0'
        });
        
        $('body').append(sparkle);
        
        sparkle.animate({
            'opacity': 1,
            'transform': 'translateY(-15px) rotate(180deg)'
        }, 600).animate({
            'opacity': 0
        }, 300, function() {
            sparkle.remove();
        });
    }
}
function handleGenerateFlowers() {
    if (isAnimationActive) return;
    
    isAnimationActive = true;
    const button = $(this);
    
    // Animar botón
    animateButton(button, 'generating');
    
    // Generar flores mágicas
    generateMagicalFlowers().then(() => {
        showNotification('¡Flores mágicas creadas con amor! 🌻', 'success');
        animateButton(button, 'complete');
        
        setTimeout(() => {
            isAnimationActive = false;
            animateButton(button, 'reset');
        }, 2000);
    });
}

function handleShowSpecialMessage() {
    const messages = [
        {
            text: "Cada día contigo es como un jardín de flores amarillas 🌻",
            icon: "fas fa-seedling",
            color: "#FFD700"
        },
        {
            text: "Eres la razón por la que creo en el amor verdadero 💛",
            icon: "fas fa-heart-pulse",
            color: "#FF1493"
        },
        {
            text: "Tu sonrisa es más brillante que mil soles ☀️",
            icon: "fas fa-sun",
            color: "#FFA500"
        },
        {
            text: "Contigo, todos los días son primavera 🌼",
            icon: "fas fa-leaf",
            color: "#32CD32"
        },
        {
            text: "Eres mi flor más preciada en este jardín llamado vida 🌺",
            icon: "fas fa-heart",
            color: "#FF6347"
        }
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    displaySpecialMessage(randomMessage);
}

function handlePlayMusic() {
    if (musicVisualizerActive) {
        stopMusicVisualization();
        return;
    }
    
    startMusicExperience();
}

function handleFlowerCardClick() {
    const card = $(this).closest('.flower-card');
    const flowerType = card.data('flower');
    
    // Animar tarjeta
    animateFlowerCardSelection(card);
    
    // Mostrar mensaje específico de la flor
    showFlowerSpecificMessage(flowerType);
    
    // Crear efecto de partículas
    createFlowerParticles(card);
}

// Add missing functions after handleFlowerCardClick
function animateFlowerCardSelection(card) {
    // Add clicked class for tracking
    card.addClass('clicked');
    
    // Animation sequence
    card.css({
        'transform': 'scale(1.1) rotateY(10deg)',
        'box-shadow': '0 20px 40px rgba(255, 215, 0, 0.4)',
        'transition': 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'z-index': '10'
    });
    
    // Pulse effect
    setTimeout(() => {
        card.css({
            'transform': 'scale(1.05) rotateY(0deg)',
            'filter': 'brightness(1.1)'
        });
    }, 200);
    
    // Return to enhanced state
    setTimeout(() => {
        card.css({
            'transform': 'scale(1.02)',
            'filter': 'brightness(1)',
            'z-index': 'auto'
        });
    }, 600);
    
    // Create selection glow
    const glow = $('<div class="selection-glow"></div>');
    glow.css({
        'position': 'absolute',
        'top': '-10px',
        'left': '-10px',
        'right': '-10px',
        'bottom': '-10px',
        'background': 'linear-gradient(45deg, #FFD700, #FF1493, #32CD32, #87CEEB)',
        'border-radius': '25px',
        'opacity': '0',
        'z-index': '-1',
        'animation': 'glowPulse 2s ease-in-out'
    });
    
    card.css('position', 'relative').append(glow);
    
    setTimeout(() => {
        glow.fadeOut(500, function() {
            glow.remove();
        });
    }, 2000);
}

function showFlowerSpecificMessage(flowerType) {
    const flowerMessages = {
        'girasol': {
            message: "Como un girasol, siempre busco tu luz ☀️",
            icon: "🌻",
            color: "#FFD700"
        },
        'margarita': {
            message: "Pura y hermosa como una margarita 🌼",
            icon: "🌼",
            color: "#FFFFFF"
        },
        'rosa': {
            message: "Eres mi rosa más preciada 🌹",
            icon: "🌹",
            color: "#DC143C"
        },
        'tulipan': {
            message: "Elegante como un tulipán en primavera 🌷",
            icon: "🌷",
            color: "#FF6347"
        },
        'default': {
            message: "Eres mi flor favorita en todo el jardín 💐",
            icon: "💐",
            color: "#FF69B4"
        }
    };
    
    const flowerData = flowerMessages[flowerType] || flowerMessages.default;
    
    const messagePopup = $(`
        <div class="flower-specific-message">
            <div class="message-content">
                <div class="flower-icon-large">${flowerData.icon}</div>
                <div class="flower-message-text">${flowerData.message}</div>
                <div class="message-hearts">
                    <i class="fas fa-heart"></i>
                    <i class="fas fa-heart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
        </div>
    `);
    
    messagePopup.css({
        'position': 'fixed',
        'top': '50%',
        'left': '50%',
        'transform': 'translate(-50%, -50%) scale(0)',
        'background': `linear-gradient(135deg, ${flowerData.color}ee, #FFD700cc)`,
        'color': flowerData.color === '#FFFFFF' ? '#333' : 'white',
        'padding': '30px',
        'border-radius': '20px',
        'text-align': 'center',
        'z-index': 3000,
        'box-shadow': '0 25px 60px rgba(0,0,0,0.3)',
        'backdrop-filter': 'blur(15px)',
        'border': `2px solid ${flowerData.color}44`,
        'min-width': '320px',
        'transition': 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    });
    
    $('body').append(messagePopup);
    
    // Animate appearance
    setTimeout(() => {
        messagePopup.css('transform', 'translate(-50%, -50%) scale(1)');
    }, 100);
    
    // Animate hearts
    setTimeout(() => {
        messagePopup.find('.message-hearts i').each(function(index) {
            const heart = $(this);
            setTimeout(() => {
                heart.css({
                    'color': '#FF1493',
                    'animation': 'heartBeat 1s ease-in-out infinite',
                    'transform': 'scale(1.2)'
                });
            }, index * 200);
        });
    }, 600);
    
    // Auto close
    setTimeout(() => {
        messagePopup.css('transform', 'translate(-50%, -50%) scale(0)');
        setTimeout(() => messagePopup.remove(), 500);
    }, 4000);
}

function createFlowerParticles(card) {
    const rect = card[0].getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const particles = ['🌸', '🌼', '🌺', '✨', '💫', '⭐'];
    
    for (let i = 0; i < 12; i++) {
        const particle = $(`<div class="flower-particle">${particles[i % particles.length]}</div>`);
        
        particle.css({
            'position': 'fixed',
            'left': centerX + 'px',
            'top': centerY + 'px',
            'font-size': (Math.random() * 15 + 10) + 'px',
            'pointer-events': 'none',
            'z-index': 2000,
            'opacity': '0'
        });
        
        $('body').append(particle);
        
        // Random direction and distance
        const angle = (i / 12) * 2 * Math.PI;
        const distance = Math.random() * 100 + 50;
        const deltaX = Math.cos(angle) * distance;
        const deltaY = Math.sin(angle) * distance;
        
        // Animate particle
        particle.animate({
            'left': centerX + deltaX + 'px',
            'top': centerY + deltaY + 'px',
            'opacity': 1
        }, 300, 'easeOutQuart').animate({
            'opacity': 0,
            'transform': 'scale(1.5) rotate(180deg)'
        }, 800, 'easeInQuart', function() {
            particle.remove();
        });
    }
}

function displaySpecialMessage(messageData) {
    const specialPopup = $(`
        <div class="special-message-popup">
            <div class="special-content">
                <div class="special-icon">
                    <i class="${messageData.icon}"></i>
                </div>
                <div class="special-text">${messageData.text}</div>
                <div class="special-decoration">
                    <div class="sparkle-line"></div>
                </div>
            </div>
        </div>
    `);
    
    specialPopup.css({
        'position': 'fixed',
        'top': '50%',
        'left': '50%',
        'transform': 'translate(-50%, -50%) scale(0) rotate(10deg)',
        'background': `linear-gradient(135deg, ${messageData.color}dd, #FFD700bb)`,
        'color': 'white',
        'padding': '40px',
        'border-radius': '25px',
        'text-align': 'center',
        'z-index': 3000,
        'box-shadow': '0 30px 80px rgba(0,0,0,0.4)',
        'backdrop-filter': 'blur(20px)',
        'border': '3px solid rgba(255,255,255,0.3)',
        'min-width': '400px',
        'transition': 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    });
    
    $('body').append(specialPopup);
    
    // Animate entrance
    setTimeout(() => {
        specialPopup.css('transform', 'translate(-50%, -50%) scale(1) rotate(0deg)');
    }, 100);
    
    // Add sparkle animation
    setTimeout(() => {
        const sparkles = specialPopup.find('.sparkle-line');
        sparkles.css({
            'height': '2px',
            'background': 'linear-gradient(90deg, transparent, #FFD700, transparent)',
            'width': '100%',
            'animation': 'sparkleSlide 2s ease-in-out infinite'
        });
    }, 500);
    
    // Auto close
    setTimeout(() => {
        specialPopup.css('transform', 'translate(-50%, -50%) scale(0) rotate(-10deg)');
        setTimeout(() => specialPopup.remove(), 600);
    }, 5000);
}

// ...existing code...

// Add CSS animations for the new effects
$('<style>').text(`
    @keyframes glowPulse {
        0%, 100% { opacity: 0; transform: scale(1); }
        50% { opacity: 0.3; transform: scale(1.02); }
    }
    
    @keyframes sparkleSlide {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
    }
    
    .flower-specific-message {
        font-family: 'Arial', sans-serif;
    }
    
    .flower-icon-large {
        font-size: 3em;
        margin-bottom: 15px;
        animation: floatIcon 2s ease-in-out infinite;
    }
    
    .flower-message-text {
        font-size: 1.2em;
        margin-bottom: 20px;
        font-weight: 500;
    }
    
    .message-hearts {
        font-size: 1.5em;
    }
    
    .message-hearts i {
        margin: 0 5px;
        transition: all 0.3s ease;
    }
    
    @keyframes floatIcon {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-10px) rotate(5deg); }
    }
    
    .special-message-popup {
        font-family: 'Arial', sans-serif;
    }
    
    .special-icon {
        font-size: 2.5em;
        margin-bottom: 20px;
        color: #FFD700;
    }
    
    .special-text {
        font-size: 1.3em;
        font-weight: 500;
        line-height: 1.4;
        margin-bottom: 20px;
    }
`).appendTo('head');

function handleSmoothScroll() {
    const target = $('.main-content');
    
    $('html, body').animate({
        scrollTop: target.offset().top - 80
    }, 1000, 'easeInOutCubic');
    
    // Efecto visual en el indicador
    $(this).addClass('clicked-effect');
    setTimeout(() => {
        $(this).removeClass('clicked-effect');
    }, 600);
}

// ===============================
// ANIMACIONES BASE Y EFECTOS VISUALES
// ===============================

// ...existing code...

function initializeBaseAnimations() {
    // Inicializar partículas de fondo
    animateBackgroundParticles();
    
    // Inicializar flores flotantes
    animateFloatingFlowers();
    
    // Efecto de brillo en el fondo
    createBackgroundShimmer();
    
    // Animaciones de entrada para elementos visibles
    animateVisibleElements();
}

// Add missing functions after initializeBaseAnimations
function createBackgroundShimmer() {
    const shimmer = $('<div class="background-shimmer"></div>');
    
    shimmer.css({
        'position': 'fixed',
        'top': '0',
        'left': '0',
        'width': '100%',
        'height': '100%',
        'background': 'linear-gradient(45deg, transparent 30%, rgba(255,215,0,0.1) 50%, transparent 70%)',
        'pointer-events': 'none',
        'z-index': '1',
        'animation': 'shimmerMove 8s linear infinite'
    });
    
    $('body').prepend(shimmer);
    
    // Add shimmer animation styles
    if (!$('#shimmerStyles').length) {
        $('<style id="shimmerStyles">').text(`
            @keyframes shimmerMove {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100vw); }
            }
        `).appendTo('head');
    }
}

function animateVisibleElements() {
    // Animate elements that are visible on page load
    $('.flower-card, .main-btn, .section-header').each(function(index) {
        const element = $(this);
        
        element.css({
            'opacity': '0',
            'transform': 'translateY(30px)'
        });
        
        setTimeout(() => {
            element.css({
                'opacity': '1',
                'transform': 'translateY(0)',
                'transition': 'all 0.6s ease-out'
            });
        }, index * 100);
    });
}

function setupScrollObservers() {
    // Create intersection observer for scroll animations
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = $(entry.target);
                    element.addClass('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe elements that should animate on scroll
        $('.flower-card, .counter-item, .feature-card').each(function() {
            observer.observe(this);
        });
    }
}

// ...existing code...
function animateBackgroundParticles() {
    $('.particle').each(function(index) {
        const particle = $(this);
        const delay = Math.random() * 5000;
        const duration = 8000 + Math.random() * 4000;
        
        setTimeout(() => {
            animateParticle(particle, duration);
        }, delay);
    });
}

function animateParticle(particle, duration) {
    const startX = Math.random() * window.innerWidth;
    const endX = startX + (Math.random() - 0.5) * 200;
    
    particle.css({
        left: startX + 'px',
        top: window.innerHeight + 10 + 'px',
        opacity: 0
    });
    
    particle.animate({
        top: -50 + 'px',
        left: endX + 'px',
        opacity: 0.7
    }, duration * 0.8, 'linear');
    
    particle.animate({
        opacity: 0
    }, duration * 0.2, 'linear', function() {
        setTimeout(() => {
            animateParticle(particle, duration);
        }, Math.random() * 2000);
    });
}

function animateFloatingFlowers() {
    $('.flower-icon').each(function(index) {
        const flower = $(this);
        const delay = index * 2000;
        const duration = 12000 + Math.random() * 6000;
        
        setTimeout(() => {
            animateFloatingFlower(flower, duration);
        }, delay);
    });
}

function animateFloatingFlower(flower, duration) {
    const startX = Math.random() * window.innerWidth;
    const path = generateFloatingPath();
    
    flower.css({
        left: startX + 'px',
        top: window.innerHeight + 20 + 'px',
        transform: 'rotate(0deg)',
        opacity: 0
    });
    
    flower.animate({
        top: -100 + 'px',
        opacity: 0.6
    }, duration, 'linear', function() {
        setTimeout(() => {
            animateFloatingFlower(flower, duration);
        }, Math.random() * 3000);
    });
    
    // Rotación y movimiento lateral
    let rotation = 0;
    let lateralPosition = startX;
    
    const moveInterval = setInterval(() => {
        rotation += 2;
        lateralPosition += (Math.random() - 0.5) * 3;
        
        flower.css({
            'transform': `rotate(${rotation}deg)`,
            'left': Math.max(0, Math.min(window.innerWidth - 30, lateralPosition)) + 'px'
        });
    }, 100);
    
    setTimeout(() => {
        clearInterval(moveInterval);
    }, duration);
}

function generateFloatingPath() {
    const points = [];
    const segments = 8;
    
    for (let i = 0; i <= segments; i++) {
        points.push({
            x: (Math.random() - 0.5) * 200,
            y: (window.innerHeight / segments) * i
        });
    }
    
    return points;
}

// ===============================
// GENERACIÓN DE FLORES MÁGICAS
// ===============================

async function generateMagicalFlowers() {
    const dynamicArea = $('#dynamicArea');
    dynamicArea.empty();
    
    // Crear contenedor principal
    const container = createFlowersContainer();
    dynamicArea.append(container);
    
    // Tipos de flores con sus propiedades
    const flowerData = [
        { emoji: '🌻', name: 'Girasol', message: 'Eres mi sol brillante ☀️', color: '#FFD700' },
        { emoji: '🌼', name: 'Margarita', message: 'Pura y hermosa como tú 💛', color: '#FFFFFF' },
        { emoji: '🌺', name: 'Hibisco', message: 'Exótica y fascinante 🌺', color: '#FF69B4' },
        { emoji: '🌸', name: 'Sakura', message: 'Delicada como tus sentimientos 🌸', color: '#FFB6C1' },
        { emoji: '🌷', name: 'Tulipán', message: 'Elegante y perfecta 🌷', color: '#FF6347' },
        { emoji: '🌹', name: 'Rosa', message: 'Mi amor eterno 🌹', color: '#DC143C' }
    ];
    
    // Generar flores de forma escalonada
    for (let i = 0; i < 18; i++) {
        const flowerInfo = flowerData[i % flowerData.length];
        
        await new Promise(resolve => {
            setTimeout(() => {
                createMagicalFlower(container, flowerInfo, i);
                resolve();
            }, i * 150);
        });
    }
    
    // Agregar efectos especiales al contenedor
    addContainerEffects(container);
}

function createFlowersContainer() {
    const container = $(`
        <div class="magical-flowers-container">
            <div class="container-header">
                <i class="fas fa-magic"></i>
                <span>Jardín Mágico de Amor</span>
                <i class="fas fa-magic"></i>
            </div>
            <div class="flowers-grid-magical"></div>
        </div>
    `);
    
    container.css({
        'background': 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,215,0,0.1) 100%)',
        'border-radius': '25px',
        'padding': '30px',
        'backdrop-filter': 'blur(15px)',
        'box-shadow': '0 25px 60px rgba(0,0,0,0.15)',
        'border': '2px solid rgba(255,215,0,0.3)',
        'position': 'relative',
        'overflow': 'hidden'
    });
    
    return container;
}

function createMagicalFlower(container, flowerInfo, index) {
    const flower = $(`
        <div class="magical-flower" data-flower="${flowerInfo.name.toLowerCase()}">
            <div class="flower-emoji">${flowerInfo.emoji}</div>
            <div class="flower-name">${flowerInfo.name}</div>
            <div class="flower-love-meter">
                <div class="love-bar"></div>
            </div>
        </div>
    `);
    
    // Posición inicial fuera del contenedor
    flower.css({
        'position': 'relative',
        'display': 'inline-block',
        'margin': '15px',
        'padding': '20px',
        'background': `linear-gradient(135deg, ${flowerInfo.color}22, white)`,
        'border-radius': '20px',
        'text-align': 'center',
        'cursor': 'pointer',
        'border': `2px solid ${flowerInfo.color}44`,
        'transform': 'scale(0) rotate(180deg)',
        'opacity': '0',
        'transition': 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    });
    
    // Evento de click
    flower.on('click', function() {
        showFlowerLove($(this), flowerInfo);
        animateFlowerSelection($(this));
    });
    
    // Evento hover
    flower.on('mouseenter', function() {
        $(this).css({
            'transform': 'scale(1.1) rotate(5deg)',
            'box-shadow': `0 15px 30px ${flowerInfo.color}33`
        });
    }).on('mouseleave', function() {
        $(this).css({
            'transform': 'scale(1) rotate(0deg)',
            'box-shadow': 'none'
        });
    });
    
    container.find('.flowers-grid-magical').append(flower);
    
    // Animar entrada
    setTimeout(() => {
        flower.css({
            'transform': 'scale(1) rotate(0deg)',
            'opacity': '1'
        });
        
        // Animar barra de amor
        setTimeout(() => {
            const loveBar = flower.find('.love-bar');
            const lovePercentage = Math.random() * 40 + 60; // Entre 60% y 100%
            
            loveBar.css({
                'width': '0%',
                'height': '6px',
                'background': `linear-gradient(90deg, ${flowerInfo.color}, #FF1493)`,
                'border-radius': '3px',
                'transition': 'width 1.5s ease-out'
            });
            
            setTimeout(() => {
                loveBar.css('width', lovePercentage + '%');
            }, 100);
        }, 300);
    }, 50);
}

function showFlowerLove(flower, flowerInfo) {
    // Crear popup de amor
    const lovePopup = $(`
        <div class="flower-love-popup">
            <div class="love-content">
                <div class="love-icon">${flowerInfo.emoji}</div>
                <div class="love-message">${flowerInfo.message}</div>
                <div class="love-hearts">
                    <i class="fas fa-heart"></i>
                    <i class="fas fa-heart"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
        </div>
    `);
    
    lovePopup.css({
        'position': 'fixed',
        'top': '50%',
        'left': '50%',
        'transform': 'translate(-50%, -50%) scale(0)',
        'background': `linear-gradient(135deg, ${flowerInfo.color}ee, #FF1493ee)`,
        'color': 'white',
        'padding': '40px',
        'border-radius': '25px',
        'text-align': 'center',
        'z-index': 1000,
        'box-shadow': '0 25px 60px rgba(0,0,0,0.3)',
        'backdrop-filter': 'blur(10px)',
        'transition': 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    });
    
    $('body').append(lovePopup);
    
    // Animar aparición
    setTimeout(() => {
        lovePopup.css('transform', 'translate(-50%, -50%) scale(1)');
    }, 50);
    
    // Animar corazones
    setTimeout(() => {
        lovePopup.find('.love-hearts i').each(function(index) {
            const heart = $(this);
            setTimeout(() => {
                heart.css({
                    'animation': 'heartBeat 0.8s ease-in-out',
                    'color': '#FFD700'
                });
            }, index * 200);
        });
    }, 500);
    
    // Remover popup después de 3 segundos
    setTimeout(() => {
        lovePopup.css('transform', 'translate(-50%, -50%) scale(0)');
        setTimeout(() => {
            lovePopup.remove();
        }, 500);
    }, 3000);
    
    // Incrementar contador de amor
    heartCount++;
    updateHeartCounter();
}

// ===============================
// SISTEMA DE NOTIFICACIONES
// ===============================

function showNotification(message, type = 'info', duration = 3000) {
    const notification = $(`
        <div class="love-notification ${type}">
            <div class="notification-content">
                <i class="notification-icon"></i>
                <span class="notification-text">${message}</span>
                <button class="notification-close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
    `);
    
    // Configurar icono según tipo
    const icons = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        warning: 'fas fa-exclamation-triangle',
        info: 'fas fa-info-circle',
        love: 'fas fa-heart'
    };
    
    notification.find('.notification-icon').addClass(icons[type] || icons.info);
    
    // Estilos
    notification.css({
        'position': 'fixed',
        'top': '20px',
        'right': '-400px',
        'background': getNotificationColor(type),
        'color': 'white',
        'padding': '15px 25px',
        'border-radius': '10px',
        'box-shadow': '0 10px 30px rgba(0,0,0,0.2)',
        'z-index': 2000,
        'min-width': '300px',
        'transition': 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    });
    
    $('body').append(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.css('right', '20px');
    }, 100);
    
    // Evento de cierre
    notification.find('.notification-close').on('click', function() {
        closeNotification(notification);
    });
    
    // Auto cerrar
    setTimeout(() => {
        closeNotification(notification);
    }, duration);
}

function getNotificationColor(type) {
    const colors = {
        success: 'linear-gradient(135deg, #32CD32, #228B22)',
        error: 'linear-gradient(135deg, #FF6B6B, #FF4444)',
        warning: 'linear-gradient(135deg, #FFD700, #FFA500)',
        info: 'linear-gradient(135deg, #87CEEB, #4169E1)',
        love: 'linear-gradient(135deg, #FF1493, #FFD700)'
    };
    
    return colors[type] || colors.info;
}

function closeNotification(notification) {
    notification.css('right', '-400px');
    setTimeout(() => {
        notification.remove();
    }, 400);
}

// ===============================
// UTILIDADES Y HELPERS
// ===============================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function getRandomColor() {
    const colors = ['#FFD700', '#FF1493', '#32CD32', '#87CEEB', '#FF6347', '#FFA500'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function animateButton(button, state) {
    const states = {
        generating: {
            transform: 'scale(0.95)',
            background: 'linear-gradient(135deg, #FFA500, #FF6347)'
        },
        complete: {
            transform: 'scale(1.05)',
            background: 'linear-gradient(135deg, #32CD32, #228B22)'
        },
        reset: {
            transform: 'scale(1)',
            background: 'linear-gradient(135deg, #32CD32, #FFD700, #87CEEB)'
        }
    };
    
    if (states[state]) {
        button.css(states[state]);
    }
}

function handleWindowResize() {
    // Reajustar elementos responsivos
    adjustResponsiveElements();
    
    // Recalcular posiciones de partículas
    recalculateParticlePositions();
}

function adjustResponsiveElements() {
    const windowWidth = $(window).width();
    
    if (windowWidth <= 768) {
        $('.magical-flowers-container').css('padding', '20px');
        $('.flower-card').css('margin', '10px 5px');
    } else {
        $('.magical-flowers-container').css('padding', '30px');
        $('.flower-card').css('margin', '15px');
    }
}

function recalculateParticlePositions() {
    $('.particle, .flower-icon').each(function() {
        const element = $(this);
        const currentLeft = parseFloat(element.css('left'));
        const windowWidth = window.innerWidth;
        
        if (currentLeft > windowWidth) {
            element.css('left', Math.random() * windowWidth + 'px');
        }
    });
}

// ===============================
// INICIALIZACIÓN DE CONTADORES
// ===============================

function initializeCounters() {
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counterItem = $(entry.target);
                animateCounterValue(counterItem);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.7,
        rootMargin: '0px 0px -100px 0px'
    });
    
    $('.counter-item').each(function() {
        counterObserver.observe(this);
    });
}

function animateCounterValue(counterItem) {
    const numberElement = counterItem.find('.counter-number');
    const targetValue = numberElement.data('count');
    
    // Efecto especial para infinito
    if (targetValue === '∞') {
        animateInfiniteCounter(numberElement);
        return;
    }
    
    // Animación numérica estándar
    animateNumericCounter(numberElement, targetValue);
}

function animateInfiniteCounter(element) {
    const symbols = ['∞', '💛', '∞', '💕', '∞', '🌻', '∞'];
    let currentIndex = 0;
    
    const infiniteInterval = setInterval(() => {
        element.text(symbols[currentIndex]);
        element.css('color', getRandomColor());
        currentIndex = (currentIndex + 1) % symbols.length;
    }, 600);
    
    setTimeout(() => {
        clearInterval(infiniteInterval);
        element.text('∞').addClass('glow-effect');
        element.css('color', '#FF1493');
    }, 4000);
}

function animateNumericCounter(element, targetValue) {
    let currentValue = 0;
    const increment = targetValue / 60;
    const duration = 2500;
    const stepTime = duration / 60;
    
    element.text('0');
    
    const counterInterval = setInterval(() => {
        currentValue += increment;
        
        if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(counterInterval);
            element.addClass('glow-effect');
            
            // Efecto de celebración
            createCounterCelebration(element);
        }
        
        element.text(Math.floor(currentValue).toLocaleString());
    }, stepTime);
}

function createCounterCelebration(element) {
    const rect = element[0].getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 8; i++) {
        const sparkle = $('<i class="fas fa-star counter-sparkle"></i>');
        
        sparkle.css({
            'position': 'fixed',
            'left': centerX + 'px',
            'top': centerY + 'px',
            'color': '#FFD700',
            'font-size': '12px',
            'pointer-events': 'none',
            'z-index': 1000
        });
        
        $('body').append(sparkle);
        
        const angle = (i / 8) * 2 * Math.PI;
        const distance = 50;
        const deltaX = Math.cos(angle) * distance;
        const deltaY = Math.sin(angle) * distance;
        
        sparkle.animate({
            'left': centerX + deltaX + 'px',
            'top': centerY + deltaY + 'px',
            'opacity': 0
        }, 1500, 'easeOutQuart', function() {
            sparkle.remove();
        });
    }
}

// ===============================
// MAIN1.JS - EFECTOS AVANZADOS Y FUNCIONALIDADES ESPECIALES
// ===============================

// Variables para efectos especiales
let sparkleInterval;
let musicInterval;
let rainInterval;
let heartBurstCount = 0;

// ===============================
// CORAZONES INTERACTIVOS Y EFECTOS
// ===============================

function setupInteractiveHearts() {
    $('.clickable-heart').each(function(index) {
        const heart = $(this);
        
        heart.off('click').on('click', function(e) {
            handleHeartClick($(this), e);
        });
        
        // Efecto hover mejorado
        heart.on('mouseenter', function() {
            $(this).css({
                'transform': 'scale(1.4) rotate(15deg)',
                'text-shadow': '0 0 15px currentColor',
                'filter': 'brightness(1.3)'
            });
        }).on('mouseleave', function() {
            $(this).css({
                'transform': 'scale(1) rotate(0deg)',
                'text-shadow': 'none',
                'filter': 'brightness(1)'
            });
        });
    });
}

function handleHeartClick(heart, event) {
    const message = heart.data('message');
    const rect = heart[0].getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Crear explosión de corazones
    createAdvancedHeartBurst(centerX, centerY);
    
    // Mostrar mensaje con efecto especial
    displayHeartMessage(message);
    
    // Animar el corazón clickeado
    animateClickedHeart(heart);
    
    // Crear ondas de amor
    createLoveWaves(centerX, centerY);
    
    // Incrementar contador
    heartBurstCount++;
    updateLoveStatistics();
}

function createAdvancedHeartBurst(x, y) {
    const heartCount = 15;
    const colors = ['#FF1493', '#FFD700', '#FF6347', '#32CD32', '#87CEEB', '#FF69B4'];
    
    for (let i = 0; i < heartCount; i++) {
        const heart = $('<i class="fas fa-heart burst-heart-advanced"></i>');
        
        heart.css({
            'position': 'fixed',
            'left': x + 'px',
            'top': y + 'px',
            'color': colors[i % colors.length],
            'font-size': (Math.random() * 15 + 10) + 'px',
            'pointer-events': 'none',
            'z-index': 2000,
            'text-shadow': '0 0 10px currentColor'
        });
        
        $('body').append(heart);
        
        // Patrón de explosión en espiral
        const angle = (i / heartCount) * 4 * Math.PI;
        const radius = Math.random() * 120 + 80;
        const deltaX = Math.cos(angle) * radius;
        const deltaY = Math.sin(angle) * radius;
        const rotation = Math.random() * 720 + 360;
        
        heart.animate({
            'left': x + deltaX + 'px',
            'top': y + deltaY + 'px',
            'opacity': 0,
            'transform': `scale(1.5) rotate(${rotation}deg)`
        }, 2500, 'easeOutQuart', function() {
            heart.remove();
        });
        
        // Efecto de parpadeo
        setTimeout(() => {
            heart.css('animation', 'heartSparkle 0.5s infinite alternate');
        }, 500);
    }
}

function createLoveWaves(x, y) {
    for (let i = 0; i < 3; i++) {
        const wave = $('<div class="love-wave"></div>');
        
        wave.css({
            'position': 'fixed',
            'left': x + 'px',
            'top': y + 'px',
            'width': '0px',
            'height': '0px',
            'border': '2px solid rgba(255, 20, 147, 0.6)',
            'border-radius': '50%',
            'pointer-events': 'none',
            'z-index': 1500,
            'transform': 'translate(-50%, -50%)'
        });
        
        $('body').append(wave);
        
        setTimeout(() => {
            wave.animate({
                'width': '200px',
                'height': '200px',
                'opacity': 0
            }, 1500, 'easeOutQuart', function() {
                wave.remove();
            });
        }, i * 200);
    }
}

function displayHeartMessage(message) {
    const popup = $(`
        <div class="heart-message-popup">
            <div class="message-container">
                <div class="message-icon">
                    <i class="fas fa-heart-pulse"></i>
                </div>
                <div class="message-text">${message}</div>
                <div class="message-decoration">
                    <div class="sparkle"></div>
                    <div class="sparkle"></div>
                    <div class="sparkle"></div>
                </div>
            </div>
        </div>
    `);
    
    popup.css({
        'position': 'fixed',
        'top': '50%',
        'left': '50%',
        'transform': 'translate(-50%, -50%) scale(0)',
        'background': 'linear-gradient(135deg, #FF1493, #FFD700, #FF6347)',
        'color': 'white',
        'padding': '30px',
        'border-radius': '20px',
        'text-align': 'center',
        'z-index': 3000,
        'box-shadow': '0 20px 60px rgba(0,0,0,0.3)',
        'backdrop-filter': 'blur(15px)',
        'border': '2px solid rgba(255,255,255,0.3)',
        'min-width': '300px',
        'transition': 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    });
    
    $('body').append(popup);
    
    // Animar aparición
    setTimeout(() => {
        popup.css('transform', 'translate(-50%, -50%) scale(1)');
    }, 100);
    
    // Animar decoraciones
    setTimeout(() => {
        popup.find('.sparkle').each(function(index) {
            $(this).css({
                'width': '6px',
                'height': '6px',
                'background': '#FFD700',
                'border-radius': '50%',
                'position': 'absolute',
                'animation': `sparkleFloat 2s ease-in-out infinite ${index * 0.3}s`
            });
        });
    }, 300);
    
    // Auto cerrar
    setTimeout(() => {
        popup.css('transform', 'translate(-50%, -50%) scale(0)');
        setTimeout(() => popup.remove(), 600);
    }, 3500);
}

function animateClickedHeart(heart) {
    heart.addClass('clicked-heart-effect');
    
    // Secuencia de transformaciones
    heart.css('transform', 'scale(2) rotate(360deg)');
    
    setTimeout(() => {
        heart.css('transform', 'scale(1.2) rotate(0deg)');
    }, 300);
    
    setTimeout(() => {
        heart.css('transform', 'scale(1) rotate(0deg)');
        heart.removeClass('clicked-heart-effect');
    }, 600);
}

// ===============================
// EFECTOS DE TECLADO AVANZADOS
// ===============================

function enableKeyboardEffects() {
    $(document).off('keydown.loveEffects').on('keydown.loveEffects', function(e) {
        handleAdvancedKeyEffects(e);
    });
}

function handleAdvancedKeyEffects(e) {
    // Combinaciones de teclas para efectos especiales
    const key = e.key.toLowerCase();
    
    switch (key) {
        case 'l':
            if (e.ctrlKey) {
                createMassiveHeartExplosion();
            } else {
                createHeartRain();
            }
            break;
            
        case 'f':
            if (e.ctrlKey) {
                createFlowerStorm();
            } else {
                createSingleFlowerEffect();
            }
            break;
            
        case 'm':
            if (e.ctrlKey) {
                activateRainbowMode();
            } else {
                createMagicSparkles();
            }
            break;
            
        case 's':
            if (e.ctrlKey) {
                takeScreenshotEffect();
            } else {
                createStarShower();
            }
            break;
            
        case 'r':
            if (e.ctrlKey) {
                resetAllEffects();
            }
            break;
    }
}

function createMassiveHeartExplosion() {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    // Crear múltiples ondas de corazones
    for (let wave = 0; wave < 5; wave++) {
        setTimeout(() => {
            createHeartWave(centerX, centerY, wave);
        }, wave * 200);
    }
    
    showNotification('💥 ¡EXPLOSIÓN MASIVA DE AMOR! 💥', 'love', 4000);
}

function createHeartWave(centerX, centerY, waveIndex) {
    const heartsPerWave = 20;
    const waveRadius = 150 + (waveIndex * 80);
    
    for (let i = 0; i < heartsPerWave; i++) {
        const heart = $('<i class="fas fa-heart massive-heart"></i>');
        const angle = (i / heartsPerWave) * 2 * Math.PI;
        const x = centerX + Math.cos(angle) * waveRadius;
        const y = centerY + Math.sin(angle) * waveRadius;
        
        heart.css({
            'position': 'fixed',
            'left': centerX + 'px',
            'top': centerY + 'px',
            'color': getRandomColor(),
            'font-size': (Math.random() * 20 + 15) + 'px',
            'pointer-events': 'none',
            'z-index': 2000,
            'text-shadow': '0 0 15px currentColor'
        });
        
        $('body').append(heart);
        
        heart.animate({
            'left': x + 'px',
            'top': y + 'px',
            'opacity': 0,
            'transform': 'scale(2) rotate(720deg)'
        }, 3000 + (waveIndex * 500), 'easeOutQuart', function() {
            heart.remove();
        });
    }
}

function createHeartRain() {
    if (rainInterval) {
        clearInterval(rainInterval);
        rainInterval = null;
        return;
    }
    
    let rainDuration = 0;
    const maxDuration = 10000; // 10 segundos
    
    rainInterval = setInterval(() => {
        if (rainDuration >= maxDuration) {
            clearInterval(rainInterval);
            rainInterval = null;
            showNotification('☔ Lluvia de corazones terminada 💛', 'info');
            return;
        }
        
        createRainHeart();
        rainDuration += 200;
    }, 200);
    
    showNotification('☔ ¡Lluvia de corazones activada! Presiona L para detener', 'love');
}

function createRainHeart() {
    const heart = $('<i class="fas fa-heart rain-heart"></i>');
    
    heart.css({
        'position': 'fixed',
        'left': Math.random() * window.innerWidth + 'px',
        'top': -30 + 'px',
        'color': getRandomColor(),
        'font-size': (Math.random() * 15 + 10) + 'px',
        'pointer-events': 'none',
        'z-index': 1000,
        'text-shadow': '0 0 10px currentColor'
    });
    
    $('body').append(heart);
    
    const fallDuration = Math.random() * 3000 + 2000;
    const swayAmount = Math.random() * 100 + 50;
    
    heart.animate({
        'top': window.innerHeight + 30 + 'px'
    }, fallDuration, 'linear', function() {
        heart.remove();
    });
    
    // Efecto de balanceo
    let swayDirection = 1;
    const swayInterval = setInterval(() => {
        if (heart.length === 0) {
            clearInterval(swayInterval);
            return;
        }
        
        const currentLeft = parseFloat(heart.css('left'));
        heart.css('left', currentLeft + (swayDirection * Math.random() * 2) + 'px');
        
        if (Math.random() < 0.15) {
            swayDirection *= -1;
        }
    }, 150);
    
    setTimeout(() => {
        clearInterval(swayInterval);
    }, fallDuration);
}

// ===============================
// EXPERIENCIA MUSICAL AVANZADA
// ===============================

function startMusicExperience() {
    if (musicVisualizerActive) {
        stopMusicVisualization();
        return;
    }
    
    musicVisualizerActive = true;
    
    // Crear visualizador avanzado
    const visualizer = createAdvancedMusicVisualizer();
    $('#dynamicArea').empty().append(visualizer);
    
    // Iniciar efectos musicales
    startMusicVisualization();
    startMusicParticles();
    startRhythmEffects();
    
    // Actualizar botón
    $('#playMusic').html('<i class="fas fa-stop"></i> Detener Música');
    
    showNotification('🎵 Experiencia musical iniciada 🎵', 'info');
}

function createAdvancedMusicVisualizer() {
    const visualizer = $(`
        <div class="advanced-music-visualizer">
            <div class="visualizer-header">
                <i class="fas fa-music"></i>
                <span>Melodía de Nuestro Amor</span>
                <i class="fas fa-heart"></i>
            </div>
            <div class="equalizer-container">
                <div class="equalizer-bars"></div>
            </div>
            <div class="music-controls">
                <button id="bassBoost" class="music-control-btn">
                    <i class="fas fa-volume-up"></i> Bass
                </button>
                <button id="lightShow" class="music-control-btn">
                    <i class="fas fa-lightbulb"></i> Luces
                </button>
                <button id="heartBeat" class="music-control-btn">
                    <i class="fas fa-heartbeat"></i> Ritmo
                </button>
            </div>
        </div>
    `);
    
    // Crear barras del ecualizador
    const barsContainer = visualizer.find('.equalizer-bars');
    for (let i = 0; i < 32; i++) {
        const bar = $('<div class="eq-bar"></div>');
        bar.css({
            'width': '8px',
            'background': `linear-gradient(to top, 
                #FF1493 0%, 
                #FFD700 50%, 
                #32CD32 100%
            )`,
            'margin': '0 1px',
            'border-radius': '4px 4px 0 0',
            'transition': 'height 0.1s ease-out'
        });
        barsContainer.append(bar);
    }
    
    // Eventos de controles
    setupMusicControls(visualizer);
    
    return visualizer;
}

function setupMusicControls(visualizer) {
    visualizer.find('#bassBoost').on('click', function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            enhanceBassEffect();
        } else {
            reduceBassEffect();
        }
    });
    
    visualizer.find('#lightShow').on('click', function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            startLightShow();
        } else {
            stopLightShow();
        }
    });
    
    visualizer.find('#heartBeat').on('click', function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            startHeartBeatEffect();
        } else {
            stopHeartBeatEffect();
        }
    });
}

function startMusicVisualization() {
    musicInterval = setInterval(() => {
        $('.eq-bar').each(function() {
            const height = Math.random() * 100 + 20;
            $(this).css('height', height + 'px');
        });
    }, 100);
}

function startMusicParticles() {
    const particleInterval = setInterval(() => {
        if (!musicVisualizerActive) {
            clearInterval(particleInterval);
            return;
        }
        
        createMusicParticle();
    }, 300);
}

function createMusicParticle() {
    const notes = ['♪', '♫', '♬', '♩', '🎵', '🎶'];
    const note = $(`<div class="music-particle">${notes[Math.floor(Math.random() * notes.length)]}</div>`);
    
    note.css({
        'position': 'fixed',
        'left': Math.random() * window.innerWidth + 'px',
        'top': window.innerHeight + 20 + 'px',
        'font-size': (Math.random() * 20 + 15) + 'px',
        'color': getRandomColor(),
        'pointer-events': 'none',
        'z-index': 1500,
        'text-shadow': '0 0 10px currentColor'
    });
    
    $('body').append(note);
    
    note.animate({
        'top': -50 + 'px',
        'opacity': 0
    }, Math.random() * 4000 + 3000, 'easeOutQuart', function() {
        note.remove();
    });
    
    // Rotación durante el vuelo
    let rotation = 0;
    const rotateInterval = setInterval(() => {
        if (note.length === 0) {
            clearInterval(rotateInterval);
            return;
        }
        rotation += 10;
        note.css('transform', `rotate(${rotation}deg)`);
    }, 100);
}

function stopMusicVisualization() {
    musicVisualizerActive = false;
    
    if (musicInterval) {
        clearInterval(musicInterval);
        musicInterval = null;
    }
    
    // Limpiar efectos
    $('.music-particle, .light-beam, .heart-pulse-effect').remove();
    
    // Restaurar botón
    $('#playMusic').html('<i class="fas fa-music"></i> Melodía del Amor');
    
    // Mensaje de despedida
    showNotification('🎵 Música detenida. ¡Gracias por escuchar! 💛', 'info');
}

// ===============================
// EFECTOS DE FLORES Y NATURALEZA
// ===============================

function createFlowerStorm() {
    const flowers = ['🌻', '🌼', '🌺', '🌸', '🌷', '🌹', '🌿', '🍀'];
    const duration = 8000;
    let elapsed = 0;
    
    const stormInterval = setInterval(() => {
        if (elapsed >= duration) {
            clearInterval(stormInterval);
            showNotification('🌸 Tormenta de flores terminada 🌸', 'success');
            return;
        }
        
        // Crear múltiples flores por iteración
        for (let i = 0; i < 3; i++) {
            createStormFlower(flowers);
        }
        
        elapsed += 200;
    }, 200);
    
    showNotification('🌪️ ¡Tormenta de flores activada! 🌸', 'success');
}

function createStormFlower(flowers) {
    const flower = $(`<div class="storm-flower">${flowers[Math.floor(Math.random() * flowers.length)]}</div>`);
    
    flower.css({
        'position': 'fixed',
        'left': Math.random() * window.innerWidth + 'px',
        'top': -30 + 'px',
        'font-size': (Math.random() * 25 + 20) + 'px',
        'pointer-events': 'none',
        'z-index': 1000,
        'text-shadow': '0 0 8px rgba(255,215,0,0.5)'
    });
    
    $('body').append(flower);
    
    // Movimiento complejo con viento
    const windStrength = Math.random() * 3 + 1;
    const fallSpeed = Math.random() * 2000 + 3000;
    
    flower.animate({
        'top': window.innerHeight + 30 + 'px',
        'left': parseFloat(flower.css('left')) + (windStrength * 100) + 'px'
    }, fallSpeed, 'easeInQuart', function() {
        flower.remove();
    });
    
    // Rotación durante la caída
    let rotation = 0;
    const rotateInterval = setInterval(() => {
        if (flower.length === 0) {
            clearInterval(rotateInterval);
            return;
        }
        rotation += windStrength * 5;
        flower.css('transform', `rotate(${rotation}deg)`);
    }, 50);
}

function createSingleFlowerEffect() {
    const flowers = ['🌻', '🌼', '🌺', '🌸', '🌷'];
    const flower = flowers[Math.floor(Math.random() * flowers.length)];
    
    const flowerElement = $(`<div class="single-flower-effect">${flower}</div>`);
    
    flowerElement.css({
        'position': 'fixed',
        'left': '50%',
        'top': '50%',
        'transform': 'translate(-50%, -50%) scale(0)',
        'font-size': '60px',
        'pointer-events': 'none',
        'z-index': 2000,
        'text-shadow': '0 0 20px rgba(255,215,0,0.8)'
    });
    
    $('body').append(flowerElement);
    
    // Secuencia de animación
    setTimeout(() => {
        flowerElement.css({
            'transform': 'translate(-50%, -50%) scale(1)',
            'transition': 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
        });
    }, 100);
    
    setTimeout(() => {
        flowerElement.css('transform', 'translate(-50%, -50%) scale(1.2) rotate(360deg)');
    }, 800);
    
    setTimeout(() => {
        flowerElement.css({
            'transform': 'translate(-50%, -50%) scale(0) rotate(720deg)',
            'opacity': '0'
        });
    }, 2000);
    
    setTimeout(() => {
        flowerElement.remove();
    }, 2600);
}

// ===============================
// EFECTOS DE MAGIA Y DESTELLOS
// ===============================

function createMagicSparkles() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createSingleSparkle();
        }, i * 100);
    }
}

function createSingleSparkle() {
    const sparkle = $('<div class="magic-sparkle">✨</div>');
    
    sparkle.css({
        'position': 'fixed',
        'left': Math.random() * window.innerWidth + 'px',
        'top': Math.random() * window.innerHeight + 'px',
        'font-size': (Math.random() * 15 + 10) + 'px',
        'pointer-events': 'none',
        'z-index': 2000
    });
    
    $('body').append(sparkle);
    
    sparkle.animate({
        'opacity': 0,
        'transform': 'scale(2) rotate(180deg)'
    }, 2000, 'easeOutQuart', function() {
        sparkle.remove();
    });
}

function activateRainbowMode() {
    $('body').addClass('rainbow-mode');
    
    // Crear efecto arcoíris de fondo
    const rainbowOverlay = $('<div class="rainbow-overlay"></div>');
    rainbowOverlay.css({
        'position': 'fixed',
        'top': '0',
        'left': '0',
        'width': '100%',
        'height': '100%',
        'background': 'linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet)',
        'opacity': '0.1',
        'pointer-events': 'none',
        'z-index': '5',
        'animation': 'rainbowShift 3s ease-in-out infinite'
    });
    
    $('body').append(rainbowOverlay);
    
    showNotification('🌈 ¡MODO ARCOÍRIS ACTIVADO! 🌈', 'love', 5000);
    
    setTimeout(() => {
        $('body').removeClass('rainbow-mode');
        rainbowOverlay.fadeOut(1000, function() {
            rainbowOverlay.remove();
        });
    }, 10000);
}

function createStarShower() {
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            createShootingStar();
        }, i * 200);
    }
    
    showNotification('⭐ Lluvia de estrellas para ti ⭐', 'info');
}

function createShootingStar() {
    const star = $('<div class="shooting-star">⭐</div>');
    
    const startX = -50;
    const startY = Math.random() * (window.innerHeight / 2);
    const endX = window.innerWidth + 50;
    const endY = startY + Math.random() * 200 - 100;
    
    star.css({
        'position': 'fixed',
        'left': startX + 'px',
        'top': startY + 'px',
        'font-size': (Math.random() * 20 + 15) + 'px',
        'pointer-events': 'none',
        'z-index': 2000,
        'text-shadow': '0 0 10px #FFD700'
    });
    
    $('body').append(star);
    
    star.animate({
        'left': endX + 'px',
        'top': endY + 'px',
        'opacity': 0
    }, 2000, 'linear', function() {
        star.remove();
    });
}

// ===============================
// UTILIDADES AVANZADAS
// ===============================

function updateLoveStatistics() {
    // Actualizar estadísticas en tiempo real
    const stats = {
        heartBursts: heartBurstCount,
        flowerClicks: $('.flower-card.clicked').length,
        magicActivations: $('.magic-btn.activated').length
    };
    
    // Guardar en localStorage para persistencia
    localStorage.setItem('loveStats', JSON.stringify(stats));
}

function resetAllEffects() {
    // Detener todos los intervalos
    if (sparkleInterval) clearInterval(sparkleInterval);
    if (musicInterval) clearInterval(musicInterval);
    if (rainInterval) clearInterval(rainInterval);
    
    // Remover todos los efectos visuales
    $('.burst-heart-advanced, .rain-heart, .storm-flower, .magic-sparkle, .shooting-star, .music-particle').remove();
    
    // Restaurar estado inicial
    musicVisualizerActive = false;
    isAnimationActive = false;
    
    // Limpiar overlays
    $('.rainbow-overlay, .love-wave').remove();
    
    showNotification('🔄 Todos los efectos han sido reiniciados', 'info');
}

function takeScreenshotEffect() {
    // Crear efecto de flash de cámara
    const flash = $('<div class="camera-flash"></div>');
    flash.css({
        'position': 'fixed',
        'top': '0',
        'left': '0',
        'width': '100%',
        'height': '100%',
        'background': 'white',
        'z-index': '9999',
        'opacity': '0',
        'pointer-events': 'none'
    });
    
    $('body').append(flash);
    
    flash.animate({ opacity: 1 }, 100).animate({ opacity: 0 }, 200, function() {
        flash.remove();
    });
    
    // Crear corazones de "recuerdo"
    setTimeout(() => {
        for (let i = 0; i < 5; i++) {
            const heart = $('<i class="fas fa-heart memory-heart">📸</i>');
            heart.css({
                'position': 'fixed',
                'left': Math.random() * window.innerWidth + 'px',
                'top': Math.random() * window.innerHeight + 'px',
                'font-size': '20px',
                'color': '#FFD700',
                'pointer-events': 'none',
                'z-index': '2000',
                'opacity': '0'
            });
            
            $('body').append(heart);
            
            heart.animate({ opacity: 1 }, 500).delay(1500).animate({ opacity: 0 }, 500, function() {
                heart.remove();
            });
        }
    }, 300);
    
    showNotification('📸 ¡Momento capturado en el corazón! 💛', 'love');
}

// ===============================
// INICIALIZACIÓN ADICIONAL
// ===============================

function setupAdvancedHoverEffects() {
    // Efecto hover para tarjetas de flores
    $('.flower-card').each(function() {
        const card = $(this);
        
        card.on('mouseenter', function() {
            createMiniSparkles($(this));
        });
    });
}

function createMiniSparkles(element) {
    const rect = element[0].getBoundingClientRect();
    
    for (let i = 0; i < 3; i++) {
        const sparkle = $('<div class="mini-sparkle">✨</div>');
        
        sparkle.css({
            'position': 'fixed',
            'left': rect.left + Math.random() * rect.width + 'px',
            'top': rect.top + Math.random() * rect.height + 'px',
            'font-size': '10px',
            'pointer-events': 'none',
            'z-index': '1000',
            'opacity': '0'
        });
        
        $('body').append(sparkle);
        
        sparkle.animate({
            'opacity': 1,
            'transform': 'translateY(-20px)'
        }, 800).animate({
            'opacity': 0
        }, 400, function() {
            sparkle.remove();
        });
    }
}

// Agregar estilos CSS dinámicos para animaciones
$('<style>').text(`
    @keyframes heartSparkle {
        0% { filter: brightness(1) saturate(1); }
        100% { filter: brightness(1.5) saturate(1.5); }
    }
    
    @keyframes sparkleFloat {
        0% { transform: translateY(0px) rotate(0deg); opacity: 1; }
        100% { transform: translateY(-30px) rotate(360deg); opacity: 0; }
    }
    
    @keyframes rainbowShift {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
    
    .clicked-effect {
        animation: bounceScale 0.6s ease-out;
    }
    
    @keyframes bounceScale {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
`).appendTo('head');