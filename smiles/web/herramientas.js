import './herramientas.css';
import $ from 'jquery';
import { wiVista, wicopy, Notificacion, wiTip } from '../widev.js';

// === HERRAMIENTAS DISPONIBLES ===
const herramientas = [
  {
    id: 'claude',
    nombre: 'Claude AI',
    descripcion: 'Asistente de IA avanzado para escritura, código y creatividad',
    icono: 'fa-brain',
    color: 'Cielo',
    tipo: 'ia',
    url: 'https://claude.ai',
    caracteristicas: ['Escritura creativa', 'Análisis de datos', 'Código', 'Resúmenes'],
    gratis: false,
    premium: true
  },
  {
    id: 'chatgpt',
    nombre: 'ChatGPT',
    descripcion: 'Chat inteligente para generar textos, ideas y resolver problemas',
    icono: 'fa-comment-dots',
    color: 'Paz',
    tipo: 'ia',
    url: 'https://chat.openai.com',
    caracteristicas: ['Conversación natural', 'Generación de textos', 'Búsqueda', 'Creatividad'],
    gratis: true,
    premium: true
  },
  {
    id: 'gemini',
    nombre: 'Google Gemini',
    descripcion: 'IA multimodal de Google para textos, imágenes y más',
    icono: 'fa-sparkles',
    color: 'Dulce',
    tipo: 'ia',
    url: 'https://gemini.google.com',
    caracteristicas: ['Multimodal', 'Análisis de imágenes', 'Investigación', 'Productividad'],
    gratis: true,
    premium: true
  },
  {
    id: 'canva',
    nombre: 'Canva',
    descripcion: 'Diseño gráfico profesional sin experiencia previa',
    icono: 'fa-palette',
    color: 'Mora',
    tipo: 'diseño',
    url: 'https://www.canva.com',
    caracteristicas: ['Templates', 'Edición de fotos', 'Videos', 'Logos'],
    gratis: true,
    premium: true
  },
  {
    id: 'figma',
    nombre: 'Figma',
    descripcion: 'Diseño de interfaces y prototipos colaborativos',
    icono: 'fa-pen-nib',
    color: 'Cielo',
    tipo: 'diseño',
    url: 'https://www.figma.com',
    caracteristicas: ['UI/UX', 'Colaboración', 'Prototipos', 'Componentes'],
    gratis: true,
    premium: true
  },
  {
    id: 'midjourney',
    nombre: 'Midjourney',
    descripcion: 'Generación de imágenes con IA de alta calidad',
    icono: 'fa-image',
    color: 'Dulce',
    tipo: 'imagen',
    url: 'https://www.midjourney.com',
    caracteristicas: ['Arte IA', 'Estilos variados', 'Alta resolución', 'Creativo'],
    gratis: false,
    premium: true
  },
  {
    id: 'dalle',
    nombre: 'DALL-E 3',
    descripcion: 'Crea imágenes desde descripciones de texto',
    icono: 'fa-images',
    color: 'Paz',
    tipo: 'imagen',
    url: 'https://labs.openai.com',
    caracteristicas: ['Generación de imágenes', 'Edición IA', 'Variaciones', 'Realista'],
    gratis: false,
    premium: true
  },
  {
    id: 'elevenlabs',
    nombre: 'ElevenLabs',
    descripcion: 'Generación de voz natural con IA',
    icono: 'fa-microphone',
    color: 'Cielo',
    tipo: 'audio',
    url: 'https://elevenlabs.io',
    caracteristicas: ['Voces realistas', 'Múltiples idiomas', 'Clonación de voz', 'API'],
    gratis: true,
    premium: true
  },
  {
    id: 'runway',
    nombre: 'Runway ML',
    descripcion: 'Edición de videos con IA avanzada',
    icono: 'fa-film',
    color: 'Mora',
    tipo: 'video',
    url: 'https://runwayml.com',
    caracteristicas: ['Edición IA', 'Efectos', 'Generación video', 'Green screen'],
    gratis: true,
    premium: true
  },
  {
    id: 'capcut',
    nombre: 'CapCut',
    descripcion: 'Editor de video todo-en-uno para creadores',
    icono: 'fa-video',
    color: 'Dulce',
    tipo: 'video',
    url: 'https://www.capcut.com',
    caracteristicas: ['Edición fácil', 'Efectos', 'Subtítulos auto', 'Música'],
    gratis: true,
    premium: true
  },
  {
    id: 'grammarly',
    nombre: 'Grammarly',
    descripcion: 'Asistente de escritura con corrección y estilo',
    icono: 'fa-pen',
    color: 'Paz',
    tipo: 'escritura',
    url: 'https://www.grammarly.com',
    caracteristicas: ['Corrección', 'Estilo', 'Tono', 'Plagio'],
    gratis: true,
    premium: true
  },
  {
    id: 'notion',
    nombre: 'Notion AI',
    descripcion: 'Organización y escritura potenciada con IA',
    icono: 'fa-file-lines',
    color: 'Cielo',
    tipo: 'productividad',
    url: 'https://www.notion.so',
    caracteristicas: ['Notas', 'Bases de datos', 'IA integrada', 'Colaboración'],
    gratis: true,
    premium: true
  },
  {
    id: 'obsidian',
    nombre: 'Obsidian',
    descripcion: 'Base de conocimientos personal potente',
    icono: 'fa-brain',
    color: 'Mora',
    tipo: 'productividad',
    url: 'https://obsidian.md',
    caracteristicas: ['Markdown', 'Grafos', 'Plugins', 'Local'],
    gratis: true,
    premium: true
  },
  {
    id: 'gamma',
    nombre: 'Gamma',
    descripcion: 'Crea presentaciones hermosas con IA',
    icono: 'fa-presentation-screen',
    color: 'Dulce',
    tipo: 'diseño',
    url: 'https://gamma.app',
    caracteristicas: ['Presentaciones IA', 'Templates', 'Interactivo', 'Rápido'],
    gratis: true,
    premium: true
  },
  {
    id: 'removebg',
    nombre: 'Remove.bg',
    descripcion: 'Elimina fondos de imágenes automáticamente',
    icono: 'fa-scissors',
    color: 'Paz',
    tipo: 'imagen',
    url: 'https://www.remove.bg',
    caracteristicas: ['Fondo transparente', 'Alta calidad', 'API', 'Batch'],
    gratis: true,
    premium: true
  },
  {
    id: 'loom',
    nombre: 'Loom',
    descripcion: 'Graba y comparte videos de pantalla fácilmente',
    icono: 'fa-circle-dot',
    color: 'Cielo',
    tipo: 'video',
    url: 'https://www.loom.com',
    caracteristicas: ['Screen recording', 'Webcam', 'Compartir', 'Edición'],
    gratis: true,
    premium: true
  }
];

