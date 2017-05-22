// Get the modal
var alertModal = document.getElementById('alertModal');

// Get the button that opens the modal
var openModal = document.getElementById("openModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var body = document.getElementById('body');
// When the user clicks on the button, open the modal 
openModal.onclick = function() {
	alertModal.classList.add('modal-open');
	console.log(body);
	body.classList.add('modal-open');
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	alertModal.classList.remove('modal-open');
	body.classList.remove('modal-open');
}