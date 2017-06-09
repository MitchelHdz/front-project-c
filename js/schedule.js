jQuery(document).ready(function() { 
    var dates = ['22/5/2017', '25/5/2017', '29/5/2017', '13/5/2017', '17/5/2017']; //
    //tips are optional but good to have
    var tips  = ['some description','some other description'];      

    $('#datepicker').datepicker({                
      dateFormat: 'dd/mm/yy',
      beforeShowDay: highlightDays
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
    $('.scheduled-date').on('click', function(event) {
      $('.orange-info-container').addClass('active');
      $('.schedule-address-container').addClass('active');
    });
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
var modal = document.getElementById('alertModal');
var cancelModal = document.getElementById('cancelModal');
// Get the button that opens the modal
var btn = document.getElementById("cancelSchedule");
var confirmCancelBtn = document.getElementById("confirmCancelBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var closeCancel = document.getElementById("closeCancel");
var body = document.getElementById('body');
// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.classList.add('modal-open');
  body.classList.add('modal-open');

}
confirmCancelBtn.onclick = function() {
  modal.classList.remove('modal-open');
  cancelModal.classList.add('modal-open');
  body.classList.add('modal-open');

}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.classList.remove('modal-open');
  body.classList.remove('modal-open');
}
closeCancel.onclick = function() {
  cancelModal.classList.remove('modal-open');
  body.classList.remove('modal-open');
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal || event.target == cancelModal) {
    modal.classList.remove('modal-open');
    cancelModal.classList.remove('modal-open');
    body.classList.remove('modal-open');
  }
}


