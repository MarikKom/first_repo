const btn = document.querySelector('.header-btn');
const nav = document.querySelector('.header__nav');

btn.addEventListener('click', ()=>{
 nav.classList.toggle('menu_open');
} );