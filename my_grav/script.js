console.log("hello ssgdhsgdh");
var x=560,y=300, d=0;;

let sensor = new GravitySensor({ frequency: 60 });
sensor.start();

sensor.onreading = () => {
	document.getElementById("p1").innerHTML=sensor.x;
	document.getElementById("p2").innerHTML=sensor.y;
	document.getElementById("p3").innerHTML=sensor.z;
    console.log("Angular velocity around the X-axis " + sensor.x);
    console.log("Angular velocity around the Y-axis " + sensor.y);
    console.log("Angular velocity around the Z-axis " + sensor.z);
	if(sensor.y>0){
		d=d+5;
	}
	else{
		d=d-5;
	}
	document.getElementById("target").style.top=y+d+"px";
document.getElementById("p4").innerHTML=y+d;
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