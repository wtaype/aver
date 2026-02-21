import './inicio.css';
import $ from 'jquery';
import { app, version, autor, link } from '../wii.js';
import { wiVista, year, wiTip, wicopy } from '../widev.js';

// Frases locales de ejemplo
const frases = [
  { texto: "Con fe todo es posible. Confía en Dios y en ti mismo.", categoria: "Fe", tema: "Paz" },
  { texto: "Cada día es una nueva oportunidad para ser mejor.", categoria: "Motivación", tema: "Cielo" },
  { texto: "La vida es bella cuando la vives con propósito.", categoria: "Vida", tema: "Dulce" },
  { texto: "Dios tiene un plan perfecto para ti. Confía.", categoria: "Fe", tema: "Mora" },
  { texto: "No te rindas, lo mejor está por venir.", categoria: "Motivación", tema: "Futuro" },
  { texto: "Reflexiona sobre tus bendiciones, no tus problemas.", categoria: "Reflexión", tema: "Paz" },
  { texto: "Tu actitud determina tu altitud.", categoria: "Motivación", tema: "Cielo" },
  { texto: "Dios escribe historias hermosas con finales imperfectos.", categoria: "Fe", tema: "Dulce" },
  { texto: "Hoy es el día perfecto para empezar de nuevo.", categoria: "Vida", tema: "Mora" },
];

