console.log("hello ssgdhsgdh");
var gx=560,gy=300, cy=0 ,cx=0, pts=0,tx=860,ty=400;
/*
tar_update();
function tar_update(){
    tx=60*Math.floor(10*Math.random());
    ty=35*Math.floor(10*Math.random());
//target
    //document.getElementById("tgt").style.left=tx+"px";
    //document.getElementById("tgt").style.top=ty+"px";
}


*/
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
	if(sensor.y> 0.5){
		cy=cy+5;
		gy=gy+5;
	}
	else if(sensor.y< -0.5){
		cy=cy-5;
		gy=gy-5;
	}
	//document.getElementById("gun").style.top=gy+cy+"px";
	document.getElementById("gun").style.top=gy+"px";
    document.getElementById("p4").innerHTML=gy+cy;
	
	//for x
	if(sensor.x> 0.5){
		cx=cx-5;
        gx=gx-5;		
	}
	else if(sensor.x< -0.5){
		cx=cx+5;
		gx=gx+5;
	}
	//document.getElementById("gun").style.left=gx+cx+"px";
	document.getElementById("gun").style.left=gx+"px";
	
	if(Math.abs(tx-gx)<10  && Math.abs(ty-gy)<10){
		pts=pts+1;
		document.getElementById("pts").innerHTML=pts;
		tx=60*Math.floor(10*Math.random());
        ty=35*Math.floor(10*Math.random());
		document.getElementById("tgt").style.top=ty+"px";
		document.getElementById("tgt").style.left=tx+"px";
	}
	document.getElementById("dummy").innerHTML=tx+"a"+gx+"mam"+ty+"a"+gy;
	/*
	if(Math.abs(tx-gx-cx)<10  && Math.abs(ty-gy-cy)<10){
		pts=pts+1;
		document.getElementById("pts").innerHTML=pts;
		tar_update();
		
	}
	*/
};

sensor.onerror = event => console.log(event.error.name, event.error.message);



/*
let gravitySensor = new GravitySensor({ frequency: 60 });
gravitySensor.addEventListener("reading", (e) => {
  console.log(`Gravity along the X-axis ${gravitySensor.x}`);
  console.log(`Gravity along the Y-axis ${gravitySensor.y}`);
  console.log(`Gravity along the Z-axis ${gravitySensor.z}`);
});
gravitySensor.start();
*/
