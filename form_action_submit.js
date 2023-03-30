const form = document.querySelector("form");

const nazwa = form.querySelector("input[name=nazwa]");
const email = form.querySelector("input[name=email]");
const guest_count = form.querySelector("input[name=guest");
const data = form.querySelector("input[name=data]");
const message = form.querySelector("input[name=comments]");

const validateEmail = (email) => {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
};

form.addEventListener("submit", (e) => {
	e.preventDefault();

	//jeżeli wszystko ok to wysyłamy
	if (
		nazwa.value.length >= 3 &&
		validateEmail(email.value) &&
		guest_count.value > 0
	) {
		form.submit();
	} else {
		//jeżeli nie to pokazujemy jakieś błędy
		alert("Kolego wypełniłeś błędnie nasz super formularz");
	}
});
