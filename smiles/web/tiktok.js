import './tiktok.css';
import $ from 'jquery';
import { app, version, autor, link } from '../wii.js';
import { wiVista, year, wiTip, wicopy } from '../widev.js';

// Videos destacados de TikTok
const videos = [
  {
    id: '6904444910372506882',
    titulo: 'Frases de Fe en Dios que Fortalecen',
    descripcion: 'Palabras poderosas para tu espíritu',
    likes: '12.5K',
    comentarios: '245',
    vistas: '89K',
    fecha: 'Hace 3 días',
    categoria: 'Fe'
  },
  {
    id: '6913003734318599430',
    titulo: 'Motivación Diaria para Conquistar',
    descripcion: 'Impulsa tu día con estas frases',
    likes: '25.8K',
    comentarios: '489',
    vistas: '156K',
    fecha: 'Hace 5 días',
    categoria: 'Motivación'
  },
  {
    id: '6913383184663186694',
    titulo: 'Reflexiones de Vida que Inspiran',
    descripcion: 'Mensajes profundos para reflexionar',
    likes: '18.2K',
    comentarios: '312',
    vistas: '102K',
    fecha: 'Hace 1 semana',
    categoria: 'Reflexión'
  },
  {
    id: '6928543165108555014',
    titulo: 'Frases Cortas con Gran Impacto',
    descripcion: 'Mensajes breves pero poderosos',
    likes: '32.4K',
    comentarios: '567',
    vistas: '201K',
    fecha: 'Hace 4 días',
    categoria: 'Motivación'
  },
  {
    id: '6929699288859692294',
    titulo: 'Música y Frases de Paz Interior',
    descripcion: 'Encuentra tranquilidad y esperanza',
    likes: '41.7K',
    comentarios: '723',
    vistas: '278K',
    fecha: 'Hace 2 semanas',
    categoria: 'Vida'
  },
  {
    id: '6938241677551357189',
    titulo: 'Oraciones Poderosas del Día',
    descripcion: 'Conecta con Dios cada mañana',
    likes: '28.9K',
    comentarios: '401',
    vistas: '145K',
    fecha: 'Hace 6 días',
    categoria: 'Fe'
  },
  {
    id: '6913383184663186694',
    titulo: 'Inspiración Matutina con Fe',
    descripcion: 'Comienza tu día lleno de esperanza',
    likes: '35.6K',
    comentarios: '612',
    vistas: '189K',
    fecha: 'Hace 1 semana',
    categoria: 'Fe'
  },
  {
    id: '6902237841640770818',
    titulo: 'Gratitud y Reflexión Nocturna',
    descripcion: 'Agradece antes de dormir',
    likes: '22.3K',
    comentarios: '356',
    vistas: '121K',
    fecha: 'Hace 9 días',
    categoria: 'Reflexión'
  }
];

// Estadísticas del perfil
const stats = {
  seguidores: '50K+',
  siguiendo: '150',
  likes: '2.5M',
  videos: '200+'
};

// Categorías de contenido
const categorias = [
  { nombre: 'Fe en Dios', icono: 'fa-hands-praying', count: 45, color: 'Paz' },
  { nombre: 'Motivación', icono: 'fa-rocket', count: 68, color: 'Cielo' },
  { nombre: 'Reflexión', icono: 'fa-brain', count: 52, color: 'Mora' },
  { nombre: 'Vida', icono: 'fa-heart', count: 35, color: 'Dulce' }
];

