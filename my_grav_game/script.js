console.log("hello ssgdhsgdh");
var gx=560,gy=300, cy=0;;

let sensor = new GravitySensor({ frequency: 60 });
sensor.start();

sensor.onreading = () => {
	document.getElementById("p1").innerHTML=sensor.x;
	document.getElementById("p2").innerHTML=sensor.y;
	document.getElementById("p3").innerHTML=sensor.z;
    console.log("Angular velocity around the X-axis " + sensor.x);
    console.log("Angular velocity around the Y-axis " + sensor.y);
    console.log("Angular velocity around the Z-axis " + sensor.z);
	if(sensor.y> 0.5){
		cy=cy+5;
	}
	else if(sensor.y< -0.5){
		cy=cy-5;
	}
	document.getElementById("gun").style.top=gy+cy+"px";
    document.getElementById("p4").innerHTML=gy+cy;
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