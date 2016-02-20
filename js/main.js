var link = document.querySelector(".contacts-btn");
var feedback = document.querySelector(".form-feedback");
var close = document.querySelector(".close");
var form = feedback.querySelector("form");
var userName = feedback.querySelector("#us-nam");

link.addEventListener("click", function(event) {
	event.preventDefault();
	feedback.classList.add("opener");
	userName.focus();
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	feedback.classList.remove("opener");
});

form.addEventListener("submit", function(event) {
	if (!userName.value || !email.value) {
		event.preventDefault();	
	} else {
		localStorage("userName", userName.value);
	}
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (feedback.classList.contains("opener")) {
			feedback.classList.remove("opener");
		}
	}
});