import{$ as e,c as m,w as n,d as u,N as f}from"./main-DMPAOxqa.js";import"./main-DDZ6q5NX.js";import"./vendor-BwXq8HW-.js";const s=[{id:"claude",nombre:"Claude AI",descripcion:"Asistente de IA avanzado para escritura, código y creatividad",icono:"fa-brain",color:"Cielo",tipo:"ia",url:"https://claude.ai",caracteristicas:["Escritura creativa","Análisis de datos","Código","Resúmenes"],gratis:!1,premium:!0},{id:"chatgpt",nombre:"ChatGPT",descripcion:"Chat inteligente para generar textos, ideas y resolver problemas",icono:"fa-comment-dots",color:"Paz",tipo:"ia",url:"https://chat.openai.com",caracteristicas:["Conversación natural","Generación de textos","Búsqueda","Creatividad"],gratis:!0,premium:!0},{id:"gemini",nombre:"Google Gemini",descripcion:"IA multimodal de Google para textos, imágenes y más",icono:"fa-sparkles",color:"Dulce",tipo:"ia",url:"https://gemini.google.com",caracteristicas:["Multimodal","Análisis de imágenes","Investigación","Productividad"],gratis:!0,premium:!0},{id:"canva",nombre:"Canva",descripcion:"Diseño gráfico profesional sin experiencia previa",icono:"fa-palette",color:"Mora",tipo:"diseño",url:"https://www.canva.com",caracteristicas:["Templates","Edición de fotos","Videos","Logos"],gratis:!0,premium:!0},{id:"figma",nombre:"Figma",descripcion:"Diseño de interfaces y prototipos colaborativos",icono:"fa-pen-nib",color:"Cielo",tipo:"diseño",url:"https://www.figma.com",caracteristicas:["UI/UX","Colaboración","Prototipos","Componentes"],gratis:!0,premium:!0},{id:"midjourney",nombre:"Midjourney",descripcion:"Generación de imágenes con IA de alta calidad",icono:"fa-image",color:"Dulce",tipo:"imagen",url:"https://www.midjourney.com",caracteristicas:["Arte IA","Estilos variados","Alta resolución","Creativo"],gratis:!1,premium:!0},{id:"dalle",nombre:"DALL-E 3",descripcion:"Crea imágenes desde descripciones de texto",icono:"fa-images",color:"Paz",tipo:"imagen",url:"https://labs.openai.com",caracteristicas:["Generación de imágenes","Edición IA","Variaciones","Realista"],gratis:!1,premium:!0},{id:"elevenlabs",nombre:"ElevenLabs",descripcion:"Generación de voz natural con IA",icono:"fa-microphone",color:"Cielo",tipo:"audio",url:"https://elevenlabs.io",caracteristicas:["Voces realistas","Múltiples idiomas","Clonación de voz","API"],gratis:!0,premium:!0},{id:"runway",nombre:"Runway ML",descripcion:"Edición de videos con IA avanzada",icono:"fa-film",color:"Mora",tipo:"video",url:"https://runwayml.com",caracteristicas:["Edición IA","Efectos","Generación video","Green screen"],gratis:!0,premium:!0},{id:"capcut",nombre:"CapCut",descripcion:"Editor de video todo-en-uno para creadores",icono:"fa-video",color:"Dulce",tipo:"video",url:"https://www.capcut.com",caracteristicas:["Edición fácil","Efectos","Subtítulos auto","Música"],gratis:!0,premium:!0},{id:"grammarly",nombre:"Grammarly",descripcion:"Asistente de escritura con corrección y estilo",icono:"fa-pen",color:"Paz",tipo:"escritura",url:"https://www.grammarly.com",caracteristicas:["Corrección","Estilo","Tono","Plagio"],gratis:!0,premium:!0},{id:"notion",nombre:"Notion AI",descripcion:"Organización y escritura potenciada con IA",icono:"fa-file-lines",color:"Cielo",tipo:"productividad",url:"https://www.notion.so",caracteristicas:["Notas","Bases de datos","IA integrada","Colaboración"],gratis:!0,premium:!0},{id:"obsidian",nombre:"Obsidian",descripcion:"Base de conocimientos personal potente",icono:"fa-brain",color:"Mora",tipo:"productividad",url:"https://obsidian.md",caracteristicas:["Markdown","Grafos","Plugins","Local"],gratis:!0,premium:!0},{id:"gamma",nombre:"Gamma",descripcion:"Crea presentaciones hermosas con IA",icono:"fa-presentation-screen",color:"Dulce",tipo:"diseño",url:"https://gamma.app",caracteristicas:["Presentaciones IA","Templates","Interactivo","Rápido"],gratis:!0,premium:!0},{id:"removebg",nombre:"Remove.bg",descripcion:"Elimina fondos de imágenes automáticamente",icono:"fa-scissors",color:"Paz",tipo:"imagen",url:"https://www.remove.bg",caracteristicas:["Fondo transparente","Alta calidad","API","Batch"],gratis:!0,premium:!0},{id:"loom",nombre:"Loom",descripcion:"Graba y comparte videos de pantalla fácilmente",icono:"fa-circle-dot",color:"Cielo",tipo:"video",url:"https://www.loom.com",caracteristicas:["Screen recording","Webcam","Compartir","Edición"],gratis:!0,premium:!0}],g=[{id:"todos",nombre:"Todas",icono:"fa-globe"},{id:"ia",nombre:"Inteligencia Artificial",icono:"fa-brain"},{id:"diseño",nombre:"Diseño Gráfico",icono:"fa-palette"},{id:"imagen",nombre:"Imágenes",icono:"fa-image"},{id:"video",nombre:"Video",icono:"fa-film"},{id:"audio",nombre:"Audio",icono:"fa-headphones"},{id:"escritura",nombre:"Escritura",icono:"fa-pen"},{id:"productividad",nombre:"Productividad",icono:"fa-chart-line"}];let o="todos",r="";const h=()=>`
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
          <span><strong>${s.length}</strong> Herramientas</span>
        </div>
        <div class="herr_stat">
          <i class="fas fa-star"></i>
          <span><strong>${s.filter(i=>i.gratis).length}</strong> Gratis</span>
        </div>
        <div class="herr_stat">
          <i class="fas fa-crown"></i>
          <span><strong>${s.filter(i=>i.premium).length}</strong> Premium</span>
        </div>
      </div>
    </div>
  </section>
`,v=()=>`
  <section class="herr_categorias">
    <div class="categorias_scroll">
      ${g.map(i=>`
        <button 
          class="categoria_btn ${i.id===o?"active":""}" 
          data-categoria="${i.id}"
        >
          <i class="fas ${i.icono}"></i>
          <span>${i.nombre}</span>
        </button>
      `).join("")}
    </div>
  </section>
`,d=()=>`
  <section class="herr_busqueda">
    <div class="busqueda_contenedor">
      <i class="fas fa-search"></i>
      <input 
        type="text" 
        id="buscarHerramienta" 
        placeholder="Buscar herramientas..." 
        value="${r}"
      >
      ${r?'<button class="btn_limpiar" id="limpiarBusqueda"><i class="fas fa-times"></i></button>':""}
    </div>
  </section>
`,l=()=>{const i=s.filter(a=>{const t=o==="todos"||a.tipo===o,p=!r||a.nombre.toLowerCase().includes(r.toLowerCase())||a.descripcion.toLowerCase().includes(r.toLowerCase());return t&&p});return i.length===0?`
      <section class="herr_vacio">
        <i class="fas fa-search"></i>
        <h3>No se encontraron herramientas</h3>
        <p>Intenta con otra búsqueda o categoría</p>
      </section>
    `:`
    <section class="herr_grid">
      ${i.map(a=>`
        <article class="herr_card ${a.color.toLowerCase()}" data-herramienta="${a.id}">
          <div class="herr_card_header">
            <div class="herr_icono">
              <i class="fas ${a.icono}"></i>
            </div>
            <div class="herr_badges">
              ${a.gratis?'<span class="badge badge_gratis"><i class="fas fa-check"></i> Gratis</span>':""}
              ${a.premium?'<span class="badge badge_premium"><i class="fas fa-crown"></i> Premium</span>':""}
            </div>
          </div>
          <h3>${a.nombre}</h3>
          <p class="herr_descripcion">${a.descripcion}</p>
          <div class="herr_caracteristicas">
            ${a.caracteristicas.slice(0,3).map(t=>`
              <span class="caracteristica">
                <i class="fas fa-check-circle"></i> ${t}
              </span>
            `).join("")}
          </div>
          <div class="herr_acciones">
            <a href="${a.url}" target="_blank" rel="noopener" class="btn_abrir">
              <i class="fas fa-external-link"></i>
              <span>Abrir</span>
            </a>
            <button class="btn_copiar" data-url="${a.url}" ${n("Copiar enlace")}>
              <i class="fas fa-copy"></i>
            </button>
            <button class="btn_favorito" data-id="${a.id}" ${n("Guardar en favoritos")}>
              <i class="far fa-heart"></i>
            </button>
          </div>
        </article>
      `).join("")}
    </section>
  `},b=()=>`
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
`,_=()=>{e("#wimain").html(`
    <div class="herramientas">
      ${h()}
      ${v()}
      ${d()}
      ${l()}
      ${b()}
    </div>
  `),setTimeout(()=>{e(".herr_hero_contenido").addClass("visible"),e(".herr_card").each((i,a)=>{setTimeout(()=>e(a).addClass("visible"),i*50)})},100),m(".herr_tips",()=>e(".tip_card").each((i,a)=>{setTimeout(()=>e(a).addClass("visible"),i*100)})),C()},C=()=>{e(document).on("click",".categoria_btn",function(){o=e(this).data("categoria"),e(".categoria_btn").removeClass("active"),e(this).addClass("active"),c()}),e(document).on("input","#buscarHerramienta",function(){r=e(this).val().trim(),c()}),e(document).on("click","#limpiarBusqueda",()=>{r="",e("#buscarHerramienta").val(""),c()}),e(document).on("click",".btn_copiar",function(){const i=e(this).data("url");u(i,this,"¡Enlace copiado!")}),e(document).on("click",".btn_favorito",function(){const i=e(this).find("i"),a=i.hasClass("fas");i.toggleClass("far fas"),f(a?"Eliminado de favoritos":"Agregado a favoritos",a?"info":"success",2e3)})},c=()=>{e(".herr_busqueda").replaceWith(d()),e(".herr_grid, .herr_vacio").replaceWith(l()),setTimeout(()=>{e(".herr_card").each((i,a)=>{setTimeout(()=>e(a).addClass("visible"),i*50)})},50)};_();export{_ as render};
