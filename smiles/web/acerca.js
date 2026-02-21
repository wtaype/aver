import './acerca.css';
import $ from 'jquery';
import { app, version, autor, link } from '../wii.js';
import { wiVista, year, wiTip, wicopy } from '../widev.js';

// Características principales
const features = [
  {
    icono: 'fa-heart',
    titulo: 'Frases Inspiradoras',
    descripcion: 'Miles de frases de motivación, reflexión y fe en Dios que tocan el corazón',
    color: 'Dulce'
  },
  {
    icono: 'fa-palette',
    titulo: 'Diseños Hermosos',
    descripcion: 'Cada frase viene con diseños visuales profesionales y colores vibrantes',
    color: 'Cielo'
  },
  {
    icono: 'fa-video',
    titulo: 'Contenido Multimedia',
    descripcion: 'Videos, imágenes y posts en YouTube, TikTok, Instagram y Facebook',
    color: 'Mora'
  },
  {
    icono: 'fa-users',
    titulo: 'Comunidad Activa',
    descripcion: 'Únete a miles de personas que buscan inspiración y crecimiento espiritual',
    color: 'Paz'
  },
  {
    icono: 'fa-mobile-screen',
    titulo: '100% Responsive',
    descripcion: 'Diseño optimizado para verse perfecto en todos los dispositivos',
    color: 'Cielo'
  },
  {
    icono: 'fa-bolt',
    titulo: 'Actualización Diaria',
    descripcion: 'Nuevas frases y contenido inspirador publicado todos los días',
    color: 'Dulce'
  },
  {
    icono: 'fa-share-nodes',
    titulo: 'Fácil de Compartir',
    descripcion: 'Comparte tus frases favoritas en WhatsApp, redes sociales con un click',
    color: 'Mora'
  },
  {
    icono: 'fa-globe',
    titulo: '100% Gratis',
    descripcion: 'Todo nuestro contenido es completamente gratuito y sin publicidad molesta',
    color: 'Paz'
  }
];

// Estadísticas del proyecto
const stats = [
  { numero: '500K+', label: 'Vistas Totales', icono: 'fa-eye' },
  { numero: '50K+', label: 'Seguidores', icono: 'fa-users' },
  { numero: '1000+', label: 'Frases Publicadas', icono: 'fa-heart' },
  { numero: '4', label: 'Plataformas', icono: 'fa-globe' }
];

// Pasos de cómo funciona
const pasos = [
  {
    numero: '1',
    icono: 'fa-compass',
    titulo: 'Explora',
    descripcion: 'Navega por nuestra colección de frases organizadas por categorías'
  },
  {
    numero: '2',
    icono: 'fa-bookmark',
    titulo: 'Guarda',
    descripcion: 'Marca tus frases favoritas para acceder a ellas cuando quieras'
  },
  {
    numero: '3',
    icono: 'fa-share',
    titulo: 'Comparte',
    descripcion: 'Inspira a otros compartiendo las frases en tus redes sociales'
  }
];

// Redes sociales del proyecto
const redes = [
  {
    nombre: 'YouTube',
    icono: 'fa-youtube',
    url: 'https://www.youtube.com/channel/UCBnyIE557egJiZszex-vURg',
    seguidores: '10K+',
    descripcion: 'Videos motivacionales diarios',
    color: '#FF0000'
  },
  {
    nombre: 'TikTok',
    icono: 'fa-tiktok',
    url: 'https://www.tiktok.com/@awonbe',
    seguidores: '50K+',
    descripcion: 'Frases cortas inspiradoras',
    color: '#000000'
  },
  {
    nombre: 'Instagram',
    icono: 'fa-instagram',
    url: 'https://www.instagram.com/awonbeee/',
    seguidores: '15K+',
    descripcion: 'Diseños visuales hermosos',
    color: '#E4405F'
  },
  {
    nombre: 'Facebook',
    icono: 'fa-facebook',
    url: 'https://www.facebook.com/awonbe/',
    seguidores: '25K+',
    descripcion: 'Comunidad activa y reflexiones',
    color: '#1877F2'
  }
];

// Valores del proyecto
const valores = [
  {
    icono: 'fa-hands-praying',
    titulo: 'Fe en Dios',
    descripcion: 'Todas nuestras frases están centradas en fortalecer la fe y la esperanza en Dios'
  },
  {
    icono: 'fa-heart',
    titulo: 'Amor y Empatía',
    descripcion: 'Creamos contenido con amor para tocar corazones y transformar vidas'
  },
  {
    icono: 'fa-lightbulb',
    titulo: 'Inspiración Positiva',
    descripcion: 'Buscamos motivar y elevar el espíritu de cada persona que nos visita'
  },
  {
    icono: 'fa-shield-heart',
    titulo: 'Autenticidad',
    descripcion: 'Contenido original y auténtico creado con dedicación y profesionalismo'
  }
];

