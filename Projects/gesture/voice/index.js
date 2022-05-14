var xcur=100,ycur=100;
var xScroll=0,yScroll=0;
flag=-1;
var a;
var input_str="",temp="";
function go(){

// console.log("dhfuhsuhyedui");

a=document.getElementById("ipt").value;
var x=document.getElementById("ipt");
    x.value="";
//document.getElementById("ipt").value="";
console.log(a);
if(a=="cursor"){
    flag=1;
}
else if(a=="scroll"){
    flag=2;
}
else if(a=="click"){
    flag=3;
}
// else{
//     flag=-1;
// }


if(flag==1){
    cursor(a);
}
else if(flag==2){
    scroll(a);
}
else if(flag==3){
    cli(xcur,ycur);
}
}

//cursor contol function by user
function cursor(a){
if(a=="up"){
    ycur-=20;
    document.getElementById("doe").style.top=ycur+"px";
}
else if(a=="down"){
    ycur+=20;
    document.getElementById("doe").style.top=ycur+"px";
}
else if(a=="left"){
    xcur-=20;
    document.getElementById("doe").style.left=xcur+"px";
}
else if(a=="right"){
    xcur+=20;
    document.getElementById("doe").style.left=xcur+"px";
}
//console.log(x,y);
}

//scroll control function by user
function scroll(a){
if(a=="up"){
    yScroll-=20;
    ycur-=20;
    document.getElementById("doe").style.top=ycur+"px"; 
}
else if(a=="down"){
    yScroll+=20;
    ycur+=20;
    document.getElementById("doe").style.top=ycur+"px";
}
else if(a=="left"){
    xScroll-=20;
    xcur-=20;
    document.getElementById("doe").style.left=xcur+"px";
}
else if(a=="right"){
    xScroll+=20;
    xcur+=20;
    document.getElementById("doe").style.left=xcur+"px";
}
window.scrollTo(xScroll, yScroll);
//console.log(x,y);
}


//clicking by calliing this function
function cli(x,y){
document.elementFromPoint(x,y).click();
}






function printMousePos(event) {
console.log(event.clientX,event.clientY);

}

document.addEventListener("click", printMousePos);


function alare(){
    var i=0;
    var length=input_str.length;
while(i<length){
   
    if((input_str[i]!='.')){
        temp+=input_str[i];
    }
    i++;
}

}


function run(){
    var call_text=document.getElementById("container").innerHTML;
    call_text=call_text.toLowerCase();
    input_str=call_text;
    alare();


    
    var x=document.getElementById("ipt");
    x.value=temp;
    console.log("dhfhghjdhfgdhgfvhdcfhdrg");
    console.log(temp);
    // x=document.getElementById("ipt");
    // x.value=call_text;
    //x.value="";
    //a();
    go();
    temp="";
    ///drop
   // window.open('mailto:abc.gmail.com');
}


//implemented speech recognition
function speech_by_me(){
    speechRecognition.start();
}
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
    x=document.getElementById("ipt");
    x.value=call_text;
    setTimeout(run,300);
   // console.log(call_text);
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