// Categorías
const categorias = [
  { id: 'todos', nombre: 'Todas', icono: 'fa-globe' },
  { id: 'ia', nombre: 'Inteligencia Artificial', icono: 'fa-brain' },
  { id: 'diseño', nombre: 'Diseño Gráfico', icono: 'fa-palette' },
  { id: 'imagen', nombre: 'Imágenes', icono: 'fa-image' },
  { id: 'video', nombre: 'Video', icono: 'fa-film' },
  { id: 'audio', nombre: 'Audio', icono: 'fa-headphones' },
  { id: 'escritura', nombre: 'Escritura', icono: 'fa-pen' },
  { id: 'productividad', nombre: 'Productividad', icono: 'fa-chart-line' }
];

// Estado
let categoriaActual = 'todos';
let busqueda = '';

// === RENDERIZADO ===
const renderHero = () => `
  <section class="herr_hero">
    <div class="herr_hero_bg"></div>
    <div class="herr_hero_contenido">
      <div class="herr_icono_principal">
        <i class="fas fa-toolbox"></i>
      </div>
      <h1>🛠️ Herramientas para Creadores</h1>
      <p class="herr_descripcion">
        Las mejores herramientas de IA y diseño para potenciar tu creatividad.
        Todo lo que necesitas para crear contenido profesional en un solo lugar.
      </p>
      <div class="herr_stats">
        <div class="herr_stat">
          <i class="fas fa-tools"></i>
          <span><strong>${herramientas.length}</strong> Herramientas</span>
        </div>
        <div class="herr_stat">
          <i class="fas fa-star"></i>
          <span><strong>${herramientas.filter(h => h.gratis).length}</strong> Gratis</span>
        </div>
        <div class="herr_stat">
          <i class="fas fa-crown"></i>
          <span><strong>${herramientas.filter(h => h.premium).length}</strong> Premium</span>
        </div>
      </div>
    </div>
  </section>
`;

const renderCategorias = () => `
  <section class="herr_categorias">
    <div class="categorias_scroll">
      ${categorias.map(cat => `
        <button 
          class="categoria_btn ${cat.id === categoriaActual ? 'active' : ''}" 
          data-categoria="${cat.id}"
        >
          <i class="fas ${cat.icono}"></i>
          <span>${cat.nombre}</span>
        </button>
      `).join('')}
    </div>
  </section>
`;

const renderBusqueda = () => `
  <section class="herr_busqueda">
    <div class="busqueda_contenedor">
      <i class="fas fa-search"></i>
      <input 
        type="text" 
        id="buscarHerramienta" 
        placeholder="Buscar herramientas..." 
        value="${busqueda}"
      >
      ${busqueda ? '<button class="btn_limpiar" id="limpiarBusqueda"><i class="fas fa-times"></i></button>' : ''}
    </div>
  </section>
`;

