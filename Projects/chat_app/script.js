let turn=0;
let question_flag="";
let question="";
let dict_reply={"a":"apple","b":"boy","c":"cat","d":"dog","e":"elephant","f":"frog","g":"goat","h":"hen","i":"ice-cream","j":"jackpot","k":"key",
                 "l":"lion","m":"mango","n":"nose","o":"onion","P":"printer","q":"queen","r":"rose","s":"sea","t":"toy","u":"uniform","v":"van",
                 "w":"watch","x":"x-ray","y":"yak","z":"zoo"
};              
var l="";
function replydo(){
    const par=document.createElement("p");
    par.textContent=dict_reply[l];
    //const go=document.createTextNode(dict_reply[l]);
    //par.appendChild(go);
    const ele=document.getElementById("div1");
    ele.appendChild(par);
    turn++;
    l="";

}

function create(){
    var x=document.getElementById("ipt");
    question=x.value;
    l=question[0];
    console.log(question[0]);
    question_flag=question;
    question=question.toLowerCase();
    if(turn%2==0){
        //create element
    const par=document.createElement("p");
    par.textContent=question_flag;
    par.style.color="red";
    par.style.textAlign="right";
    par.style.backgroundColor="aqua";
//append to div tag
    const ele=document.getElementById("div1");
    ele.appendChild(par);
    setTimeout(replydo,1500);
    turn++;
    }
    x.value="";
    question="";

}
function maketext(){
    var x=document.getElementById("ipt");
    question=x.value;
}