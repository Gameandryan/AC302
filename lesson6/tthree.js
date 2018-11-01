var c = document.getElementById("dolceDe");
var ctx = c.getContext("2d");

var WIDTH = 700;
var HEIGHT = 700;

var x,y,s;

var mx,my;

x = 350;
	y = 350;
	s = 50;
	mx = 0;
	my = 0;

var circleColor = "rgb(255,0,0)"


var circleY
var circleS = 50;
var circleX 
var circleCollision = false;

var score = 0;
function circle(x,y,color){
ctx.beginPath();
ctx.arc(x, y, 30, 0, 6.28);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = color;
ctx.fill();

}
function init(){
circleX = Math.floor(Math.random() *(WIDTH - circleS))
circleY = Math.floor(Math.random() *(HEIGHT - circleS))
window.onkeydown = keydownControl;
	return setInterval(draw, 20)
}

function drawPacman(){
	var pacman = new Image(); 
	pacman.src = "ziuyo.png"
	ctx.drawImage(pacman, x, y, s, s)
}
function drawDot(){
	var circle = new Image(); 
	circle.src = "nj.jpeg"
	ctx.drawImage(circle, circleX, circleY, circleS, circleS)
}


function clear(){
ctx.clearRect(0,0, WIDTH, HEIGHT);
}

function keydownControl(e){
if(e.keyCode == 37){
	mx = -4
	my = 0
} else if (e.keyCode == 38) {
	mx = 0
	my = -4
}
else if (e.keyCode == 39) {
	mx = 4
	my = 0
}
else if (e.keyCode == 40) {
	mx = 0
	my = 4
}
}

function  draw() {
	clear();
	drawPacman();
	drawDot();
	if (x + mx > WIDTH - s || x + mx < 0){
		mx = -mx;
	} else if (y + my > HEIGHT - s || y + my < 0){
		my = -my;
}		
		x += mx
		y += my

		collisionCheck();
		collisionHandle();

}
function collisionCheck(){
	if ((x+s >= circleX) && (x <= circleX + circleS) &&
		(x+s >= circleX) && (x <= circleX + circleS)){
		circleCollision = true
	} else {
		circleCollision = false
	}
}

function collisionHandle(){
	if (circleCollision) {
		circleX = Math.floor (Math.random()
			* (WIDTH - circleS))
		circleY = Math.floor (Math.random()
			* (HEIGHT - circleS))
		score += 1;
		document.getElementById("score").innerHTML = score;
	}
}

init();


// https://gameandryan.github.io/AC302/lesson5/er.html
// page