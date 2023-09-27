const navitems = document.querySelector('.nav-items')
const menu = document.querySelector('.menu');

menu.addEventListener('click',()=>{
    navitems.classList.toggle('active');
    menu.classList.toggle('active');
})