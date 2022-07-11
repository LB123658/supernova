var css = document.createElement("style");
css.innerHTML = "#shadow { position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; background: rgb(0, 0, 0, 0.6); z-index: 99998; visibility: hidden; } .operation { height: 30px; width: 50px; color: black; background: transparent; cursor: default; float: right; border: none; } .operation:hover { background: rgb(235, 50, 35); } #appWindow { position: fixed; top: 5%; left: 5%; width: 90%; height: 90%; z-index: 99999; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); } #appWindow iframe { border: none; width: 100%; background: white; }";
document.head.appendChild(css);
var materialIcons = document.createElement("link");
materialIcons.rel = "stylesheet";
materialIcons.href = "https://fonts.googleapis.com/css2?family=Material+Icons";
document.head.appendChild(materialIcons);
var shadow = document.createElement("div");
shadow.id = "shadow";
document.body.appendChild(shadow);

function full() {
var h = window.innerHeight - 30 + "px";
var appWindow = document.getElementById("appWindow");
appWindow.style.top = "0px";
appWindow.style.left = "0px";
appWindow.style.width = "100%";
appWindow.style.height = "100%";
document.getElementsByTagName("iframe")[0].style.height = h;
}
function openFullscreen() {
  if (appWindow.requestFullscreen) {
    appWindow.requestFullscreen();
  } else if (appWindow.webkitRequestFullscreen) { /* Safari */
    appWindow.webkitRequestFullscreen();
  } else if (appWindow.msRequestFullscreen) { /* IE11 */
    appWindow.msRequestFullscreen();
  }
}
function small() {
var h = (window.innerHeight * 0.9) - 30 + "px";
var appWindow = document.getElementById("appWindow");
appWindow.style.top = "5%";
appWindow.style.left = "5%";
appWindow.style.width = "90%";
appWindow.style.height = "90%";
document.getElementsByTagName("iframe")[0].style.height = h;
}
function hide() {
document.getElementById("appWindow").remove();
shadow.style.visibility = "hidden";
document.body.style.overflow = "auto";
}
function launch(a) {
var h = (window.innerHeight * 0.9) - 30 + "px";
shadow.style.visibility = "visible";
var w = document.createElement("div");
w.id = "appWindow";
w.innerHTML = "<div style='position:absolute;top:0px;left:0px;height:30px;width:100%;background:lightgrey;font-family:sans-serif;user-select:none;cursor:default;'><button class='operation' title='Close window' onclick='hide()'><span class='material-icons'>close</span></button><button class='operation' title='Fullscreen' onclick='full()' ondblclick='openFullscreen()'><span class='material-icons'>check_box_outline_blank</span></button><button class='operation' title='Minimize' onclick='small()'><span class='material-icons'>remove</span></button><iframe style='height:" + h + "' src='" + a + "'></iframe>";
document.body.appendChild(w);
document.body.style.overflow = "hidden";
}


launch("x")
