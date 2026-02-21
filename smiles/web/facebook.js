import './facebook.css';
import $ from 'jquery';
import { app, version, autor, link } from '../wii.js';
import { wiVista, year, wiTip, wicopy } from '../widev.js';

// Posts destacados de Facebook (simulados con contenido inspirador)
const posts = [
  {
    id: 1,
    tipo: 'imagen',
    imagen: 'https://picsum.photos/seed/fb1/800/500',
    texto: '🙏 "Con fe todo es posible. Confía en Dios y en ti mismo" ✨\n\nRecuerda que cada día es una nueva oportunidad para acercarte más a tus sueños. La fe mueve montañas. 💪',
    likes: '3.2K',
    comentarios: '245',
    compartidos: '892',
    fecha: 'Hace 2 días',
    categoria: 'Fe'
  },
  {
    id: 2,
    tipo: 'video',
    thumbnail: 'https://picsum.photos/seed/fb2/800/500',
    texto: '🎥 Nuevo video: "Motivación Diaria para Conquistar tus Metas"\n\n💪 Cada día es una nueva oportunidad para ser mejor. No te rindas, lo mejor está por venir. 🚀\n\n#Motivación #Inspiración #FeEnDios',
    likes: '5.8K',
    comentarios: '412',
    compartidos: '1.5K',
    fecha: 'Hace 5 días',
    categoria: 'Motivación'
  },
  {
    id: 3,
    tipo: 'texto',
    texto: '🌟 Reflexión del día:\n\n"La vida es bella cuando la vives con propósito. No esperes el momento perfecto, crea el momento perfecto."\n\n¿Cuál es tu propósito hoy? Compártelo en los comentarios 👇💬',
    likes: '2.1K',
    comentarios: '389',
    compartidos: '567',
    fecha: 'Hace 1 semana',
    categoria: 'Reflexión'
  },
  {
    id: 4,
    tipo: 'imagen',
    imagen: 'https://picsum.photos/seed/fb4/800/500',
    texto: '✝️ "Dios escribe historias hermosas con finales imperfectos" 💫\n\nA veces no entendemos el plan de Dios, pero siempre es perfecto. Confía en Su tiempo. 🙏',
    likes: '4.7K',
    comentarios: '523',
    compartidos: '1.2K',
    fecha: 'Hace 3 días',
    categoria: 'Fe'
  },
  {
    id: 5,
    tipo: 'album',
    imagenes: [
      'https://picsum.photos/seed/fb5a/400/400',
      'https://picsum.photos/seed/fb5b/400/400',
      'https://picsum.photos/seed/fb5c/400/400'
    ],
    texto: '📸 Colección de frases inspiradoras para esta semana 🌈\n\nGuarda estas imágenes y compártelas con quien las necesite. ✨\n\n#FrasesMotivadoras #Inspiración',
    likes: '6.3K',
    comentarios: '678',
    compartidos: '2.1K',
    fecha: 'Hace 4 días',
    categoria: 'Vida'
  },
  {
    id: 6,
    tipo: 'link',
    thumbnail: 'https://picsum.photos/seed/fb6/800/500',
    titulo: 'Nuevos Videos en YouTube',
    descripcion: 'Visita nuestro canal y suscríbete para no perderte contenido inspirador cada semana 🎬✨',
    url: 'https://www.youtube.com/channel/UCBnyIE557egJiZszex-vURg',
    likes: '3.9K',
    comentarios: '234',
    compartidos: '891',
    fecha: 'Hace 6 días',
    categoria: 'Motivación'
  }
];

// Estadísticas de la página
const stats = {
  seguidores: '25K+',
  likes: '24K+',
  mensajes: '2.5K+'
};

// Eventos y actividades
const actividades = [
  { tipo: 'live', titulo: 'Live: Reflexiones Nocturnas', fecha: 'Todos los Viernes 8PM', icono: 'fa-video' },
  { tipo: 'evento', titulo: 'Maratón de Frases Motivadoras', fecha: 'Próxima semana', icono: 'fa-calendar-days' },
  { tipo: 'grupo', titulo: 'Únete a nuestra comunidad', miembros: '15K+ miembros', icono: 'fa-users' }
];

