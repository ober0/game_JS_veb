function os1() {
  window.location.href = '../html/reg.html';
}

function os2() {
  window.location.href = '../html/vhod.html';
}



function registr_end() {
  var login = document.getElementById('login1').value;
  var pass = document.getElementById('pass1').value;
  localStorage.setItem('login', login);
  localStorage.setItem('password', pass);
  window.location.href = '../html/games_page.html';
}
