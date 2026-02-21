import $ from 'jquery';
import { rutas } from './rutas/ruta.js';
import { getls, wiSmart } from './widev.js';

  ['inicio','youtube','tiktok','instagram','facebook','herramientas','acerca'].forEach(pg => rutas.register(`/${pg}`, () => import(`./web/${pg}.js`)));
  // ['descubre','login'].forEach(pg => rutas.register(`/${pg}`, () => import(`./smile/${pg}.js`)));
  // rutas.register('/smile', () => getls('wiSmile') ? import('./smile/smile.js') : import('./smile/descubre.js'));
  // import('./header.js');
  rutas.init();


  wiSmart({
    css: [
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css',
        'https://fonts.googleapis.com/css2?family=Rubik:wght@300..900&display=swap',
        'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap',
        'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap',
    ],
    js: [() => import('./footer.js')]
  });