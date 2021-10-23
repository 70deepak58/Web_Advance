var x_obst=360;
var y_dino=450;
var count=0;
var collisin_flag=0;
var score=0;
var hi=0;
function motion(){
    count=1;
    collisin_flag=0;
    
     gg =setInterval(start,200);
    
    
}

function run(){
    //multiple click start button but active only if collision happened
    if(count==0){
        motion();
    }
   
}

function start(){
    x_obst-=13;
document.getElementById("obstacle").style.left=x_obst+"px";
boom();
if(x_obst<=5){
    x_obst=360;
    y_dino=450;
}
if(collisin_flag==1){
    //clearInterval(gg);
    console.log("hshd");
}
}
function boom(){
    //collisin condition
if((y_dino==450&&(x_obst<=80&&x_obst>=10))&&collisin_flag==0){
    var x=document.getElementById("collide_audio");
x.play();
    collisin_flag=1;
    count=0;
console.log("collide");
clearInterval(gg);
setTimeout(d_adj,400);
}
if(x_obst<=5){
    score+=1;
    document.getElementById("point").innerHTML="P:"+score;
}
}
function d_adj(){
    x_obst=360;
document.getElementById("obstacle").style.left=x_obst+"px";
if(score>hi){
    hi=score;
}
score=0;
document.getElementById("point").innerHTML="P:"+score;
document.getElementById("hi").innerHTML="HI:"+hi;
count=0;
collisin_flag=0;
}

function jump(){
y_dino=390;
var x=document.getElementById("click_audio");
x.play();
document.getElementById("diano").style.top=y_dino+"px";
setTimeout(adjust,1400);
count=0;

}
function adjust(){
    y_dino=450;
document.getElementById("diano").style.top=y_dino+"px";
}