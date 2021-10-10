var img;
var no;
var p1_score=0;
var p2_score=0;
var turn=0;
var bite=0;
var up=0;
var Goti_P1_Top;
var Goti_P1_Left;
var Goti_P2_Top;
var Goti_P2_Left;
var auto=0;
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
     Goti_P1_Top=900-90*Math.floor(p1_score/10)-90;
     Goti_P1_Left=90*Math.floor(p1_score%10)-90;
     if(((Math.floor(p1_score/10))%2!=0)&&(p1_score/10)!=0){
        Goti_P1_Left=900-(90*Math.floor(p1_score%10));
        //Goti_P1_Left=0;
        console.log("odd"+p1_score/10);
                }
                //bug 20 40 60
     if((Math.floor((p1_score/10)%2==0))&&(p1_score%10==0)){
         Goti_P1_Left=0;
         Goti_P1_Top=900-90*Math.floor(p1_score/10);
       // prompt("bug here");
       console.log("bug there");

    }
    //bug2 10 20 30
    if((Math.floor((p1_score/10)%2!=0))&&(p1_score%10==0)){
        Goti_P1_Left=800;
        Goti_P1_Top=900-90*Math.floor(p1_score/10);
      // prompt("bug here");
      console.log("bug there");

   }
     document.getElementById("Goti_P1").style.top=Goti_P1_Top+"px";
     document.getElementById("Goti_P1").style.left=Goti_P1_Left+"px";
     document.getElementById("P1").innerHTML="P1 SCORE:"+p1_score;
     console.log(Goti_P1_Top);
     console.log(Goti_P1_Left);
     
