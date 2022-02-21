var etat =0;
function myFunction(x) {
   document.getElementById("hide").style.width = "100%";
  x.classList.toggle("change"); 
  console.log(x);
   if(etat==0){
    document.getElementById("mySidepanel").style.width = "50%";
    etat=1;
   }
   else{
    document.getElementById("mySidepanel").style.width = "0";
    document.getElementById("hide").style.width = "0%";
    etat=0
   } 
  
}
function toggle2(){
document.getElementById("hide").style.width = "0%";
document.getElementById("mySidepanel").style.width = "0";
var myIcon = document.getElementsByClassName('container');
myIcon[0].classList.toggle('change');
etat=0
}
