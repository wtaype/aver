import './instagram.css';
import $ from 'jquery';
import { app, version, autor, link } from '../wii.js';
import { wiVista, year, wiTip, wicopy } from '../widev.js';

// Posts destacados de Instagram (simulados con imágenes temáticas)
const posts = [
  {
    id: 1,
    imagen: 'https://picsum.photos/seed/fe1/600/600',
    likes: '2.5K',
    comentarios: '148',
    descripcion: '🙏 "Con fe todo es posible. Confía en Dios y en ti mismo" ✨',
    fecha: 'Hace 2 días',
    categoria: 'Fe'
  },
  {
    id: 2,
    imagen: 'https://picsum.photos/seed/motiv1/600/600',
    likes: '3.2K',
    comentarios: '201',
    descripcion: '💪 "Cada día es una nueva oportunidad para ser mejor" 🚀',
    fecha: 'Hace 5 días',
    categoria: 'Motivación'
  },
  {
    id: 3,
    imagen: 'https://picsum.photos/seed/vida1/600/600',
    likes: '1.8K',
    comentarios: '95',
    descripcion: '🌟 "La vida es bella cuando la vives con propósito" 🌈',
    fecha: 'Hace 1 semana',
    categoria: 'Vida'
  },
  {
    id: 4,
    imagen: 'https://picsum.photos/seed/ref1/600/600',
    likes: '2.9K',
    comentarios: '167',
    descripcion: '🧠 "Reflexiona sobre tus bendiciones, no tus problemas" 🙌',
    fecha: 'Hace 3 días',
    categoria: 'Reflexión'
  },
  {
    id: 5,
    imagen: 'https://picsum.photos/seed/fe2/600/600',
    likes: '4.1K',
    comentarios: '289',
    descripcion: '✝️ "Dios escribe historias hermosas con finales imperfectos" 💫',
    fecha: 'Hace 4 días',
    categoria: 'Fe'
  },
  {
    id: 6,
    imagen: 'https://picsum.photos/seed/motiv2/600/600',
    likes: '3.7K',
    comentarios: '234',
    descripcion: '⚡ "Tu actitud determina tu altitud. Vuela alto" 🦅',
    fecha: 'Hace 6 días',
    categoria: 'Motivación'
  }
];

// Estadísticas del perfil
const stats = {
  posts: '250+',
  seguidores: '15K+',
  siguiendo: '120'
};

// Destacados (Stories)
const destacados = [
  { nombre: 'Fe en Dios', icono: 'fa-hands-praying', color: 'Paz', posts: 28 },
  { nombre: 'Motivación', icono: 'fa-rocket', color: 'Cielo', posts: 42 },
  { nombre: 'Reflexiones', icono: 'fa-brain', color: 'Mora', posts: 35 },
  { nombre: 'Vida', icono: 'fa-heart', color: 'Dulce', posts: 31 }
];

// Frases para galería visual
const frases = [
  'Con fe, todo es posible',
  'Dios nunca te abandona',
  'Hoy es un nuevo comienzo',
  'La esperanza nunca muere',
  'Confía en el proceso',
  'Tu actitud lo es todo',
  'Sé la luz en la oscuridad',
  'Dios tiene un plan perfecto'
];

