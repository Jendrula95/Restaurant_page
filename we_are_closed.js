var currentdate = new Date();

var text_message = "jestesmy otwarci - odpowiemy jak najszybciej";

if (currentdate.getHours() < 10 || currentdate.getHours() > 21) {
	text_message = "Jesteśmy zamknięci - odpowiemy po otwarciu";
	
}
const div = document.querySelector("#reserv");

const el = document.createElement("div");
el.style.background = 'green';
el.style.color = "#225";

const span = document.createElement("span");
span.textContent = text_message;
el.appendChild(span);

div.appendChild(el);
span.classList.add("move");

