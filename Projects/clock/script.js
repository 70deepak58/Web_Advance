let movX=700;
let movY=300;
let flag=3*(Math.PI)/2;
let deg;
let seconds;


setInterval(rev,1000);

function rev(){
    const d=new Date();
    seconds=d.getSeconds();
    document.getElementById("digital").innerHTML=d.toLocaleTimeString();
    deg=seconds*2*(Math.PI)/60;
    document.getElementById("mov").style.left=200+160*Math.cos(deg+flag)+"px";
    document.getElementById("mov").style.top=300+160*Math.sin(deg+flag)+"px";
}
