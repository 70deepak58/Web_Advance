console.log("hello ssgdhsgdh");
var x=560,y=300, d=0,c=0,p=0;
var tx,ty;

update_tar(){
	
	ty=window.innerHeight*Math.floor(10*Math.random());
    tx=window.innerWidth*Math.floor(10*Math.random());

//target
    document.getElementById("tar").style.left=tx+"px";
    document.getElementById("tar").style.top=ty+"px";
}



let sensor = new GravitySensor({ frequency: 60 });
sensor.start();

sensor.onreading = () => {
	document.getElementById("p1").innerHTML=sensor.x;
	document.getElementById("p2").innerHTML=sensor.y;
	document.getElementById("p3").innerHTML=sensor.z;
    console.log("Angular velocity around the X-axis " + sensor.x);
    console.log("Angular velocity around the Y-axis " + sensor.y);
    console.log("Angular velocity around the Z-axis " + sensor.z);
	if(sensor.y>0.5){
		d=d+5;
		document.getElementById("obj").style.top=y+d+"px";
        document.getElementById("p4").innerHTML=y+d;
		
	}
	else if(sensor.y< -0.5){
		d=d-5;
		document.getElementById("obj").style.top=y+d+"px";
        document.getElementById("p4").innerHTML=y+d;
	}
	
	
	if(sensor.x>0.5){
		c=c+5;
		document.getElementById("obj").style.left=x+c+"px";
        document.getElementById("p4").innerHTML=x+c;
		
	}
	else if(sensor.x< -0.5){
		c=c-5;
		document.getElementById("obj").style.left=x+c+"px";
        document.getElementById("p4").innerHTML=x+c;
	}
	
	if(Math.abs(x-tx)<10 && Math.abs(y-ty)<10){
		p++;
		update_tar();
		document.getElementById("pts").innerHTML=p;
	}
	
};

sensor.onerror = event => console.log(event.error.name, event.error.message);
