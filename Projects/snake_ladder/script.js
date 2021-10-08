var img;
var no;
var p1_score=0;
var p2_score=0;
var turn=0;
var bite=0;
var up=0;
function snake_bite(flag,l){

    if(flag==1){
        //player 1 bite
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
     document.getElementById("P1").innerHTML="P1 SCORE:"+p1_score;
if(bite==1){
    window.prompt("kat liya p1 ko");
}
     bite=0;
    
}
else{
    //player 2 bite
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
      document.getElementById("P2").innerHTML="P2 SCORE:"+p2_score;
      if(bite==1){
          window.prompt("kat liya p2 ko");
      }
      bite=0;
      //console.log(p2_score);
}

}



function ladder_up(flag2,m){
    if(flag2==1){
        //player 1 up
        if(m==4){
            p1_score+=10;
            up=1; 
         }
         if(m==9){
             p1_score+=22;
             up=1; 
          }
          if(m==21){
             p1_score+=21; 
             up=1;
          }
          if(m==28){
             p1_score+=56;
             up=1; 
          }
          if(m==51){
             p1_score+=16;
             up=1;
          }
          if(m==72){
             p1_score+=19; 
             up=1;
          }
          if(m==80){
             p1_score+=19; 
             up=1;
          }
          document.getElementById("P1").innerHTML="P1 SCORE:"+p1_score;
          if(up==1){
              window.prompt("ladder p1");

          }
          up=0;
    }
    else{
        //player 2 up
        if(m==4){
            p2_score+=10;
            up=1; 
         }
         if(m==9){
             p2_score+=22;
             up=1; 
          }
          if(m==21){
             p2_score+=21; 
             up=1;
          }
          if(m==28){
             p2_score+=56;
             up=1; 
          }
          if(m==51){
             p2_score+=16;
             up=1;
          }
          if(m==72){
             p2_score+=19; 
             up=1;
          }
          if(m==80){
             p2_score+=19; 
             up=1;
          }
          document.getElementById("P2").innerHTML="P2 SCORE:"+p2_score;
          if(up==1){
              window.prompt("ladder p2");
          }
          up=0;
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
        ladder_up(1,p1_score);
        document.getElementById("btn1").innerHTML="P2 CLICK";
    }
    else{
        p2_score+=no;
        console.log("p2");
        console.log(p2_score);
        snake_bite(2,p2_score);
        ladder_up(2,p2_score);
        document.getElementById("btn1").innerHTML="P1 CLICK";
    }
    img=no+".png";
    console.log(img);
    document.getElementById("dice").style.backgroundImage="url("+img+")";
    turn++;
}