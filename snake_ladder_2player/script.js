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

//image change background
var snake_no=1;
var Stop_snake_img_chg=0;
function snake_bite(flag,l){
    if(flag==1){
        //player 1 bite


        //snake no=1
        if(snake_no==1){
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
     }}

     //snake no=2
     if(snake_no==2){
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
          p1_score-=63;
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
          p1_score-=21; 
          bite=1;
       }}
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
}
     bite=0;
    
}
else{
    //player 2 bite

    //snake no=1
    if(snake_no==1){
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
      }}
      //snake no=2
    if(snake_no==2){
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
           p2_score-=63; 
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
           p2_score-=21; 
           bite=1;
        }}


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

        //snake no =1
        if(snake_no==1){
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
          }}
          //snake no 2
          if(snake_no==2){
            if(m==4){
                p1_score+=10;
                up=1; 
             }
             if(m==9){
                 p1_score+=22;
                 up=1; 
              }
              if(m==20){
                 p1_score+=18; 
                 up=1;
              }
              if(m==28){
                 p1_score+=56;
                 up=1; 
              }
              if(m==40){
                 p1_score+=19;
                 up=1;
              }
              if(m==51){
                 p1_score+=16; 
                 up=1;
              }
              if(m==63){
                 p1_score+=18; 
                 up=1;
              }
              if(m==71){
               p1_score+=91; 
               up=1;
            }}
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

          }
          up=0;
    }
    else{
        //player 2 up

        //snake no =1
        if(snake_no==1){
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
          }}
//snake no=2
if(snake_no==2){
   if(m==4){
       p2_score+=10;
       up=1; 
    }
    if(m==9){
        p2_score+=22;
        up=1; 
     }
     if(m==20){
        p2_score+=18; 
        up=1;
     }
     if(m==28){
        p2_score+=56;
        up=1; 
     }
     if(m==40){
        p2_score+=19;
        up=1;
     }
     if(m==51){
        p2_score+=16; 
        up=1;
     }
     if(m==63){
        p2_score+=18; 
        up=1;
     }
     if(m==71){
      p2_score+=20; 
      up=1;
   }}


          
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
          }
          up=0;
    }

}



function win_check(){
   if(p1_score>=100){
window.alert("P1 won");
p1_score=0;
p2_score=0;
Stop_snake_img_chg=0;
console.log(snake_no);
document.getElementById("Goti_P1").style.top=800+"px";
document.getElementById("Goti_P1").style.left=0+"px";
document.getElementById("Goti_P2").style.top=800+"px";
document.getElementById("Goti_P2").style.left=0+"px";
   }
   if(p2_score>=100){
      window.alert("P2 won");
      p1_score=0;
      p2_score=0;
      Stop_snake_img_chg=0;
      console.log(snake_no);
      document.getElementById("Goti_P1").style.top=800+"px";
      document.getElementById("Goti_P1").style.left=0+"px";
      document.getElementById("Goti_P2").style.top=800+"px";
      document.getElementById("Goti_P2").style.left=0+"px";
   }
}



function dice_roll(){
   Stop_snake_img_chg=1;
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

//snake image select function
function snake_img_selectTo(chg_snk){
   if(Stop_snake_img_chg==0){
   if(chg_snk=="plus"){
      snake_no++;
   }
   if(chg_snk=="minus"){
      snake_no--;
   }
   if(snake_no>4){
      snake_no=4;
   }
   if(snake_no<=0){
      snake_no=1;
   }
   console.log(snake_no);
  document.getElementById("snake_img").style.backgroundImage="url(snakes"+snake_no+".jpg)";
}

}