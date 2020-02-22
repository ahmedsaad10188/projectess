


var myimages = Array.from( document.querySelectorAll(".img-fluid"));
var containerbox = document.querySelector(".containerbox");
var close = document.getElementById("close");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var curruntindex =0;
for(var i=0; i<myimages.length;i++)
{

myimages[i].addEventListener("click",showbox)

}

function showbox(e)
{
containerbox.style.transform = "scale(1,1)";
var imgsrc = e.target.src;
curruntindex=myimages.indexOf(e.target) ;

containerbox.firstElementChild.style.backgroundImage="url("+imgsrc+")";

containerbox.firstElementChild.style.transform="scale(1,1)";
}

close.addEventListener("click",hidebox)
function hidebox()
{

    containerbox.style.transform = "scale(0,0)";



}
next.addEventListener("click",gonext)
prev.addEventListener("click",goprev)

function gonext()
{


curruntindex++;


if (curruntindex==myimages.length) {
    curruntindex=0;
}
containerbox.firstElementChild.style.backgroundImage="url("+myimages[curruntindex].src+")";

}
function goprev()
{

curruntindex--;
if(curruntindex<0)
{
    curruntindex=myimages.length-1;
}

containerbox.firstElementChild.style.backgroundImage="url("+myimages[curruntindex].src+")";

}
document.addEventListener("keydown",function(e){

if (e.keyCode==39) {
    gonext();
}
 else if (e.keyCode==37) {
    goprev();
} 
else if (e.keyCode==27){
    hidebox();
}

console.log(e.keyCode);


})