export const render = () => `
  <div class="instagram">
    <!-- HERO INSTAGRAM -->
    <section class="ig_hero">
      <div class="ig_hero_bg"></div>
      <div class="ig_hero_contenido">
        <div class="ig_perfil">
          <div class="ig_avatar">
            <img src="${import.meta.env.BASE_URL}logo.webp" alt="${app}" />
            <div class="ig_badge"><i class="fas fa-circle-check"></i></div>
          </div>
          
          <div class="ig_info">
            <div class="ig_username">
              <h1>@awonbeee</h1>
              <span class="ig_verified"><i class="fas fa-badge-check"></i></span>
            </div>
            
            <div class="ig_stats">
              <div class="ig_stat">
                <strong>${stats.posts}</strong>
                <span>Publicaciones</span>
              </div>
              <div class="ig_stat">
                <strong>${stats.seguidores}</strong>
                <span>Seguidores</span>
              </div>
              <div class="ig_stat">
                <strong>${stats.siguiendo}</strong>
                <span>Siguiendo</span>
              </div>
            </div>
            
            <div class="ig_bio">
              <h2>${app}</h2>
              <p>
                🙏 Frases de <strong>Fe en Dios</strong> y <strong>Motivación</strong><br>
                ✨ Inspirando vidas cada día<br>
                💬 Comparte y etiquétanos 📸
              </p>
            </div>
            
            <div class="ig_acciones">
              <a href="https://www.instagram.com/awonbeee/" target="_blank" rel="noopener" class="ig_btn_seguir" ${wiTip('¡Síguenos!')}>
                <i class="fas fa-user-plus"></i>
                <span>Seguir</span>
              </a>
              <button class="ig_btn_mensaje" data-accion="mensaje" ${wiTip('Enviar mensaje')}>
                <i class="fas fa-paper-plane"></i>
                <span>Mensaje</span>
              </button>
              <button class="ig_btn_compartir" data-accion="compartir" ${wiTip('Compartir perfil')}>
                <i class="fas fa-share-nodes"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- DESTACADOS (STORIES) -->
    <section class="ig_destacados">
      <div class="destacados_scroll">
        ${destacados.map((dest, i) => `
          <div class="destacado_item" data-vista="dest${i}">
            <div class="destacado_circulo ${dest.color.toLowerCase()}">
              <i class="fas ${dest.icono}"></i>
            </div>
            <span class="destacado_nombre">${dest.nombre}</span>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- POSTS GRID -->
    <section class="ig_posts">
      <div class="seccion_header">
        <h2 class="seccion_titulo">
          <i class="fas fa-grip"></i>
          Publicaciones
        </h2>
      </div>

      <div class="posts_grid">
        ${posts.map((post, i) => `
          <div class="post_item" data-vista="post${i}">
            <a href="https://www.instagram.com/awonbeee/" target="_blank" rel="noopener" class="post_link" ${wiTip('Ver en Instagram')}>
              <img src="${post.imagen}" alt="${post.descripcion}" loading="lazy" />
              <div class="post_overlay">
                <div class="post_stats">
                  <span><i class="fas fa-heart"></i> ${post.likes}</span>
                  <span><i class="fas fa-comment"></i> ${post.comentarios}</span>
                </div>
              </div>
              <div class="post_categoria ${post.categoria.toLowerCase()}">${post.categoria}</div>
            </a>
          </div>
        `).join('')}
      </div>

      <div class="ver_mas">
        <a href="https://www.instagram.com/awonbeee/" target="_blank" rel="noopener" class="btn_ver_mas" ${wiTip('Ver todos los posts')}>
          Ver Más en Instagram <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </section>

    <!-- GALERÍA DE FRASES -->
    <section class="ig_frases">
      <div class="seccion_header">
        <h2 class="seccion_titulo">
          <i class="fas fa-quote-left"></i>
          Nuestras Frases Favoritas
        </h2>
        <p class="seccion_descripcion">
          Palabras que inspiran y transforman vidas
        </p>
      </div>

      <div class="frases_gallery">
        ${frases.map((frase, i) => `
          <div class="frase_visual" data-vista="frase${i}" style="background-image: url('https://picsum.photos/seed/frase${i}/400/400')">
            <div class="frase_overlay">
              <p class="frase_texto">"${frase}"</p>
              <button class="btn_copiar_frase" data-frase="${frase}" ${wiTip('Copiar frase')}>
                <i class="fas fa-copy"></i>
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- QUÉ COMPARTIMOS -->
    <section class="ig_contenido">
      <div class="contenido_wrapper">
        <div class="contenido_imagen">
          <img src="${import.meta.env.BASE_URL}logo.webp" alt="${app} Instagram" />
          <div class="contenido_badge">
            <i class="fab fa-instagram"></i>
            <span>${stats.seguidores}</span>
          </div>
        </div>
        
        <div class="contenido_texto">
          <h2 class="seccion_titulo">
            <i class="fas fa-camera"></i>
            ¿Qué Compartimos?
          </h2>
          <div class="contenido_items">
            <div class="contenido_item">
              <div class="item_icono"><i class="fas fa-image"></i></div>
              <div class="item_texto">
                <h4>Diseños Visuales</h4>
                <p>Frases hermosas con diseños profesionales y colores vibrantes</p>
              </div>
            </div>
            <div class="contenido_item">
              <div class="item_icono"><i class="fas fa-heart"></i></div>
              <div class="item_texto">
                <h4>Contenido Diario</h4>
                <p>Publicamos todos los días para inspirar tu feed</p>
              </div>
            </div>
            <div class="contenido_item">
              <div class="item_icono"><i class="fas fa-users"></i></div>
              <div class="item_texto">
                <h4>Comunidad Activa</h4>
                <p>Interactuamos con nuestros seguidores y compartimos sus historias</p>
              </div>
            </div>
            <div class="contenido_item">
              <div class="item_icono"><i class="fas fa-bookmark"></i></div>
              <div class="item_texto">
                <h4>Stories Exclusivas</h4>
                <p>Contenido especial en nuestras historias destacadas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA FINAL -->
    <section class="ig_cta">
      <div class="cta_contenido">
        <i class="fab fa-instagram cta_icono"></i>
        <h2>¡Únete a Nuestra Comunidad de Instagram!</h2>
        <p>Síguenos y etiquétanos en tus historias para aparecer en nuestro perfil 📸✨</p>
        <a href="https://www.instagram.com/awonbeee/" target="_blank" rel="noopener" class="btn_cta_instagram" ${wiTip('Ir a Instagram')}>
          <i class="fab fa-instagram"></i>
          Seguir en Instagram
        </a>
        <div class="cta_stats">
          <div class="cta_stat">
            <i class="fas fa-camera"></i>
            <span>${stats.posts} publicaciones</span>
          </div>
          <div class="cta_stat">
            <i class="fas fa-users"></i>
            <span>${stats.seguidores} seguidores</span>
          </div>
          <div class="cta_stat">
            <i class="fas fa-heart"></i>
            <span>+150K likes totales</span>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER REDES -->
    <section class="ig_footer_redes">
      <h3>También Encuéntranos en</h3>
      <div class="footer_redes_grid">
        <a href="https://www.youtube.com/channel/UCBnyIE557egJiZszex-vURg" target="_blank" rel="noopener" class="footer_red youtube" ${wiTip('YouTube')}>
          <i class="fab fa-youtube"></i>
        </a>
        <a href="https://www.tiktok.com/@awonbe" target="_blank" rel="noopener" class="footer_red tiktok" ${wiTip('TikTok')}>
          <i class="fab fa-tiktok"></i>
        </a>
        <a href="https://www.facebook.com/awonbe/" target="_blank" rel="noopener" class="footer_red facebook" ${wiTip('Facebook')}>
          <i class="fab fa-facebook"></i>
        </a>
      </div>
      <p class="footer_texto">Creado con ❤️ por <a href="${link}" target="_blank" rel="noopener">${autor}</a> • ${version} © ${year()}</p>
    </section>
  </div>
`;

export const init = () => {
  // Animaciones con Intersection Observer
  ['.post_item', '.destacado_item', '.frase_visual', '.contenido_item', '.ig_hero_contenido'].forEach(sel => {
    $(sel).each((_, el) => wiVista(el, () => $(el).addClass('visible')));
  });

  // Copiar frase
  $('.btn_copiar_frase').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    const frase = $(this).data('frase');
    wicopy(frase, this, '¡Frase copiada! ✨');
  });

  // Compartir perfil
  $('[data-accion="compartir"]').on('click', function() {
    const url = `📸 ${app} en Instagram\n\n✨ Frases de Motivación, Reflexión y Fe en Dios\n🔗 https://www.instagram.com/awonbeee/`;
    
    if (navigator.share) {
      navigator.share({ text: url, title: `${app} Instagram` }).catch(() => {});
    } else {
      wicopy('https://www.instagram.com/awonbeee/', this, '¡Link copiado! ✨');
    }
  });

  // Botón mensaje
  $('[data-accion="mensaje"]').on('click', function() {
    wiTip(this, '¡Envíanos un DM en Instagram! 💬', 'info', 3000);
  });

  console.log(`📸 ${app} ${version} - Instagram cargado`);
};

export const cleanup = () => {
  $('.btn_copiar_frase, [data-accion]').off('click');
  console.log('🧹 Instagram limpiado');
};