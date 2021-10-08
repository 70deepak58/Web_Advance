const eve=document.querySelector("#scroll");
eve.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth",
    });
});
document.getElementById("#scroll").innerHTML="lo";