import './descubre.css';
import $ from 'jquery';
import { app, version, autor, link } from '../wii.js';
import { wiVista, year, wiTip, wicopy } from '../widev.js';

// Características del sistema Smile para AWONBE
const features = [
  {
    icono: 'fa-heart',
    titulo: 'Mensajes Personalizados',
    descripcion: 'Crea tarjetas digitales con frases de Awonbe personalizadas con tu nombre',
    color: 'Dulce',
    ejemplos: '100+ plantillas',
    tiempo: '2 minutos'
  },
  {
    icono: 'fa-share-nodes',
    titulo: 'Comparte Inspiración',
    descripcion: 'Envía frases motivacionales a tus seres queridos por WhatsApp o redes sociales',
    color: 'Cielo',
    ejemplos: '4 plataformas',
    tiempo: '1 minuto'
  },
  {
    icono: 'fa-calendar-heart',
    titulo: 'Frases del Día',
    descripcion: 'Recibe diariamente una frase de motivación, reflexión o fe personalizada',
    color: 'Mora',
    ejemplos: 'Diario',
    tiempo: 'Automático'
  },
  {
    icono: 'fa-bookmark',
    titulo: 'Guarda Favoritas',
    descripcion: 'Crea tu colección personal de frases que más te inspiran y accede cuando quieras',
    color: 'Paz',
    ejemplos: 'Ilimitado',
    tiempo: '30 segundos'
  },
  {
    icono: 'fa-palette',
    titulo: 'Diseños Hermosos',
    descripcion: 'Elige entre diferentes estilos visuales con colores vibrantes y fondos inspiradores',
    color: 'Cielo',
    ejemplos: '50+ diseños',
    tiempo: '1 minuto'
  },
  {
    icono: 'fa-mobile-screen',
    titulo: 'Descarga como Imagen',
    descripcion: 'Guarda tus frases personalizadas en HD para usarlas como fondo o compartir',
    color: 'Dulce',
    ejemplos: 'Alta calidad',
    tiempo: '30 segundos'
  }
];

// Estadísticas del proyecto Awonbe
const stats = [
  { numero: '1,000+', label: 'Frases Publicadas', icono: 'fa-quote-left' },
  { numero: '50K+', label: 'Seguidores Totales', icono: 'fa-users' },
  { numero: '500K+', label: 'Vistas Totales', icono: 'fa-eye' },
  { numero: '4', label: 'Redes Sociales', icono: 'fa-share-nodes' }
];

// Pasos para usar Smile con Awonbe
const pasos = [
  {
    numero: 1,
    icono: 'fa-user-plus',
    titulo: 'Regístrate Gratis',
    descripcion: 'Crea tu cuenta en menos de 1 minuto con tu correo electrónico',
    tiempo: '1 min'
  },
  {
    numero: 2,
    icono: 'fa-heart-circle-plus',
    titulo: 'Explora y Elige',
    descripcion: 'Navega por nuestras 1,000+ frases y elige la que más te inspire hoy',
    tiempo: '2-3 min'
  },
  {
    numero: 3,
    icono: 'fa-wand-magic-sparkles',
    titulo: 'Personaliza',
    descripcion: 'Añade tu nombre, elige colores, fondos y crea tu mensaje único',
    tiempo: '2 min'
  },
  {
    numero: 4,
    icono: 'fa-paper-plane',
    titulo: 'Comparte o Descarga',
    descripcion: 'Envía por WhatsApp, comparte en redes o descarga en HD para usar cuando quieras',
    tiempo: '30 seg'
  }
];

// Testimonios reales de usuarios
const testimonios = [
  {
    nombre: 'María González',
    tiempo: 'Enero 2025',
    estrellas: 5,
    texto: '¡Hermoso! Cada día comparto una frase de Awonbe en mis estados. Mis amigos me preguntan de dónde las saco 💕',
    avatar: 'M',
    red: 'Instagram'
  },
  {
    nombre: 'Carlos Rodríguez',
    tiempo: 'Diciembre 2024',
    estrellas: 5,
    texto: 'Las frases de fe en Dios me han ayudado mucho en momentos difíciles. Gracias Awonbe 🙏',
    avatar: 'C',
    red: 'Facebook'
  },
  {
    nombre: 'Ana López',
    tiempo: 'Febrero 2025',
    estrellas: 5,
    texto: 'Uso Smile para personalizar las frases y enviarlas a mi familia. ¡Es súper fácil y quedan preciosas! 😍',
    avatar: 'A',
    red: 'WhatsApp'
  }
];

