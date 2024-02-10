c=1
function rotacion(){
 document.getElementsByClassName("slider")[0].src="img"+c+".jpg";
 document.getElementsByClassName("slider")[0].style.opacity="1"
 document.getElementsByClassName("slider")[0].style.transition="all 2s";
 c++;
 if(c>=9)c=1;
   setTimeout(rotacion2,2000);
}
rotacion();
function rotacion2(){
    document.getElementsByClassName("slider")[0].style.opacity="0"
    document.getElementsByClassName("slider")[0].style.transition="all 2s";
    setTimeout(rotacion,2000);
}
rotacion2();

window.sr =ScrollReveal();

  sr.reveal('.noso-reveal', {
    duration: 2000,
    origin: 'top',
    distance: '50px'
  });
  sr.reveal('.capa', {
    duration: 2000,
    origin: 'left',
    distance: '50px'
  });
  sr.reveal('.objetivos-1', {
    duration: 2000,
    origin: 'left',
    distance: '50px'
  });
  sr.reveal('.objetivos-2', {
    duration: 2000,
    origin: 'right',
    distance: '50px'
  });
  sr.reveal('.servi-1', {
    duration: 2000,
    origin: 'bottom',
    distance: '50px'
  });
  sr.reveal('.servi-2', {
    duration: 2500,
    origin: 'bottom',
    distance: '50px'
  });
  sr.reveal('.servi-3', {
    duration: 3000,
    origin: 'bottom',
    distance: '50px'
  });