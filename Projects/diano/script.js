var x_obst=330
var y_dino=450;
var count=0;
var collisin_flag=0;
var score=0;
function motion(){
    count=1;
    collisin_flag=0;
    
     gg =setInterval(start,1000);
    
    
}

function run(){
    //multiple click start button but active only if collision happened
    if(count==0){
        motion();
    }
   
}

function start(){
    x_obst-=30;
document.getElementById("obstacle").style.left=x_obst+"px";
boom();
if(x_obst<=5){
    x_obst=330;
    y_dino=450;
}
if(collisin_flag==1){
    //clearInterval(gg);
    console.log("hshd");
}
}
function boom(){
if(y_dino==450&&x_obst<=80){
    var x=document.getElementById("collide_audio");
x.play();
    collisin_flag=1;
    count=0;
console.log("collide");
//clearInterval(gg);
setTimeout(d_adj,1000);
}
}
function d_adj(){
    x_obst=330;
document.getElementById("obstacle").style.left=x_obst+"px";
count=0;
collisin_flag=0;
}

function jump(){
y_dino=390;
var x=document.getElementById("click_audio");
x.play();
document.getElementById("diano").style.top=y_dino+"px";
setTimeout(adjust,3000);
count=0;

}
function adjust(){
    y_dino=450;
document.getElementById("diano").style.top=y_dino+"px";
}