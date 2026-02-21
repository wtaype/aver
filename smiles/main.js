import $ from 'jquery';
import { getls } from './widev.js';
import { rutas } from './rutas/ruta.js';

  ['inicio','youtube','tiktok','instagram','facebook','herramientas','acerca'].forEach(pg => rutas.register(`/${pg}`, () => import(`./web/${pg}.js`)));
  // ['descubre','login'].forEach(pg => rutas.register(`/${pg}`, () => import(`./smile/${pg}.js`)));
  // rutas.register('/smile', () => getls('wiSmile') ? import('./smile/smile.js') : import('./smile/descubre.js'));
  import('./header.js'); import('./footer.js')
  rutas.init();
