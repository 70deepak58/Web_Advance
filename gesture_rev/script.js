console.log("testing");
var loca="";
var music_flag=1;
var image_flag=1;
var x;
var scr_x=0,scr_y=0;
var rf1=1,rf2=1,rf3=1,rf4=1,lf1=1,lf2=1,lf3=1,lf4=1;
const videoElement = document.getElementsByClassName('input_video')[0];
const canvasElement = document.getElementsByClassName('output_canvas')[0];
const canvasCtx = canvasElement.getContext('2d');

function onResults(results) {
  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  canvasCtx.drawImage(
      results.image, 0, 0, canvasElement.width, canvasElement.height);
  // if (results.multiHandLandmarks) {
  //   for (const landmarks of results.multiHandLandmarks) {
  //     drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS,
  //                    {color: '#00FF00', lineWidth: 5});
  //     drawLandmarks(canvasCtx, landmarks, {color: '#FF0000', lineWidth: 2});
  //   }
  // }
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
  // if(isRightHand == true){

  // }
  // else{

  // }


  //all logics here
  const hand = results.multiHandLandmarks[0]; 
  if(isRightHand == true){
    //left hand functionality
    //start right
    if((hand[8].y<hand[6].y) && rf1==1){
      rf1=0;
    console.log("down");
    document.getElementById("tak").style.backgroundColor="rgb("+Math.floor(Math.random() * 256)+","+Math.floor(Math.random() * 256)+","+Math.floor(Math.random() * 256)+")";
  }

  if((hand[12].y<hand[10].y) && rf2==1){
    rf2=0;
    // console.log("down");
    // document.getElementById("tak").style.backgroundColor="red";
    loca=document.getElementById("location");
    getLocation();
    console.log("location");
  }

  if((hand[16].y<hand[14].y) && rf3==1){
    rf3=0;
    image_flag++;
    if(image_flag>=18){
        image_flag=1;
    }
  x=document.getElementById("image");
  x.setAttribute("src","image/"+image_flag+".jpeg");
 // x.load();
  console.log("next image");
  }

  if((hand[20].y<hand[18].y) && rf4==1){
    rf4=0;
    //console.log("vibrate");
    // document.getElementById("tak").style.backgroundColor="red";
    navigator.vibrate(1000);
    console.log("open new page");
    window.open('http://70deepak58.github.io/Web_Advance/Projects/ai_auto/index.html');
  }
  

 
  //end right
      if((hand[8].y>hand[6].y)){
      rf1=1;}
      if((hand[12].y>hand[10].y)){
      rf2=1;}
      if((hand[16].y>hand[14].y)){
      rf3=1;}
      if((hand[20].y>hand[18].y)){
      rf4=1;}
      

  }
  else{
    //riight hand functionality
    //other hand
	
	//applying for cursor index finger
	 if((hand[8].y<hand[6].y)){
   //adding logic for cursor of finger
   document.getElementById("cursor").style.left=(hand[8].x)*(window.innerWidth)+"px";
   document.getElementById("cursor").style.top=(hand[8].y)*(window.innerHeight)+"px";
   console.log((hand[8].x)*(window.innerWidth),"  ",(hand[8].y)*(window.innerHeight));
   }
   //click middle
    if((hand[12].y<hand[10].y)){
 
    document.elementFromPoint((hand[8].x)*(window.innerWidth),(hand[8].y)*(window.innerHeight)).click();
   
   
  }
   //ring finger scroll up
  if((hand[16].y<hand[14].y)){
	  document.body.scrollTop=scr_x;
    document.documentElement.scrollTop=scr_x;
	scr_x=scr_x-5;
	

  }
 
  //pinky finger scroll down
  if((hand[20].y<hand[18].y)){
	  document.body.scrollTop=scr_x;
    document.documentElement.scrollTop=scr_x;
	scr_x=scr_x+5;

  }
  
  
  //gshdghgs he rfue f jw eyrtyhegrhfe fey
	
	
	
	
    //index finger
   if((hand[8].y<hand[6].y) && lf1==1){
    lf1=0;
    music_flag++;
    if(music_flag>=4){
        music_flag=1;
    }
    x=document.getElementById("music");
   var sour=document.getElementById("sr");
   sour.setAttribute("src",music_flag+".mp3");
   x.load();
   x.play();
   console.log("music next");
   //adding logic for cursor of finger
   document.getElementById("cursor").style.left=hand[8].x+"px";
   document.getElementById("cursor").style.top=hand[8].y+"px";
   console.log(hand[8].x,"  ",hand[8].y);
   
   
   
  }
  
  
  
  
  
  
  

    //middle finger
    if((hand[12].y<hand[10].y) && lf2==1){
      lf2=0;
      x=document.getElementById("music");
    x.play();
    console.log("music");
  }
   
  //ring finger
  if((hand[16].y<hand[14].y) && lf3==1){
    lf3=0;
    x=document.getElementById("music");
    x.pause();
    console.log("music stop");
  }
 
  //pinky finger
  if((hand[20].y<hand[18].y) && lf4==1){
    lf4=0;
    music_flag--;
    if(music_flag<=-0){
        music_flag=3;
    }
    x=document.getElementById("music");
   var sour=document.getElementById("sr");
   sour.setAttribute("src",music_flag+".mp3");
   x.load();
   x.play();
   console.log("music previous");
  }


  //end of other hand
      if((hand[8].y>hand[6].y)){
      lf1=1;}
      if((hand[12].y>hand[10].y)){
      lf2=1;}
      if((hand[16].y>hand[14].y)){
      lf3=1;}
      if((hand[20].y>hand[18].y)){
      lf4=1;}
      
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








//location
//const x = document.getElementById("demo");

function getLocation() {
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(showPosition);
} else { 
loca.innerHTML = "Geolocation is not supported by this browser.";
}
}

function showPosition(position) {
loca.innerHTML = "Latitude: " + position.coords.latitude + 
"<br>Longitude: " + position.coords.longitude;
}
//end location




//dummy logic starts here you are great
function my_red(){
	 document.body.style.backgroundColor="red";
}
function my_blue(){
	 document.body.style.backgroundColor="blue";
}
function my_green(){
	 document.body.style.backgroundColor="green";
}