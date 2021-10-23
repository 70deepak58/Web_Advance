var x_obst=330
var y_dino=450;
var count=0;


function run(){
setInterval(start,1000);
}

function start(){
    x_obst-=20;
document.getElementById("obstacle").style.left=x_obst+"px";
boom();
if(x_obst<=0){
    x_obst=330;
    y_dino=450;
}
}
function boom(){
if(y_dino==450&&x_obst<=80){
console.log("collide");
}
}

function jump(){
y_dino=410;
document.getElementById("diano").style.top=y_dino+"px";
setTimeout(adjust,3000);
count=0;

}
function adjust(){
    y_dino=450;
document.getElementById("diano").style.top=y_dino+"px";
}