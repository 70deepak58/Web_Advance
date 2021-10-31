var input_str;
var action="";
var address="";
var flag=0;
var music_flag=1;
var image_flag=1;
var x;
let tf=1;
var token="";
var theme_flag=0;
var theme_bg=["yellow","red","black","blue","black","orange","green"];
var theme_fg=["red","blue","yellow","green","white","pink","violet"];
var loca="";

var dict_open={"google":"https://www.google.com",
            "flipkart":"https://www.flipkart.com",
            "amazon":"https://www.amazon.in",
            "netflix":"https://www.netflix.com",
            "youtube":"https://www.youtube.com"};

var project_dict={
    "snake":"http://70deepak58.github.io/Web_Advance/Ludo_Advance/snake_ladder_2player/index.html",
    "snake_ai":"http://70deepak58.github.io/Web_Advance/Ludo_Advance/snake_ladder_both/index.html",
    "tictactoe":"http://70deepak58.github.io/Web_Advance/Projects/TicTacToe/tic_tac_toe.html",
    "tictactoe_ai":"http://70deepak58.github.io/Web_Advance/Projects/TicTacToe/tic_tac_toe_ai.html",
    "alarm":"http://70deepak58.github.io/Web_Advance/Projects/clock/index.html",
    "diano":"http://70deepak58.github.io/Web_Advance/Projects/diano/index.html",
    "language":"http://70deepak58.github.io/Web_Advance/Projects/language/index.html",
    "portfolio":"http://70deepak58.github.io/Web_Advance/Projects/Portfolio/index.html",
    "gun":"http://70deepak58.github.io/Web_Advance/Projects/gun_soot_auto/index.html",
    "calculator":"http://70deepak58.github.io/Web_Advance/Projects/calculator/simple/index.html",
    "theme":"http://70deepak58.github.io/Web_Advance/Projects/Theme/index.html",
    "tom":"http://70deepak58.github.io/Web_Advance/Projects/talkingTom/index.html",
    "chat":"http://70deepak58.github.io/Web_Advance/Projects/chat_app/index.html",
    "scan":"http://70deepak58.github.io/Web_Advance/scan.html"
};

            //action 
function operation(){
    //to call any number
    if(action=="call"){
        window.open('tel:'+address);
        console.log("call");
    }
    //to mail any mailid
    else if(action=="mail"){
        window.open('mailto:'+address);
        console.log("mail");
    }
    //to whatsapp
    else if(action=="whatsapp"){
        window.open('https://wa.me/91'+address);
        console.log("whatsapp");
    }
    //to telegram
    else if(action=="telegram"){
        window.open('https://t.me/'+address);
        console.log("telegram");
    }
    //to open url
    else if(action=="open"){
        window.open(dict_open[address]);
        console.log("open");
    }
    //all music function
    else if((action=="music")&&(address=="play")){
        x=document.getElementById("music");
        x.play();
        console.log("music play");
    }
    else if((action=="music")&&(address=="stop")){
        x=document.getElementById("music");
        x.pause();
        console.log("music stop");
    }
    else if((action=="music")&&(address=="next")){
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
    }
    else if((action=="music")&&(address=="previous")){
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
    //image functon
    else if((action=="image")&&(address=="display")){
       x=document.getElementById("image").style.display="inherit";
    }
    else if((action=="image")&&(address=="hide")){
        x=document.getElementById("image").style.display="none";
    }
    else if((action=="image")&&(address=="next")){
        image_flag++;
        if(image_flag>=18){
            image_flag=1;
        }
      x=document.getElementById("image");
      x.setAttribute("src","image/"+image_flag+".jpeg");
     // x.load();
      console.log("next image");

    }
    else if((action=="image")&&(address=="previous")){
        image_flag--;
        if(image_flag<=0){
            image_flag=17;
        }
        x=document.getElementById("image");
        x.setAttribute("src","image/"+image_flag+".jpeg");
        //x.load();
        console.log("previous image");

    }
    //to change background
    else if((action=="background")){
        document.getElementById("bdy").style.backgroundColor=address;
        console.log("changed background");
    }
    // change theme
    else if((action=="theme")&&(address=="next")){
        theme_flag++;
        if(theme_flag>=7){
            theme_flag=0;
        }
        document.getElementById("bdy").style.backgroundColor=theme_bg[theme_flag];
        //here i have to hard code every id
        for(tf=1;tf<=19;tf++){
            document.getElementById("x"+tf).style.color=theme_fg[theme_flag];
        }
        console.log("theme change");
        tf=1;

    }
    //here i will use my project
    else if(action=="project"){
        window.open(project_dict[address]);
        console.log("open");

    }
    //to vibrate
    else if(action=="vibrate"){
        navigator.vibrate(1000);
        console.log("vibrate");
    }
    //show location
    else if(action=="location"){
        loca=document.getElementById("location");
        getLocation();
        console.log("location");

    }
    else{
        window.open("https://www.google.com/search?q="+token);
        console.log("google search");
    }
token="";
}

//string processing
function a(){
    var i=0;
    var length=input_str.length;
while(i<length){
    if((input_str[i]!=' ')&&(flag==0)){
        action+=input_str[i];
    }
    while(input_str[i]==' '){
        i++;
        flag=1;
    }
    if((flag==1)&&(input_str[i]!='.')){
        address+=input_str[i];
    }
    console.log(input_str[i]);
    i++;
}
//drop only one
console.log("inside a");
console.log(action);
console.log(address);
operation();
action="";
address="";
flag=0;
}
//initial action
function run(){
    
    var x=document.getElementById("chat");
    input_str=x.value;
    input_str=input_str.toLowerCase();
    token=input_str;
    console.log(input_str);
    x.value="";
    a();
    ///drop
    console.log(token);
   // window.open('mailto:abc.gmail.com');
}


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



//talking tom part
var call_text="";
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
    call_text=document.getElementById("container").innerHTML;
    x=document.getElementById("chat");
    x.value=call_text;
    setTimeout(run,1000);
    setTimeout(poke,1000);
   // console.log(call_text);
};
speechRecognition.onresult = (event) => {

    let interim_transcript = "";

    final_transcript= event.results[0][0].transcript;
    console.log(final_transcript);
    document.getElementById("container").innerHTML=final_transcript;
    document.getElementById("chat").innerHTML=final_transcript;
};



document.querySelector("#start").onclick = () => {
    speechRecognition.start();
  };
  document.querySelector("#stop").onclick = () => {
    speechRecognition.stop();
  };

  function poke(){
//window.prompt(call_text);
let speech=new SpeechSynthesisUtterance();
speech.lang="en-US";
speech.text=call_text;
speech.volume=1;
speech.rate=1;
speech.pitch=1;
window.speechSynthesis.speak(speech);

  }
