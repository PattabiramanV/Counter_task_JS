let count=0;
document.getElementById("decresebtn").onclick=function(){
    count--;
document.getElementById("Zero").innerHTML=count;

if(count<0){
    document.getElementById("Zero").style.color="red";

}
else if(count==0){
    document.getElementById("Zero").style.color="black";
}
}

document.getElementById("Resetbtn").onclick=function(){
    count=0;
document.getElementById("Zero").innerHTML=count;

document.getElementById("Zero").style.color="black"


}

document.getElementById("Incresebtn").onclick=function(){
    count++;
document.getElementById("Zero").innerHTML=count;
if(count>0){
    document.getElementById("Zero").style.color="green";

}
else if(count==0){
    document.getElementById("Zero").style.color="black";
}

}
