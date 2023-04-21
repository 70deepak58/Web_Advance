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
	if((cX>midX-50) &&(cX<midX+50) && (cY>midY-20)&& (cY<midY+20)){
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

	
}
///jshd ehmbem jfg hjeh qu ydem dm h 
////hgdf hgdhfgshdgfjdgf jhdgfahdfhagkd jkahjf gjhq

console.log("testing");
var loca="";
var music_flag=1;
var image_flag=1;
var x;
var scr_x=0,scr_y=0,zoom_flag=1;
var rf1=1,rf2=1,rf3=1,rf4=1,lf1=1,lf2=1,lf3=1,lf4=1;
const videoElement = document.getElementsByClassName('input_video')[0];
const canvasElement = document.getElementsByClassName('output_canvas')[0];
const canvasCtx = canvasElement.getContext('2d');

function onResults(results) {
  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  canvasCtx.drawImage(
      results.image, 0, 0, canvasElement.width, canvasElement.height);
  if (results.multiHandLandmarks && results.multiHandedness) {
for (let index = 0; index < results.multiHandLandmarks.length; index++) {
  const classification = results.multiHandedness[index];
  const isRightHand = classification.label === 'Right';
  const landmarks = results.multiHandLandmarks[index];

  //connector and dot 
  drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS,
      {color: isRightHand ? '#00FF00' : '#FF0000'});
  drawLandmarks(canvasCtx, landmarks, {
    color: isRightHand ? '#00FF00' : '#FF0000',
    fillColor: isRightHand ? '#FF0000' : '#00FF00',
    radius: (x) => {
      return lerp(x.from.z, -0.15, .1, 10, 1);
    }       
  });


  //all logics here
  const hand = results.multiHandLandmarks[0]; 
  //sdshd
  
  //hdjshd
  
  
  
  if(isRightHand == true){
	  //update();
    //left hand functionality
    //start right
	//index for zoom in 
    if((hand[8].y<hand[6].y)){
	//	if(zoom_flag<10){
		//	 zoom_flag=zoom_flag+0.1;
	//	}
	//	document.body.style.zoom=zoom_flag;
    
  }
//middle
  if((hand[12].y<hand[10].y)){

  }
//ring
  if((hand[16].y<hand[14].y)){

  }
//pinky for zoom out
  if((hand[20].y<hand[18].y)){
	   //    if(zoom_flag>0.5){
		//	 zoom_flag=zoom_flag-0.1;
		//}
		//document.body.style.zoom=zoom_flag;
  }
  
  }
  else{
    //riight hand functionality
    //other hand
	
	//applying for cursor index finger
	 if((hand[8].y<hand[6].y)){
   //adding logic for cursor of finger
   //document.getElementById("cursor").style.left=(hand[8].x)*(window.innerWidth)+"px";
   //document.getElementById("cursor").style.top=(hand[8].y)*(window.innerHeight)+"px";
   	document.getElementById("aa").innerHTML="na";
	pX=(hand[8].x)*(window.innerWidth);
	pY=(hand[8].y)*(window.innerHeight);
	document.getElementById("plate").style.left=pX+"px";
    document.getElementById("plate").style.top=pY+"px";
   
   console.log((hand[8].x)*(window.innerWidth),"  ",(hand[8].y)*(window.innerHeight));
   }
   //click middle
    if((hand[12].y<hand[10].y)){
 
  //  document.elementFromPoint((hand[8].x)*(window.innerWidth),(hand[8].y)*(window.innerHeight)).click();
   
   
  }
   //ring finger scroll up
  if((hand[16].y<hand[14].y)){
//	  document.body.scrollTop=scr_x;
 //   document.documentElement.scrollTop=scr_x;
//	scr_x=scr_x-5;
	

  }
 
  //pinky finger scroll down
  if((hand[20].y<hand[18].y)){
	//  document.body.scrollTop=scr_x;
   // document.documentElement.scrollTop=scr_x;
	//scr_x=scr_x+5;

  }
      
  }



  //dhfjhd edy ruyehgfewhjh fydjhfhnd gfjedyh fjkdh

}
}




  ////
  canvasCtx.restore();
}

const hands = new Hands({locateFile: (file) => {
  return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
}});
hands.setOptions({
  maxNumHands: 2,
  modelComplexity: 1,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
});
hands.onResults(onResults);

const camera = new Camera(videoElement, {
  onFrame: async () => {
    await hands.send({image: videoElement});
  },
  width: 1280,
  height: 720
});
camera.start();











//hgejhqgw jgedjqh gmqhegd qhjdgqe dehqgd hgdehgdhgq
//modification starts here

function start_play(){
//setInterval(update,100);
//sensor code
/*
let sensor = new GravitySensor({ frequency: 60 });

sensor.start();
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
*/

setInterval(update,1000/60);

}