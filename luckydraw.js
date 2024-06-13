document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault();
});

let arr=[];
let btn=document.querySelector("#btn");
let names=document.querySelector("#name");
let i=0;

btn.addEventListener("click",()=>{
    if(i<3){
        arr[i]=[names.value];
        i++;
        names.value="";
    }
});

let draw=document.querySelector("#draw");

draw.addEventListener("click",()=>{
 let ran=Math.floor(Math.random()*3);
 let win=arr[ran];
 alert(`winner is ${win}`);
});