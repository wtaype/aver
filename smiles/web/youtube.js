import './youtube.css';
import $ from 'jquery';
import { app, version, autor, link } from '../wii.js';
import { wiVista, year, wiTip, wicopy, abrirModal, cerrarModal } from '../widev.js';

// Videos reales de YouTube
const videos = [
  {
    id: 'l8-C21kQFzU',
    titulo: 'Inspiración Matutina con Fe',
    descripcion: 'Comienza tu mañana con palabras de esperanza',
    duracion: '5:25',
    vistas: '33K',
    fecha: 'Hace 6 días',
    categoria: 'Fe'
  },
  {
    id: 'EkIGCOwMZ00',
    titulo: 'Reflexiones Nocturnas de Gratitud',
    descripcion: 'Agradece y reflexiona antes de dormir',
    duracion: '7:15',
    vistas: '28K',
    fecha: 'Hace 1 semana',
    categoria: 'Reflexión'
  },
  {
    id: 'TsdW-_EXOI8',
    titulo: 'Oraciones Poderosas para tu Día',
    descripcion: 'Conecta con Dios a través de la oración',
    duracion: '4:50',
    vistas: '22K',
    fecha: 'Hace 4 días',
    categoria: 'Fe'
  },
  {
    id: '95LvQCUKyK4',
    titulo: 'Reflexiones de Vida que Transforman',
    descripcion: 'Mensajes profundos para reflexionar sobre tu camino',
    duracion: '5:10',
    vistas: '18K',
    fecha: 'Hace 1 semana',
    categoria: 'Reflexión'
  },
  {
    id: 'enlOwiVDYac',
    titulo: 'Frases de Fe en Dios para Fortalecer tu Espíritu',
    descripcion: 'Palabras poderosas que elevan tu fe y te acercan a Dios',
    duracion: '3:45',
    vistas: '12K',
    fecha: 'Hace 2 días',
    categoria: 'Fe'
  },
  {
    id: 'ZfNXRZI2zrA',
    titulo: 'Motivación Diaria: Empieza tu Día con Propósito',
    descripcion: 'Frases motivacionales para conquistar tus metas',
    duracion: '4:20',
    vistas: '25K',
    fecha: 'Hace 5 días',
    categoria: 'Motivación'
  },
  {
    id: 'FJUMRDhl0sI',
    titulo: 'Frases Cortas pero Poderosas',
    descripcion: 'Mensajes breves que impactan tu vida',
    duracion: '3:30',
    vistas: '30K',
    fecha: 'Hace 3 días',
    categoria: 'Motivación'
  },
  {
    id: 'NLOJvl98SwQ',
    titulo: 'Música Relajante con Frases de Paz',
    descripcion: 'Encuentra tranquilidad con música y palabras',
    duracion: '6:45',
    vistas: '45K',
    fecha: 'Hace 2 semanas',
    categoria: 'Vida'
  },
];

// Playlists del canal
const playlists = [
  {
    nombre: 'Frases de Fe en Dios',
    descripcion: 'Fortalece tu fe con palabras inspiradoras',
    videos: 25,
    icono: 'fa-hands-praying',
    color: 'Paz'
  },
  {
    nombre: 'Motivación Diaria',
    descripcion: 'Videos para empezar cada día con energía',
    videos: 32,
    icono: 'fa-rocket',
    color: 'Cielo'
  },
  {
    nombre: 'Reflexiones de Vida',
    descripcion: 'Mensajes profundos para tu crecimiento',
    videos: 18,
    icono: 'fa-brain',
    color: 'Mora'
  },
  {
    nombre: 'Frases Cortas',
    descripcion: 'Mensajes breves con gran impacto',
    videos: 40,
    icono: 'fa-bolt',
    color: 'Dulce'
  }
];

// Estadísticas del canal
const stats = {
  suscriptores: '10K+',
  videos: '120+',
  vistas: '500K+',
  comentarios: '2.5K+'
};

