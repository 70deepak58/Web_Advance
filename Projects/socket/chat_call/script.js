let turn=0;
let question_flag="";
let question="";
let turn_audio=0;
let dict_reply={"a":"apple","b":"boy","c":"cat","d":"dog","e":"elephant","f":"frog","g":"goat","h":"hen","i":"ice-cream","j":"jackpot","k":"key",
                 "l":"lion","m":"mango","n":"nose","o":"onion","p":"printer","q":"queen","r":"rose","s":"sea","t":"toy","u":"uniform","v":"van",
                 "w":"watch","x":"x-ray","y":"yak","z":"zoo"
};              
var l="";
var question_audio="";
var transcript="";

//system turn
function replydo(){
    const par=document.createElement("p");
    par.textContent=dict_reply[l];
    //const go=document.createTextNode(dict_reply[l]);
    //par.appendChild(go);
    const ele=document.getElementById("div1");
    ele.appendChild(par);
    text_to_speech_for_system();
    turn++;
    turn_audio++;
    l="";
window.scrollBy(0, 100);

}
//user turn
function create(){
    if(local_remote_switch_flag==0){
        var x=document.getElementById("ipt");
        question=x.value;
        console.log(question[0]);
        question_flag=question;
        question=question.toLowerCase();
        l=question[0];
        if(turn%2==0){
            //create element
        const par=document.createElement("p");
        par.textContent=question_flag;
        par.style.color="red";
        par.style.textAlign="right";
        par.style.backgroundColor="aqua";
    //append to div tag
        const ele=document.getElementById("div1");
        ele.appendChild(par);
        setTimeout(replydo,1500);
        turn++;
        }
        x.value="";
        question="";

    }else{
        var x=document.getElementById("ipt");
        question=x.value;
        console.log(question[0]);
        question_flag=question;
        question=question.toLowerCase();
        l=question[0];



        local_device_no=document.getElementById('local_device').value;
        remote_device_no=document.getElementById('remote_device').value;
        console.log(local_device_no+"#*#"+remote_device_no+"#*#"+question);
        ws.send(local_device_no+"#*#"+remote_device_no+"#*#"+question);

        x.value="";
        question="";
    }
}
function maketext(){
    var x=document.getElementById("ipt");
    question=x.value;
}

function text_to_speech_for_system(){
let speech=new SpeechSynthesisUtterance();
speech.lang="en-US";
speech.text=dict_reply[l];
speech.volume=1;
speech.rate=1;
speech.pitch=1;
window.speechSynthesis.speak(speech);

}

function text_to_speech_for_user(){
    let speechRecognition = new webkitSpeechRecognition();
    let final_transcript = "";
    //speechRecognition.continuous = true;
    speechRecognition.interimResults = true;
    speechRecognition.lang ="en-US";

    speechRecognition.onspeechend = function() {
        // when user is done speaking
        speechRecognition.stop();
       // l=question_audio[0];
        //replydo();
        console.log("stop");

    }
    speechRecognition.onstart = function() {
      question_audio="";
      console.log("start");
    }
    speechRecognition.onend = () => {
      // Hide the Status Element
      if(local_remote_switch_flag==0){
        var x=document.getElementById("ipt");
        x.value=transcript;
        create();
        console.log("end");
        transcript="";
      }else{
        var x=document.getElementById("ipt");
        x.value=transcript;
        question=x.value;
        console.log(question[0]);
        question_flag=question;
        question=question.toLowerCase();
        l=question[0];



        local_device_no=document.getElementById('local_device').value;
        remote_device_no=document.getElementById('remote_device').value;
        console.log(local_device_no+"#*#"+remote_device_no+"#*#"+question);
        ws.send(local_device_no+"#*#"+remote_device_no+"#*#"+question);

        x.value="";
        question="";
        console.log("end");
        transcript="";

      }

    };
   speechRecognition.onresult = function(event) {
        transcript = event.results[0][0].transcript;
        //var confidence = event.results[0][0].confidence;
        transcript=transcript.toLowerCase();
        //l=transcript[0];
        //replydo();
        
        console.log(transcript);
    };


    ///jdfjh
    document.querySelector("#btn2").onclick = () => {
        speechRecognition.start();
        //console.log("start");
      };
     
      document.querySelector("#btn3").onclick = () => {
        speechRecognition.stop();
        //console.log("stop");
      };

}





var local_device_no;
var remote_device_no;
var local_remote_switch_flag=0;
var input_str="ram";

//local to remote remote to local
function runswitch(){
    local_device_no=document.getElementById('local_device').value;
    remote_device_no=document.getElementById('remote_device').value;
    local_remote_switch_flag=local_remote_switch_flag+1;
    local_remote_switch_flag=local_remote_switch_flag%2;
}

  //const ws = new WebSocket('ws://localhost:8081');
  const ws = new WebSocket('wss://socketsbay.com/wss/v2/1/demo/');

  ws.addEventListener('open', (event) => {
      console.log('WebSocket connection opened');
  });

  ws.addEventListener('message', async (event) => {
      const message = event.data;
      console.log(message);
      const text=event.data;
    //   const blob = event.data;
    //   if (blob instanceof Blob) {
    //       const text = await blob.text();
          console.log(text)
          // Handle the text data here
          var p2_p1 = remote_device_no +"#*#"+ local_device_no+"#*#";
          var p1_p2 = local_device_no +"#*#"+ remote_device_no+"#*#";
          const remoteinputString =text;
          const delimiter = '#*#';
          const parts = remoteinputString.split(delimiter);

          // Check if there are at least 3 parts (0, 1, 2) before accessing the substring
          if (parts.length >= 3) {
          // The substring after the second occurrence of the delimiter is at index 2
              const substringAfterSecondDelimiter = parts[2];
              console.log(substringAfterSecondDelimiter);
              input_str=substringAfterSecondDelimiter;
           } else {
              console.log('The string does not contain at least two occurrences of the delimiter.');
           }

        //   input_str=x.value;
          //add tmp
          //    input_str=input_str.trim();
          input_str=input_str.toLowerCase();
          token=input_str;
          console.log(input_str);
          console.log(p2_p1)
          ///drop
          if (text.length >= p2_p1.length && text.startsWith(p2_p1)) {
            // a();
            const par=document.createElement("p");
            par.textContent=input_str;
            //const go=document.createTextNode(dict_reply[l]);
            //par.appendChild(go);
            const ele=document.getElementById("div1");
            ele.appendChild(par);
            l=input_str[0];
            dict_reply[l]=input_str;
            text_to_speech_for_system();
            turn++;
            turn_audio++;
            l="";
        window.scrollBy(0, 100);
            
            console.log("match");
          }
    //   }
  });

  ws.addEventListener('close', (event) => {
      console.log('WebSocket connection closed');
  });

