let word="";
function text_to_speech_for_system(){
    let speech=new SpeechSynthesisUtterance();
    speech.lang="en-US";
    speech.text=word;
    speech.volume=1;
    speech.rate=1;
    speech.pitch=1;
    window.speechSynthesis.speak(speech);
    
    }

function speakTest(){
   let x= document.getElementById("txt");
    word=x.value;
    console.log(word);
    text_to_speech_for_system();
    word="";
    x.value="";
}