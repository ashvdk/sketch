var socket = io('localhost:3000');
console.log(socket)
function sendmessage() {
    alert("Are you there");
}
// window.addEventListener('load', ()=>{
//     resize(); 
//     document.addEventListener("mousedown",startDrawing);
//     document.addEventListener("mousemove",draw);
//     document.addEventListener("mouseup",stopDrawing);
// })

// const canvas = document.querySelector('#canvas'); 
   

// const ctx = canvas.getContext('2d'); 

// let letsPaint = false;

// let coord = {x:0 , y:0}; 


// function resize(){ 
//     console.log(window.innerWidth);
//     console.log(window.innerHeight);
//     ctx.canvas.width = window.innerWidth; 
//     ctx.canvas.height = window.innerHeight; 
// } 

// function getPosition(e){ 
//     coord.x = event.clientX; 
//     coord.y = event.clientY; 
// } 

// function draw(e) {
//     if(letsPaint)
//     {
//         console.log(e)
//         ctx.beginPath(); 
//         ctx.lineWidth = 12; 
//         ctx.lineCap = 'round';   
//         ctx.strokeStyle = 'black'; 
//         ctx.moveTo(coord.x,coord.y);
//         getPosition(e)
//         ctx.lineTo(coord.x,coord.y);
//         ctx.stroke();
//     }
// }
// function startDrawing(e) {
//     letsPaint = true;
//     getPosition(e)
// }

// function stopDrawing() {
//     letsPaint = false;
//     coord = {x:0 , y:0};
// }