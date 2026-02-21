import{a as o,w as i,v as r,l as t,b as d,y as l,$ as e,c as p,d as v}from"./main-C-MIaxyj.js";import"./vendor-BwXq8HW-.js";const _=[{icono:"fa-heart",titulo:"Frases Inspiradoras",descripcion:"Miles de frases de motivación, reflexión y fe en Dios que tocan el corazón",color:"Dulce"},{icono:"fa-palette",titulo:"Diseños Hermosos",descripcion:"Cada frase viene con diseños visuales profesionales y colores vibrantes",color:"Cielo"},{icono:"fa-video",titulo:"Contenido Multimedia",descripcion:"Videos, imágenes y posts en YouTube, TikTok, Instagram y Facebook",color:"Mora"},{icono:"fa-users",titulo:"Comunidad Activa",descripcion:"Únete a miles de personas que buscan inspiración y crecimiento espiritual",color:"Paz"},{icono:"fa-mobile-screen",titulo:"100% Responsive",descripcion:"Diseño optimizado para verse perfecto en todos los dispositivos",color:"Cielo"},{icono:"fa-bolt",titulo:"Actualización Diaria",descripcion:"Nuevas frases y contenido inspirador publicado todos los días",color:"Dulce"},{icono:"fa-share-nodes",titulo:"Fácil de Compartir",descripcion:"Comparte tus frases favoritas en WhatsApp, redes sociales con un click",color:"Mora"},{icono:"fa-globe",titulo:"100% Gratis",descripcion:"Todo nuestro contenido es completamente gratuito y sin publicidad molesta",color:"Paz"}],u=[{numero:"500K+",label:"Vistas Totales",icono:"fa-eye"},{numero:"50K+",label:"Seguidores",icono:"fa-users"},{numero:"1000+",label:"Frases Publicadas",icono:"fa-heart"},{numero:"4",label:"Plataformas",icono:"fa-globe"}],n=[{numero:"1",icono:"fa-compass",titulo:"Explora",descripcion:"Navega por nuestra colección de frases organizadas por categorías"},{numero:"2",icono:"fa-bookmark",titulo:"Guarda",descripcion:"Marca tus frases favoritas para acceder a ellas cuando quieras"},{numero:"3",icono:"fa-share",titulo:"Comparte",descripcion:"Inspira a otros compartiendo las frases en tus redes sociales"}],f=[{nombre:"YouTube",icono:"fa-youtube",url:"https://www.youtube.com/channel/UCBnyIE557egJiZszex-vURg",seguidores:"10K+",descripcion:"Videos motivacionales diarios",color:"#FF0000"},{nombre:"TikTok",icono:"fa-tiktok",url:"https://www.tiktok.com/@awonbe",seguidores:"50K+",descripcion:"Frases cortas inspiradoras",color:"#000000"},{nombre:"Instagram",icono:"fa-instagram",url:"https://www.instagram.com/awonbeee/",seguidores:"15K+",descripcion:"Diseños visuales hermosos",color:"#E4405F"},{nombre:"Facebook",icono:"fa-facebook",url:"https://www.facebook.com/awonbe/",seguidores:"25K+",descripcion:"Comunidad activa y reflexiones",color:"#1877F2"}],m=[{icono:"fa-hands-praying",titulo:"Fe en Dios",descripcion:"Todas nuestras frases están centradas en fortalecer la fe y la esperanza en Dios"},{icono:"fa-heart",titulo:"Amor y Empatía",descripcion:"Creamos contenido con amor para tocar corazones y transformar vidas"},{icono:"fa-lightbulb",titulo:"Inspiración Positiva",descripcion:"Buscamos motivar y elevar el espíritu de cada persona que nos visita"},{icono:"fa-shield-heart",titulo:"Autenticidad",descripcion:"Contenido original y auténtico creado con dedicación y profesionalismo"}],g=()=>`
  <div class="acerca">
    <!-- HERO -->
    <section class="ac_hero">
      <div class="ac_hero_bg"></div>
      <div class="ac_hero_contenido">
        <div class="ac_logo_grande">
          <img src="/aver/logo.webp" alt="${o}" />
        </div>
        <h1 class="ac_titulo">${o}</h1>
        <p class="ac_tagline">✨ Inspirando vidas a través de palabras ✨</p>
        <p class="ac_desc">
          Somos una comunidad dedicada a compartir frases de <strong>motivación, reflexión y fe en Dios</strong>. 
          Creemos en el poder de las palabras para transformar vidas y fortalecer el espíritu.
        </p>
        <div class="ac_hero_stats">
          ${u.map(a=>`
            <div class="stat">
              <i class="fas ${a.icono}"></i>
              <div>
                <strong>${a.numero}</strong>
                <span>${a.label}</span>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- CARACTERÍSTICAS -->
    <section class="ac_seccion ac_features">
      <div class="ac_sec_header">
        <span class="ac_sec_icono"><i class="fas fa-star"></i></span>
        <h2>¿Qué Hace Especial a <span class="gradiente">${o}</span>?</h2>
        <p>Todo lo que necesitas para encontrar inspiración diaria</p>
      </div>

      <div class="ac_feat_grid">
        ${_.map((a,s)=>`
          <div class="ac_feat ${a.color.toLowerCase()}" data-vista="feat${s}" style="--delay:${s*.08}s">
            <div class="ac_feat_icono">
              <i class="fas ${a.icono}"></i>
            </div>
            <h3>${a.titulo}</h3>
            <p>${a.descripcion}</p>
          </div>
        `).join("")}
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
        ${n.map((a,s)=>`
          <div class="ac_paso" data-vista="paso${s}">
            <div class="ac_paso_num">${a.numero}</div>
            <div class="ac_paso_icono">
              <i class="fas ${a.icono}"></i>
            </div>
            <h3>${a.titulo}</h3>
            <p>${a.descripcion}</p>
          </div>
          ${s<n.length-1?'<div class="ac_paso_linea"><i class="fas fa-chevron-right"></i></div>':""}
        `).join("")}
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
        ${m.map((a,s)=>`
          <div class="ac_valor_card" data-vista="valor${s}">
            <div class="ac_valor_icono">
              <i class="fas ${a.icono}"></i>
            </div>
            <h3>${a.titulo}</h3>
            <p>${a.descripcion}</p>
          </div>
        `).join("")}
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
        ${f.map((a,s)=>`
          <a href="${a.url}" target="_blank" rel="noopener" class="ac_red_card" data-vista="red${s}" ${i(`Ir a ${a.nombre}`)}>
            <div class="ac_red_icono" style="background: ${a.color}">
              <i class="fab ${a.icono}"></i>
            </div>
            <h3>${a.nombre}</h3>
            <p class="ac_red_seguidores">${a.seguidores} seguidores</p>
            <p class="ac_red_desc">${a.descripcion}</p>
            <div class="ac_red_seguir">
              Seguir <i class="fas fa-arrow-right"></i>
            </div>
          </a>
        `).join("")}
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
        <p>Las personas detrás de ${o}</p>
      </div>

      <div class="ac_team">
        <div class="ac_team_card" data-vista="team">
          <div class="ac_team_avatar">
            <i class="fas fa-code"></i>
          </div>
          <h3>${o} Team</h3>
          <span class="ac_team_rol">Desarrollo & Diseño</span>
          <p>
            Equipo dedicado a crear contenido inspirador y desarrollar plataformas 
            que conecten corazones a través de la tecnología y la fe en Dios.
          </p>
          <div class="ac_team_social">
            <a href="https://www.youtube.com/channel/UCBnyIE557egJiZszex-vURg" target="_blank" rel="noopener" ${i("YouTube")}>
              <i class="fab fa-youtube"></i>
            </a>
            <a href="https://www.tiktok.com/@awonbe" target="_blank" rel="noopener" ${i("TikTok")}>
              <i class="fab fa-tiktok"></i>
            </a>
            <a href="https://www.instagram.com/awonbeee/" target="_blank" rel="noopener" ${i("Instagram")}>
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/awonbe/" target="_blank" rel="noopener" ${i("Facebook")}>
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
          <button class="ac_cta_btn2" data-accion="compartir" ${i("Compartir proyecto")}>
            <i class="fas fa-share-nodes"></i> Compartir
          </button>
        </div>
      </div>
    </section>

    <!-- FOOTER EXTRA -->
    <div class="ac_footer_extra">
      <p>
        ${o} ${r} &middot; 
        Hecho con <i class="fas fa-heart" style="color:var(--mco)"></i> por 
        <a href="${t}" target="_blank" rel="noopener">${d}</a> &middot; 
        ${l()}
      </p>
    </div>
  </div>
`,$=()=>{[".ac_feat",".ac_paso",".ac_team_card",".ac_red_card",".ac_valor_card",".ac_mision_card",".ac_tech_item"].forEach(a=>{e(a).each((s,c)=>p(c,()=>e(c).addClass("visible")))}),e('[data-accion="compartir"]').on("click",function(){const a=`💙 ${o}

✨ Frases de Motivación, Reflexión y Fe en Dios
🔗 https://awonbeee.web.app/`;navigator.share?navigator.share({text:a,title:`${o} - Frases Inspiradoras`}).catch(()=>{}):v("https://awonbeee.web.app/",this,"¡Link copiado! ✨")}),console.log(`📖 ${o} ${r} - Acerca cargado`)},y=()=>{e("[data-accion]").off("click"),console.log("🧹 Acerca limpiado")};export{y as cleanup,$ as init,g as render};
