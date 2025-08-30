import $ from 'jquery';
import '@fortawesome/fontawesome-free/css/all.min.css';

$(document).click(function(){

  alert('Hola mundo aver')

});

const mthemas=[{tnm:"Cielo",co:"#0EBEFF"},{tnm:"Dulce",co:"#FF5C69"},{tnm:"Paz",co:"#29C72E"},{tnm:"Mora",co:"#7000FF"},{tnm:"Futuro",co:"#21073B"}];const thcon=document.createElement('div');thcon.className='mthemes';mthemas.forEach(({tnm,co})=>{const tdv=document.createElement('div');tdv.className='tema';tdv.dataset.tema=`${tnm}|${co}`;tdv.style.background=co;tdv.onclick=()=>mithm(tdv);thcon.appendChild(tdv);});document.body.appendChild(thcon);const mithm=e=>{const [th,tco]=e.dataset.tema.split('|');document.documentElement.dataset.theme=th;(document.querySelector('meta[name="theme-color"]')||Object.assign(document.head.appendChild(document.createElement('meta')),{name:'theme-color'})).content=tco;localStorage.mtheme=e.dataset.tema;document.querySelector('.mtha')?.classList.remove('mtha');e.classList.add('mtha');};const thsved=document.querySelector(`[data-tema="${localStorage.mtheme}"]`)||thcon.firstChild;if(thsved)mithm(thsved);