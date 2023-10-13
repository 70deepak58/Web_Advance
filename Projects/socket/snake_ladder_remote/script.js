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
         //snake no=3
         if(snake_no==3){
           if(l==43){
              p1_score-=26;
              bite=1; 
           }
           if(l==50){
               p1_score-=45;
               bite=1; 
            }
            if(l==56){
               p1_score-=48; 
               bite=1;
            }
            if(l==73){
               p1_score-=58;
               bite=1; 
            }
            if(l==84){
               p1_score-=26;
               bite=1;
            }
            if(l==87){
               p1_score-=38; 
               bite=1;
            }
            if(l==98){
               p1_score-=58;
               bite=1;
            }}
            //snake no=4
            if(snake_no==4){
              if(l==27){
                 p1_score-=22;
                 bite=1; 
              }
              if(l==40){
                  p1_score-=37;
                  bite=1; 
               }
               if(l==43){
                  p1_score-=25; 
                  bite=1;
               }
               if(l==54){
                  p1_score-=23;
                  bite=1; 
               }
               if(l==66){
                  p1_score-=21;
                  bite=1;
               }
               if(l==76){
                  p1_score-=18; 
                  bite=1;
               }
               if(l==89){
                  p1_score-=36;
                  bite=1;
               }
               if(l==99){
                 p1_score-=58;
                 bite=1;
              }}     //console.log(p1_score);
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
  //snake no=3
  if(snake_no==3){
     if(l==43){
         p2_score-=26; 
         bite=1;
      }
      if(l==50){
          p2_score-=45; 
          bite=1;
       }
       if(l==56){
          p2_score-=48; 
          bite=1;
       }
       if(l==73){
          p2_score-=58; 
          bite=1;
       }
       if(l==84){
          p2_score-=26; 
          bite=1;
       }
       if(l==87){
          p2_score-=38; 
          bite=1;
       }
       if(l==98){
          p2_score-=58; 
          bite=1;
       }}
       //snake no=4
       if(snake_no==4){
        if(l==27){
            p2_score-=22; 
            bite=1;
         }
         if(l==40){
             p2_score-=37; 
             bite=1;
          }
          if(l==43){
             p2_score-=25; 
             bite=1;
          }
          if(l==54){
             p2_score-=23; 
             bite=1;
          }
          if(l==66){
             p2_score-=21; 
             bite=1;
          }
          if(l==76){
             p2_score-=18; 
             bite=1;
          }
          if(l==89){
             p2_score-=36; 
             bite=1;
          }
          if(l==99){
           p2_score-=58; 
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
             //snake no=3
             if(snake_no==3){
                if(m==2){
                    p1_score+=21;
                    up=1; 
                 }
                 if(m==6){
                     p1_score+=39;
                     up=1; 
                  }
                  if(m==20){
                     p1_score+=39; 
                     up=1;
                  }
                  if(m==52){
                     p1_score+=20;
                     up=1; 
                  }
                  if(m==57){
                     p1_score+=39;
                     up=1;
                  }
                  if(m==71){
                     p1_score+=21; 
                     up=1;
                  }}
                  //snake no=4
                  if(snake_no==4){
                   if(m==4){
                       p1_score+=21;
                       up=1; 
                    }
                    if(m==13){
                     p1_score+=33;
                     up=1; 
                  }
                    if(m==33){
                        p1_score+=16;
                        up=1; 
                     }
                     if(m==42){
                        p1_score+=21; 
                        up=1;
                     }
                     if(m==50){
                        p1_score+=19;
                        up=1; 
                     }
                     if(m==62){
                        p1_score+=19;
                        up=1;
                     }
                     if(m==74){
                        p1_score+=18; 
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
             document.getElementById("status").innerHTML="Ladder P1";
             
    //ladder up sound
   var x=document.getElementById("myAudio_ladder");
   x.play();

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
 //snake no=3
 if(snake_no==3){
    if(m==2){
        p2_score+=21;
        up=1; 
     }
     if(m==6){
         p2_score+=39;
         up=1; 
      }
      if(m==20){
       p2_score+=39;
       up=1; 
    }
      if(m==52){
         p2_score+=20; 
         up=1;
      }
      if(m==57){
         p2_score+=39;
         up=1; 
      }
      if(m==71){
         p2_score+=21;
         up=1;
      }}
 //snake no=4
 if(snake_no==4){
    if(m==4){
        p2_score+=21;
        up=1; 
     }
     if(m==13){
      p2_score+=33;
      up=1; 
   }
     if(m==33){
         p2_score+=16;
         up=1; 
      }
      if(m==42){
       p2_score+=21;
       up=1; 
    }
      if(m==50){
         p2_score+=19; 
         up=1;
      }
      if(m==62){
         p2_score+=19;
         up=1; 
      }
      if(m==74){
         p2_score+=18;
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
turn=0;
//win sound
var x=document.getElementById("myAudio_win");
x.play();
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
      turn=0;
      //loose sound
   var x=document.getElementById("myAudio_loose");
   x.play();
      document.getElementById("Goti_P1").style.top=800+"px";
      document.getElementById("Goti_P1").style.left=0+"px";
      document.getElementById("Goti_P2").style.top=800+"px";
      document.getElementById("Goti_P2").style.left=0+"px";

      document.getElementById("status").innerHTML="Playing";
   }
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
   Stop_snake_img_chg=1;
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


    if(local_remote_switch_flag==0){
      setTimeout(dice_roll_system,2000);
      turn++;
    }else{
      local_device_no=document.getElementById('p1_name').value;
      remote_device_no=document.getElementById('p2_name').value;
      console.log(local_device_no+"#*#"+remote_device_no+"#*#"+no);
      ws.send(local_device_no+"#*#"+remote_device_no+"#*#"+no);
    }
    

  }
  auto=1;

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
var local_remote_switch_flag=0;
var local_device_no;
var remote_device_no;
//remote init 
function name_init_user(){
   var first = document.getElementById('p1_name').value;
   var second = document.getElementById('p2_name').value;
   local_device_no=first;
   remote_device_no=second;
   p1_name = first;
   p2_name = second;
   console.log(first, second);
   if (first != "" && second != "") {
       if (Number(first) > Number(second)) {
           turn = 0;
           document.getElementById("btn1").innerHTML="P1 CLICK";
           document.getElementById("Goti_P1").style.backgroundColor="red";
           document.getElementById("Goti_P2").style.backgroundColor="green";
       }
       else {
           turn = 1;
           document.getElementById("btn1").innerHTML="P2 CLICK";
           document.getElementById("Goti_P2").style.backgroundColor="red";
           document.getElementById("Goti_P1").style.backgroundColor="green";
       }
       console.log("set");
   }
   local_remote_switch_flag=1;
    document.getElementById("btnremote").style.backgroundColor="pink";
}





      //const ws = new WebSocket('ws://localhost:8081');
      const ws = new WebSocket('wss://socketsbay.com/wss/v2/1/demo/');

      ws.addEventListener('open', (event) => {
          console.log('WebSocket connection opened');
      });

      ws.addEventListener('message', async (event) => {
         const message = event.data;
         console.log(message);
         const text=event.data;
       //   const blob = event.data;
       //   if (blob instanceof Blob) {
       //       const text = await blob.text();
             console.log(text)
             // Handle the text data here
             var p2_p1 = remote_device_no +"#*#"+ local_device_no+"#*#";
             var p1_p2 = local_device_no +"#*#"+ remote_device_no+"#*#";
             const remoteinputString =text;
             const delimiter = '#*#';
             const parts = remoteinputString.split(delimiter);
   
             // Check if there are at least 3 parts (0, 1, 2) before accessing the substring
             if (parts.length >= 3) {
             // The substring after the second occurrence of the delimiter is at index 2
                 const substringAfterSecondDelimiter = parts[2];
                 console.log(substringAfterSecondDelimiter);
                 no=Number(substringAfterSecondDelimiter);
              } else {
                 console.log('The string does not contain at least two occurrences of the delimiter.');
              }

             console.log(p2_p1,no)
             ///drop
             if (text.length >= p2_p1.length && text.startsWith(p2_p1)) {

               var x=document.getElementById("myAudio_dice");
               x.play();
               // no=1+Math.floor(6*Math.random());
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
                turn++;
               
               console.log("match");
             }
       //   }
     });
      ws.addEventListener('close', (event) => {
          console.log('WebSocket connection closed');
      });