export const render = () => `
  <div class="inicio">
    <section class="hero">
      <div class="hero_contenido">
        <div class="hero_logo">
          <img src="${import.meta.env.BASE_URL}logo.webp" alt="Awonbe Logo" />
        </div>
        <h1 class="hero_titulo">
          Frases de <span class="gradiente">Motivación</span>,<br>
          <span class="gradiente">Reflexión</span> y <span class="gradiente">Fe en Dios</span>
        </h1>
        <p class="hero_subtitulo">
          Inspírate cada día con palabras que elevan tu espíritu.<br>
          Encuentra fuerza, esperanza y sabiduría en cada frase.
        </p>
        <div class="hero_stats">
          <div class="stat"><i class="fas fa-heart"></i><span>100% Gratis</span></div>
          <div class="stat"><i class="fas fa-infinity"></i><span>Siempre Actualizado</span></div>
          <div class="stat"><i class="fas fa-palette"></i><span>5 Temas</span></div>
          <div class="stat"><i class="fas fa-share-nodes"></i><span>Comparte Fácil</span></div>
        </div>
      </div>
    </section>

    <section class="frases_seccion">
      <h2 class="seccion_titulo">
        <i class="fas fa-quote-left"></i>
        Frases que Inspiran tu Día
      </h2>
      <p class="seccion_descripcion">
        Encuentra motivación, reflexión y fe en cada palabra
      </p>
      
      <div class="frases_grid">
        ${frases.map((frase, i) => `
          <div class="frase_card ${frase.tema.toLowerCase()}" data-vista="frase${i}">
            <div class="frase_icono">
              <i class="fas ${frase.categoria === 'Fe' ? 'fa-hands-praying' : frase.categoria === 'Motivación' ? 'fa-rocket' : frase.categoria === 'Vida' ? 'fa-heart' : 'fa-brain'}"></i>
            </div>
            <p class="frase_texto">"${frase.texto}"</p>
            <div class="frase_footer">
              <span class="frase_categoria">${frase.categoria}</span>
              <div class="frase_acciones">
                <button class="btn_copiar" data-texto="${frase.texto.replace(/"/g, '&quot;')}" ${wiTip('Copiar frase')}>
                  <i class="fas fa-copy"></i>
                </button>
                <button class="btn_compartir" data-texto="${frase.texto.replace(/"/g, '&quot;')}" ${wiTip('Compartir')}>
                  <i class="fas fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <section class="redes_seccion">
      <h2 class="seccion_titulo">
        <i class="fas fa-users"></i>
        Síguenos en Nuestras Redes
      </h2>
      <p class="seccion_descripcion">
        Únete a nuestra comunidad y recibe frases diarias de inspiración
      </p>
      
      <div class="redes_grid">
        <a href="https://www.youtube.com/channel/UCBnyIE557egJiZszex-vURg" target="_blank" rel="noopener" class="red_card youtube" data-vista="red1" ${wiTip('Suscríbete en YouTube')}>
          <div class="red_icono"><i class="fab fa-youtube"></i></div>
          <h3>YouTube</h3>
          <p>Videos inspiradores y motivacionales cada semana</p>
          <span class="red_seguir">Suscríbete <i class="fas fa-arrow-right"></i></span>
        </a>

        <a href="https://www.tiktok.com/@awonbe" target="_blank" rel="noopener" class="red_card tiktok" data-vista="red2" ${wiTip('Síguenos en TikTok')}>
          <div class="red_icono"><i class="fab fa-tiktok"></i></div>
          <h3>TikTok</h3>
          <p>Frases cortas y motivadoras en video formato</p>
          <span class="red_seguir">Síguenos <i class="fas fa-arrow-right"></i></span>
        </a>

        <a href="https://www.instagram.com/awonbeee/" target="_blank" rel="noopener" class="red_card instagram" data-vista="red3" ${wiTip('Síguenos en Instagram')}>
          <div class="red_icono"><i class="fab fa-instagram"></i></div>
          <h3>Instagram</h3>
          <p>Imágenes con frases para tu feed diario</p>
          <span class="red_seguir">Síguenos <i class="fas fa-arrow-right"></i></span>
        </a>

        <a href="https://www.facebook.com/awonbe/" target="_blank" rel="noopener" class="red_card facebook" data-vista="red4" ${wiTip('Únete en Facebook')}>
          <div class="red_icono"><i class="fab fa-facebook"></i></div>
          <h3>Facebook</h3>
          <p>Comunidad de personas que buscan inspiración</p>
          <span class="red_seguir">Únete <i class="fas fa-arrow-right"></i></span>
        </a>
      </div>
    </section>

    <section class="sobre">
      <div class="sobre_contenido">
        <div class="sobre_texto">
          <h2 class="seccion_titulo">
            <i class="fas fa-info-circle"></i>
            ¿Qué es ${app}?
          </h2>
          <p>
            <strong>${app}</strong> es una plataforma dedicada a compartir frases de <strong>motivación</strong>, 
            <strong>reflexión</strong> y <strong>fe en Dios</strong>. Nuestro propósito es inspirar a las personas 
            cada día con palabras que elevan el espíritu y fortalecen la fe.
          </p>
          <p>
            Creemos que las palabras tienen poder para transformar vidas. Por eso, seleccionamos 
            cuidadosamente cada frase para que encuentres la inspiración que necesitas en tu día a día.
          </p>
          <div class="sobre_stats">
            <div class="sobre_stat">
              <i class="fas fa-quote-left"></i>
              <strong>+${frases.length}</strong>
              <span>Frases</span>
            </div>
            <div class="sobre_stat">
              <i class="fas fa-palette"></i>
              <strong>5</strong>
              <span>Temas</span>
            </div>
            <div class="sobre_stat">
              <i class="fas fa-heart"></i>
              <strong>100%</strong>
              <span>Gratis</span>
            </div>
          </div>
        </div>
        <div class="sobre_imagen">
          <img src="${import.meta.env.BASE_URL}logo.webp" alt="${app} - Frases Inspiradoras" />
        </div>
      </div>
    </section>

    <section class="cta_final">
      <div class="cta_contenido">
        <i class="fas fa-hands-praying cta_icono"></i>
        <h2>Comparte la Inspiración</h2>
        <p>Ayúdanos a llegar a más personas compartiendo nuestras frases en tus redes sociales</p>
        <div class="cta_redes">
          <a href="https://www.facebook.com/awonbe/" target="_blank" rel="noopener" class="cta_red facebook" ${wiTip('Síguenos en Facebook')}>
            <i class="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/awonbeee/" target="_blank" rel="noopener" class="cta_red instagram" ${wiTip('Síguenos en Instagram')}>
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.tiktok.com/@awonbe" target="_blank" rel="noopener" class="cta_red tiktok" ${wiTip('Síguenos en TikTok')}>
            <i class="fab fa-tiktok"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCBnyIE557egJiZszex-vURg" target="_blank" rel="noopener" class="cta_red youtube" ${wiTip('Suscríbete en YouTube')}>
            <i class="fab fa-youtube"></i>
          </a>
        </div>
        <p class="cta_autor">Creado con ❤️ por <a href="${link}" target="_blank" rel="noopener">${autor}</a> • ${version} © ${year()}</p>
      </div>
    </section>
  </div>
`;

export const init = () => {
  // Animaciones con Intersection Observer
  ['.frase_card', '.red_card', '.sobre_contenido'].forEach(sel => {
    $(sel).each((_, el) => wiVista(el, () => $(el).addClass('visible')));
  });

  // Copiar frase con wicopy
  $('.btn_copiar').on('click', function(e) {
    e.preventDefault();
    const texto = $(this).data('texto');
    wicopy(texto, this, '¡Copiado! ✨');
  });

  // Compartir frase
  $('.btn_compartir').on('click', function(e) {
    e.preventDefault();
    const texto = $(this).data('texto');
    const url = `${texto}\n\n✨ ${app} - Frases de Motivación y Fe en Dios\n🔗 https://awonbeee.web.app/`;
    
    if (navigator.share) {
      navigator.share({ text: url, title: `${app} - Frase Inspiradora` }).catch(() => {});
    } else {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`, '_blank');
    }
  });

  console.log(`✨ ${app} ${version} - Inicio cargado`);
};

export const cleanup = () => {
  $('.btn_copiar, .btn_compartir').off('click');
  console.log('🧹 Inicio limpiado');
};