export const render = () => `
  <div class="acerca">
    <!-- HERO -->
    <section class="ac_hero">
      <div class="ac_hero_bg"></div>
      <div class="ac_hero_contenido">
        <div class="ac_logo_grande">
          <img src="${import.meta.env.BASE_URL}logo.webp" alt="${app}" />
        </div>
        <h1 class="ac_titulo">${app}</h1>
        <p class="ac_tagline">✨ Inspirando vidas a través de palabras ✨</p>
        <p class="ac_desc">
          Somos una comunidad dedicada a compartir frases de <strong>motivación, reflexión y fe en Dios</strong>. 
          Creemos en el poder de las palabras para transformar vidas y fortalecer el espíritu.
        </p>
        <div class="ac_hero_stats">
          ${stats.map(stat => `
            <div class="stat">
              <i class="fas ${stat.icono}"></i>
              <div>
                <strong>${stat.numero}</strong>
                <span>${stat.label}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- CARACTERÍSTICAS -->
    <section class="ac_seccion ac_features">
      <div class="ac_sec_header">
        <span class="ac_sec_icono"><i class="fas fa-star"></i></span>
        <h2>¿Qué Hace Especial a <span class="gradiente">${app}</span>?</h2>
        <p>Todo lo que necesitas para encontrar inspiración diaria</p>
      </div>

      <div class="ac_feat_grid">
        ${features.map((feat, i) => `
          <div class="ac_feat ${feat.color.toLowerCase()}" data-vista="feat${i}" style="--delay:${i * 0.08}s">
            <div class="ac_feat_icono">
              <i class="fas ${feat.icono}"></i>
            </div>
            <h3>${feat.titulo}</h3>
            <p>${feat.descripcion}</p>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- CÓMO FUNCIONA -->
    <section class="ac_seccion ac_como">
      <div class="ac_sec_header">
        <span class="ac_sec_icono"><i class="fas fa-route"></i></span>
        <h2>¿Cómo <span class="gradiente">Funciona</span>?</h2>
        <p>3 pasos simples para inspirarte cada día</p>
      </div>

      <div class="ac_pasos">
        ${pasos.map((paso, i) => `
          <div class="ac_paso" data-vista="paso${i}">
            <div class="ac_paso_num">${paso.numero}</div>
            <div class="ac_paso_icono">
              <i class="fas ${paso.icono}"></i>
            </div>
            <h3>${paso.titulo}</h3>
            <p>${paso.descripcion}</p>
          </div>
          ${i < pasos.length - 1 ? '<div class="ac_paso_linea"><i class="fas fa-chevron-right"></i></div>' : ''}
        `).join('')}
      </div>
    </section>

    <!-- VALORES -->
    <section class="ac_seccion ac_valores">
      <div class="ac_sec_header">
        <span class="ac_sec_icono"><i class="fas fa-gem"></i></span>
        <h2>Nuestros <span class="gradiente">Valores</span></h2>
        <p>Los principios que guían todo lo que hacemos</p>
      </div>

      <div class="ac_valores_grid">
        ${valores.map((valor, i) => `
          <div class="ac_valor_card" data-vista="valor${i}">
            <div class="ac_valor_icono">
              <i class="fas ${valor.icono}"></i>
            </div>
            <h3>${valor.titulo}</h3>
            <p>${valor.descripcion}</p>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- REDES SOCIALES -->
    <section class="ac_seccion ac_redes">
      <div class="ac_sec_header">
        <span class="ac_sec_icono"><i class="fas fa-share-nodes"></i></span>
        <h2>Encuéntranos en <span class="gradiente">Redes Sociales</span></h2>
        <p>Síguenos en todas nuestras plataformas</p>
      </div>

      <div class="ac_redes_grid">
        ${redes.map((red, i) => `
          <a href="${red.url}" target="_blank" rel="noopener" class="ac_red_card" data-vista="red${i}" ${wiTip(`Ir a ${red.nombre}`)}>
            <div class="ac_red_icono" style="background: ${red.color}">
              <i class="fab ${red.icono}"></i>
            </div>
            <h3>${red.nombre}</h3>
            <p class="ac_red_seguidores">${red.seguidores} seguidores</p>
            <p class="ac_red_desc">${red.descripcion}</p>
            <div class="ac_red_seguir">
              Seguir <i class="fas fa-arrow-right"></i>
            </div>
          </a>
        `).join('')}
      </div>
    </section>

    <!-- MISIÓN Y VISIÓN -->
    <section class="ac_seccion ac_mision">
      <div class="ac_mision_wrapper">
        <div class="ac_mision_card" data-vista="mision">
          <div class="ac_mision_icono">
            <i class="fas fa-bullseye"></i>
          </div>
          <h3>Nuestra Misión</h3>
          <p>
            Inspirar y fortalecer la fe de las personas a través de frases motivacionales y reflexivas, 
            creando una comunidad donde cada palabra sea un rayo de esperanza y transformación. 
            Queremos que cada persona que nos visite encuentre las palabras exactas que necesita para su día.
          </p>
        </div>

        <div class="ac_mision_card" data-vista="vision">
          <div class="ac_mision_icono">
            <i class="fas fa-eye"></i>
          </div>
          <h3>Nuestra Visión</h3>
          <p>
            Convertirnos en la plataforma líder de contenido inspirador en español, 
            tocando millones de corazones alrededor del mundo. Aspiramos a crear una red global 
            de personas inspiradas que difundan mensajes positivos y fortalezcan la fe en sus comunidades.
          </p>
        </div>
      </div>
    </section>

    <!-- EQUIPO -->
    <section class="ac_seccion ac_equipo">
      <div class="ac_sec_header">
        <span class="ac_sec_icono"><i class="fas fa-users"></i></span>
        <h2>El <span class="gradiente">Equipo</span></h2>
        <p>Las personas detrás de ${app}</p>
      </div>

      <div class="ac_team">
        <div class="ac_team_card" data-vista="team">
          <div class="ac_team_avatar">
            <i class="fas fa-code"></i>
          </div>
          <h3>${app} Team</h3>
          <span class="ac_team_rol">Desarrollo & Diseño</span>
          <p>
            Equipo dedicado a crear contenido inspirador y desarrollar plataformas 
            que conecten corazones a través de la tecnología y la fe en Dios.
          </p>
          <div class="ac_team_social">
            <a href="https://www.youtube.com/channel/UCBnyIE557egJiZszex-vURg" target="_blank" rel="noopener" ${wiTip('YouTube')}>
              <i class="fab fa-youtube"></i>
            </a>
            <a href="https://www.tiktok.com/@awonbe" target="_blank" rel="noopener" ${wiTip('TikTok')}>
              <i class="fab fa-tiktok"></i>
            </a>
            <a href="https://www.instagram.com/awonbeee/" target="_blank" rel="noopener" ${wiTip('Instagram')}>
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/awonbe/" target="_blank" rel="noopener" ${wiTip('Facebook')}>
              <i class="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- TECNOLOGÍA -->
    <section class="ac_seccion ac_tech">
      <div class="ac_sec_header">
        <span class="ac_sec_icono"><i class="fas fa-code"></i></span>
        <h2>Tecnología <span class="gradiente">Utilizada</span></h2>
        <p>Construido con las mejores herramientas modernas</p>
      </div>

      <div class="ac_tech_grid">
        <div class="ac_tech_item" data-vista="tech1">
          <i class="fab fa-js"></i>
          <span>JavaScript ES6+</span>
        </div>
        <div class="ac_tech_item" data-vista="tech2">
          <i class="fab fa-css3-alt"></i>
          <span>CSS3 Avanzado</span>
        </div>
        <div class="ac_tech_item" data-vista="tech3">
          <i class="fab fa-html5"></i>
          <span>HTML5 Semántico</span>
        </div>
        <div class="ac_tech_item" data-vista="tech4">
          <i class="fas fa-fire"></i>
          <span>Firebase Backend</span>
        </div>
        <div class="ac_tech_item" data-vista="tech5">
          <i class="fas fa-mobile-screen"></i>
          <span>Responsive Design</span>
        </div>
        <div class="ac_tech_item" data-vista="tech6">
          <i class="fas fa-bolt"></i>
          <span>Optimización Web</span>
        </div>
      </div>
    </section>

    <!-- CTA FINAL -->
    <section class="ac_cta">
      <div class="ac_cta_contenido">
        <span class="ac_cta_icono">💙</span>
        <h2>¿Listo para Inspirarte?</h2>
        <p>Únete a nuestra comunidad y recibe frases inspiradoras todos los días</p>
        <div class="ac_cta_btns">
          <a href="/" class="ac_cta_btn">
            <i class="fas fa-home"></i> Explorar Frases
          </a>
          <button class="ac_cta_btn2" data-accion="compartir" ${wiTip('Compartir proyecto')}>
            <i class="fas fa-share-nodes"></i> Compartir
          </button>
        </div>
      </div>
    </section>

    <!-- FOOTER EXTRA -->
    <div class="ac_footer_extra">
      <p>
        ${app} ${version} &middot; 
        Hecho con <i class="fas fa-heart" style="color:var(--mco)"></i> por 
        <a href="${link}" target="_blank" rel="noopener">${autor}</a> &middot; 
        ${year()}
      </p>
    </div>
  </div>
`;

export const init = () => {
  // Animaciones con Intersection Observer
  [
    '.ac_feat', '.ac_paso', '.ac_team_card', '.ac_red_card', 
    '.ac_valor_card', '.ac_mision_card', '.ac_tech_item'
  ].forEach(sel => {
    $(sel).each((_, el) => wiVista(el, () => $(el).addClass('visible')));
  });

  // Compartir proyecto
  $('[data-accion="compartir"]').on('click', function() {
    const url = `💙 ${app}\n\n✨ Frases de Motivación, Reflexión y Fe en Dios\n🔗 https://awonbeee.web.app/`;
    
    if (navigator.share) {
      navigator.share({ 
        text: url, 
        title: `${app} - Frases Inspiradoras` 
      }).catch(() => {});
    } else {
      wicopy('https://awonbeee.web.app/', this, '¡Link copiado! ✨');
    }
  });

  console.log(`📖 ${app} ${version} - Acerca cargado`);
};

export const cleanup = () => {
  $('[data-accion]').off('click');
  console.log('🧹 Acerca limpiado');
};