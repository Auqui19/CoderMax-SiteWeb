var lastScrollTop = 0;
    navbar = document.getElementById('navbar');
window.addEventListener('scroll', function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        navbar.style.top="-80px";
    } else {
        navbar.style.top="0";
    }
    lastScrollTop  = scrollTop;
})

window.sr =ScrollReveal();

  sr.reveal('.h1-reveal', {
      duration: 2000,
      origin: 'top',
      distance: '50px'
  });
  sr.reveal('.banner-img', {
    duration: 2000,
    origin: 'left',
    distance: '50px'
});
sr.reveal('.banner-text', {
    duration: 2000,
    origin: 'right',
    distance: '50px'
});
sr.reveal('.noticia1', {
    duration: 2000,
    origin: 'left',
    distance: '50px'
});
sr.reveal('.noti-0', {
    duration: 2000,
    origin: 'right',
    distance: '50px'
});
sr.reveal('.noti-1', {
    duration: 2000,
    origin: 'bottom',
    distance: '50px'
});
sr.reveal('.noti-2', {
    duration: 2500,
    origin: 'bottom',
    distance: '50px'
});
sr.reveal('.noti-3', {
    duration: 3000,
    origin: 'bottom',
    distance: '50px'
});
sr.reveal('.nove-1', {
    duration: 3000,
    origin: 'left',
    distance: '50px'
});