let speechRecognition = new webkitSpeechRecognition();
let final_transcript = "";
//speechRecognition.continuous = true;
speechRecognition.interimResults = true;
speechRecognition.lang = "en-US";

speechRecognition.onspeechend = function () {
    speechRecognition.stop();
    console.log("stop");
}
speechRecognition.onstart = function () {
    question_audio = "";
    console.log("start");
}
speechRecognition.onend = () => {
    console.log("end");
};
speechRecognition.onresult = (event) => {

    let interim_transcript = "";
    //final_transcript = "";
   /* for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
            final_transcript += event.results[i][0].transcript;
        } else {
            interim_transcript += event.results[i][0].transcript;
        }
    }*/
    final_transcript= event.results[0][0].transcript;
   // question_audio = final_transcript.toLowerCase();
    console.log(final_transcript);
    document.getElementById("container").innerHTML=final_transcript;
};



document.querySelector("#start").onclick = () => {
    speechRecognition.start();
  };
  document.querySelector("#stop").onclick = () => {
    speechRecognition.stop();
  };

