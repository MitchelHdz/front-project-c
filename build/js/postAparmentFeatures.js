var switchOptions = document.getElementsByClassName("switch-option");
var toggleSwitchOption = function() {
	if(this.classList.contains('switch-yes-box')){
		if(this.classList.contains('active')){
			this.classList.remove('active');
			var noSwitch = document.getElementById("switch-no");
			noSwitch.classList.add('active');
		}
		else{
			this.classList.add('active');
			var noSwitch = document.getElementById("switch-no");
			noSwitch.classList.remove('active');
		}
	}
	else if (this.classList.contains('switch-no-box')){
		if(this.classList.contains('active')){
			this.classList.remove('active');
			var noSwitch = document.getElementById("switch-yes");
			noSwitch.classList.add('active');
		}
		else{
			this.classList.add('active');
			var noSwitch = document.getElementById("switch-yes");
			noSwitch.classList.remove('active');
		}
	}
};
for (var i = 0; i < switchOptions.length; i++) {
	switchOptions[i].addEventListener('click', toggleSwitchOption, false);
}
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

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		alertModal.classList.remove('modal-open');
		body.classList.remove('modal-open');
	}
}