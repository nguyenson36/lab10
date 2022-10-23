var btnLogin = document.querySelector('.show-login');
var btnClose = document.querySelector('.btn-close');
var Login = document.querySelector('.login');
var LoginBackground = document.querySelector('#login-container');
console.log(btnLogin);
// show login
btnLogin.onclick = () => {
    Login.style.display = "block";
    LoginBackground.style.display = "block"; 
}
console.log(btnClose)
// hide login
btnClose.onclick = () => {
    Login.style.display = "none";
    LoginBackground.style.display = "none"; 
}