if(bite==1){
    //window.prompt("kat liya p1 ko");
    console.log("kat liya");
    document.getElementById("status").innerHTML="Bite P1";

    //snake bite sound
   var x=document.getElementById("myAudio_snake");
   x.play();
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


      Goti_P2_Top=900-90*Math.floor(p2_score/10)-90;
      Goti_P2_Left=90*Math.floor(p2_score%10)-90;
      if(((Math.floor(p2_score/10))%2!=0)&&(p2_score/10)!=0){
         Goti_P2_Left=900-(90*Math.floor(p2_score%10));
         //Goti_P1_Left=0;
         console.log("odd"+p2_score/10);
                 }
                            //bug 20 40 60
     if((Math.floor((p2_score/10)%2==0))&&(p2_score%10==0)){
        Goti_P2_Left=0;
        Goti_P2_Top=900-90*Math.floor(p2_score/10);
      // prompt("bug here");
      console.log("bug there");

   }
      //bug2 10 20 30
      if((Math.floor((p2_score/10)%2!=0))&&(p2_score%10==0)){
        Goti_P2_Left=800;
        Goti_P2_Top=900-90*Math.floor(p2_score/10);
      // prompt("bug here");
      console.log("bug there");

   }
      document.getElementById("Goti_P2").style.top=Goti_P2_Top+"px";
      document.getElementById("Goti_P2").style.left=Goti_P2_Left+"px";
      
      document.getElementById("P2").innerHTML="P2 SCORE:"+p2_score;
      if(bite==1){
         // window.prompt("kat liya p2 ko");
         console.log("kat liya p2 ko");
         document.getElementById("status").innerHTML="Bite P2";
         
    //snake bite sound
   var x=document.getElementById("myAudio_snake");
   x.play();
      }
      //bug here
      if((Math.floor((p1_score/10)%2==0))&&(p1_score%10==0)){
       // prompt("bug here");
       console.log("bug there");

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
          Goti_P1_Top=900-90*Math.floor(p1_score/10)-90;
          Goti_P1_Left=90*Math.floor(p1_score%10)-90;
          if(((Math.floor(p1_score/10))%2!=0)&&(p1_score/10)!=0){
Goti_P1_Left=900-(90*Math.floor(p1_score%10));
console.log("odd"+p1_score/10);
//Goti_P1_Left=0;
        }

         //bug here 20 40 60
         if((Math.floor((p1_score/10)%2==0))&&(p1_score%10==0)){
             Goti_P1_Left=0;
             Goti_P1_Top=900-90*Math.floor(p1_score/10);
           // prompt("bug here");
           console.log("bug there");
   
        }

        //bug2 10 20 30
        //bug2 10 20 30
    if((Math.floor((p1_score/10)%2!=0))&&(p1_score%10==0)){
        Goti_P1_Left=800;
        Goti_P1_Top=900-90*Math.floor(p1_score/10);
      // prompt("bug here");
      console.log("bug there");

   }
          document.getElementById("Goti_P1").style.top=Goti_P1_Top+"px";
          document.getElementById("Goti_P1").style.left=Goti_P1_Left+"px";
          //document.getElementById("P1").innerHTML="P1 SCORE:"+p1_score;
          document.getElementById("P1").innerHTML="P1 SCORE:"+p1_score;


         
          if(up==1){
             // window.prompt("ladder p1");
             console.log("laddaer P1");
             document.getElementById("status").innerHTML="Ladder P1";
             
    //ladder up sound
   var x=document.getElementById("myAudio_ladder");
   x.play();

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



          
      Goti_P2_Top=900-90*Math.floor(p2_score/10)-90;
      Goti_P2_Left=90*Math.floor(p2_score%10)-90;
      if(((Math.floor(p2_score/10))%2!=0)&&(p2_score/10)!=0){
         Goti_P2_Left=900-(90*Math.floor(p2_score%10));
         //Goti_P1_Left=0;
         console.log("odd"+p2_score/10);
                 }

                                         //bug 20 40 60
     if((Math.floor((p2_score/10)%2==0))&&(p2_score%10==0)){
        Goti_P2_Left=0;
        Goti_P2_Top=900-90*Math.floor(p2_score/10);
      // prompt("bug here");
      console.log("bug there");

   }
       //bug2 10 20 30
       if((Math.floor((p2_score/10)%2!=0))&&(p2_score%10==0)){
        Goti_P2_Left=800;
        Goti_P2_Top=900-90*Math.floor(p2_score/10);
      // prompt("bug here");
      console.log("bug there");

   }
      document.getElementById("Goti_P2").style.top=Goti_P2_Top+"px";
      document.getElementById("Goti_P2").style.left=Goti_P2_Left+"px";
          document.getElementById("P2").innerHTML="P2 SCORE:"+p2_score;
          //bug here
          if((Math.floor((p1_score/10)%2==0))&&(p1_score%10==0)){
           // prompt("bug here");
           console.log("bug there");
   
        }
          if(up==1){
             // window.prompt("ladder p2");
             console.log("ladder p2");
             document.getElementById("status").innerHTML="Ladder P2";
             //ladder up sound
   var x=document.getElementById("myAudio_ladder");
   x.play();
          }
          up=0;
    }

}



function win_check(){
   if(p1_score>=100){
window.alert("P1 won");
p1_score=0;
p2_score=0;
document.getElementById("Goti_P1").style.top=800+"px";
document.getElementById("Goti_P1").style.left=0+"px";
document.getElementById("Goti_P2").style.top=800+"px";
document.getElementById("Goti_P2").style.left=0+"px";

document.getElementById("status").innerHTML="Playing";
   }
   if(p2_score>=100){
      window.alert("P2 won");
      p1_score=0;
      p2_score=0;
      document.getElementById("Goti_P1").style.top=800+"px";
      document.getElementById("Goti_P1").style.left=0+"px";
      document.getElementById("Goti_P2").style.top=800+"px";
      document.getElementById("Goti_P2").style.left=0+"px";

      document.getElementById("status").innerHTML="Playing";
   }
}


//2 player mode click on div btn1
function dice_roll(){

 no=1+Math.floor(6*Math.random());
    console.log(no);
    if(turn%2==0){
        p1_score+=no;
        console.log("p1");
        console.log(p1_score);
        snake_bite(1,p1_score);
        ladder_up(1,p1_score);
        win_check();
        document.getElementById("btn1").innerHTML="P2 CLICK";
    }
    else{
        p2_score+=no;
        console.log("p2");
        console.log(p2_score);
        snake_bite(2,p2_score);
        ladder_up(2,p2_score);
        win_check();
        document.getElementById("btn1").innerHTML="P1 CLICK";
    }
    img=no+".png";
    console.log(img);
    document.getElementById("dice").style.backgroundImage="url("+img+")";
    turn++;
}

//single player mode click on dice
function dice_roll_system(){
   //ludo dice roll sound
   var x=document.getElementById("myAudio_dice");
   x.play();
   no=1+Math.floor(6*Math.random());
   p2_score+=no;
   console.log("p2");
   console.log(p2_score);
   snake_bite(2,p2_score);
   ladder_up(2,p2_score);
   win_check();
   document.getElementById("btn1").innerHTML="P1 CLICK";
   img=no+".png";
    console.log(img);
    document.getElementById("dice").style.backgroundImage="url("+img+")";
    auto=0;
}
function dice_roll_auto(){
   
  if(auto==0){
  if(turn%2==0){
     //ludo dice roll sound
   var x=document.getElementById("myAudio_dice");
   x.play();
      no=1+Math.floor(6*Math.random());
        p1_score+=no;
        console.log("p1");
        console.log(p1_score);
        snake_bite(1,p1_score);
        ladder_up(1,p1_score);
        win_check();
        document.getElementById("btn1").innerHTML="P2 CLICK";
        img=no+".png";
    console.log(img);
    document.getElementById("dice").style.backgroundImage="url("+img+")";
       turn++;
    }
    
      setTimeout(dice_roll_system,2000);
      turn++;
  }
  auto=1;

}