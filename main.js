import $ from 'jquery';
import '@fortawesome/fontawesome-free/css/all.min.css';
 
  const params = new URLSearchParams(location.search);
  $('.para').text(params.get('para'));
  $('.de').text(params.get('de'));