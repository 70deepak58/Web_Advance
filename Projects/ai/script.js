var input_str;
var action="";
var address="";
var flag=0;
function operation(){
    if(action=="call"){
        window.open('tel:'+address);
        console.log("call");
    }
    if(action=="mail"){
        window.open('mailto:'+address);
        console.log("mail");
    }
    if(action=="open"){
        console.log("open");
    }
    if(action=="play"){
        console.log("play");
    }

}
function a(){
    var i=0;
    var length=input_str.length;
while(i<length){
    if((input_str[i]!=' ')&&(flag==0)){
        action+=input_str[i];
    }
    while(input_str[i]==' '){
        i++;
        flag=1;
    }
    if(flag==1){
        address+=input_str[i];
    }
    console.log(input_str[i]);
    i++;
}
console.log(action);
console.log(address);
operation();
action="";
address="";
}
function run(){
    
    var x=document.getElementById("chat");
    input_str=x.value;
    input_str=input_str.toLowerCase();
    console.log(input_str);
    x.value="";
    a();
   // window.open('mailto:abc.gmail.com');
}
