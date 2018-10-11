var c = document.getElementById("dolceDe");
var ctx = c.getContext("2d");

var WIDTH = 700;
var HEIGHT = 700;

var x,y;

var mx,my;

var circleColor = "rgb(255,0,0)"

function initialization(){
	x = 350;
	y = 350;
	mx = 5;
	my = 7;
	setInterval(draw, 20)
}

function circle(x,y,color){
ctx.beginPath();
ctx.arc(x, y, 30, 0, 6.28);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = color;
ctx.fill();

}


function clear(){
ctx.clearRect(0,0, WIDTH, HEIGHT);
}


function randomColor(){
 var a = Math.floor(Math.random() * 256);
 var b = Math.floor(Math.random() * 256);
 var c = Math.floor(Math.random() * 256);

 return "rgb(" + a + "," + b + "," + c + ")";  
}

function draw(){
 clear();
 circle(x,y,circleColor);
 if (x+mx > WIDTH || x+mx < 0){
 	mx = -mx
 	circleColor = randomColor();
 }
 if (y+my > HEIGHT || y+my < 0){
 	my = -my
 	circleColor = randomColor();
 }

 x = x+mx;
 y = y+my;


}

initialization()