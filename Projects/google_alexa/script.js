let speechRecognition = new webkitSpeechRecognition();
let final_transcript = "";
let interim_result="";
let word="";
speechRecognition.continuous = true;
speechRecognition.interimResults = true;
speechRecognition.lang = "en-US";

speechRecognition.onspeechend = function () {
    //speechRecognition.stop();
    console.log("stop");
}
speechRecognition.onstart = function () {
   // question_audio = "";
    console.log("start");
}
speechRecognition.onend = () => {
    console.log("end");
    text_to_speech_for_system();
    word="";
    speechRecognition.start();
};
speechRecognition.onresult = (event) => {

    interim_transcript = "";
    //final_transcript = "";
    for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
            final_transcript= event.results[i][0].transcript;
            word=final_transcript
        } else {
            interim_transcript += event.results[i][0].transcript;
        }
    }

    console.log(final_transcript);
    document.getElementById("container").innerHTML=final_transcript;
};

document.querySelector("#start").onclick = () => {
    speechRecognition.start();
  };


  function text_to_speech_for_system(){
    let speech=new SpeechSynthesisUtterance();
    speech.lang="en-US";
    speech.text=word;
    speech.volume=1;
    speech.rate=1;
    speech.pitch=1;
    window.speechSynthesis.speak(speech);
    
    }
    