export const render = () => `
  <div class="youtube">
    <!-- HERO YOUTUBE -->
    <section class="yt_hero">
      <div class="yt_hero_contenido">
        <div class="yt_brand">
          <div class="yt_logo">
            <i class="fab fa-youtube"></i>
          </div>
          <div class="yt_info">
            <h1>${app} <span class="yt_verified"><i class="fas fa-circle-check"></i></span></h1>
            <p class="yt_handle">@awonbe • ${stats.suscriptores} suscriptores</p>
          </div>
        </div>
        <p class="yt_descripcion">
          🎬 Videos de <strong>motivación, reflexión y fe en Dios</strong><br>
          ✨ Contenido diario que inspira y transforma vidas<br>
          🙏 Únete a nuestra comunidad de fe y esperanza
        </p>
        <div class="yt_acciones">
          <a href="https://www.youtube.com/channel/UCBnyIE557egJiZszex-vURg?sub_confirmation=1" target="_blank" rel="noopener" class="yt_btn_suscribir" ${wiTip('¡Suscríbete ahora!')}>
            <i class="fab fa-youtube"></i>
            <span>Suscribirse</span>
          </a>
          <button class="yt_btn_secundario" data-accion="compartir" ${wiTip('Comparte el canal')}>
            <i class="fas fa-share-nodes"></i>
            <span>Compartir</span>
          </button>
          <button class="yt_btn_secundario" data-accion="notificar" ${wiTip('Activa las notificaciones')}>
            <i class="fas fa-bell"></i>
          </button>
        </div>
        <div class="yt_stats_mini">
          <div class="stat_mini" ${wiTip('Total de videos')}>
            <i class="fas fa-video"></i>
            <span>${stats.videos} videos</span>
          </div>
          <div class="stat_mini" ${wiTip('Vistas totales')}>
            <i class="fas fa-eye"></i>
            <span>${stats.vistas} vistas</span>
          </div>
          <div class="stat_mini" ${wiTip('Comentarios')}>
            <i class="fas fa-comments"></i>
            <span>${stats.comentarios} comentarios</span>
          </div>
        </div>
      </div>
    </section>

    <!-- VIDEOS DESTACADOS -->
    <section class="yt_videos">
      <div class="seccion_header">
        <h2 class="seccion_titulo">
          <i class="fas fa-fire"></i>
          Videos Destacados
        </h2>
        <p class="seccion_descripcion">
          Los videos más recientes y populares de nuestro canal
        </p>
      </div>

      <div class="videos_grid">
        ${videos.map((video, i) => `
          <div class="video_card" data-vista="video${i}">
            <div class="video_thumbnail" data-video-id="${video.id}" ${wiTip('Ver video')}>
              <img src="https://img.youtube.com/vi/${video.id}/maxresdefault.jpg" alt="${video.titulo}" loading="lazy" />
              <div class="video_overlay">
                <i class="fas fa-play-circle"></i>
              </div>
              <span class="video_duracion">${video.duracion}</span>
            </div>
            <div class="video_info">
              <div class="video_categoria ${video.categoria.toLowerCase()}">${video.categoria}</div>
              <h3 class="video_titulo">${video.titulo}</h3>
              <p class="video_descripcion">${video.descripcion}</p>
              <div class="video_meta">
                <span><i class="fas fa-eye"></i> ${video.vistas}</span>
                <span><i class="fas fa-clock"></i> ${video.fecha}</span>
              </div>
              <div class="video_acciones">
                <button class="btn_video_accion" data-link="https://youtube.com/watch?v=${video.id}" ${wiTip('Copiar link')}>
                  <i class="fas fa-link"></i>
                </button>
                <button class="btn_video_accion" data-compartir="${video.titulo}" data-video-id="${video.id}" ${wiTip('Compartir')}>
                  <i class="fas fa-share-nodes"></i>
                </button>
                <a href="https://youtube.com/watch?v=${video.id}" target="_blank" rel="noopener" class="btn_video_accion" ${wiTip('Ver en YouTube')}>
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="ver_mas">
        <a href="https://www.youtube.com/channel/UCBnyIE557egJiZszex-vURg/videos" target="_blank" rel="noopener" class="btn_ver_mas" ${wiTip('Ver todos los videos')}>
          Ver Todos los Videos <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </section>

    <!-- PLAYLISTS -->
    <section class="yt_playlists">
      <div class="seccion_header">
        <h2 class="seccion_titulo">
          <i class="fas fa-list"></i>
          Playlists del Canal
        </h2>
        <p class="seccion_descripcion">
          Contenido organizado por categorías para ti
        </p>
      </div>

      <div class="playlists_grid">
        ${playlists.map((playlist, i) => `
          <div class="playlist_card ${playlist.color.toLowerCase()}" data-vista="playlist${i}">
            <div class="playlist_icono">
              <i class="fas ${playlist.icono}"></i>
            </div>
            <h3>${playlist.nombre}</h3>
            <p>${playlist.descripcion}</p>
            <div class="playlist_footer">
              <span class="playlist_count"><i class="fas fa-video"></i> ${playlist.videos} videos</span>
              <a href="https://www.youtube.com/channel/UCBnyIE557egJiZszex-vURg/playlists" target="_blank" rel="noopener" class="playlist_link" ${wiTip('Ver playlist')}>
                <i class="fas fa-play-circle"></i>
              </a>
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- QUÉ ENCONTRARÁS -->
    <section class="yt_contenido">
      <div class="contenido_wrapper">
        <div class="contenido_texto">
          <h2 class="seccion_titulo">
            <i class="fas fa-sparkles"></i>
            ¿Qué Encontrarás en Nuestro Canal?
          </h2>
          <div class="contenido_items">
            <div class="contenido_item">
              <div class="item_icono"><i class="fas fa-video"></i></div>
              <div class="item_texto">
                <h4>Videos Inspiradores</h4>
                <p>Contenido diario con frases de motivación, reflexión y fe en Dios</p>
              </div>
            </div>
            <div class="contenido_item">
              <div class="item_icono"><i class="fas fa-music"></i></div>
              <div class="item_texto">
                <h4>Música Relajante</h4>
                <p>Videos con música de fondo que acompaña mensajes inspiradores</p>
              </div>
            </div>
            <div class="contenido_item">
              <div class="item_icono"><i class="fas fa-palette"></i></div>
              <div class="item_texto">
                <h4>Diseños Animados</h4>
                <p>Frases con diseños hermosos y efectos visuales profesionales</p>
              </div>
            </div>
            <div class="contenido_item">
              <div class="item_icono"><i class="fas fa-calendar-day"></i></div>
              <div class="item_texto">
                <h4>Contenido Regular</h4>
                <p>Nuevos videos cada semana para mantener tu espíritu elevado</p>
              </div>
            </div>
          </div>
        </div>
        <div class="contenido_imagen">
          <img src="${import.meta.env.BASE_URL}logo.webp" alt="${app} YouTube" />
          <div class="contenido_badge">
            <i class="fab fa-youtube"></i>
            <span>Síguenos</span>
          </div>
        </div>
      </div>
    </section>

    <!-- HORARIO Y CTA -->
    <section class="yt_horario">
      <div class="horario_contenido">
        <i class="fas fa-calendar-check horario_icono"></i>
        <h2>¡Nuevos Videos cada Semana!</h2>
        <p>Suscríbete y activa las notificaciones 🔔 para no perderte ningún video inspirador</p>
        <div class="horario_dias">
          <span class="dia"><i class="fas fa-circle-dot"></i> Lunes</span>
          <span class="dia"><i class="fas fa-circle-dot"></i> Miércoles</span>
          <span class="dia"><i class="fas fa-circle-dot"></i> Viernes</span>
        </div>
        <a href="https://www.youtube.com/channel/UCBnyIE557egJiZszex-vURg?sub_confirmation=1" target="_blank" rel="noopener" class="btn_cta_youtube" ${wiTip('¡Suscríbete ahora!')}>
          <i class="fab fa-youtube"></i>
          Suscribirse Ahora
        </a>
      </div>
    </section>

    <!-- FOOTER REDES -->
    <section class="yt_footer_redes">
      <h3>También Síguenos en</h3>
      <div class="footer_redes_grid">
        <a href="https://www.tiktok.com/@awonbe" target="_blank" rel="noopener" class="footer_red tiktok" ${wiTip('TikTok')}>
          <i class="fab fa-tiktok"></i>
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

    <!-- MODAL VIDEO (SIN BOTÓN X) -->
    <div id="modalVideo" class="wiModal">
      <div class="modalBody modal_video_body">
        <div id="videoContainer"></div>
      </div>
    </div>
  </div>
`;

export const init = () => {
  // Animaciones con Intersection Observer
  ['.video_card', '.playlist_card', '.contenido_item', '.yt_hero_contenido'].forEach(sel => {
    $(sel).each((_, el) => wiVista(el, () => $(el).addClass('visible')));
  });

  // Abrir video en modal
  $('.video_thumbnail').on('click', function(e) {
    e.preventDefault();
    const videoId = $(this).data('video-id');
    $('#videoContainer').html(`
      <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
        style="border-radius:1.5vh"
      ></iframe>
    `);
    abrirModal('modalVideo');
  });

  // Cerrar video al hacer clic fuera del modal
  $('#modalVideo').on('click', function(e) {
    if (e.target === this) {
      $('#videoContainer').html('');
      cerrarModal('modalVideo');
    }
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
    const url = `🎬 ${titulo}\n\n✨ ${app} en YouTube\n🔗 https://youtube.com/watch?v=${videoId}`;
    
    if (navigator.share) {
      navigator.share({ text: url, title: `${app} - ${titulo}` }).catch(() => {});
    } else {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`, '_blank');
    }
  });

  // Compartir canal
  $('[data-accion="compartir"]').on('click', function() {
    const url = `🎬 ${app} en YouTube\n\n✨ Frases de Motivación, Reflexión y Fe en Dios\n🔗 https://www.youtube.com/channel/UCBnyIE557egJiZszex-vURg`;
    
    if (navigator.share) {
      navigator.share({ text: url, title: `${app} YouTube` }).catch(() => {});
    } else {
      wicopy('https://www.youtube.com/channel/UCBnyIE557egJiZszex-vURg', this, '¡Link copiado! ✨');
    }
  });

  // Activar notificaciones (mensaje)
  $('[data-accion="notificar"]').on('click', function() {
    wiTip(this, '¡Activa las notificaciones en YouTube! 🔔', 'info', 3000);
  });

  console.log(`🎬 ${app} ${version} - YouTube cargado`);
};

export const cleanup = () => {
  $('.btn_video_accion, [data-accion], .video_thumbnail').off('click');
  $('#modalVideo').off('click');
  $('#videoContainer').html('');
  console.log('🧹 YouTube limpiado');
};