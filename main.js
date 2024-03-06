var canvas= document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");
var mouseEvent= "empty";
var lastPositionX,lastPositionY;
var color= "red";
var wl= 1;

canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e){
    mouseEvent= "mouseDown"
}



canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e){
    posMouseX= e.clientX-canvas.offsetLeft;
    posMouseY= e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth= wl;
        ctx.moveTo(lastPositionX, lastPositionY);
        ctx.lineTo(posMouseX, posMouseY);
        ctx.stroke()
    }
    lastPositionX=posMouseY;
    lastPositionY=posMouseX;
}

canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e){
    mouseEvent= "mouseUp"
}

canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e){
    mouseEvent= "mouseleave"
}