// Curiosidades del proyecto
const curiosidades = [
  {
    icono: 'fa-calendar-days',
    titulo: '365 Días de Inspiración',
    descripcion: 'Publicamos contenido nuevo TODOS los días del año sin falta',
    color: 'Cielo'
  },
  {
    icono: 'fa-globe-americas',
    titulo: '15+ Países',
    descripcion: 'Nuestros seguidores nos leen desde España, México, Argentina, Colombia y más',
    color: 'Paz'
  },
  {
    icono: 'fa-clock',
    titulo: 'Horarios Especiales',
    descripcion: 'Publicamos a las 7am (motivación) y 9pm (reflexión) para acompañar tu día',
    color: 'Mora'
  },
  {
    icono: 'fa-heart-pulse',
    titulo: '+2,500 Reacciones/día',
    descripcion: 'Nuestras frases generan miles de likes, comentarios y compartidos diariamente',
    color: 'Dulce'
  }
];

// Ventajas de usar Smile con Awonbe
const ventajas = [
  { icono: 'fa-check-circle', texto: '100% Gratis - Sin pagos ocultos' },
  { icono: 'fa-infinity', texto: 'Mensajes Ilimitados - Crea cuantos quieras' },
  { icono: 'fa-palette', texto: 'Diseños Profesionales - Sin experiencia necesaria' },
  { icono: 'fa-mobile-screen', texto: 'Mobile First - Optimizado para celular' },
  { icono: 'fa-cloud-arrow-down', texto: 'Descarga HD - Imágenes alta calidad' },
  { icono: 'fa-shield-heart', texto: 'Privado y Seguro - Tus datos protegidos' }
];

// Categorías de frases disponibles
const categorias = [
  { nombre: 'Fe en Dios', icono: 'fa-hands-praying', cantidad: 250, color: 'Paz' },
  { nombre: 'Motivación', icono: 'fa-rocket', cantidad: 300, color: 'Cielo' },
  { nombre: 'Reflexión', icono: 'fa-brain', cantidad: 200, color: 'Mora' },
  { nombre: 'Vida', icono: 'fa-heart', cantidad: 250, color: 'Dulce' }
];

