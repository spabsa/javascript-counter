let counter = document.querySelector('.counter');
const add = document.querySelector('#addBtn');
const lower = document.querySelector('#lowerBtn');

let count = 0;

add.addEventListener('click', addCount);
lower.addEventListener('click', lowerCount);

function addCount() {
	count++;
	counter.innerHTML = count;
	if (counter.innerHTML > '0') {
		counter.style.color = 'limegreen';
	} else if(counter.innerHTML === '0') {
		counter.style.color = 'white';
	}
	counter.animate([{opacity:'0.1'}, {opacity: '1.0'}],
		{duration:500}, {fill: 'forward'});
}

function lowerCount() {
	count--;
	counter.innerHTML = count;
	if (counter.innerHTML < '0') {
		counter.style.color = 'red';
	} else if (counter.innerHTML === '0') {
		counter.style.color = 'white';
	}
	counter.animate([{opacity:'0.1'}, {opacity: '1.0'}],
		{duration:500}, {fill: 'forward'});
}