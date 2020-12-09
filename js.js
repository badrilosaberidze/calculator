
var holder=["","",""];

function addNum(x){
    if (holder[1]==""){
        holder[0]=holder[0]+""+x;
        document.getElementById("black-space").innerHTML=holder[0];
    }else{
        holder[2]=holder[2]+x;
        document.getElementById("black-space").innerHTML=holder[0]+holder[1]+holder[2];
    }
}

function operation(x){
    if (holder[1]==""){
        holder[1]=holder[1]+x;
        document.getElementById("black-space").innerHTML=holder[0]+holder[1];        
    }
    if (holder[2]!=""){
        equal();
        holder[1]=holder[1]+x;
        document.getElementById("black-space").innerHTML=holder[0]+holder[1];
    }
}

function equal(){
    if (holder[2]==""){
        holder[1]="";
        document.getElementById("black-space").innerHTML=holder[0]+holder[1];
    }
    if (holder[1]=='+'){
        var num=parseInt(holder[0])+parseInt(holder[2]);
        document.getElementById("black-space").innerHTML=num;
        holder=[num,"",""];
    }
    if (holder[1]=='-'){
        var num=parseInt(holder[0])-parseInt(holder[2]);
        document.getElementById("black-space").innerHTML=num;
        holder=[num,"",""];
    }
    if (holder[1]=='*'){
        var num=parseInt(holder[0])*parseInt(holder[2]);
        document.getElementById("black-space").innerHTML=num;
        holder=[ num,"",""];
    }
    if (holder[1]=='/'){
        var num=parseInt(holder[0])/parseInt(holder[2]);
        document.getElementById("black-space").innerHTML=num;
        holder=[num,"",""];
    }
}

function klear(){
    document.getElementById("black-space").innerHTML=0;
    console.log(1);
    holder=["","",""];
}

