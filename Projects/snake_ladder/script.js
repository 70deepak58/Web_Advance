var img;
var no;
var p1_score=0;
var p2_score=0;
var turn=0;
var bite=0;
function snake_bite(flag,l){
    if(flag==1){
    if(l==17){
       p1_score-=10;
       bite=1; 
    }
    if(l==54){
        p1_score-=20;
        bite=1; 
     }
     if(l==62){
        p1_score-=43; 
        bite=1;
     }
     if(l==64){
        p1_score-=4;
        bite=1; 
     }
     if(l==87){
        p1_score-=51;
        bite=1;
     }
     if(l==93){
        p1_score-=20; 
        bite=1;
     }
     if(l==95){
        p1_score-=20; 
        bite=1;
     }
     if(l==98){
        p1_score-=19; 
        bite=1;
     }
     //console.log(p1_score);
if(bite==1){
    window.prompt("kat liya p1 ko");
}
     bite=0;
    
}
else{
    if(l==17){
        p2_score-=10; 
        bite=1;
     }
     if(l==54){
         p2_score-=20; 
         bite=1;
      }
      if(l==62){
         p2_score-=43; 
         bite=1;
      }
      if(l==64){
         p2_score-=4; 
         bite=1;
      }
      if(l==87){
         p2_score-=51; 
         bite=1;
      }
      if(l==93){
         p2_score-=20; 
         bite=1;
      }
      if(l==95){
         p2_score-=20; 
         bite=1;
      }
      if(l==98){
         p2_score-=19; 
         bite=1;
      }
      if(bite==1){
          window.prompt("kat liya p2 ko");
      }
      bite=0;
      //console.log(p2_score);
}

}

function dice_roll(){
    
    no=1+Math.floor(6*Math.random());
    console.log(no);
    if(turn%2==0){
        p1_score+=no;
        console.log("p1");
        console.log(p1_score);
        snake_bite(1,p1_score);
    }
    else{
        p2_score+=no;
        console.log("p2");
        console.log(p2_score);
        snake_bite(2,p2_score);
    }
    img=no+".png";
    console.log(img);
    document.getElementById("dice").style.backgroundImage="url("+img+")";
    turn++;
}