'use strict'

let y
let x = 0
let login
let password1
let password2
let password
let your_login
let your_password
let autorize = 0
var aut
var s = 1
var accounte

// function as1(){
//   alert('Если у вас есть другой аккаунт - он удалится!')
//   login = prompt('Введите ваш логин', '');
//   password1 = prompt('Введите ваш пароль', '');
//   password2 = prompt('Повторите пароль', '')
//
//   while (x == 0) {
//     if (password1 == password2)  {
//       password = password1
//       x = 1
//       alert('Регистрация успешна!')
//       localStorage.setItem('login1', login)
//       localStorage.setItem('password1', password)
//
//     } else {
//         password2 = prompt('Не верно. Повторите пароль', '')
//     }
//   }
//
// }

function os4() {
  login = localStorage.getItem('login');
  password = localStorage.getItem('password');
  var ur_login = document.getElementById('vhod_login').value;
  var ur_password = document.getElementById('vhod_password').value;
  if (ur_login == login && ur_password == password) {
    document.getElementById('vhod_sucsess').style.display = 'block'
    document.getElementById("exit").style.display = "block";
    document.getElementById("reg").style.display = "none";
    document.getElementById("vhod").style.display = "none";
    document.getElementById('ur_name').innerHTML = ur_login;
    document.getElementById("ur_name").style.display = "block";
    document.getElementById("avatar").style.display = "block";
    setTimeout(function(){ document.getElementById("vhod_tem").style.display='none';},2000);
    accounte = localStorage.setItem('ur_login', ur_login)
    autorize = 1
  }
}


function as2() {
  if (s == 1) {
    document.getElementById('vhod_tem').style.display='block';
    s = 2
  } else{
    document.getElementById('vhod_tem').style.display='none';
    s = 1
  }


//   login = localStorage.getItem('login')
//   password = localStorage.getItem('password')
//   your_login = prompt('Введите логин', '')
//   if (your_login == login) {
//     your_password = prompt('Введите пароль', '')
//     if (your_password == password) {
//       y = 1
//       alert(`Вы успешно вошли в аккаунт ${login}`)
//       document.getElementById("exit").style.display = "block";
//       document.getElementById("reg").style.display = "none";
//       document.getElementById("vhod").style.display = "none";
//       document.getElementById('ur_name').innerHTML = your_login;
//       document.getElementById("ur_name").style.display = "block";
//       document.getElementById("avatar").style.display = "block";
//     } else{
//       alert('Не верный пароль')
//     }
//   } else {
//     alert('Не верный логин')
//   }
};

function as3() {
  document.getElementById("exit").style.display = "none";
  document.getElementById("reg").style.display = "block";
  document.getElementById("vhod").style.display = "block";
  document.getElementById("vhod").style.position = "relative";
  document.getElementById("vhod").style.left = "1720px";
  document.getElementById("vhod").style.bottom = "210px";
  document.getElementById("ur_name").style.display = "none";
  document.getElementById("avatar").style.display  = "none";
  autorize = 0

}

function obsuj() {
  if (autorize == 1){
    window.location.href = '../html/pusto.html';
  } else{
    alert('Сначало авторизуйтесь')
  }
}

function forum() {
  if (autorize == 1){
    window.location.href = '../html/pusto.html';
  } else{
    alert('Сначало авторизуйтесь')
  }
}
