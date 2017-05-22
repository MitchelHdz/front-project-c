var iconHeartDetail = document.getElementsByClassName("icon-love-detail");

var toggleFavDetail = function() {
   if(this.classList.contains('fa-heart-o')){
		this.classList.add('fa-heart');
		this.classList.remove('fa-heart-o');
	}
	else if (this.classList.contains('fa-heart')){
		this.classList.add('fa-heart-o');
		this.classList.remove('fa-heart');
	}
};
for (var i = 0; i < iconHeartDetail.length; i++) {
    iconHeartDetail[i].addEventListener('click', toggleFavDetail, false);
}
// Get the modal
var galleryModal = document.getElementById('galleryModal');

// Get the button that opens the modal
var galleryBtns = document.getElementsByClassName("openGalleryModal");
var galleryImage = document.getElementById("galleryImage");
var leftArrow = document.getElementById("arrow-left");
var rightArrow = document.getElementById("arrow-right");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var body = document.getElementById('body');
// When the user clicks on the button, open the modal 
function openGallery() {
	var gallerySrc = this.getAttribute("imageSrc");
	galleryModal.classList.add('modal-open');
	galleryImage.src=gallerySrc;
	body.classList.add('modal-open');

}
function carousel(arrow) {
	var carousel = document.getElementsByClassName('image-gallery');
	var carouselBox = document.getElementById('carouselBox');
	for (var i = 0; i < carousel.length; i++) {
		if (galleryImage.getAttribute("src") == carousel[i].getAttribute("imageSrc")){
			if(arrow.getAttribute('id') == 'arrow-left'){
				if((i - 1) < 0){
					image = carouselBox.lastElementChild;
					galleryImage.src= image.getAttribute("imageSrc");
					break;
				}
				else{
					galleryImage.src= carousel[i - 1].getAttribute("imageSrc");
					break;
				}
			}
			else if(arrow.getAttribute('id') == 'arrow-right'){
				if((i + 1) == carousel.length){
					image = carouselBox.children[0];
					galleryImage.src= image.getAttribute("imageSrc");
					break;
				}
				else{
					galleryImage.src = carousel[i + 1].getAttribute("imageSrc");
					break;
				}
			}
		}
	}
}
leftArrow.onclick = function() {
	carousel(this);
}
rightArrow.onclick = function() {
	carousel(this);
}
for (var i = 0; i < galleryBtns.length; i++) {
    galleryBtns[i].addEventListener('click', openGallery, false);
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	galleryModal.classList.remove('modal-open');
	body.classList.remove('modal-open');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == galleryModal) {
		galleryModal.classList.remove('modal-open');
		body.classList.remove('modal-open');
	}
}
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
var build = getUrlVars()["build"];
$.ajax({
        url : 'https://demo6292426.mockable.io/c-properties',
        type: "GET",
        dataType: 'json',
        success:function(data) {
            $('.building-street-text').text(data.Propiedades[build].calle);
            $('.building-place-text').text(data.Propiedades[build].colonia);
            $('.building-price-text').text(data.Propiedades[build].precio.substring(1, 4) + ' MDP');
            $('.building-full-address-text').text(data.Propiedades[build].calle + ' Colonia ' + data.Propiedades[build].colonia + ' ' + data.Propiedades[build].estado + ' ' + data.Propiedades[build].pais);
        	$('.building-feature-text.meters').text(data.Propiedades[build].metrosCuadrados + ' m2');
        	$('.building-feature-text.rooms').text(data.Propiedades[build].cuartos + ' cuartos');
        	$('.building-feature-text.toilets').text(data.Propiedades[build].toilets + ' baños');
        	$('.building-feature-text.places').text(data.Propiedades[build].PisoEnElQueSeEncuentra + ' espacios');
        	$('.building-about-text').text(data.Propiedades[build].descripción);
        }
      });
jQuery(document).ready(function() { 
    var dates = ['22/4/2017', '25/4/2017', '29/4/2017', '13/4/2017', '17/4/2017']; //
            //tips are optional but good to have
    var tips  = ['some description','some other description'];      

    $('#datepicker').datepicker({                
        dateFormat: 'dd/mm/yy'
    });

    function highlightDays(date) {
        var m = date.getMonth();
        var d = date.getDate();
        var y = date.getFullYear();
        var calendarDate = d + '/' + m + '/' + y;
        for (var i = 0; i < dates.length; i++) {
            if (dates[i].toString() == calendarDate.toString()) {              
                return [true, 'scheduled-date', tips[i]];
            }
        }
        return [false, ''];
     } 
});
$.datepicker.regional['es'] = {
    closeText: 'Cerrar',
    prevText: '<',
    nextText: '>',
    currentText: 'Hoy',
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
    dayNamesMin: ['D','L','M','M','J','V','S'],
    weekHeader: 'Sm',
    dateFormat: 'yy/mm/d',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
  };
  $.datepicker.setDefaults($.datepicker.regional['es']);
  // Get the modal
var scheduleModal = document.getElementById('scheduleModal');

// Get the button that opens the modal
var btn = document.getElementById("openModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var body = document.getElementById('body');
// When the user clicks on the button, open the modal 
btn.onclick = function() {
  scheduleModal.classList.add('modal-open');
  body.classList.add('modal-open');
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  scheduleModal.classList.remove('modal-open');
  body.classList.remove('modal-open');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == scheduleModal) {
    scheduleModal.classList.remove('modal-open');
    body.classList.remove('modal-open');
  }
}
$('body').addClass('onload');
