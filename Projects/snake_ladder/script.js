var img;
var no;

function dice_roll(){
    no=1+Math.floor(6*Math.random());
    console.log(no);
    img=no+".png";
    console.log(img);
    document.getElementById("dice").style.backgroundImage="url("+img+")";
    document.getElementById("dice1").style.img="url("+img+")";
}