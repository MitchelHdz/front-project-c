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