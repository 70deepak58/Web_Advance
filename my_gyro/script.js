console.log("hello ssgdhsgdh");
var x=560,y=300, d=0;;

/*
let gyroscope = new Gyroscope({ frequency: 60 });

gyroscope.addEventListener("reading", (e) => {
  console.log(`Angular velocity along the X-axis ${gyroscope.x}`);
  console.log(`Angular velocity along the Y-axis ${gyroscope.y}`);
  console.log(`Angular velocity along the Z-axis ${gyroscope.z}`);
});
gyroscope.start();
*/
let sensor = new Gyroscope();
sensor.start();

sensor.onreading = () => {
	document.getElementById("p1").innerHTML=sensor.x;
	document.getElementById("p2").innerHTML=sensor.y;
	document.getElementById("p3").innerHTML=sensor.z;
    console.log("Angular velocity around the X-axis " + sensor.x);
    console.log("Angular velocity around the Y-axis " + sensor.y);
    console.log("Angular velocity around the Z-axis " + sensor.z);
	if(sensor.x>0){
		d=d+20;
	}
	else{
		d=d-20;
	}
	document.getElementById("target").style.top=y+d+"px";
document.getElementById("p4").innerHTML=y+d;
};

sensor.onerror = event => console.log(event.error.name, event.error.message);