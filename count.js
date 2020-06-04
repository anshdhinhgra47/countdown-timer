var down = document.getElementById('decrease');
var up = document.getElementById('increase');
var countNumber = document.getElementById('count-number');

 
var count = 0;

function countDown(){
	count--;
	countNumber.innerText = count;
}

function countUp(){
	count++;
	countNumber.innerText = count;
}

up.addEventListener('click', countUp);
down.addEventListener('click', countDown);
