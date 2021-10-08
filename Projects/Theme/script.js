//red is light
//green is dark

var i=0;
function light(){
    //back ground colour
   // document.getElementById("tx").style.color="white";
    document.getElementById("na").style.backgroundColor="red";
    document.getElementById("container").style.backgroundColor="rgb(204, 84, 84)";
    document.getElementById("ftr").style.backgroundColor="rgb(243, 168, 168)";
    document.getElementById("bdy").style.backgroundColor="white";
    //button
    document.getElementById("chg").innerHTML="DARK";
    document.getElementById("chg").style.backgroundColor="black";
    document.getElementById("chg").style.color="white";
    

}
function dark(){
  //  document.getElementById("tx").style.color="black";
    document.getElementById("na").style.backgroundColor="green";
    document.getElementById("container").style.backgroundColor="rgb(113, 226, 113)";
    document.getElementById("ftr").style.backgroundColor="rgb(175, 228, 175)";
    document.getElementById("bdy").style.backgroundColor="rgb(82, 82, 83)";
    //button
    document.getElementById("chg").innerHTML="LIGHT";
    document.getElementById("chg").style.backgroundColor="white";
    document.getElementById("chg").style.color="black";
}
function theme(){
    i++;
    
    //document.getElementById("na").style.backgroundColor="green";
    if(i%2==0){
        light();
    }
    else{
        dark();
    }

}