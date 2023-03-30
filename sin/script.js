let movX=560;
let movY=300;
let flag1=3*(Math.PI)/2;
let degS=3*(Math.PI)/2;
let seconds;
let i=0;
let numFlag=0;
let numPos=0;
let degH;
let hours;
let degM;
let minutes;

let d=0;

let r=80;
let w=0;
let c=0;
let f1=1;
let f2=1;
let f3=1;


setInterval(rev,1000);

function rev(){
    const d=new Date();
    seconds=d.getSeconds();
    hours=d.getHours();
    minutes=d.getMinutes();
	
	
	
	

   
    document.getElementById("sec").style.left=movX+f2*r*Math.cos(degS+flag1)+"px";
    document.getElementById("sec").style.top=movY+f3*r*Math.sin(degS+flag1)+"px";
	 degS-=f1*(Math.PI)/30;

	
	
	let element = document.createElement("div");
    element.style.position="absolute";
	element.style.left=movX+f2*r*Math.cos(degS+flag1)+"px";
	element.style.top=movY+f3*r*Math.sin(degS+flag1)+"px";
	element.style.backgroundColor="rgba(255, 0, 0,0.6)";
	element.style.width=40+w+"px";
	element.style.height=40+w+"px";
    document.getElementById("theme").append(element);
	
	
	
	
	
	
	//r+=6;
	//w+=1;
	c+=1;
	if(c%30==0){
		f1=f1*(-1);
		f2=f2*(-1);
		f3=f3*(-1);
		movX+=2*r;
	}
}
