let movX=700;
let movY=300;
let flag=3*(Math.PI)/2;
let degS;
let seconds;
let i=0;
let numFlag=0;
let numPos=0;
let degH;
let hours;
let degM;
let minutes;

let hourAlarm=4;
let minAlarm=30;



setInterval(rev,1000);

function rev(){
    const d=new Date();
    seconds=d.getSeconds();
    hours=d.getHours();
    minutes=d.getMinutes();

    //digital clock
    document.getElementById("digital").innerHTML=d.toLocaleTimeString();
//analog clock
//seconds
    degS=seconds*2*(Math.PI)/60;
    document.getElementById("sec").style.left=160+160*Math.cos(degS+flag)+"px";
    document.getElementById("sec").style.top=300+160*Math.sin(degS+flag)+"px";

    //minutes
    degM=minutes*2*(Math.PI)/60+(seconds*2*(Math.PI)/60)/60;
    document.getElementById("min").style.left=160+120*Math.cos(degM+flag)+"px";
    document.getElementById("min").style.top=300+120*Math.sin(degM+flag)+"px";

    //hours
    degH=hours*2*(Math.PI)/12+(minutes*2*(Math.PI)/60)/12;
    document.getElementById("hour").style.left=160+80*Math.cos(degH+flag)+"px";
    document.getElementById("hour").style.top=300+80*Math.sin(degH+flag)+"px";


    //alarm match
    if(((hours==hourAlarm)||(hours==hourAlarm+12))&&minutes==minAlarm){
        console.log("play music");
        setInterval(music_time,2000);
    }

    //greetings and themes
    if(hours<12){
        document.getElementById("greetings").innerHTML="Good Morning";
        document.getElementById("theme").style.backgroundColor="orange";
    }
    if(hours>11&& hours<15){
        document.getElementById("greetings").innerHTML="Noon";
        document.getElementById("theme").style.backgroundColor="white";
    }
    if(hours>15&&hours<22){
        document.getElementById("greetings").innerHTML="Good Evening";
        document.getElementById("theme").style.backgroundColor="rgb(226, 142, 181)";
        //
    }
    if(hours>21){
        document.getElementById("greetings").innerHTML="Good Night";
        document.getElementById("theme").style.backgroundColor="rgb(59, 23, 23)";
    }
}
function music_time(){
    var x=document.getElementById("srced");
   x.play();
}

function arrange(){
    for(i=1;i<=12;i++){
        numPos=2*(Math.PI)*i/12;
        document.getElementById("a"+i).style.left=160+160*Math.cos(numPos+flag)+"px";
    document.getElementById("a"+i).style.top=300+160*Math.sin(numPos+flag)+"px";
    }
   // console.log("boom");
}
function play(){

}
function set(adi){
    if(adi=="h0"){
        hourAlarm--;
        if(hourAlarm==0){
            hourAlarm=1;
        }
    }
    if(adi=="h1"){
        hourAlarm++;
        if(hourAlarm==13){
            hourAlarm=12;
        }
    }
    if(adi=="m0"){
        minAlarm--;
        if(minAlarm==-1){
            minAlarm=0;
        }
    }
    if(adi=="m1"){
        minAlarm++;
        if(minAlarm==60){
            minAlarm=59;
        }
    }

    document.getElementById("Ah").innerHTML=hourAlarm;
    document.getElementById("Am").innerHTML=minAlarm;

}