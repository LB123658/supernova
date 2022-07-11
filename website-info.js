function display(text) {
var x = document.createElement("div");
x.id = "alert";
x.style.width = "300px";
x.style.background = "lightgrey";
x.style.position = "absolute";
x.style.top = "50%";
x.style.left = window.innerWidth/2 - 150 + "px";
x.style.zIndex = "100";
x.style.textAlign = "center";
x.style.fontFamily = "arial";
x.style.color = "black";
x.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
function hideDisplay() {x.remove();};
x.innerHTML = "<button style='position:absolute;top:0px;right:0px;background:red;width:50px;height:30px;font-size:20px;color:white;cursor:pointer;border:none;' title='Close' onclick='this.parentElement.remove()'>X</button><p><br>Calculating data...</p>";
function l() {
x.innerHTML = "<button style='position:absolute;top:0px;right:0px;background:red;width:50px;height:30px;font-size:20px;color:white;cursor:pointer;border:none;' title='Close' onclick='this.parentElement.remove()'>X</button><p><br>" + text + "</p>";
}
document.body.appendChild(x);
setInterval(l, 1000);
}
display("This website is " + window.location.hostname + "<br>" + Math.floor(new TextEncoder().encode(document.documentElement.innerHTML).length / 1024) + " KB");



//Make the DIV element draggagle:
dragElement(document.getElementById("alert"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id)) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
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
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
 
}
}