export const render = () => `
  <div class="tiktok">
    <!-- HERO TIKTOK -->
    <section class="tt_hero">
      <div class="tt_hero_bg"></div>
      <div class="tt_hero_contenido">
        <div class="tt_perfil">
          <div class="tt_avatar">
            <img src="${import.meta.env.BASE_URL}logo.webp" alt="${app}" />
            <div class="tt_badge"><i class="fas fa-circle-check"></i></div>
          </div>
          <div class="tt_info">
            <h1>@awonbe <span class="tt_verified"><i class="fas fa-badge-check"></i></span></h1>
            <p class="tt_nombre">${app}</p>
            <p class="tt_bio">
              🙏 Frases de <strong>Fe, Motivación y Reflexión</strong><br>
              ✨ Inspirando vidas cada día<br>
              💬 Comparte y síguenos 🔥
            </p>
          </div>
        </div>
        
        <div class="tt_stats">
          <div class="tt_stat">
            <strong>${stats.seguidores}</strong>
            <span>Seguidores</span>
          </div>
          <div class="tt_stat">
            <strong>${stats.siguiendo}</strong>
            <span>Siguiendo</span>
          </div>
          <div class="tt_stat">
            <strong>${stats.likes}</strong>
            <span>Likes</span>
          </div>
          <div class="tt_stat">
            <strong>${stats.videos}</strong>
            <span>Videos</span>
          </div>
        </div>

        <div class="tt_acciones">
          <a href="https://www.tiktok.com/@awonbe" target="_blank" rel="noopener" class="tt_btn_seguir" ${wiTip('¡Síguenos!')}>
            <i class="fas fa-user-plus"></i>
            <span>Seguir</span>
          </a>
          <button class="tt_btn_secundario" data-accion="compartir" ${wiTip('Compartir perfil')}>
            <i class="fas fa-share-nodes"></i>
          </button>
          <button class="tt_btn_secundario" data-accion="mensaje" ${wiTip('Mensaje')}>
            <i class="fas fa-comment-dots"></i>
          </button>
        </div>
      </div>
    </section>

    <!-- CATEGORÍAS -->
    <section class="tt_categorias">
      <div class="seccion_header">
        <h2 class="seccion_titulo">
          <i class="fas fa-grid"></i>
          Nuestro Contenido
        </h2>
        <p class="seccion_descripcion">
          Explora videos por categorías temáticas
        </p>
      </div>

      <div class="categorias_grid">
        ${categorias.map((cat, i) => `
          <div class="categoria_card ${cat.color.toLowerCase()}" data-vista="cat${i}">
            <div class="categoria_icono">
              <i class="fas ${cat.icono}"></i>
            </div>
            <h3>${cat.nombre}</h3>
            <p>${cat.count} videos</p>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- VIDEOS DESTACADOS -->
    <section class="tt_videos">
      <div class="seccion_header">
        <h2 class="seccion_titulo">
          <i class="fas fa-fire"></i>
          Videos Destacados
        </h2>
        <p class="seccion_descripcion">
          Los más populares de nuestro perfil
        </p>
      </div>

      <div class="videos_grid">
        ${videos.map((video, i) => `
          <div class="video_card" data-vista="video${i}">
            <a href="https://www.tiktok.com/@awonbe/video/${video.id}" target="_blank" rel="noopener" class="video_thumbnail" ${wiTip('Ver en TikTok')}>
              <div class="video_overlay">
                <i class="fab fa-tiktok"></i>
                <span class="video_play"><i class="fas fa-play"></i></span>
              </div>
              <div class="video_categoria ${video.categoria.toLowerCase()}">${video.categoria}</div>
            </a>
            
            <div class="video_info">
              <h3 class="video_titulo">${video.titulo}</h3>
              <p class="video_descripcion">${video.descripcion}</p>
              
              <div class="video_stats">
                <span class="video_stat" ${wiTip('Likes')}>
                  <i class="fas fa-heart"></i> ${video.likes}
                </span>
                <span class="video_stat" ${wiTip('Comentarios')}>
                  <i class="fas fa-comment"></i> ${video.comentarios}
                </span>
                <span class="video_stat" ${wiTip('Vistas')}>
                  <i class="fas fa-eye"></i> ${video.vistas}
                </span>
              </div>

              <div class="video_footer">
                <span class="video_fecha">${video.fecha}</span>
                <div class="video_acciones">
                  <button class="btn_video_accion" data-link="https://www.tiktok.com/@awonbe/video/${video.id}" ${wiTip('Copiar link')}>
                    <i class="fas fa-link"></i>
                  </button>
                  <button class="btn_video_accion" data-compartir="${video.titulo}" data-video-id="${video.id}" ${wiTip('Compartir')}>
                    <i class="fas fa-share-nodes"></i>
                  </button>
                  <a href="https://www.tiktok.com/@awonbe/video/${video.id}" target="_blank" rel="noopener" class="btn_video_accion" ${wiTip('Ver en TikTok')}>
                    <i class="fab fa-tiktok"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="ver_mas">
        <a href="https://www.tiktok.com/@awonbe" target="_blank" rel="noopener" class="btn_ver_mas" ${wiTip('Ver todos los videos')}>
          Ver Todos en TikTok <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </section>

    <!-- POR QUÉ SEGUIRNOS -->
    <section class="tt_beneficios">
      <div class="beneficios_wrapper">
        <div class="beneficios_imagen">
          <img src="${import.meta.env.BASE_URL}logo.webp" alt="${app} TikTok" />
          <div class="beneficios_badge">
            <i class="fab fa-tiktok"></i>
            <span>${stats.seguidores}</span>
          </div>
        </div>
        
        <div class="beneficios_texto">
          <h2 class="seccion_titulo">
            <i class="fas fa-heart-circle-check"></i>
            ¿Por Qué Seguirnos?
          </h2>
          <div class="beneficios_items">
            <div class="beneficio_item">
              <div class="item_numero">1</div>
              <div class="item_texto">
                <h4>Videos Cortos Inspiradores</h4>
                <p>Frases motivacionales en formato vertical perfectas para TikTok</p>
              </div>
            </div>
            <div class="beneficio_item">
              <div class="item_numero">2</div>
              <div class="item_texto">
                <h4>Contenido Diario</h4>
                <p>Publicamos nuevos videos cada día para mantener tu feed lleno de inspiración</p>
              </div>
            </div>
            <div class="beneficio_item">
              <div class="item_numero">3</div>
              <div class="item_texto">
                <h4>Comunidad Activa</h4>
                <p>Únete a miles de personas que buscan motivación y fe cada día</p>
              </div>
            </div>
            <div class="beneficio_item">
              <div class="item_numero">4</div>
              <div class="item_texto">
                <h4>Música y Diseño</h4>
                <p>Videos con música inspiradora y diseños visuales atractivos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA FINAL -->
    <section class="tt_cta">
      <div class="cta_contenido">
        <i class="fab fa-tiktok cta_icono"></i>
        <h2>¡Únete a Nuestra Comunidad!</h2>
        <p>Síguenos en TikTok y recibe frases inspiradoras todos los días 🔥</p>
        <a href="https://www.tiktok.com/@awonbe" target="_blank" rel="noopener" class="btn_cta_tiktok" ${wiTip('Ir a TikTok')}>
          <i class="fab fa-tiktok"></i>
          Seguir en TikTok
        </a>
        <div class="cta_stats">
          <div class="cta_stat">
            <i class="fas fa-users"></i>
            <span>${stats.seguidores} seguidores</span>
          </div>
          <div class="cta_stat">
            <i class="fas fa-heart"></i>
            <span>${stats.likes} likes totales</span>
          </div>
          <div class="cta_stat">
            <i class="fas fa-video"></i>
            <span>${stats.videos} videos</span>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER REDES -->
    <section class="tt_footer_redes">
      <h3>También Encuéntranos en</h3>
      <div class="footer_redes_grid">
        <a href="https://www.youtube.com/channel/UCBnyIE557egJiZszex-vURg" target="_blank" rel="noopener" class="footer_red youtube" ${wiTip('YouTube')}>
          <i class="fab fa-youtube"></i>
        </a>
        <a href="https://www.instagram.com/awonbeee/" target="_blank" rel="noopener" class="footer_red instagram" ${wiTip('Instagram')}>
          <i class="fab fa-instagram"></i>
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
  ['.video_card', '.categoria_card', '.beneficio_item', '.tt_hero_contenido'].forEach(sel => {
    $(sel).each((_, el) => wiVista(el, () => $(el).addClass('visible')));
  });

  // Copiar link de video
  $('.btn_video_accion[data-link]').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    const link = $(this).data('link');
    wicopy(link, this, '¡Link copiado! ✨');
  });

  // Compartir video
  $('.btn_video_accion[data-compartir]').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    const titulo = $(this).data('compartir');
    const videoId = $(this).data('video-id');
    const url = `🎵 ${titulo}\n\n✨ ${app} en TikTok\n🔗 https://www.tiktok.com/@awonbe/video/${videoId}`;
    
    if (navigator.share) {
      navigator.share({ text: url, title: `${app} - ${titulo}` }).catch(() => {});
    } else {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`, '_blank');
    }
  });

  // Compartir perfil
  $('[data-accion="compartir"]').on('click', function() {
    const url = `🎵 ${app} en TikTok\n\n✨ Frases de Motivación, Reflexión y Fe en Dios\n🔗 https://www.tiktok.com/@awonbe`;
    
    if (navigator.share) {
      navigator.share({ text: url, title: `${app} TikTok` }).catch(() => {});
    } else {
      wicopy('https://www.tiktok.com/@awonbe', this, '¡Link copiado! ✨');
    }
  });

  // Botón mensaje
  $('[data-accion="mensaje"]').on('click', function() {
    wiTip(this, '¡Síguenos en TikTok para interactuar! 💬', 'info', 3000);
  });

  console.log(`🎵 ${app} ${version} - TikTok cargado`);
};

export const cleanup = () => {
  $('.btn_video_accion, [data-accion]').off('click');
  console.log('🧹 TikTok limpiado');
};