var switchOptions = document.getElementsByClassName("structure-domain-btn");
var toggleSwitchOption = function() {
   if(this.classList.contains('with-domain-box')){
		if(this.classList.contains('active')){
			this.classList.remove('active');
			var noSwitch = document.getElementById("withoutGrey");
			noSwitch.classList.add('active');
		}
		else{
			this.classList.add('active');
			var noSwitch = document.getElementById("withoutGrey");
			noSwitch.classList.remove('active');
		}
	}
	else if (this.classList.contains('without-domain-box')){
		if(this.classList.contains('active')){
			this.classList.remove('active');
			var noSwitch = document.getElementById("withGrey");
			noSwitch.classList.add('active');
		}
		else{
			this.classList.add('active');
			var noSwitch = document.getElementById("withGrey");
			noSwitch.classList.remove('active');
		}
	}
};
for (var i = 0; i < switchOptions.length; i++) {
    switchOptions[i].addEventListener('click', toggleSwitchOption, false);
}