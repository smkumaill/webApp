window.onload = init;

function init(){
var button = document.getElementById("addButton");
button.onclick = handleButtonEvent;
loadPlaylist();
}

function handleButtonEvent(){
    var textBox = document.getElementById("songTextInput");
    var inputText = textBox.value;

    var li = document.createElement("li");
    li.innerHTML = inputText;

    var ul = document.getElementById("playlist");
    

    if(inputText == ""){
        alert("Please enter a song name")
    }else{
    ul.appendChild(li);
    save(inputText);
    }

   
}