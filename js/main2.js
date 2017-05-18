$(document).ready(function () {
  $('#menuButton').click(function () {
    $('#menu').toggleClass('open');
  });
  $('#menuList').click(function () {
    $('#menu').toggleClass('open');
  });
});
var pokaz = document.getElementById('showButton');
pokaz.addEventListener('click', function () {
  var wojewodztwo = document.getElementById('wojewodztwo').value;
  var wojewodztwo2 = document.getElementById('wojewodztwo2');
  wojewodztwo2.textContent = wojewodztwo;
  var rynek = document.getElementById('rynek').value;
  var rynek2 = document.getElementById('rynek2');
  rynek2.textContent = rynek;
  var powierzchnia = document.getElementById('powierzchnia').value;
  var powierzchnia2 = document.getElementById('powierzchnia2');
  powierzchnia2.textContent = powierzchnia;
  var powiat = document.getElementById('powiat').value;
  var powiat2 = document.getElementById('powiat2');
  powiat2.textContent = powiat;
  var miejscowosc = document.getElementById('miejscowosc').value;
  var miejscowosc2 = document.getElementById('miejscowosc2');
  miejscowosc2.textContent = miejscowosc;
  var dzielnica = document.getElementById('dzielnica').value;
  var dzielnica2 = document.getElementById('dzielnica2');
  dzielnica2.textContent = dzielnica;
});