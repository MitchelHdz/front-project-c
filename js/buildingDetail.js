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
	if (event.target == modal) {
		galleryModal.classList.remove('modal-open');
		body.classList.remove('modal-open');
	}
}