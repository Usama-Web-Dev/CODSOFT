const navbarItems = document.querySelector('.navbar-items');
const menu = document.querySelector('.menu');
const icon = document.querySelector('.menu i');
const items = document.querySelectorAll('.items')

menu.addEventListener('click', () => {
    const active = navbarItems.classList.toggle('active');
    if(active){
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    }else{
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});


window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scroll-up");
    if (this.scrollY > 500) {
      scrollUp.classList.add("show");
    } else {
      scrollUp.classList.remove("show");
    }
  });

let typed = new Typed(".typing", {
    strings: ["Front-End-Developer","Web Developer", "HTML", "CSS", "JavaScript", "ReactJS", "Responsive Designer"],
    typeSpeed: 100, // Typing speed in milliseconds
    backSpeed: 60, // Backspacing speed in milliseconds
    loop: true, // Whether to loop the animation
  });
