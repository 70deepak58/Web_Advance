var num1=0;
var num2=0;
var result=0;
var input_result="";
var result=0;
var flag=0;
var op="";
function vibrate(){
    navigator.vibrate(1000);
}
function operation(ids){
    ///display input to screen
    //row1
    if(ids=="a1"){
        input_result="";
        result=0;
       }
       if(ids=="a2"){
        input_result+="%";
        flag=1;
        op="%";
       }
       if(ids=="a3"){
        input_result+=7;
       }
       if(ids=="a4"){
        input_result+="/";
        flag=1;
        op="/";
       }

//row2

    if(ids=="a5"){
     input_result+=7;
     if(flag==0){
         num1=num1*10+7;
     }
     else{
         num2=num2*10+7;
     }
    }
    if(ids=="a6"){
        input_result+=8;
        if(flag==0){
            num1=num1*10+8;
        }
        else{
            num2=num2*10+8;
        }
       }
       if(ids=="a7"){
        input_result+=9;
        if(flag==0){
            num1=num1*10+9;
        }
        else{
            num2=num2*10+9;
        }
       }
       if(ids=="a8"){
        input_result+="*";
        flag=1;
        op="*";
       }

//row3
       if(ids=="a9"){
        input_result+=4;
        if(flag==0){
            num1=num1*10+4;
        }
        else{
            num2=num2*10+4;
        }
       }
       if(ids=="a10"){
        input_result+=5;
        if(flag==0){
            num1=num1*10+5;
        }
        else{
            num2=num2*10+5;
        }
       }
       if(ids=="a11"){
        input_result+=6;
        if(flag==0){
            num1=num1*10+6;
        }
        else{
            num2=num2*10+6;
        }
       }
       if(ids=="a12"){
        input_result+="-";
        flag=1;
        op="-";
       }

//row 4
       if(ids=="a13"){
        input_result+=1;
        if(flag==0){
            num1=num1*10+1;
        }
        else{
            num2=num2*10+1;
        }
       }
       if(ids=="a14"){
        input_result+=2;
        if(flag==0){
            num1=num1*10+2;
        }
        else{
            num2=num2*10+2;
        }
       }
       if(ids=="a15"){
        input_result+=3;
        if(flag==0){
            num1=num1*10+3;
        }
        else{
            num2=num2*10+3;
        }
       }
       if(ids=="a16"){
        input_result+="+";
        flag=1;
        op="+";
       }


//row 5
       if(ids=="a17"){
        input_result+="00";
        if(flag==0){
            num1=num1*100;
        }
        else{
            num2=num2*100;
        }
       }
       if(ids=="a18"){
        input_result+="0";
        if(flag==0){
            num1=num1*10;
        }
        else{
            num2=num2*10;
        }
       }
       if(ids=="a19"){
        input_result+=".";
       }
       if(ids=="a20"){
        input_result="";
        result=getOpRes();
        document.getElementById("result").innerHTML=result;
        num1=0;
        num2=0;
       }
//operations
document.getElementById("input").innerHTML=input_result;
}



//do calculation
function getOpRes(){
    if(op=="+"){
        result=num1+num2;
    }
    if(op=="-"){
        result=num1-num2;
    }
    if(op=="*"){
        result=num1*num2;
    }
    if(op=="/"){
        result=num1/num2;
    }
    if(op=="%"){
        result=(num1*num2)/100;
    }
    return result;
}