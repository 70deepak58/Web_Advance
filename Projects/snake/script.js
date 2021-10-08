var points=0;
        var l=0;
        var u=0;
        var x=50;
        var y=50;
        var flag=1;
        var frog_x=0;
        var frog_y=0;

        //snake head
        function run(){
            if(l==1){
                x+=flag;
                document.getElementById("he").style.left=x+"%";
                //u=0;
            }
            if(l==-1){
                x-=flag;
                document.getElementById("he").style.left=x+"%";
                //u=0;
            }
            if(u==1){
                y-=flag;
                document.getElementById("he").style.top=y+"%";
                //l=0;
            }
            if(u==-1){
                y+=flag;
                document.getElementById("he").style.top=y+"%";
                //l=0;
            }

        }


        //frog random
        function frog(){
            frog_x=100*Math.random();
            frog_y=100*Math.random();
            document.getElementById("fr").style.left=frog_x+"%";
            document.getElementById("fr").style.top=frog_y+"%";
            //document.getElementById("fr").style.display=display;


        }


        //start function
        function go(){
            setInterval(run,100);
            setInterval(frog,4000);
        }


//snake head direction controller
        document.onkeydown=fly;
function fly(e){
    //e=e|| window.event;
    if(e.keyCode=='37'){
        l=-1;
        u=0;
        run();
    }
    if(e.keyCode=='38'){
        u=1;
        l=0;
        run();
    }
    if(e.keyCode=='39'){
        l=1;
        u=0;
        run();
    }
    if(e.keyCode=='40'){
        u=-1;
        l=0;
        run();
    }

}