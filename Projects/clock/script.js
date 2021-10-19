let movX=700;
let movY=300;
let flag=3*(Math.PI)/2;
let degS;
let seconds;
let i=0;
let numFlag=0;
let numPos=0;
let degH;
let hours;
let degM;
let minutes;

let hourAlarm=4;
let minAlarm=30;



setInterval(rev,1000);

function rev(){
    const d=new Date();
    seconds=d.getSeconds();
    hours=d.getHours();
    minutes=d.getMinutes();

    //digital clock
    document.getElementById("digital").innerHTML=d.toLocaleTimeString();
//analog clock
//seconds
    degS=seconds*2*(Math.PI)/60;
    document.getElementById("sec").style.left=160+160*Math.cos(degS+flag)+"px";
    document.getElementById("sec").style.top=300+160*Math.sin(degS+flag)+"px";

    //minutes
    degM=minutes*2*(Math.PI)/60+(seconds*2*(Math.PI)/60)/60;
    document.getElementById("min").style.left=160+120*Math.cos(degM+flag)+"px";
    document.getElementById("min").style.top=300+120*Math.sin(degM+flag)+"px";

    //hours
    degH=hours*2*(Math.PI)/12+(minutes*2*(Math.PI)/60)/12;
    document.getElementById("hour").style.left=160+80*Math.cos(degH+flag)+"px";
    document.getElementById("hour").style.top=300+80*Math.sin(degH+flag)+"px";
}


function arrange(){
    for(i=1;i<=12;i++){
        numPos=2*(Math.PI)*i/12;
        document.getElementById("a"+i).style.left=160+160*Math.cos(numPos+flag)+"px";
    document.getElementById("a"+i).style.top=300+160*Math.sin(numPos+flag)+"px";
    }
    console.log("boom");
}
function play(){

}