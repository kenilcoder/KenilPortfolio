
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



/*------------------------------------ sticky navbar-------------------------------------*/
window.onscroll = () => {
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};

/*--------------------------------------scroll revel ------------------------------------*/
ScrollReveal({ 
    reset: true ,
    distance: '80px',
    duration: 2000,
    deley: 200
});

ScrollReveal().reveal('.header-text,.heading,h1,h3', { origin: 'top' });
ScrollReveal().reveal('.home-col-1,.services-container,form', { origin: 'bottom' });
ScrollReveal().reveal('.about-col-1,.line', { origin: 'left' });
