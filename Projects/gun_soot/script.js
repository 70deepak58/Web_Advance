var initalPosX=170;
var initalPosY=570;
var finalPosX=250;
var finalPosY=400;

var clickX=250;
var clickY=400;

var tarX=initalPosX;
var tarY=initalPosY;
var slope;
function play(){
    setInterval(update,10000);
    slope=((finalPosY-initalPosY)/(finalPosX-initalPosX));
    setInterval(play2,1000);
}
function play2(){
if(finalPosX>initalPosX)
    {tarX+=15;}
    else{
        tarX-=15;
    }
    tarY=slope*(tarX-initalPosX)+initalPosY;
   // initalPosX=tarX;
    //initalPosY=tarY;

    //bullet
    document.getElementById("box").style.left=tarX+"px";
    document.getElementById("box").style.top=tarY+"px";
    


}
function showCoords(event){
   // tarX=initalPosX;
   // tarY=initalPosY;
    var x=event.clientX;
    var y=event.clientY;
    clickX=x;
    clickY=y;
    console.log(x+"  "+y);
    //console.log(y);
}
// <div id="size" onclick="showCoords(event)">
function update(){
    finalPosY=60*Math.floor(10*Math.random());
    finalPosX=35*Math.floor(10*Math.random());
    slope=((finalPosY-initalPosY)/(finalPosX-initalPosX));
    tarX=finalPosX;
    tarY=finalPosY;
//target
    document.getElementById("target").style.left=finalPosX+"px";
    document.getElementById("target").style.top=finalPosY+"px";

    //bullet to initial pos
    document.getElementById("box").style.left=initalPosX+"px";
    document.getElementById("box").style.top=initalPosY+"px";
    tarX=initalPosX;
    tarY=initalPosY;
}
