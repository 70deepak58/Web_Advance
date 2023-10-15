// console.log("testing");
// var loca = "";
// var music_flag = 1;
// var image_flag = 1;
// var x;
// var scr_x = 0, scr_y = 0, zoom_flag = 1;
// var rf1 = 1, rf2 = 1, rf3 = 1, rf4 = 1, lf1 = 1, lf2 = 1, lf3 = 1, lf4 = 1;


// function onResults(results) {
//     canvasCtx.save();
//     canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
//     canvasCtx.drawImage(
//         results.image, 0, 0, canvasElement.width, canvasElement.height);
//     if (results.multiHandLandmarks && results.multiHandedness) {
//         for (let index = 0; index < results.multiHandLandmarks.length; index++) {
//             const classification = results.multiHandedness[index];
//             const isRightHand = classification.label === 'Right';
//             const landmarks = results.multiHandLandmarks[index];

//             //connector and dot 
//             drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS,
//                 { color: isRightHand ? '#00FF00' : '#FF0000' });
//             drawLandmarks(canvasCtx, landmarks, {
//                 color: isRightHand ? '#00FF00' : '#FF0000',
//                 fillColor: isRightHand ? '#FF0000' : '#00FF00',
//                 radius: (x) => {
//                     return lerp(x.from.z, -0.15, .1, 10, 1);
//                 }
//             });


//             //all logics here
//             const hand = results.multiHandLandmarks[0];
//             if (isRightHand == true) {
//                 //left hand functionality
//                 //start right
//                 //index
//                 if ((hand[8].y < hand[6].y)) {
//                     if (zoom_flag < 10) {
//                         zoom_flag = zoom_flag + 0.1;
//                     }
//                     document.body.style.zoom = zoom_flag;

//                 }
//                 //middle
//                 if ((hand[12].y < hand[10].y)) {

//                 }
//                 //ring
//                 if ((hand[16].y < hand[14].y)) {

//                 }
//                 //pinky
//                 if ((hand[20].y < hand[18].y)) {
//                     if (zoom_flag > 0.5) {
//                         zoom_flag = zoom_flag - 0.1;
//                     }
//                     document.body.style.zoom = zoom_flag;
//                 }

//             }
//             else {
//                 //riight hand functionality
//                 //other hand

//                 //applying for cursor index finger
//                 if ((hand[8].y < hand[6].y)) {
//                     //adding logic for cursor of finger
//                     document.getElementById("cursor").style.left = (hand[8].x) * (window.innerWidth) / zoom_flag + "px";
//                     document.getElementById("cursor").style.top = (hand[8].y) * (window.innerHeight) / zoom_flag + "px";
//                     console.log((hand[8].x) * (window.innerWidth), "  ", (hand[8].y) * (window.innerHeight));
//                 }
//                 //click middle
//                 if ((hand[12].y < hand[10].y)) {

//                     document.elementFromPoint((hand[8].x) * (window.innerWidth), (hand[8].y) * (window.innerHeight)).click();


//                 }
//                 //ring finger scroll up
//                 if ((hand[16].y < hand[14].y)) {
//                     scr_x = scr_x - 45;
//                     document.body.scrollTop = scr_x;
//                     document.documentElement.scrollTop = scr_x;



//                 }

//                 //pinky finger scroll down
//                 if ((hand[20].y < hand[18].y)) {
//                     scr_x = scr_x + 45;
//                     document.body.scrollTop = scr_x;
//                     document.documentElement.scrollTop = scr_x;


//                 }

//             }



//             //dhfjhd edy ruyehgfewhjh fydjhfhnd gfjedyh fjkdh

//         }
//     }




//     ////
//     canvasCtx.restore();
// }




// // content.js

// // Array of URLs for the remote JavaScript files
// const scriptUrls = [
//     "https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js",
//     "https://cdn.jsdelivr.net/npm/@mediapipe/control_utils/control_utils.js",
//     "https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js",
//     "https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js"
//   ];
  
//   // Function to load a remote script
//   function loadScript(url) {
//     const script = document.createElement("script");
//     script.src = url;
//     script.crossOrigin = "anonymous";
//     document.head.appendChild(script);
//   }
  
//   // Load each script in a loop
//   scriptUrls.forEach((url) => {
//     loadScript(url);
//   });










// var cnt=0;
// function loadScript23(src, callback) {
//   var script = document.createElement('script');
//   script.src = src;
//   // script.crossOrigin = 'anonymous';
//   script.onload = callback;
//   document.head.appendChild(script);
//   initializeHandDetection();
// }

  function loadScript(src, callback) {
    var script = document.createElement('script');
    script.src = src;
    script.crossOrigin = 'anonymous';
    script.onload = callback;
    document.head.appendChild(script);
  }
  
//   loadScript('https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js', function() {
//     cnt++;
//     console.log('Script 1 has been loaded. ext');
//     initializeHandDetection()
//   });
//   loadScript('https://cdn.jsdelivr.net/npm/@mediapipe/control_utils/control_utils.js', function() {
//     cnt++;
//     console.log('Script 2 has been loaded. ext');
//    initializeHandDetection()
//   });
//   loadScript('https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js', function() {
//     console.log('Script 3 has been loaded. ext');
//     cnt++;
//    initializeHandDetection()
//   });
//   loadScript('https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js', function() {
//     cnt++;
//     console.log('Script 4 has been loaded. ext');
//    initializeHandDetection()
//   });
// //"https://github.com/70deepak58/Web_Advance/tree/master/popup.js"

//   function loadScript2(src, callback) {
//     var script = document.createElement('script');
//     script.src = src;
//     script.onload = callback;
//     document.body.appendChild(script);
//     initializeHandDetection();
//   }
  

// async function initializeHandDetection() {
//     console.log(cnt);

//     if (cnt == 4) {
//       const hands = new Hands({
//         locateFile: (file) => {
//           return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
//         }
//       });
//       hands.setOptions({
//         maxNumHands: 2,
//         modelComplexity: 1,
//         minDetectionConfidence: 0.5,
//         minTrackingConfidence: 0.5
//       });
  
//       hands.onResults(onResults);
  
  
//       // Access the camera using navigator.mediaDevices.getUserMedia
//       async function startCamera() {
//         try {
//           const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//           videoElement.srcObject = stream;
//         } catch (error) {
//           console.error('Error accessing camera:', error);
//         }
//       }
  
//       const videoElement = document.createElement('video');
//       videoElement.className = 'input_video';
//       videoElement.width = 1280;
//       videoElement.height = 720;
  
//       //document.body.appendChild(videoElement);
  
//       startCamera().then(() => {
//         const camera = new Camera(videoElement, {
//           onFrame: async () => {
//             await hands.send({ image: videoElement });
//           },
//           width: 1280,
//           height: 720
//         });
//         camera.start();
//       });
  
  
//     }
//   }