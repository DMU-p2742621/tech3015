// The canvas to be manipulated
const canvas=document.querySelector('canvas');
const ctx=canvas.getContext('2d');

// For recording the position of the mouse
const p={
    x:0, //x coordinate
    y:0, //y-coordinate
    r:50 //radius of the circle
}

// Rendering the canvas
function render(){
    canvas.width=document.documentElement.clientWidth;
    canvas.height=document.documentElement.clientHeight;
    ctx.beginPath();
    ctx.clearRect(0,0,canvas.width,canvas.height);
    // Create a radial colour gradient (gradient circle)
    var radial=ctx.createRadialGradient(p.x,p.y,p.r,p.x,p.y,p.r*3);
    // Start point colour
    radial.addColorStop(0,'rgba(255,255,255,0)');
    // end point colour
    radial.addColorStop(1,'rgba(0,0,0,0.75)');
    // Fill style
    ctx.fillStyle=radial;
    // draw a rectangle
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

//Mouse movement events
document.onmousemove=e=>{
    p.x=e.clientX;
    p.y=e.clientY;
    render();
}

// Re-rendering when window size changes
window.onresize=()=>{
    render();
}

// Start rendering the canvas
render();