export const render = () => `
  <div class="descubre_container">
    <!-- HERO PRINCIPAL -->
    <section class="desc_hero">
      <div class="hero_bg"></div>
      <div class="hero_wrapper">
        <div class="hero_content">
          <div class="hero_badge">
            <i class="fas fa-sparkles"></i>
            <span>Descubre ${app} Smile</span>
          </div>
          <h1>Personaliza y Comparte las Frases que Inspiran tu Vida 💝</h1>
          <p class="hero_desc">
            Con <strong>${app} Smile</strong> puedes crear tarjetas digitales hermosas con nuestras 
            <strong>1,000+ frases de motivación, reflexión y fe en Dios</strong>. 
            Personaliza, descarga y comparte inspiración con el mundo.
          </p>
          <div class="hero_ctas">
            <a href="/login" class="btn_primary" ${wiTip('¡Comienza gratis!')}>
              <i class="fas fa-user-plus"></i>
              <span>Crear Cuenta Gratis</span>
            </a>
            <a href="/" class="btn_secondary" ${wiTip('Ver frases')}>
              <i class="fas fa-heart"></i>
              <span>Explorar Frases</span>
            </a>
          </div>
          <div class="hero_trust">
            <div class="trust_item">
              <i class="fas fa-users"></i>
              <span>50K+ seguidores</span>
            </div>
            <div class="trust_item">
              <i class="fas fa-quote-left"></i>
              <span>1,000+ frases</span>
            </div>
            <div class="trust_item">
              <i class="fas fa-check-circle"></i>
              <span>100% gratis</span>
            </div>
          </div>
        </div>
        
        <div class="hero_visual">
          <div class="visual_showcase">
            <div class="showcase_card card_main" data-vista="cardMain">
              <div class="card_header">
                <img src="/logo.webp" alt="Awonbe" class="card_logo" />
                <span class="card_badge">Fe en Dios</span>
              </div>
              <div class="card_body">
                <i class="fas fa-quote-left card_quote"></i>
                <p class="card_text">"Con fe, todo es posible. Confía en Dios y en ti mismo"</p>
              </div>
              <div class="card_footer">
                <span class="card_author">- Awonbe</span>
                <i class="fas fa-heart card_heart"></i>
              </div>
            </div>
            <div class="showcase_stats">
              <div class="stat_mini"><i class="fas fa-eye"></i> 500K+ vistas</div>
              <div class="stat_mini"><i class="fas fa-share"></i> Fácil compartir</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ESTADÍSTICAS -->
    <section class="desc_stats">
      <div class="stats_wrapper">
        ${stats.map((stat, i) => `
          <div class="stat_box" data-vista="stat${i}">
            <div class="stat_icon">
              <i class="fas ${stat.icono}"></i>
            </div>
            <h3>${stat.numero}</h3>
            <p>${stat.label}</p>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- CARACTERÍSTICAS -->
    <section class="desc_features">
      <div class="features_wrapper">
        <div class="section_header">
          <span class="section_badge">✨ Qué Puedes Hacer</span>
          <h2>Funcionalidades de ${app} Smile</h2>
          <p>Todo lo que necesitas para personalizar y compartir frases inspiradoras</p>
        </div>

        <div class="features_grid">
          ${features.map((feat, i) => `
            <div class="feature_item ${feat.color.toLowerCase()}" data-vista="feat${i}">
              <div class="feature_header">
                <div class="feature_icon">
                  <i class="fas ${feat.icono}"></i>
                </div>
                <div class="feature_meta">
                  <span class="meta_item"><i class="fas fa-clock"></i> ${feat.tiempo}</span>
                  <span class="meta_item"><i class="fas fa-layer-group"></i> ${feat.ejemplos}</span>
                </div>
              </div>
              <h3>${feat.titulo}</h3>
              <p>${feat.descripcion}</p>
              <button class="btn_ver_mas" data-tipo="${feat.titulo}" ${wiTip('Disponible al registrarte')}>
                Probar Ahora <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- CÓMO FUNCIONA -->
    <section class="desc_pasos">
      <div class="pasos_wrapper">
        <div class="section_header">
          <span class="section_badge">📋 Paso a Paso</span>
          <h2>¿Cómo Usar ${app} Smile?</h2>
          <p>Solo 4 pasos simples para crear tu mensaje personalizado</p>
        </div>

        <div class="pasos_grid">
          ${pasos.map((paso, i) => `
            <div class="paso_card" data-vista="paso${i}">
              <div class="paso_numero">${paso.numero}</div>
              <div class="paso_icono">
                <i class="fas ${paso.icono}"></i>
              </div>
              <h3>${paso.titulo}</h3>
              <p>${paso.descripcion}</p>
              <span class="paso_tiempo"><i class="fas fa-stopwatch"></i> ${paso.tiempo}</span>
            </div>
            ${i < pasos.length - 1 ? '<div class="paso_arrow"><i class="fas fa-chevron-right"></i></div>' : ''}
          `).join('')}
        </div>
      </div>
    </section>

    <!-- CATEGORÍAS DISPONIBLES -->
    <section class="desc_categorias">
      <div class="categorias_wrapper">
        <div class="section_header">
          <span class="section_badge">🎯 Categorías</span>
          <h2>1,000+ Frases Organizadas para Ti</h2>
          <p>Encuentra la inspiración perfecta para cada momento</p>
        </div>

        <div class="categorias_grid">
          ${categorias.map((cat, i) => `
            <div class="categoria_card ${cat.color.toLowerCase()}" data-vista="cat${i}">
              <div class="categoria_icono">
                <i class="fas ${cat.icono}"></i>
              </div>
              <h3>${cat.nombre}</h3>
              <p class="categoria_cantidad">${cat.cantidad} frases</p>
              <a href="/" class="categoria_link" ${wiTip('Ver frases')}>
                Explorar <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- CURIOSIDADES -->
    <section class="desc_curiosidades">
      <div class="curiosidades_wrapper">
        <div class="section_header">
          <span class="section_badge">💡 ¿Sabías Qué?</span>
          <h2>Curiosidades de ${app}</h2>
          <p>Datos interesantes sobre nuestro proyecto que inspira a miles</p>
        </div>

        <div class="curiosidades_grid">
          ${curiosidades.map((cur, i) => `
            <div class="curiosidad_card ${cur.color.toLowerCase()}" data-vista="cur${i}">
              <div class="curiosidad_icono">
                <i class="fas ${cur.icono}"></i>
              </div>
              <h3>${cur.titulo}</h3>
              <p>${cur.descripcion}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- VENTAJAS -->
    <section class="desc_ventajas">
      <div class="ventajas_wrapper">
        <div class="section_header">
          <span class="section_badge">🎁 Beneficios</span>
          <h2>¿Por qué usar ${app} Smile?</h2>
          <p>Todo lo que obtienes completamente gratis</p>
        </div>

        <div class="ventajas_grid">
          ${ventajas.map((vent, i) => `
            <div class="ventaja_item" data-vista="vent${i}">
              <i class="fas ${vent.icono}"></i>
              <span>${vent.texto}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- TESTIMONIOS -->
    <section class="desc_testimonios">
      <div class="testimonios_wrapper">
        <div class="section_header">
          <span class="section_badge">💬 Testimonios</span>
          <h2>Lo que Dicen Nuestros Seguidores</h2>
          <p>Historias reales de personas como tú que usan ${app}</p>
        </div>

        <div class="testimonios_grid">
          ${testimonios.map((test, i) => `
            <div class="testimonio_card" data-vista="test${i}">
              <div class="testimonio_header">
                <div class="testimonio_avatar">${test.avatar}</div>
                <div class="testimonio_info">
                  <h4>${test.nombre}</h4>
                  <span class="testimonio_tiempo">${test.tiempo}</span>
                </div>
                <div class="testimonio_red ${test.red.toLowerCase()}">
                  <i class="fab fa-${test.red.toLowerCase()}"></i>
                </div>
              </div>
              <div class="testimonio_stars">
                ${Array(test.estrellas).fill('<i class="fas fa-star"></i>').join('')}
              </div>
              <p>${test.texto}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- REDES SOCIALES -->
    <section class="desc_redes">
      <div class="redes_wrapper">
        <div class="section_header">
          <span class="section_badge">🌐 Síguenos</span>
          <h2>Encuéntranos en Redes Sociales</h2>
          <p>Contenido diario de motivación, reflexión y fe en Dios</p>
        </div>

        <div class="redes_grid">
          <a href="https://www.youtube.com/channel/UCBnyIE557egJiZszex-vURg" target="_blank" rel="noopener" class="red_card youtube" data-vista="red1">
            <div class="red_icono"><i class="fab fa-youtube"></i></div>
            <h3>YouTube</h3>
            <p class="red_seguidores">10K+ suscriptores</p>
            <p>Videos motivacionales diarios</p>
            <span class="red_seguir">Ver Canal <i class="fas fa-external-link"></i></span>
          </a>
          <a href="https://www.tiktok.com/@awonbe" target="_blank" rel="noopener" class="red_card tiktok" data-vista="red2">
            <div class="red_icono"><i class="fab fa-tiktok"></i></div>
            <h3>TikTok</h3>
            <p class="red_seguidores">50K+ seguidores</p>
            <p>Frases cortas inspiradoras</p>
            <span class="red_seguir">Ver Perfil <i class="fas fa-external-link"></i></span>
          </a>
          <a href="https://www.instagram.com/awonbeee/" target="_blank" rel="noopener" class="red_card instagram" data-vista="red3">
            <div class="red_icono"><i class="fab fa-instagram"></i></div>
            <h3>Instagram</h3>
            <p class="red_seguidores">15K+ seguidores</p>
            <p>Diseños visuales hermosos</p>
            <span class="red_seguir">Ver Perfil <i class="fas fa-external-link"></i></span>
          </a>
          <a href="https://www.facebook.com/awonbe/" target="_blank" rel="noopener" class="red_card facebook" data-vista="red4">
            <div class="red_icono"><i class="fab fa-facebook"></i></div>
            <h3>Facebook</h3>
            <p class="red_seguidores">25K+ seguidores</p>
            <p>Comunidad activa y reflexiones</p>
            <span class="red_seguir">Ver Página <i class="fas fa-external-link"></i></span>
          </a>
        </div>
      </div>
    </section>

    <!-- CTA FINAL -->
    <section class="desc_cta">
      <div class="cta_wrapper">
        <div class="cta_content">
          <span class="cta_icono">🚀</span>
          <h2>¿Listo para Crear tu Primer Mensaje?</h2>
          <p>Únete a ${app} Smile y empieza a personalizar las frases que inspiran tu vida</p>
          <a href="#/auth?mode=registro" class="btn_cta" ${wiTip('¡Comenzar ahora!')}>
            <i class="fas fa-heart"></i>
            <span>Comenzar Ahora Gratis</span>
          </a>
          <div class="cta_features">
            <div class="cta_feature"><i class="fas fa-check"></i> Sin tarjeta de crédito</div>
            <div class="cta_feature"><i class="fas fa-check"></i> Mensajes ilimitados</div>
            <div class="cta_feature"><i class="fas fa-check"></i> 100% gratis siempre</div>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER INFO -->
    <div class="desc_footer">
      <p>${app} Smile - Personaliza frases inspiradoras • Creado con <i class="fas fa-heart"></i> por <a href="${link}" target="_blank" rel="noopener">${autor}</a> • ${version} © ${year()}</p>
    </div>
  </div>
`;

export const init = () => {
  console.log(`✅ Descubre ${app} Smile cargado`);
  
  // Animaciones con Intersection Observer
  [
    '.stat_box', '.feature_item', '.paso_card', '.categoria_card', 
    '.curiosidad_card', '.ventaja_item', '.testimonio_card', '.red_card',
    '.cardMain', '.showcase_card'
  ].forEach(sel => {
    $(sel).each((_, el) => wiVista(el, () => $(el).addClass('visible')));
  });

  // Ver más características
  $('.btn_ver_mas').on('click', function() {
    const tipo = $(this).data('tipo');
    wiTip(this, `Regístrate para usar: ${tipo}`, 'info', 2500);
    setTimeout(() => window.location.hash = '/auth?mode=registro', 1200);
  });
};

export const cleanup = () => {
  $('.btn_ver_mas').off('click');
  console.log('🧹 Descubre limpiado');
};