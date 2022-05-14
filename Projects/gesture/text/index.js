var xcur=100,ycur=100;
var xScroll=0,yScroll=0;
flag=-1;
function go(){

// console.log("dhfuhsuhyedui");
var a;
a=document.getElementById("ipt").value;
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