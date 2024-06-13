// close button
var mynodelist=document.getElementsByTagName("LI");
var i;
for(i=0; i < mynodelist.length;i++)
{
    var span=document.createElement("SPAN");
    var txt=document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);
    mynodelist[i].appendChild(span);
}


//click on close button to hide item
var close=document.getElementsByClassName("close");
var i;
for(i=0;i<close.length;i++){
    close[i].onclick=function(){
        var div=this.parentElement;
        div.style.display="none";
    }
}


//add a line when click on list item
var list=document.querySelector('ul');
list.addEventListener('click',function(ev){
    if(ev.target.tagName==='LI')
    {
        ev.target.classList.toggle('checked');
    }
},false);


//create a new item when clicked on "add button"
function newelement(){
    var li=document.createElement("li");
    var inputvalue=document.getElementById("myinput").value;
    var t=document.createTextNode(inputvalue);
    li.appendChild(t);
    if(inputvalue===''){
        alert("You must Write something !");
    }
    else{
        document.getElementById("myul").appendChild(li);
    }
    document.getElementById("myinput").value="";
    var span =document.createElement("SPAN");
    var tx=document.createTextNode("\u00D7");
    span.classname="close";
    span.appendChild(txt);
    li.appendChild(span);
    
    for(i=0;i<close.length;i++)
    {
        close[i].onclick=function(){
            var div=this.parentElement;
            div.style.display="none";
        }
    }
}