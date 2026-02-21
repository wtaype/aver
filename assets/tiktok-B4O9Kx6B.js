import{a as t,w as s,l,b as v,v as d,y as p,$ as i,c as f,d as r}from"./main-DU-RsQgk.js";import"./main-BiAOYWBz.js";import"./vendor-BwXq8HW-.js";const _=[{id:"6904444910372506882",titulo:"Frases de Fe en Dios que Fortalecen",descripcion:"Palabras poderosas para tu espíritu",likes:"12.5K",comentarios:"245",vistas:"89K",fecha:"Hace 3 días",categoria:"Fe"},{id:"6913003734318599430",titulo:"Motivación Diaria para Conquistar",descripcion:"Impulsa tu día con estas frases",likes:"25.8K",comentarios:"489",vistas:"156K",fecha:"Hace 5 días",categoria:"Motivación"},{id:"6913383184663186694",titulo:"Reflexiones de Vida que Inspiran",descripcion:"Mensajes profundos para reflexionar",likes:"18.2K",comentarios:"312",vistas:"102K",fecha:"Hace 1 semana",categoria:"Reflexión"},{id:"6928543165108555014",titulo:"Frases Cortas con Gran Impacto",descripcion:"Mensajes breves pero poderosos",likes:"32.4K",comentarios:"567",vistas:"201K",fecha:"Hace 4 días",categoria:"Motivación"},{id:"6929699288859692294",titulo:"Música y Frases de Paz Interior",descripcion:"Encuentra tranquilidad y esperanza",likes:"41.7K",comentarios:"723",vistas:"278K",fecha:"Hace 2 semanas",categoria:"Vida"},{id:"6938241677551357189",titulo:"Oraciones Poderosas del Día",descripcion:"Conecta con Dios cada mañana",likes:"28.9K",comentarios:"401",vistas:"145K",fecha:"Hace 6 días",categoria:"Fe"},{id:"6913383184663186694",titulo:"Inspiración Matutina con Fe",descripcion:"Comienza tu día lleno de esperanza",likes:"35.6K",comentarios:"612",vistas:"189K",fecha:"Hace 1 semana",categoria:"Fe"},{id:"6902237841640770818",titulo:"Gratitud y Reflexión Nocturna",descripcion:"Agradece antes de dormir",likes:"22.3K",comentarios:"356",vistas:"121K",fecha:"Hace 9 días",categoria:"Reflexión"}],o={seguidores:"50K+",siguiendo:"150",likes:"2.5M",videos:"200+"},k=[{nombre:"Fe en Dios",icono:"fa-hands-praying",count:45,color:"Paz"},{nombre:"Motivación",icono:"fa-rocket",count:68,color:"Cielo"},{nombre:"Reflexión",icono:"fa-brain",count:52,color:"Mora"},{nombre:"Vida",icono:"fa-heart",count:35,color:"Dulce"}],h=()=>`
  <div class="tiktok">
    <!-- HERO TIKTOK -->
    <section class="tt_hero">
      <div class="tt_hero_bg"></div>
      <div class="tt_hero_contenido">
        <div class="tt_perfil">
          <div class="tt_avatar">
            <img src="/aver/logo.webp" alt="${t}" />
            <div class="tt_badge"><i class="fas fa-circle-check"></i></div>
          </div>
          <div class="tt_info">
            <h1>@awonbe <span class="tt_verified"><i class="fas fa-badge-check"></i></span></h1>
            <p class="tt_nombre">${t}</p>
            <p class="tt_bio">
              🙏 Frases de <strong>Fe, Motivación y Reflexión</strong><br>
              ✨ Inspirando vidas cada día<br>
              💬 Comparte y síguenos 🔥
            </p>
          </div>
        </div>
        
        <div class="tt_stats">
          <div class="tt_stat">
            <strong>${o.seguidores}</strong>
            <span>Seguidores</span>
          </div>
          <div class="tt_stat">
            <strong>${o.siguiendo}</strong>
            <span>Siguiendo</span>
          </div>
          <div class="tt_stat">
            <strong>${o.likes}</strong>
            <span>Likes</span>
          </div>
          <div class="tt_stat">
            <strong>${o.videos}</strong>
            <span>Videos</span>
          </div>
        </div>

        <div class="tt_acciones">
          <a href="https://www.tiktok.com/@awonbe" target="_blank" rel="noopener" class="tt_btn_seguir" ${s("¡Síguenos!")}>
            <i class="fas fa-user-plus"></i>
            <span>Seguir</span>
          </a>
          <button class="tt_btn_secundario" data-accion="compartir" ${s("Compartir perfil")}>
            <i class="fas fa-share-nodes"></i>
          </button>
          <button class="tt_btn_secundario" data-accion="mensaje" ${s("Mensaje")}>
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
        ${k.map((a,e)=>`
          <div class="categoria_card ${a.color.toLowerCase()}" data-vista="cat${e}">
            <div class="categoria_icono">
              <i class="fas ${a.icono}"></i>
            </div>
            <h3>${a.nombre}</h3>
            <p>${a.count} videos</p>
          </div>
        `).join("")}
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
        ${_.map((a,e)=>`
          <div class="video_card" data-vista="video${e}">
            <a href="https://www.tiktok.com/@awonbe/video/${a.id}" target="_blank" rel="noopener" class="video_thumbnail" ${s("Ver en TikTok")}>
              <div class="video_overlay">
                <i class="fab fa-tiktok"></i>
                <span class="video_play"><i class="fas fa-play"></i></span>
              </div>
              <div class="video_categoria ${a.categoria.toLowerCase()}">${a.categoria}</div>
            </a>
            
            <div class="video_info">
              <h3 class="video_titulo">${a.titulo}</h3>
              <p class="video_descripcion">${a.descripcion}</p>
              
              <div class="video_stats">
                <span class="video_stat" ${s("Likes")}>
                  <i class="fas fa-heart"></i> ${a.likes}
                </span>
                <span class="video_stat" ${s("Comentarios")}>
                  <i class="fas fa-comment"></i> ${a.comentarios}
                </span>
                <span class="video_stat" ${s("Vistas")}>
                  <i class="fas fa-eye"></i> ${a.vistas}
                </span>
              </div>

              <div class="video_footer">
                <span class="video_fecha">${a.fecha}</span>
                <div class="video_acciones">
                  <button class="btn_video_accion" data-link="https://www.tiktok.com/@awonbe/video/${a.id}" ${s("Copiar link")}>
                    <i class="fas fa-link"></i>
                  </button>
                  <button class="btn_video_accion" data-compartir="${a.titulo}" data-video-id="${a.id}" ${s("Compartir")}>
                    <i class="fas fa-share-nodes"></i>
                  </button>
                  <a href="https://www.tiktok.com/@awonbe/video/${a.id}" target="_blank" rel="noopener" class="btn_video_accion" ${s("Ver en TikTok")}>
                    <i class="fab fa-tiktok"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        `).join("")}
      </div>

      <div class="ver_mas">
        <a href="https://www.tiktok.com/@awonbe" target="_blank" rel="noopener" class="btn_ver_mas" ${s("Ver todos los videos")}>
          Ver Todos en TikTok <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </section>

    <!-- POR QUÉ SEGUIRNOS -->
    <section class="tt_beneficios">
      <div class="beneficios_wrapper">
        <div class="beneficios_imagen">
          <img src="/aver/logo.webp" alt="${t} TikTok" />
          <div class="beneficios_badge">
            <i class="fab fa-tiktok"></i>
            <span>${o.seguidores}</span>
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
        <a href="https://www.tiktok.com/@awonbe" target="_blank" rel="noopener" class="btn_cta_tiktok" ${s("Ir a TikTok")}>
          <i class="fab fa-tiktok"></i>
          Seguir en TikTok
        </a>
        <div class="cta_stats">
          <div class="cta_stat">
            <i class="fas fa-users"></i>
            <span>${o.seguidores} seguidores</span>
          </div>
          <div class="cta_stat">
            <i class="fas fa-heart"></i>
            <span>${o.likes} likes totales</span>
          </div>
          <div class="cta_stat">
            <i class="fas fa-video"></i>
            <span>${o.videos} videos</span>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER REDES -->
    <section class="tt_footer_redes">
      <h3>También Encuéntranos en</h3>
      <div class="footer_redes_grid">
        <a href="https://www.youtube.com/channel/UCBnyIE557egJiZszex-vURg" target="_blank" rel="noopener" class="footer_red youtube" ${s("YouTube")}>
          <i class="fab fa-youtube"></i>
        </a>
        <a href="https://www.instagram.com/awonbeee/" target="_blank" rel="noopener" class="footer_red instagram" ${s("Instagram")}>
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/awonbe/" target="_blank" rel="noopener" class="footer_red facebook" ${s("Facebook")}>
          <i class="fab fa-facebook"></i>
        </a>
      </div>
      <p class="footer_texto">Creado con ❤️ por <a href="${l}" target="_blank" rel="noopener">${v}</a> • ${d} © ${p()}</p>
    </section>
  </div>
`,g=()=>{[".video_card",".categoria_card",".beneficio_item",".tt_hero_contenido"].forEach(a=>{i(a).each((e,c)=>f(c,()=>i(c).addClass("visible")))}),i(".btn_video_accion[data-link]").on("click",function(a){a.preventDefault(),a.stopPropagation();const e=i(this).data("link");r(e,this,"¡Link copiado! ✨")}),i(".btn_video_accion[data-compartir]").on("click",function(a){a.preventDefault(),a.stopPropagation();const e=i(this).data("compartir"),c=i(this).data("video-id"),n=`🎵 ${e}

✨ ${t} en TikTok
🔗 https://www.tiktok.com/@awonbe/video/${c}`;navigator.share?navigator.share({text:n,title:`${t} - ${e}`}).catch(()=>{}):window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(n)}`,"_blank")}),i('[data-accion="compartir"]').on("click",function(){const a=`🎵 ${t} en TikTok

✨ Frases de Motivación, Reflexión y Fe en Dios
🔗 https://www.tiktok.com/@awonbe`;navigator.share?navigator.share({text:a,title:`${t} TikTok`}).catch(()=>{}):r("https://www.tiktok.com/@awonbe",this,"¡Link copiado! ✨")}),i('[data-accion="mensaje"]').on("click",function(){s(this,"¡Síguenos en TikTok para interactuar! 💬","info",3e3)}),console.log(`🎵 ${t} ${d} - TikTok cargado`)},$=()=>{i(".btn_video_accion, [data-accion]").off("click"),console.log("🧹 TikTok limpiado")};export{$ as cleanup,g as init,h as render};
