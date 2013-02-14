
var context;

var x=300;
var y=300;

var dx=15;
var dy=5;



function init(){
  context= myCanvas.getContext('2d');
  canvas = document.getElementById("myCanvas");
  canvas.width = document.width;
  canvas.height = document.height;
  canvasW = canvas.width;
  canvasH = canvas.height;
  canvasBG = canvas.backgroundColor;


  setInterval(draw,20);
}

function draw(){
  context.clearRect(0,0, canvasW,canvasH);
  context.beginPath();

  // Draws circle 
  context.arc(x,y,90,0,2*Math.PI,true, true);
  context.closePath();
  context.fill();


  // Boundaries
if( x<0 || x>canvasW){
	dx=-dx;
	context.fillStyle="#AEFF00";
	myCanvas.style.backgroundColor = "#FF8000";

}

if( y<0 || y>canvasH){
	dy=-dy;
	context.fillStyle="#FF8000";
	myCanvas.style.backgroundColor = "#AEFF00";


};  

x+=dx;
y+=dy;




}





setInterval(init(), 100/30);



 $("#myCanvas").click(function(e){

    var x = Math.floor((e.pageX-$("#canvas").offset().left) / 20);
    var y = Math.floor((e.pageY-$("#canvas").offset().top) / 20);
    context.fillStyle = "rgb(255,255,255)";
    context.fillRect(x*20, y*20, 20, 20);


 });
