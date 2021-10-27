var input_str;
var action="";
var address="";
var flag=0;
var music_flag=1;
var image_flag=1;
var x;
let tf=1;
var theme_flag=0;
var theme_bg=["yellow","red","black","blue","black","orange","green"];
var theme_fg=["red","blue","yellow","green","white","pink","violet"];

var dict_open={"google":"https://www.google.com",
            "flipkart":"https://www.flipkart.com",
            "amazon":"https://www.amazon.in",
            "netflix":"https://www.netflix.com",
            "youtube":"https://www.youtube.com"};

            //action 
function operation(){
    //to call any number
    if(action=="call"){
        window.open('tel:'+address);
        console.log("call");
    }
    //to mail any mailid
    if(action=="mail"){
        window.open('mailto:'+address);
        console.log("mail");
    }
    //to whatsapp
    if(action=="whatsapp"){
        window.open('https://wa.me/'+address);
        console.log("whatsapp");
    }
    //to telegram
    if(action=="telegram"){
        window.open('https://t.me/'+address);
        console.log("telegram");
    }
    //to open url
    if(action=="open"){
        window.open(dict_open[address]);
        console.log("open");
    }
    //all music function
    if((action=="music")&&(address=="play")){
        x=document.getElementById("music");
        x.play();
        console.log("music play");
    }
    if((action=="music")&&(address=="pause")){
        x=document.getElementById("music");
        x.pause();
        console.log("music pause");
    }
    if((action=="music")&&(address=="next")){
        music_flag++;
        if(music_flag>=4){
            music_flag=1;
        }
        x=document.getElementById("music");
       var sour=document.getElementById("sr");
       sour.setAttribute("src",music_flag+".mp3");
       x.load();
       x.play();
       console.log("music next");
    }
    if((action=="music")&&(address=="prev")){
        music_flag--;
        if(music_flag<=-0){
            music_flag=3;
        }
        x=document.getElementById("music");
       var sour=document.getElementById("sr");
       sour.setAttribute("src",music_flag+".mp3");
       x.load();
       x.play();
       console.log("music prev");
    }
    //image functon
    if((action=="image")&&(address=="show")){
       x=document.getElementById("image").style.display="inherit";
    }
    if((action=="image")&&(address=="hide")){
        x=document.getElementById("image").style.display="none";
    }
    if((action=="image")&&(address=="next")){
        image_flag++;
        if(image_flag>=18){
            image_flag=1;
        }
      x=document.getElementById("image");
      x.setAttribute("src","image/"+image_flag+".jpeg");
     // x.load();
      console.log("next image");

    }
    if((action=="image")&&(address=="prev")){
        image_flag--;
        if(image_flag<=0){
            image_flag=17;
        }
        x=document.getElementById("image");
        x.setAttribute("src","image/"+image_flag+".jpeg");
        //x.load();
        console.log("prev image");

    }
    //to change background
    if((action=="background")){
        document.getElementById("bdy").style.backgroundColor=address;
        console.log("changed background");
    }
    if((action=="theme")&&(address=="next")){
        theme_flag++;
        if(theme_flag>=7){
            theme_flag=0;
        }
        document.getElementById("bdy").style.backgroundColor=theme_bg[theme_flag];
        //here i have to hard code every id
        for(tf=1;tf<=15;tf++){
            document.getElementById("x"+tf).style.color=theme_fg[theme_flag];
        }
        tf=1;

    }

}

//string processing
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
flag=0;
}
//initial action
function run(){
    
    var x=document.getElementById("chat");
    input_str=x.value;
    input_str=input_str.toLowerCase();
    console.log(input_str);
    x.value="";
    a();
   // window.open('mailto:abc.gmail.com');
}