const renderHerramientas = () => {
  const herramientasFiltradas = herramientas.filter(h => {
    const matchCategoria = categoriaActual === 'todos' || h.tipo === categoriaActual;
    const matchBusqueda = !busqueda || 
      h.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      h.descripcion.toLowerCase().includes(busqueda.toLowerCase());
    return matchCategoria && matchBusqueda;
  });

  if (herramientasFiltradas.length === 0) {
    return `
      <section class="herr_vacio">
        <i class="fas fa-search"></i>
        <h3>No se encontraron herramientas</h3>
        <p>Intenta con otra búsqueda o categoría</p>
      </section>
    `;
  }

  return `
    <section class="herr_grid">
      ${herramientasFiltradas.map(herr => `
        <article class="herr_card ${herr.color.toLowerCase()}" data-herramienta="${herr.id}">
          <div class="herr_card_header">
            <div class="herr_icono">
              <i class="fas ${herr.icono}"></i>
            </div>
            <div class="herr_badges">
              ${herr.gratis ? '<span class="badge badge_gratis"><i class="fas fa-check"></i> Gratis</span>' : ''}
              ${herr.premium ? '<span class="badge badge_premium"><i class="fas fa-crown"></i> Premium</span>' : ''}
            </div>
          </div>
          <h3>${herr.nombre}</h3>
          <p class="herr_descripcion">${herr.descripcion}</p>
          <div class="herr_caracteristicas">
            ${herr.caracteristicas.slice(0, 3).map(c => `
              <span class="caracteristica">
                <i class="fas fa-check-circle"></i> ${c}
              </span>
            `).join('')}
          </div>
          <div class="herr_acciones">
            <a href="${herr.url}" target="_blank" rel="noopener" class="btn_abrir">
              <i class="fas fa-external-link"></i>
              <span>Abrir</span>
            </a>
            <button class="btn_copiar" data-url="${herr.url}" ${wiTip('Copiar enlace')}>
              <i class="fas fa-copy"></i>
            </button>
            <button class="btn_favorito" data-id="${herr.id}" ${wiTip('Guardar en favoritos')}>
              <i class="far fa-heart"></i>
            </button>
          </div>
        </article>
      `).join('')}
    </section>
  `;
};

const renderTips = () => `
  <section class="herr_tips">
    <h2><i class="fas fa-lightbulb"></i> Tips para Creadores</h2>
    <div class="tips_grid">
      <div class="tip_card">
        <i class="fas fa-rocket"></i>
        <h4>Combina Herramientas</h4>
        <p>Usa Claude para ideas, DALL-E para imágenes y CapCut para editar videos</p>
      </div>
      <div class="tip_card">
        <i class="fas fa-clock"></i>
        <h4>Automatiza Tareas</h4>
        <p>Las herramientas IA te ahorran horas de trabajo repetitivo</p>
      </div>
      <div class="tip_card">
        <i class="fas fa-star"></i>
        <h4>Calidad Profesional</h4>
        <p>Crea contenido de alta calidad sin necesitar experiencia técnica</p>
      </div>
      <div class="tip_card">
        <i class="fas fa-graduation-cap"></i>
        <h4>Aprende Constantemente</h4>
        <p>Explora tutoriales y experimenta con diferentes herramientas</p>
      </div>
    </div>
  </section>
`;

// === RENDERIZADO PRINCIPAL ===
export const render = () => {
  $('#wimain').html(`
    <div class="herramientas">
      ${renderHero()}
      ${renderCategorias()}
      ${renderBusqueda()}
      ${renderHerramientas()}
      ${renderTips()}
    </div>
  `);

  // Animaciones
  setTimeout(() => {
    $('.herr_hero_contenido').addClass('visible');
    $('.herr_card').each((i, el) => {
      setTimeout(() => $(el).addClass('visible'), i * 50);
    });
  }, 100);

  // Observers
  wiVista('.herr_tips', () => $('.tip_card').each((i, el) => {
    setTimeout(() => $(el).addClass('visible'), i * 100);
  }));

  eventos();
};

// === EVENTOS ===
const eventos = () => {
  // Cambiar categoría
  $(document).on('click', '.categoria_btn', function() {
    categoriaActual = $(this).data('categoria');
    $('.categoria_btn').removeClass('active');
    $(this).addClass('active');
    actualizarHerramientas();
  });

  // Búsqueda
  $(document).on('input', '#buscarHerramienta', function() {
    busqueda = $(this).val().trim();
    actualizarHerramientas();
  });

  $(document).on('click', '#limpiarBusqueda', () => {
    busqueda = '';
    $('#buscarHerramienta').val('');
    actualizarHerramientas();
  });

  // Copiar URL
  $(document).on('click', '.btn_copiar', function() {
    const url = $(this).data('url');
    wicopy(url, this, '¡Enlace copiado!');
  });

  // Favoritos (simulado)
  $(document).on('click', '.btn_favorito', function() {
    const $i = $(this).find('i');
    const isFav = $i.hasClass('fas');
    $i.toggleClass('far fas');
    Notificacion(
      isFav ? 'Eliminado de favoritos' : 'Agregado a favoritos',
      isFav ? 'info' : 'success',
      2000
    );
  });
};

// === ACTUALIZAR HERRAMIENTAS ===
const actualizarHerramientas = () => {
  $('.herr_busqueda').replaceWith(renderBusqueda());
  $('.herr_grid, .herr_vacio').replaceWith(renderHerramientas());
  
  setTimeout(() => {
    $('.herr_card').each((i, el) => {
      setTimeout(() => $(el).addClass('visible'), i * 50);
    });
  }, 50);
};

// === INICIALIZACIÓN ===
render();