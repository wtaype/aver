import{a as o,w as i,l,b as v,v as d,y as p,$ as s,c as u,e as f,f as m,d as r}from"./main-DU-RsQgk.js";import"./main-BiAOYWBz.js";import"./vendor-BwXq8HW-.js";const _=[{id:"l8-C21kQFzU",titulo:"Inspiración Matutina con Fe",descripcion:"Comienza tu mañana con palabras de esperanza",duracion:"5:25",vistas:"33K",fecha:"Hace 6 días",categoria:"Fe"},{id:"EkIGCOwMZ00",titulo:"Reflexiones Nocturnas de Gratitud",descripcion:"Agradece y reflexiona antes de dormir",duracion:"7:15",vistas:"28K",fecha:"Hace 1 semana",categoria:"Reflexión"},{id:"TsdW-_EXOI8",titulo:"Oraciones Poderosas para tu Día",descripcion:"Conecta con Dios a través de la oración",duracion:"4:50",vistas:"22K",fecha:"Hace 4 días",categoria:"Fe"},{id:"95LvQCUKyK4",titulo:"Reflexiones de Vida que Transforman",descripcion:"Mensajes profundos para reflexionar sobre tu camino",duracion:"5:10",vistas:"18K",fecha:"Hace 1 semana",categoria:"Reflexión"},{id:"enlOwiVDYac",titulo:"Frases de Fe en Dios para Fortalecer tu Espíritu",descripcion:"Palabras poderosas que elevan tu fe y te acercan a Dios",duracion:"3:45",vistas:"12K",fecha:"Hace 2 días",categoria:"Fe"},{id:"ZfNXRZI2zrA",titulo:"Motivación Diaria: Empieza tu Día con Propósito",descripcion:"Frases motivacionales para conquistar tus metas",duracion:"4:20",vistas:"25K",fecha:"Hace 5 días",categoria:"Motivación"},{id:"FJUMRDhl0sI",titulo:"Frases Cortas pero Poderosas",descripcion:"Mensajes breves que impactan tu vida",duracion:"3:30",vistas:"30K",fecha:"Hace 3 días",categoria:"Motivación"},{id:"NLOJvl98SwQ",titulo:"Música Relajante con Frases de Paz",descripcion:"Encuentra tranquilidad con música y palabras",duracion:"6:45",vistas:"45K",fecha:"Hace 2 semanas",categoria:"Vida"}],h=[{nombre:"Frases de Fe en Dios",descripcion:"Fortalece tu fe con palabras inspiradoras",videos:25,icono:"fa-hands-praying",color:"Paz"},{nombre:"Motivación Diaria",descripcion:"Videos para empezar cada día con energía",videos:32,icono:"fa-rocket",color:"Cielo"},{nombre:"Reflexiones de Vida",descripcion:"Mensajes profundos para tu crecimiento",videos:18,icono:"fa-brain",color:"Mora"},{nombre:"Frases Cortas",descripcion:"Mensajes breves con gran impacto",videos:40,icono:"fa-bolt",color:"Dulce"}],t={suscriptores:"10K+",videos:"120+",vistas:"500K+",comentarios:"2.5K+"},$=()=>`
  <div class="youtube">
    <!-- HERO YOUTUBE -->
    <section class="yt_hero">
      <div class="yt_hero_contenido">
        <div class="yt_brand">
          <div class="yt_logo">
            <i class="fab fa-youtube"></i>
          </div>
          <div class="yt_info">
            <h1>${o} <span class="yt_verified"><i class="fas fa-circle-check"></i></span></h1>
            <p class="yt_handle">@awonbe • ${t.suscriptores} suscriptores</p>
          </div>
        </div>
        <p class="yt_descripcion">
          🎬 Videos de <strong>motivación, reflexión y fe en Dios</strong><br>
          ✨ Contenido diario que inspira y transforma vidas<br>
          🙏 Únete a nuestra comunidad de fe y esperanza
        </p>
        <div class="yt_acciones">
          <a href="https://www.youtube.com/channel/UCBnyIE557egJiZszex-vURg?sub_confirmation=1" target="_blank" rel="noopener" class="yt_btn_suscribir" ${i("¡Suscríbete ahora!")}>
            <i class="fab fa-youtube"></i>
            <span>Suscribirse</span>
          </a>
          <button class="yt_btn_secundario" data-accion="compartir" ${i("Comparte el canal")}>
            <i class="fas fa-share-nodes"></i>
            <span>Compartir</span>
          </button>
          <button class="yt_btn_secundario" data-accion="notificar" ${i("Activa las notificaciones")}>
            <i class="fas fa-bell"></i>
          </button>
        </div>
        <div class="yt_stats_mini">
          <div class="stat_mini" ${i("Total de videos")}>
            <i class="fas fa-video"></i>
            <span>${t.videos} videos</span>
          </div>
          <div class="stat_mini" ${i("Vistas totales")}>
            <i class="fas fa-eye"></i>
            <span>${t.vistas} vistas</span>
          </div>
          <div class="stat_mini" ${i("Comentarios")}>
            <i class="fas fa-comments"></i>
            <span>${t.comentarios} comentarios</span>
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
        ${_.map((a,e)=>`
          <div class="video_card" data-vista="video${e}">
            <div class="video_thumbnail" data-video-id="${a.id}" ${i("Ver video")}>
              <img src="https://img.youtube.com/vi/${a.id}/maxresdefault.jpg" alt="${a.titulo}" loading="lazy" />
              <div class="video_overlay">
                <i class="fas fa-play-circle"></i>
              </div>
              <span class="video_duracion">${a.duracion}</span>
            </div>
            <div class="video_info">
              <div class="video_categoria ${a.categoria.toLowerCase()}">${a.categoria}</div>
              <h3 class="video_titulo">${a.titulo}</h3>
              <p class="video_descripcion">${a.descripcion}</p>
              <div class="video_meta">
                <span><i class="fas fa-eye"></i> ${a.vistas}</span>
                <span><i class="fas fa-clock"></i> ${a.fecha}</span>
              </div>
              <div class="video_acciones">
                <button class="btn_video_accion" data-link="https://youtube.com/watch?v=${a.id}" ${i("Copiar link")}>
                  <i class="fas fa-link"></i>
                </button>
                <button class="btn_video_accion" data-compartir="${a.titulo}" data-video-id="${a.id}" ${i("Compartir")}>
                  <i class="fas fa-share-nodes"></i>
                </button>
                <a href="https://youtube.com/watch?v=${a.id}" target="_blank" rel="noopener" class="btn_video_accion" ${i("Ver en YouTube")}>
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        `).join("")}
      </div>

      <div class="ver_mas">
        <a href="https://www.youtube.com/channel/UCBnyIE557egJiZszex-vURg/videos" target="_blank" rel="noopener" class="btn_ver_mas" ${i("Ver todos los videos")}>
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
        ${h.map((a,e)=>`
          <div class="playlist_card ${a.color.toLowerCase()}" data-vista="playlist${e}">
            <div class="playlist_icono">
              <i class="fas ${a.icono}"></i>
            </div>
            <h3>${a.nombre}</h3>
            <p>${a.descripcion}</p>
            <div class="playlist_footer">
              <span class="playlist_count"><i class="fas fa-video"></i> ${a.videos} videos</span>
              <a href="https://www.youtube.com/channel/UCBnyIE557egJiZszex-vURg/playlists" target="_blank" rel="noopener" class="playlist_link" ${i("Ver playlist")}>
                <i class="fas fa-play-circle"></i>
              </a>
            </div>
          </div>
        `).join("")}
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
          <img src="/aver/logo.webp" alt="${o} YouTube" />
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
        <a href="https://www.youtube.com/channel/UCBnyIE557egJiZszex-vURg?sub_confirmation=1" target="_blank" rel="noopener" class="btn_cta_youtube" ${i("¡Suscríbete ahora!")}>
          <i class="fab fa-youtube"></i>
          Suscribirse Ahora
        </a>
      </div>
    </section>

    <!-- FOOTER REDES -->
    <section class="yt_footer_redes">
      <h3>También Síguenos en</h3>
      <div class="footer_redes_grid">
        <a href="https://www.tiktok.com/@awonbe" target="_blank" rel="noopener" class="footer_red tiktok" ${i("TikTok")}>
          <i class="fab fa-tiktok"></i>
        </a>
        <a href="https://www.instagram.com/awonbeee/" target="_blank" rel="noopener" class="footer_red instagram" ${i("Instagram")}>
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/awonbe/" target="_blank" rel="noopener" class="footer_red facebook" ${i("Facebook")}>
          <i class="fab fa-facebook"></i>
        </a>
      </div>
      <p class="footer_texto">Creado con ❤️ por <a href="${l}" target="_blank" rel="noopener">${v}</a> • ${d} © ${p()}</p>
    </section>

    <!-- MODAL VIDEO (SIN BOTÓN X) -->
    <div id="modalVideo" class="wiModal">
      <div class="modalBody modal_video_body">
        <div id="videoContainer"></div>
      </div>
    </div>
  </div>
`,w=()=>{[".video_card",".playlist_card",".contenido_item",".yt_hero_contenido"].forEach(a=>{s(a).each((e,c)=>u(c,()=>s(c).addClass("visible")))}),s(".video_thumbnail").on("click",function(a){a.preventDefault();const e=s(this).data("video-id");s("#videoContainer").html(`
      <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/${e}?autoplay=1&rel=0" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
        style="border-radius:1.5vh"
      ></iframe>
    `),f("modalVideo")}),s("#modalVideo").on("click",function(a){a.target===this&&(s("#videoContainer").html(""),m("modalVideo"))}),s(".btn_video_accion[data-link]").on("click",function(a){a.preventDefault(),a.stopPropagation();const e=s(this).data("link");r(e,this,"¡Link copiado! ✨")}),s(".btn_video_accion[data-compartir]").on("click",function(a){a.preventDefault(),a.stopPropagation();const e=s(this).data("compartir"),c=s(this).data("video-id"),n=`🎬 ${e}

✨ ${o} en YouTube
🔗 https://youtube.com/watch?v=${c}`;navigator.share?navigator.share({text:n,title:`${o} - ${e}`}).catch(()=>{}):window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(n)}`,"_blank")}),s('[data-accion="compartir"]').on("click",function(){const a=`🎬 ${o} en YouTube

✨ Frases de Motivación, Reflexión y Fe en Dios
🔗 https://www.youtube.com/channel/UCBnyIE557egJiZszex-vURg`;navigator.share?navigator.share({text:a,title:`${o} YouTube`}).catch(()=>{}):r("https://www.youtube.com/channel/UCBnyIE557egJiZszex-vURg",this,"¡Link copiado! ✨")}),s('[data-accion="notificar"]').on("click",function(){i(this,"¡Activa las notificaciones en YouTube! 🔔","info",3e3)}),console.log(`🎬 ${o} ${d} - YouTube cargado`)},k=()=>{s(".btn_video_accion, [data-accion], .video_thumbnail").off("click"),s("#modalVideo").off("click"),s("#videoContainer").html(""),console.log("🧹 YouTube limpiado")};export{k as cleanup,w as init,$ as render};
