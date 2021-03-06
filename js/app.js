const secciones = new fullpage('#fullpage', {
    autoScrolling: true,
	fitToSection: false,
	fitToSectionDelay: 300,
	easing: 'easeInOutCubic',
	scrollingSpeed: 700,
	css3: true,
	easingcss3: 'ease-out',
    loopBottom: false,

    navigation: true,
    menu: '#menu',
	anchors: ['inicio', 'paisajes', 'contacto'],
	navigationTooltips: ['INICIO', 'PAISAJES', 'CONTACTO'],
	showActiveTooltip: false,

	sectionsColor : ['#000', '#c2c2c2', '#000'],
	verticalCentered: true,

	controlArrows: true,
	slidesNavigation: true,

	afterLoad: function(origin, destination){
		if(destination.anchor == 'contacto')
		document.querySelector('.footer').querySelector('h2').style.opacity = 1;
	
	}
});