// Fotos destacadas
const fotos = [
  'https://picsum.photos/seed/photo1/300/300',
  'https://picsum.photos/seed/photo2/300/300',
  'https://picsum.photos/seed/photo3/300/300',
  'https://picsum.photos/seed/photo4/300/300',
  'https://picsum.photos/seed/photo5/300/300',
  'https://picsum.photos/seed/photo6/300/300'
];

export const render = () => `
  <div class="facebook">
    <!-- HERO FACEBOOK -->
    <section class="fb_hero">
      <div class="fb_portada">
        <img src="https://picsum.photos/seed/fbcover/1200/400" alt="Portada ${app}" />
        <div class="fb_portada_overlay"></div>
      </div>
      
      <div class="fb_perfil_wrapper">
        <div class="fb_perfil_contenido">
          <div class="fb_perfil_izq">
            <div class="fb_avatar">
              <img src="${import.meta.env.BASE_URL}logo.webp" alt="${app}" />
              <div class="fb_badge"><i class="fas fa-circle-check"></i></div>
            </div>
            <div class="fb_info">
              <h1>${app} <span class="fb_verified"><i class="fas fa-badge-check"></i></span></h1>
              <p class="fb_categoria">🙏 Organización religiosa</p>
              <p class="fb_seguidores">${stats.seguidores} personas siguen esto • ${stats.likes} Me gusta</p>
            </div>
          </div>
          
          <div class="fb_perfil_der">
            <a href="https://www.facebook.com/awonbe/" target="_blank" rel="noopener" class="fb_btn_seguir" ${wiTip('Seguir página')}>
              <i class="fas fa-thumbs-up"></i>
              <span>Me gusta</span>
            </a>
            <button class="fb_btn_mensaje" data-accion="mensaje" ${wiTip('Enviar mensaje')}>
              <i class="fab fa-facebook-messenger"></i>
              <span>Mensaje</span>
            </button>
            <button class="fb_btn_compartir" data-accion="compartir" ${wiTip('Compartir')}>
              <i class="fas fa-share"></i>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- NAVEGACIÓN -->
    <section class="fb_nav">
      <div class="fb_nav_contenido">
        <button class="fb_nav_item active" data-tab="publicaciones">
          <i class="fas fa-newspaper"></i>
          <span>Publicaciones</span>
        </button>
        <button class="fb_nav_item" data-tab="fotos">
          <i class="fas fa-images"></i>
          <span>Fotos</span>
        </button>
        <button class="fb_nav_item" data-tab="videos">
          <i class="fas fa-video"></i>
          <span>Videos</span>
        </button>
        <button class="fb_nav_item" data-tab="eventos">
          <i class="fas fa-calendar"></i>
          <span>Eventos</span>
        </button>
        <button class="fb_nav_item" data-tab="acerca">
          <i class="fas fa-circle-info"></i>
          <span>Información</span>
        </button>
      </div>
    </section>

    <!-- CONTENIDO PRINCIPAL -->
    <section class="fb_contenido">
      <div class="fb_layout">
        <!-- COLUMNA IZQUIERDA -->
        <aside class="fb_sidebar_izq">
          <div class="fb_widget">
            <h3><i class="fas fa-info-circle"></i> Acerca de</h3>
            <div class="fb_widget_contenido">
              <p><i class="fas fa-heart"></i> Frases de motivación, reflexión y fe en Dios</p>
              <p><i class="fas fa-users"></i> ${stats.seguidores} seguidores</p>
              <p><i class="fas fa-globe"></i> <a href="https://awonbeee.web.app/" target="_blank">awonbeee.web.app</a></p>
              <p><i class="fas fa-envelope"></i> Envíanos un mensaje</p>
            </div>
          </div>

          <div class="fb_widget">
            <h3><i class="fas fa-calendar-check"></i> Actividades</h3>
            <div class="fb_widget_contenido">
              ${actividades.map(act => `
                <div class="fb_actividad">
                  <div class="fb_actividad_icono">
                    <i class="fas ${act.icono}"></i>
                  </div>
                  <div class="fb_actividad_info">
                    <strong>${act.titulo}</strong>
                    <span>${act.fecha || act.miembros}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="fb_widget">
            <h3><i class="fas fa-images"></i> Fotos</h3>
            <div class="fb_fotos_grid">
              ${fotos.slice(0, 6).map((foto, i) => `
                <div class="fb_foto_item" data-vista="foto${i}">
                  <img src="${foto}" alt="Foto ${i + 1}" loading="lazy" />
                </div>
              `).join('')}
            </div>
            <a href="https://www.facebook.com/awonbe/photos" target="_blank" rel="noopener" class="fb_ver_todas">Ver todas las fotos</a>
          </div>
        </aside>

        <!-- COLUMNA CENTRO: PUBLICACIONES -->
        <main class="fb_main">
          <div class="fb_posts">
            ${posts.map((post, i) => `
              <article class="fb_post" data-vista="post${i}">
                <div class="fb_post_header">
                  <img src="${import.meta.env.BASE_URL}logo.webp" alt="${app}" class="fb_post_avatar" />
                  <div class="fb_post_info">
                    <strong>${app}</strong>
                    <span class="fb_post_fecha">${post.fecha} • <i class="fas fa-globe"></i></span>
                  </div>
                  <div class="fb_post_categoria ${post.categoria.toLowerCase()}">${post.categoria}</div>
                </div>

                <div class="fb_post_contenido">
                  ${post.texto ? `<p class="fb_post_texto">${post.texto.replace(/\n/g, '<br>')}</p>` : ''}
                  
                  ${post.tipo === 'imagen' ? `
                    <div class="fb_post_imagen">
                      <img src="${post.imagen}" alt="Post ${i + 1}" loading="lazy" />
                    </div>
                  ` : ''}
                  
                  ${post.tipo === 'video' ? `
                    <div class="fb_post_video">
                      <img src="${post.thumbnail}" alt="Video ${i + 1}" loading="lazy" />
                      <div class="fb_video_overlay">
                        <div class="fb_play_btn">
                          <i class="fas fa-play"></i>
                        </div>
                      </div>
                    </div>
                  ` : ''}
                  
                  ${post.tipo === 'album' ? `
                    <div class="fb_post_album">
                      ${post.imagenes.map((img, idx) => `
                        <img src="${img}" alt="Imagen ${idx + 1}" loading="lazy" />
                      `).join('')}
                    </div>
                  ` : ''}
                  
                  ${post.tipo === 'link' ? `
                    <a href="${post.url}" target="_blank" rel="noopener" class="fb_post_link">
                      <img src="${post.thumbnail}" alt="${post.titulo}" loading="lazy" />
                      <div class="fb_link_info">
                        <strong>${post.titulo}</strong>
                        <p>${post.descripcion}</p>
                      </div>
                    </a>
                  ` : ''}
                </div>

                <div class="fb_post_stats">
                  <div class="fb_stats_izq">
                    <div class="fb_reacciones">
                      <i class="fas fa-thumbs-up"></i>
                      <i class="fas fa-heart"></i>
                      <i class="fas fa-lightbulb"></i>
                    </div>
                    <span>${post.likes}</span>
                  </div>
                  <div class="fb_stats_der">
                    <span>${post.comentarios} comentarios</span>
                    <span>${post.compartidos} veces compartido</span>
                  </div>
                </div>

                <div class="fb_post_acciones">
                  <button class="fb_accion_btn" ${wiTip('Me gusta')}>
                    <i class="far fa-thumbs-up"></i>
                    <span>Me gusta</span>
                  </button>
                  <button class="fb_accion_btn" ${wiTip('Comentar')}>
                    <i class="far fa-comment"></i>
                    <span>Comentar</span>
                  </button>
                  <button class="fb_accion_btn" data-compartir="${post.texto?.substring(0, 50)}" ${wiTip('Compartir')}>
                    <i class="fas fa-share"></i>
                    <span>Compartir</span>
                  </button>
                </div>
              </article>
            `).join('')}
          </div>

          <div class="fb_ver_mas">
            <a href="https://www.facebook.com/awonbe/" target="_blank" rel="noopener" class="fb_btn_ver_mas" ${wiTip('Ver más publicaciones')}>
              Ver Más Publicaciones <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </main>

        <!-- COLUMNA DERECHA -->
        <aside class="fb_sidebar_der">
          <div class="fb_widget">
            <h3><i class="fab fa-facebook-messenger"></i> Community</h3>
            <div class="fb_widget_contenido">
              <div class="fb_stat_item">
                <i class="fas fa-users"></i>
                <div>
                  <strong>${stats.mensajes}</strong>
                  <span>Mensajes esta semana</span>
                </div>
              </div>
              <div class="fb_stat_item">
                <i class="fas fa-chart-line"></i>
                <div>
                  <strong>+15%</strong>
                  <span>Crecimiento mensual</span>
                </div>
              </div>
            </div>
          </div>

          <div class="fb_widget">
            <h3><i class="fas fa-link"></i> Enlaces</h3>
            <div class="fb_widget_contenido fb_redes">
              <a href="https://www.youtube.com/channel/UCBnyIE557egJiZszex-vURg" target="_blank" rel="noopener" class="fb_red_link youtube" ${wiTip('YouTube')}>
                <i class="fab fa-youtube"></i>
                <span>YouTube</span>
              </a>
              <a href="https://www.tiktok.com/@awonbe" target="_blank" rel="noopener" class="fb_red_link tiktok" ${wiTip('TikTok')}>
                <i class="fab fa-tiktok"></i>
                <span>TikTok</span>
              </a>
              <a href="https://www.instagram.com/awonbeee/" target="_blank" rel="noopener" class="fb_red_link instagram" ${wiTip('Instagram')}>
                <i class="fab fa-instagram"></i>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <!-- FOOTER REDES -->
    <section class="fb_footer_redes">
      <h3>Encuéntranos también en</h3>
      <div class="footer_redes_grid">
        <a href="https://www.youtube.com/channel/UCBnyIE557egJiZszex-vURg" target="_blank" rel="noopener" class="footer_red youtube" ${wiTip('YouTube')}>
          <i class="fab fa-youtube"></i>
        </a>
        <a href="https://www.tiktok.com/@awonbe" target="_blank" rel="noopener" class="footer_red tiktok" ${wiTip('TikTok')}>
          <i class="fab fa-tiktok"></i>
        </a>
        <a href="https://www.instagram.com/awonbeee/" target="_blank" rel="noopener" class="footer_red instagram" ${wiTip('Instagram')}>
          <i class="fab fa-instagram"></i>
        </a>
      </div>
      <p class="footer_texto">Creado con ❤️ por <a href="${link}" target="_blank" rel="noopener">${autor}</a> • ${version} © ${year()}</p>
    </section>
  </div>
