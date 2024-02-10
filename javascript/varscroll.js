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

  sr.reveal('.link-banner', {
      duration: 2000,
      origin: 'top',
      distance: '50px'
  });
  sr.reveal('.icon1', {
    duration: 1300,
    origin: 'bottom',
    distance: '50px'
  });
  sr.reveal('.icon2', {
    duration: 1500,
    origin: 'bottom',
    distance: '50px'
  });
  sr.reveal('.icon3', {
    duration: 2000,
    origin: 'bottom',
    distance: '50px'
  });
  sr.reveal('.icon4', {
    duration: 2500,
    origin: 'bottom',
    distance: '50px'
  });
  sr.reveal('.icon5', {
    duration: 2700,
    origin: 'bottom',
    distance: '50px'
  });
  sr.reveal('.icon6', {
    duration: 2900,
    origin: 'bottom',
    distance: '50px'
  });
  sr.reveal('.icon7', {
    duration: 3500,
    origin: 'bottom',
    distance: '50px'
  });
  sr.reveal('.icon8', {
    duration: 4500,
    origin: 'bottom',
    distance: '50px'
  });

  sr.reveal('.card-1hijo1', {
    duration: 2000,
    origin: 'left',
    distance: '60px'
  });
  sr.reveal('.card-1hijo2', {
    duration: 2000,
    origin: 'bottom',
    distance: '60px'
  });
  sr.reveal('.card-2', {
    duration: 2000,
    origin: 'right',
    distance: '50px'
  });
  sr.reveal('.companeros', {
    duration: 2000,
    origin: 'left',
    distance: '50px'
  });

  sr.reveal('.beca-1', {
    duration: 2000,
    origin: 'bottom',
    distance: '50px'
  });

  sr.reveal('.usu-1', {
    duration: 2000,
    origin: 'left',
    distance: '50px'
  });
  sr.reveal('.usu-2', {
    duration: 2000,
    origin: 'top',
    distance: '50px'
  });
  sr.reveal('.usu-3', {
    duration: 2000,
    origin: 'bottom',
    distance: '50px'
  });
  sr.reveal('.usu-4', {
    duration: 2000,
    origin: 'right',
    distance: '50px'
  });

  sr.reveal('.frecu-1', {
    duration: 2000,
    origin: 'right',
    distance: '50px'
  });

  sr.reveal('.frecu-2', {
    duration: 3000,
    origin: 'left',
    distance: '50px'
  });

  sr.reveal('.frecu-3', {
    duration: 4000,
    origin: 'right',
    distance: '50px'
  });
 

const typed = new Typed('.typed', {
    strings : ['Javascript','PHP','SQL','ReactJS','Java','Python','jQuery','Angular','Node.js'],
    typeSpeed : 75,
    starDelay : 300,
    backSpeed : 75,
    smartBackspace : true,
    shuffle : false,
    backDelay : 1500,
    loop : true,
    loopCount : false,
    showCursor : true,
    cursorChar : '|',
    contentType : 'html',
});

Swal.fire({
	// title:
	// text:
	html: '<b>⚡ CoderPromo ⚡ Aprovecha 50% OFF en nuestros cursos ⏰ Último día ⏰</b>',
	// icon:
	//confirmButtonText: 'ok',
	// footer:
	width: '33%',
	padding: '5px',
	// background:
	grow: false,
	backdrop: false,
	timer: '10000',
	timerProgressBar: true,
	toast: true,
	position: 'bottom-end',
	allowOutsideClick: false,
	allowEscapeKey: false,
	// allowEnterKey:
	stopKeydownPropagation: false,

	// input:
	// inputPlaceholder:
	// inputValue:
	// inputOptions:
	
	//  customClass:
	// 	container:
	// 	popup:
	// 	header:
	// 	title:
	// 	closeButton:
	// 	icon:
	// 	image:
	// 	content:
	// 	input:
	// 	actions:
	// 	confirmButton:
	// 	cancelButton:
	// 	footer:	

	showConfirmButton: false,
	// confirmButtonColor:
	// confirmButtonAriaLabel:

	showCancelButton: false,
	// cancelButtonText:
	// cancelButtonColor:
	// cancelButtonAriaLabel:
	
	// buttonsStyling:
	// showCloseButton:
	// closeButtonAriaLabel:


	// imageUrl:
	// imageWidth:
	// imageHeight:
	// imageAlt:
});

