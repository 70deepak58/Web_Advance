let turn=0;
let question_flag="";
let question="";
let turn_audio=0;
let dict_reply={"a":"apple","b":"boy","c":"cat","d":"dog","e":"elephant","f":"frog","g":"goat","h":"hen","i":"ice-cream","j":"jackpot","k":"key",
                 "l":"lion","m":"mango","n":"nose","o":"onion","P":"printer","q":"queen","r":"rose","s":"sea","t":"toy","u":"uniform","v":"van",
                 "w":"watch","x":"x-ray","y":"yak","z":"zoo"
};              
var l="";
let final_transcript = "";
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

}
//user turn
function create(){
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
    
  
    //speechRecognition.continuous = true;
    speechRecognition.interimResults = true;
    speechRecognition.lang="en-US";


    speechRecognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        //var confidence = event.results[0][0].confidence;
        transcript=transcript.toLowerCase();
       // l=transcript[0];
       // replydo();

var x=document.getElementById("ipt");
    x.value=transcript;
create ();
        console.log(transcript);
    };

    document.querySelector("#btn2").onclick = () => {
        speechRecognition.start();
      };
      document.querySelector("#btn3").onclick = () => {
        speechRecognition.stop();
      };
      final_transcript="";

}