`;

export const init = () => {
  // Animaciones con Intersection Observer
  ['.fb_post', '.fb_foto_item', '.fb_widget'].forEach(sel => {
    $(sel).each((_, el) => wiVista(el, () => $(el).addClass('visible')));
  });

  // Compartir publicación
  $('.fb_accion_btn[data-compartir]').on('click', function(e) {
    e.preventDefault();
    const texto = $(this).data('compartir');
    const url = `📘 ${texto}...\n\n✨ ${app} en Facebook\n🔗 https://www.facebook.com/awonbe/`;
    
    if (navigator.share) {
      navigator.share({ text: url, title: `${app} - Facebook` }).catch(() => {});
    } else {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`, '_blank');
    }
  });

  // Compartir página
  $('[data-accion="compartir"]').on('click', function() {
    const url = `📘 ${app} en Facebook\n\n✨ Frases de Motivación, Reflexión y Fe en Dios\n🔗 https://www.facebook.com/awonbe/`;
    
    if (navigator.share) {
      navigator.share({ text: url, title: `${app} Facebook` }).catch(() => {});
    } else {
      wicopy('https://www.facebook.com/awonbe/', this, '¡Link copiado! ✨');
    }
  });

  // Botón mensaje
  $('[data-accion="mensaje"]').on('click', function() {
    wiTip(this, '¡Envíanos un mensaje en Facebook! 💬', 'info', 3000);
  });

  // Navegación por tabs
  $('.fb_nav_item').on('click', function() {
    const tab = $(this).data('tab');
    $('.fb_nav_item').removeClass('active');
    $(this).addClass('active');
    
    if (tab === 'publicaciones') {
      wiTip(this, 'Publicaciones activas', 'info', 1500);
    } else {
      wiTip(this, `Ver ${tab} en Facebook`, 'info', 2000);
      setTimeout(() => window.open('https://www.facebook.com/awonbe/', '_blank'), 500);
    }
  });

  console.log(`👍 ${app} ${version} - Facebook cargado`);
};

export const cleanup = () => {
  $('.fb_accion_btn, [data-accion], .fb_nav_item').off('click');
  console.log('🧹 Facebook limpiado');
};