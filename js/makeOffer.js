// Get the modal
var modal = document.getElementById('alertModal');

// Get the button that opens the modal
var offerBtn = document.getElementById("offerButton");
var closeItBtn = document.getElementById("closeItButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
offerBtn.onclick = function() {
    modal.style.display = "block";
}
closeItBtn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
document.getElementById('withGrey').addEventListener('click', function () {
	if (this.classList.contains('active')) {
		document.getElementById('withoutGrey').classList.remove('active');
	} else {
		this.classList.add('active');
		document.getElementById('withoutGrey').classList.remove('active');
	}
});
document.getElementById('withoutGrey').addEventListener('click', function () {
	if (this.classList.contains('active')) {
		document.getElementById('withGrey').classList.remove('active');
	} else {
		this.classList.add('active');
		document.getElementById('withGrey').classList.remove('active');
	}
});
document.getElementById('withWhite').addEventListener('click', function () {
	if (this.classList.contains('active')) {
		document.getElementById('withoutWhite').classList.remove('active');
	} else {
		this.classList.add('active');
		document.getElementById('withoutWhite').classList.remove('active');
	}
});
document.getElementById('withoutWhite').addEventListener('click', function () {
	if (this.classList.contains('active')) {
		document.getElementById('withWhite').classList.remove('active');
	} else {
		this.classList.add('active');
		document.getElementById('withWhite').classList.remove('active');
	}
});