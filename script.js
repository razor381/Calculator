const panelTop = document.querySelector('#displayTop');
const panelBot = document.querySelector('#displayBot');

const keys = document.querySelectorAll('.key')
let displayValue ='';

function run(e) {

	let result ='';

	//ignore unnecessary clicks other than buttons
	if(!e.srcElement.classList.contains('key')) return;
	console.log('display value length: '+ displayValue.length);

	//limiting digits within screen area
	if(displayValue.length > 16) return;

	/*//clear the screen when AC is pressed
	if(e.srcElement.innerHTML == 'AC') {
		displayValue = '';
		panelTop.innerHTML = '';
		return;
	}*/

	console.log('keypressed: ' +e.srcElement.innerHTML);

	//clear screen when AC is pressed
	if(e.srcElement.innerHTML == 'AC') {
		displayValue = '';
		result = '';
	} 

	else if(e.srcElement.innerHTML == '=') {
		result = eval(displayValue);
		panelBot.innerHTML = result;
	}

	else if(e.srcElement.classList.contains('back')) {
		displayValue = displayValue.slice(0, displayValue.length-1);
	}

	//calculate value for single operand operations
	else if(e.srcElement.classList.contains('single')) {
		console.log('sending value a: '+ displayValue);
		result = operate(e.srcElement.innerHTML, displayValue);
		if(result%1 != 0) result = result.toFixed(2);
	}

	/*else if(e.srcElement.classList.contains('op')){
		if(readSecondOp){
			b = displayValue;
		} else {
			a = displayValue;
			displayValue = ''; 
			readSecondOp = true;
		}
	}*/

	/*else if(e.srcElement.classList.contains('fkey') && e.srcElement.innerHTML != 'AC') {
		panelBot.innerHTML = operate(e.srcElement.innerHTML, a,b );
		a = displayValue;
		displayValue = 0;
		result = '';		
	}	*/

	else if(e.srcElement.classList.contains('nkeys') || e.srcElement.classList.contains('op')) displayValue += e.srcElement.innerHTML; 

	panelTop.innerHTML = displayValue;
	console.log('result: '+result);
	panelBot.innerHTML = result;

	console.log('current displayValue: ' + displayValue);
}

function add(a,b) {
	return (a+b);
}

function subtract(a,b) {
	return (a-b);
}

function multiply(a,b) {
	return (a*b);
}

function divide(a,b) {
	return (a/b);
}

function square(a) {
	return (a*a);
}

function sroot(a) {
	return (Math.sqrt(a));
}

function mod(a,b) {
	return (a%b);
}

function operate(sign,a,b=0) {

	a = parseInt(a);
	console.log('a in operate: ' + a);
	b = parseInt(b);
	console.log('b in operate: ' + b);
	switch(sign) {
		case '+':
			return add(a,b);

		case '-':
			return subtract(a,b);

		case '*':
			return multiply(a,b);

		case '÷':
			return divide(a,b);

		case '²':
			return square(a);

		case '√':
			return sroot(a);

		case '%':
			return mod(a,b);

		case 'AC':
			
			break;

		default:			
	}
}


window.addEventListener('click', run);