/*const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");


registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});
loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup'); 
});
iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});*/



const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
    wrapper.classList.remove('active-popup'); // Fecha o popup se já estiver aberto
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
    wrapper.classList.remove('active-popup'); // Fecha o popup se já estiver aberto
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active'); // Fecha o popup de registro, se estiver aberto
});
