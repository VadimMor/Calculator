let calculator = document.getElementById('calculator');
let buttons = document.querySelectorAll('.button');
let display = document.getElementById('display');
let str = '';

for (let i=0; i<buttons.length; i++) {
	buttons[i].addEventListener('click', funcClick);
}

function funcClick() {
	let type = this.getAttribute('data-type');

	if (type == '=') {
		str = eval(str);
		display.value = +str.toFixed(10);
		return
	} else if (type == 'C') {
		str = '';
	} else {
		str += type;
	}

	display.value = str
}