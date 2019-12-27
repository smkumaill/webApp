window.onload = init

function init(){
var button = document.getElementById("addButton");
button.onclick = handleButtonEvent;
}

function handleButtonEvent(){
    alert("Button was clicked");
}