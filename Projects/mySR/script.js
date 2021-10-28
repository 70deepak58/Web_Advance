let text="pm";
let flag="";
let n=0;
let p=0;
var intv="";
var x="";
function test(){
    n=text.length;
    pick();
    intv=setInterval(pick,200);
    //pick();

}
function pick(){
    x=document.getElementById("mus");
    var sour=document.getElementById("sr");
    
    
    if(text[p]=='a'){
        sour.setAttribute("src","a.mp3");
        console.log(text[p]);
    }
    if(text[p]=='b'){
        sour.setAttribute("src","b.mp3");
        console.log(text[p]);
    }
    if(text[p]=='c'){
        sour.setAttribute("src","c.mp3");
        console.log(text[p]);
    }
    if(text[p]=='d'){
        sour.setAttribute("src","d.mp3");
        console.log(text[p]);
    }
    if(text[p]=='e'){
        sour.setAttribute("src","e.mp3");
        console.log(text[p]);
    }
    if(text[p]=='f'){
        sour.setAttribute("src","f.mp3");
        console.log(text[p]);
    }
    if(text[p]=='g'){
        sour.setAttribute("src","g.mp3");
        console.log(text[p]);
    }
    if(text[p]=='h'){
        sour.setAttribute("src","h.mp3");
        console.log(text[p]);
    }
    if(text[p]=='i'){
        sour.setAttribute("src","i.mp3");
        console.log(text[p]);
    }
    if(text[p]=='j'){
        sour.setAttribute("src","j.mp3");
        console.log(text[p]);
    }
    if(text[p]=='k'){
        sour.setAttribute("src","k.mp3");
        console.log(text[p]);
    }
    if(text[p]=='l'){
        sour.setAttribute("src","l.mp3");
        console.log(text[p]);
    }
    if(text[p]=='m'){
        sour.setAttribute("src","m.mp3");
        console.log(text[p]);
    }
    if(text[p]=='n'){
        sour.setAttribute("src","n.mp3");
        console.log(text[p]);
    }
    if(text[p]=='o'){
        sour.setAttribute("src","o.mp3");
        console.log(text[p]);
    }
    if(text[p]=='p'){
        sour.setAttribute("src","p.mp3");
        console.log(text[p]);
    }
    if(text[p]=='q'){
        sour.setAttribute("src","q.mp3");
        console.log(text[p]);
    }
    if(text[p]=='r'){
        sour.setAttribute("src","r.mp3");
        console.log(text[p]);
    }
    if(text[p]=='s'){
        sour.setAttribute("src","s.mp3");
        console.log(text[p]);
    }
    if(text[p]=='t'){
        sour.setAttribute("src","t.mp3");
        console.log(text[p]);
    }
    if(text[p]=='u'){
        sour.setAttribute("src","u.mp3");
        console.log(text[p]);
    }
    if(text[p]=='v'){
        sour.setAttribute("src","v.mp3");
        console.log(text[p]);
    }
    if(text[p]=='w'){
        sour.setAttribute("src","w.mp3");
        console.log(text[p]);
    }
    if(text[p]=='x'){
        sour.setAttribute("src","x.mp3");
        console.log(text[p]);
    }
    if(text[p]=='y'){
        sour.setAttribute("src","y.mp3");
        console.log(text[p]);
    }
    if(text[p]=='z'){
        sour.setAttribute("src","z.mp3");
        console.log(text[p]);
    }

    x.load();
    x.play();

    p++;
    if(p==n){
        clearInterval(intv);
    }
}