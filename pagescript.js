var etat =0;
function myFunction(x) {
   document.getElementById("hide").style.width = "50%";
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




const myslidev=document.querySelector('#myslide');
const slideelt=document.querySelectorAll('#myslide>div');
const bnext=document.querySelector('#next');
const bprev=document.querySelector('#prev');
let counter=1;
const size=slideelt[0].clientWidth+150
//  myslidev.style.transform='translateX('+(-size*counter) +'px)';
// //  myslidev.style.transition='2s';
 bnext.addEventListener('click',()=>{
    if(counter>=5)return;
    myslidev.style.transition='transform 0.5s linear';
    counter++
    myslidev.style.transform='translateX('+(-size*counter) +'px)';
 })
 bprev.addEventListener('click',()=>{
    if(counter<1)return;
    myslidev.style.transition='transform 0.5s linear';
    counter--;
    myslidev.style.transform='translateX('+(-size*counter) +'px)';
 })
 myslidev.addEventListener('transitionend',()=>{
    
    if(slideelt[counter].id=='slide1clone'){
       myslidev.style.transition='none'
       counter=1;
       myslidev.style.transform='translateX('+(-size*counter) +'px)';
    }
    if(slideelt[counter].id=='slide5clone'){
       myslidev.style.transition='none'
       counter=5;
       myslidev.style.transform='translateX('+(-size*counter) +'px)';
    }
    
 })
function showslide(i){   
    myslidev.style.transition='transform 0.5s linear';
    counter=i;  
    myslidev.style.transform='translateX('+(-size*i) +'px)';
    
}

// last slide animation 
var s4counter=0;
const myslide4 = document.querySelector('#flexslide');
const mycurentslide = document.querySelectorAll('#flexslide .sl4');
const bs4next=document.querySelector('#s4next');
const bs4prev=document.querySelector('#s4prev');
const size5 = mycurentslide[0].clientWidth;
console.log(size5);

bs4prev.addEventListener('click',()=>{
    if(s4counter<1)return;
    s4counter--
      myslide4.style.transform='translateX('+(-size5*s4counter - 20) +'px)';
      
      myslide4.style.transition='transform 1s linear';
      console.log(s4counter);
 })

bs4next.addEventListener('click',()=>{
    if(s4counter>6)return;
    s4counter++;
      myslide4.style.transform='translateX('+(-size5*s4counter - 20) +'px)';
      myslide4.style.opacity = '0';
      
      myslide4.style.transition='transform 1s linear';
      console.log(s4counter);

 })
 function showslide4(j){
   myslide4.style.transform='translateX('+(-size5*j- 20) +'px)';      
   myslide4.style.transition='transform 1s linear';
   s4counter=j;
}
myslide4.addEventListener('transitionend',()=>{
    
    if(mycurentslide[s4counter].id=='s1clone'){
       myslide4.style.transition='none'
       s4counter=1;
       myslide4.style.transform='translateX('+(-size5*s4counter) +'px)';
    }
    if(mycurentslide[s4counter].id=='s6clone'){
       myslide4.style.transition='none'
       s4counter=6;
       myslide4.style.transform='translateX('+(-size5*s4counter) +'px)';
    }
    myslide4.style.opacity = '1';
 })
function playv(elt){
elt.setAttribute("autoplay", "true");
}
function fadevi(val){
    document.getElementById('vmask').style.width= val+"vw";
}
document.getElementById('showreelfullvid').style.transform = 'translateX(2000px)';
function bringvids(){
    document.getElementById('showreelfullvid').style.transform = 'translateX(0px)';
     document.getElementById('videogest1').play();
}
function sendvidsaway(){
    document.getElementById('showreelfullvid').style.transform = 'translateX(2000px)';
    document.getElementById('videogest1').pause();
}
function animvids(){
 const v = document.getElementById('idshowreel');
v.play();
}
function stopvids(){
const w = document.getElementById('idshowreel');
w.pause();
}