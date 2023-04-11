console.log("ready");
//top left position of everything not center position 40 by 2 20 will be shift
//This is before reflecton
//document.getElementsByTagName("button").style.top=window.innerWidth-20+"px";
//only variable for plate others are for ball
var pX=560,pY=800;
var maxX=window.innerWidth , maxY=window.innerHeight;
var iX=560,iY=800;


//(window.innerHeight)
//This will be after reflection
var fX=Math.floor((window.innerWidth)*Math.random()),fY=Math.floor(300*Math.random());

//This will be current reflection
var cX=560,cY;

var flagX=1,flagY=1;
var dX=5,dY=5;
console.log(fX,"hhh",fY);
if(fX<300){
	flagX=flagX*(-1);
}



//setInterval(update,100);
function update(){
	//cX=cX+flagX*dX
	//cY=(fY-iY)/(fX-iX)*(cX-fX)+fY;
	
	cX=cX+flagX*dX
	cY=(fY-iY)/(fX-iX)*(cX-fX)+fY;
	document.getElementById("circle").style.left=cX+"px";
    document.getElementById("circle").style.top=cY+"px";
	console.log(cX,"jj",cY);
	//This handles left and right reflection
	if((cX>(window.innerWidth-45)) ||(cX<0)){
		flagX=flagX*(-1);
		//reflection from axis parallel to y (fY+iY)/2=cY; mid point theorem
		fY=2*cY-iY;
		//it will always pass through iX
		fX=iX
		iX=cX;
		iY=cY;
		//finding value of fX using equation of straight line
		//fX-iX=
		
	}
	//Top reflection
	if(cY<0){
		fY=2*cY-iY;
		fX=iX
		iX=cX;
		iY=cY;
	}
	
	//Bottom reflection
	if(cY>(window.innerHeight-45)){
		fY=2*cY-iY;
		fX=iX
		iX=cX;
		iY=cY;
	}
	
	//Mid reflection
	//300 assumed
	//plate 80 20
	var midX=pX+40,midY=pY+10;
	if((cX>midX-60) &&(cX<midX+50) && (cY>midY-30)&& (cY<midY+20)){
		document.getElementById("aa").innerHTML=iX;
		//botton condition
		if(cY<iY){
			fY=2*cY-iY;
		    fX=iX
		    iX=cX;
		    iY=cY;
		}
		///top condition
		else{
			fY=2*cY-iY;
		    fX=iX
		    iX=cX;
		    iY=cY;
		}
	}
	
	//This is to handle left right infinite loop
	if(Math.abs(fY-iY)<4){
		fY=Math.floor(300*Math.random());
	}

	
}

var turn=0;

function start_play(){
//setInterval(update,100);
//sensor code
let sensor = new GravitySensor({ frequency: 60 });
if(turn==0){
	
sensor.start();
}
sensor.onreading = () => {
	document.getElementById("p1").innerHTML=sensor.x;
	document.getElementById("p2").innerHTML=sensor.y;
	document.getElementById("p3").innerHTML=sensor.z;
    console.log("Angular velocity around the X-axis " + sensor.x);
    console.log("Angular velocity around the Y-axis " + sensor.y);
    console.log("Angular velocity around the Z-axis " + sensor.z);

	//for x
	if(sensor.x< -0.5){
        pX=pX+6;
		if(pX>(window.innerWidth-85)){
			pX=(window.innerWidth-85);
		}
		
	}
	else if(sensor.x> 0.5){
		pX=pX-6;
		if(pX<0){
			pX=0;
		}
	}
	document.getElementById("aa").innerHTML="na";
	document.getElementById("plate").style.left=pX+"px";
    document.getElementById("plate").style.top=pY+"px";
	update();

};

sensor.onerror = event => console.log(event.error.name, event.error.message);

//setInterval(update,100);
turn =turn +1;

}