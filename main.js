canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_postion_of_x,last_postion_of_y;
color="red";
width_of_line=3;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mouseDown";
   
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    MouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_postion_of_mouse_x=e.clientX-canvas.OffsetLeft;
    current_postion_of_mouse_y=e.clientY-canvas.OffsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        console.log("last postion of x and y coordinates=");
        console.log("x="+last_postion_of_x + "y="+last_postion_of_y);
        ctx.moveTo(last_postion_of_x,last_postion_of_y);
        console.log("current postion of x and y coordinates=");
        console.log("x="+current_postion_of_mouse_x + "y="+current_postion_of_mouse_y);
        ctx.lineTo(current_postion_of_mouse_x,current_postion_of_mouse_y);
        ctx.stroke();
    }
    last_postion_of_x=current_postion_of_mouse_x;
    last_postion_of_y=current_postion_of_mouse_y;
}