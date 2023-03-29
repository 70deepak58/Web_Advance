let movX=700;
let movY=300;
let flag1=3*(Math.PI)/2;
let flag2=3*(Math.PI)/2+2*(Math.PI)/3;
let flag3=3*(Math.PI)/2+4*(Math.PI)/3;
let degS=0;
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
let d=0;

let r=0;



setInterval(rev,500);

function rev(){
    const d=new Date();
    seconds=d.getSeconds();
    hours=d.getHours();
    minutes=d.getMinutes();
	
	
	
	

    degS+=4*(Math.PI)/60;
    document.getElementById("sec").style.left=560+r*Math.cos(degS+flag1)+"px";
    document.getElementById("sec").style.top=300+r*Math.sin(degS+flag1)+"px";

    document.getElementById("min").style.left=560+r*Math.cos(degS+flag2)+"px";
    document.getElementById("min").style.top=300+r*Math.sin(degS+flag2)+"px";

    document.getElementById("hour").style.left=560+r*Math.cos(degS+flag3)+"px";
    document.getElementById("hour").style.top=300+r*Math.sin(degS+flag3)+"px";
	
	/*
	position: absolute;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 0, 0,0.6);
    left: 560px;
    top: 300px;
    font-size: 40px;
	
	
	
	*/
	
	let element = document.createElement("div");
    element.style.position="absolute";
	element.style.left=560+r*Math.cos(degS+flag1)+"px";
	element.style.top=300+r*Math.sin(degS+flag1)+"px";
	element.style.backgroundColor="rgba(255, 0, 0,0.6)";
	element.style.width="40px";
	element.style.height="40px";
    document.getElementById("theme").append(element);
	
	
	
	let element2 = document.createElement("div");
    element2.style.position="absolute";
	element2.style.left=560+r*Math.cos(degS+flag2)+"px";
	element2.style.top=300+r*Math.sin(degS+flag2)+"px";
	element2.style.backgroundColor="blue";
	element2.style.width="40px";
	element2.style.height="40px";
    document.getElementById("theme").append(element2);
	

	let element3 = document.createElement("div");
    element3.style.position="absolute";
	element3.style.left=560+r*Math.cos(degS+flag3)+"px";
	element3.style.top=300+r*Math.sin(degS+flag3)+"px";
	element3.style.backgroundColor="yellow";
	element3.style.width="40px";
	element3.style.height="40px";
    document.getElementById("theme").append(element3);
	
	
	
	r+=6;
}
