function helloWorld() {
    console.log("Hello World");
    // DOM (Document Object Model)

    var result = document.getElementById("text");
    result.innerText = "Erfolgreich!";
    result.style.color = "green";

    var paragraphe = document.getElementsByTagName("p"); // Array
    paragraphe[0].style.color = "red"; // Erster Paragraph
    paragraphe[1].style.color = "blue"; // Zweiter Paragraph

    var div = document.getElementById("movingDiv");
    var add = 0;
    var id = setInterval(function () {
        if(add >= 200){
            clearInterval(id);
        }else{
            div.style.marginLeft = add + 'px';
            div.style.marginTop = add + 'px';
            add++;
        }
    }, 10); // Funktion wird alle 10ms ausgeführt

}

document.getElementById("headline").innerText = "Willkommen auf \"" + document.title + "\"!";

function func(event){
    if(!(event.style.color === "red")){
        event.style.color = "red";
    }else{
        event.style.color = "black";
    }
    document.getElementById("headline").addEventListener("click", myFunc); // Neuer EventListener
}

function myFunc(){
    console.log("Hallo!");
    var movingDiv = document.getElementById("movingDiv");
    var paragraph = document.createElement("p");
    paragraph.innerText = "Dynamisch erstellter Paragraph über JS";
    movingDiv.appendChild(paragraph);
}

/*
BOM (Browser Object Model)
 */
console.log(window.screen.width + ' x ' + window.screen.height); // Bildschirmauflösung
console.log(window.location.hostname)
var alter = window.prompt("Gib dein Alter ein", "default");
if(alter >=18){
    window.alert("Du bist volljährig!");
}else{
    window.alert("Du bist noch minderjährig!");
}

