$(document).ready(function(){

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('encabezado').addClass('encabezado2');
		} else {
			$('encabezado').removeClass('encabezado2');
		}
	});

});