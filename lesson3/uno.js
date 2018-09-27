var c = document.getElementById("dolceDe");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(150,150,120,0,6.28);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "cyan";
ctx.fill();

var c1 = document.getElementById("dolceDeL");
var ctx1 = c1.getContext("2d");
ctx1.fillStyle = "blue";
ctx1.fillRect(0,0,150,150)
ctx1.fillRect(150,150,150,150)



var c2 = document.getElementById("dolceDeLe");
var ctx2 = c.getContext("2d");