import{w as s,a as o,l as c,b as l,v as n,y as d,$ as e,c as p,d as f}from"./main-DMPAOxqa.js";import"./main-DDZ6q5NX.js";import"./vendor-BwXq8HW-.js";const r=[{texto:"Con fe todo es posible. Confía en Dios y en ti mismo.",categoria:"Fe",tema:"Paz"},{texto:"Cada día es una nueva oportunidad para ser mejor.",categoria:"Motivación",tema:"Cielo"},{texto:"La vida es bella cuando la vives con propósito.",categoria:"Vida",tema:"Dulce"},{texto:"Dios tiene un plan perfecto para ti. Confía.",categoria:"Fe",tema:"Mora"},{texto:"No te rindas, lo mejor está por venir.",categoria:"Motivación",tema:"Futuro"},{texto:"Reflexiona sobre tus bendiciones, no tus problemas.",categoria:"Reflexión",tema:"Paz"},{texto:"Tu actitud determina tu altitud.",categoria:"Motivación",tema:"Cielo"},{texto:"Dios escribe historias hermosas con finales imperfectos.",categoria:"Fe",tema:"Dulce"},{texto:"Hoy es el día perfecto para empezar de nuevo.",categoria:"Vida",tema:"Mora"}],b=()=>`
  <div class="inicio">
    <section class="hero">
      <div class="hero_contenido">
        <div class="hero_logo">
          <img src="/aver/logo.webp" alt="Awonbe Logo" />
        </div>
        <h1 class="hero_titulo">
          Frases de <span class="gradiente">Motivación</span>,<br>
          <span class="gradiente">Reflexión</span> y <span class="gradiente">Fe en Dios</span>
        </h1>
        <p class="hero_subtitulo">
          Inspírate cada día con palabras que elevan tu espíritu.<br>
          Encuentra fuerza, esperanza y sabiduría en cada frase.
        </p>
        <div class="hero_stats">
          <div class="stat"><i class="fas fa-heart"></i><span>100% Gratis</span></div>
          <div class="stat"><i class="fas fa-infinity"></i><span>Siempre Actualizado</span></div>
          <div class="stat"><i class="fas fa-palette"></i><span>5 Temas</span></div>
          <div class="stat"><i class="fas fa-share-nodes"></i><span>Comparte Fácil</span></div>
        </div>
      </div>
    </section>

    <section class="frases_seccion">
      <h2 class="seccion_titulo">
        <i class="fas fa-quote-left"></i>
        Frases que Inspiran tu Día
      </h2>
      <p class="seccion_descripcion">
        Encuentra motivación, reflexión y fe en cada palabra
      </p>
      
      <div class="frases_grid">
        ${r.map((a,t)=>`
          <div class="frase_card ${a.tema.toLowerCase()}" data-vista="frase${t}">
            <div class="frase_icono">
              <i class="fas ${a.categoria==="Fe"?"fa-hands-praying":a.categoria==="Motivación"?"fa-rocket":a.categoria==="Vida"?"fa-heart":"fa-brain"}"></i>
            </div>
            <p class="frase_texto">"${a.texto}"</p>
            <div class="frase_footer">
              <span class="frase_categoria">${a.categoria}</span>
              <div class="frase_acciones">
                <button class="btn_copiar" data-texto="${a.texto.replace(/"/g,"&quot;")}" ${s("Copiar frase")}>
                  <i class="fas fa-copy"></i>
                </button>
                <button class="btn_compartir" data-texto="${a.texto.replace(/"/g,"&quot;")}" ${s("Compartir")}>
                  <i class="fas fa-share-nodes"></i>
                </button>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    </section>

    <section class="redes_seccion">
      <h2 class="seccion_titulo">
        <i class="fas fa-users"></i>
        Síguenos en Nuestras Redes
      </h2>
      <p class="seccion_descripcion">
        Únete a nuestra comunidad y recibe frases diarias de inspiración
      </p>
      
      <div class="redes_grid">
        <a href="https://www.youtube.com/channel/UCBnyIE557egJiZszex-vURg" target="_blank" rel="noopener" class="red_card youtube" data-vista="red1" ${s("Suscríbete en YouTube")}>
          <div class="red_icono"><i class="fab fa-youtube"></i></div>
          <h3>YouTube</h3>
          <p>Videos inspiradores y motivacionales cada semana</p>
          <span class="red_seguir">Suscríbete <i class="fas fa-arrow-right"></i></span>
        </a>

        <a href="https://www.tiktok.com/@awonbe" target="_blank" rel="noopener" class="red_card tiktok" data-vista="red2" ${s("Síguenos en TikTok")}>
          <div class="red_icono"><i class="fab fa-tiktok"></i></div>
          <h3>TikTok</h3>
          <p>Frases cortas y motivadoras en video formato</p>
          <span class="red_seguir">Síguenos <i class="fas fa-arrow-right"></i></span>
        </a>

        <a href="https://www.instagram.com/awonbeee/" target="_blank" rel="noopener" class="red_card instagram" data-vista="red3" ${s("Síguenos en Instagram")}>
          <div class="red_icono"><i class="fab fa-instagram"></i></div>
          <h3>Instagram</h3>
          <p>Imágenes con frases para tu feed diario</p>
          <span class="red_seguir">Síguenos <i class="fas fa-arrow-right"></i></span>
        </a>

        <a href="https://www.facebook.com/awonbe/" target="_blank" rel="noopener" class="red_card facebook" data-vista="red4" ${s("Únete en Facebook")}>
          <div class="red_icono"><i class="fab fa-facebook"></i></div>
          <h3>Facebook</h3>
          <p>Comunidad de personas que buscan inspiración</p>
          <span class="red_seguir">Únete <i class="fas fa-arrow-right"></i></span>
        </a>
      </div>
    </section>

    <section class="sobre">
      <div class="sobre_contenido">
        <div class="sobre_texto">
          <h2 class="seccion_titulo">
            <i class="fas fa-info-circle"></i>
            ¿Qué es ${o}?
          </h2>
          <p>
            <strong>${o}</strong> es una plataforma dedicada a compartir frases de <strong>motivación</strong>, 
            <strong>reflexión</strong> y <strong>fe en Dios</strong>. Nuestro propósito es inspirar a las personas 
            cada día con palabras que elevan el espíritu y fortalecen la fe.
          </p>
          <p>
            Creemos que las palabras tienen poder para transformar vidas. Por eso, seleccionamos 
            cuidadosamente cada frase para que encuentres la inspiración que necesitas en tu día a día.
          </p>
          <div class="sobre_stats">
            <div class="sobre_stat">
              <i class="fas fa-quote-left"></i>
              <strong>+${r.length}</strong>
              <span>Frases</span>
            </div>
            <div class="sobre_stat">
              <i class="fas fa-palette"></i>
              <strong>5</strong>
              <span>Temas</span>
            </div>
            <div class="sobre_stat">
              <i class="fas fa-heart"></i>
              <strong>100%</strong>
              <span>Gratis</span>
            </div>
          </div>
        </div>
        <div class="sobre_imagen">
          <img src="/aver/logo.webp" alt="${o} - Frases Inspiradoras" />
        </div>
      </div>
    </section>

    <section class="cta_final">
      <div class="cta_contenido">
        <i class="fas fa-hands-praying cta_icono"></i>
        <h2>Comparte la Inspiración</h2>
        <p>Ayúdanos a llegar a más personas compartiendo nuestras frases en tus redes sociales</p>
        <div class="cta_redes">
          <a href="https://www.facebook.com/awonbe/" target="_blank" rel="noopener" class="cta_red facebook" ${s("Síguenos en Facebook")}>
            <i class="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/awonbeee/" target="_blank" rel="noopener" class="cta_red instagram" ${s("Síguenos en Instagram")}>
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.tiktok.com/@awonbe" target="_blank" rel="noopener" class="cta_red tiktok" ${s("Síguenos en TikTok")}>
            <i class="fab fa-tiktok"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCBnyIE557egJiZszex-vURg" target="_blank" rel="noopener" class="cta_red youtube" ${s("Suscríbete en YouTube")}>
            <i class="fab fa-youtube"></i>
          </a>
        </div>
        <p class="cta_autor">Creado con ❤️ por <a href="${c}" target="_blank" rel="noopener">${l}</a> • ${n} © ${d()}</p>
      </div>
    </section>
  </div>
`,m=()=>{[".frase_card",".red_card",".sobre_contenido"].forEach(a=>{e(a).each((t,i)=>p(i,()=>e(i).addClass("visible")))}),e(".btn_copiar").on("click",function(a){a.preventDefault();const t=e(this).data("texto");f(t,this,"¡Copiado! ✨")}),e(".btn_compartir").on("click",function(a){a.preventDefault();const i=`${e(this).data("texto")}

✨ ${o} - Frases de Motivación y Fe en Dios
🔗 https://awonbeee.web.app/`;navigator.share?navigator.share({text:i,title:`${o} - Frase Inspiradora`}).catch(()=>{}):window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(i)}`,"_blank")}),console.log(`✨ ${o} ${n} - Inicio cargado`)},h=()=>{e(".btn_copiar, .btn_compartir").off("click"),console.log("🧹 Inicio limpiado")};export{h as cleanup,m as init,b as render};
