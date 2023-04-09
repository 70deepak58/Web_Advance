console.log("ready");
//top left position of everything not center position 40 by 2 20 will be shift
//This is before reflecton
var maxX=window.innerWidth , maxY=window.innerHeight;
var iX=560,iY=300;
/*
var iX=(window.innerWidth)/2,iY=(window.innerHeight)-20;
	document.getElementById("circle").style.left=iX+"px";
    document.getElementById("circle").style.top=iY-40+"px";
	document.getElementById("plate").style.left=iX+"px";
    document.getElementById("plate").style.top=iY+"px";
	
var iX=(window.innerWidth)/2,iY=(window.innerHeight)-30;
	document.getElementById("circle").style.left=iX+"px";
    document.getElementById("circle").style.top=iY+"px";
	document.getElementById("plate").style.left=iX+"px";
    document.getElementById("plate").style.top=iY+"px";
#circle{
	 position: absolute;
    width: 40px;
    height: 40px;
    background-color: red;
    left: 560px;
    top: 300px;
    border-radius: 50%;
}
#plate{
	position: absolute;
    width: 80px;
    height: 20px;
    background-color: blue;
    left: 540px;
    top: 340px;
}
*/

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
setInterval(update,100);





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

	
}


//sensor code


let sensor = new GravitySensor({ frequency: 60 });
sensor.start();

sensor.onreading = () => {
	document.getElementById("p1").innerHTML=sensor.x;
	document.getElementById("p2").innerHTML=sensor.y;
	document.getElementById("p3").innerHTML=sensor.z;
    console.log("Angular velocity around the X-axis " + sensor.x);
    console.log("Angular velocity around the Y-axis " + sensor.y);
    console.log("Angular velocity around the Z-axis " + sensor.z);

	//for y
	/*if(sensor.y> 0.5){
		cy=cy+5;
		gy=gy+5;
	}
	else if(sensor.y< -0.5){
		cy=cy-5;
		gy=gy-5;
	}
	*/
	update();

};

sensor.onerror = event => console.log(event.error.name, event.error.message);
