const button = document.querySelector('.hamburger');
const menu = document.querySelector('.mobile__menu');


button.addEventListener('click', ()=>{
    menu.classList.toggle('show__menu')
})
