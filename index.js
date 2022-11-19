const Input = document.getElementById("Input")
const Output = document.getElementById("Output")
// const Terminal = document.getElementById("Terminal")
let posX = window.clientTop

document.addEventListener('keydown', (event)=> {    
    // These Two are just for me for debugging
    console.log(event.key);
    console.log(event.code);
    if(event.key==="Enter") {
        // Any code you want to write you may write here 
    }
});


// Credits to w3schools.com for the code. (Im sorry I just need to make it draggable) 

// Make the DIV element draggable:
dragElement(document.getElementById("Terminal"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}





// Note: I tried to add functionality to terminal but not sure what commands to put in there so I will leave it all upto you :) 