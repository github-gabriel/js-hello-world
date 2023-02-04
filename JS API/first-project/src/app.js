import axios from "axios";

let image = document.getElementById("image")
let text = document.getElementById("text")

function getImage() {
    let random = Math.floor(Math.random() * 1084)

    let imageURL = `https://picsum.photos/id/${random}/1920/1080`;

    axios.get(imageURL)
        .catch(error => {
            getImage()
        })

    image.src = imageURL;
}

function getText() {
    axios.get("https://api.quotable.io/random")
        .then((response) => {
            console.log(response)
            text.innerText = response["data"]["content"] + "\n~ " + response["data"]["author"]
        })
        .catch((error) => {
            console.log(error)
        })
}

getImage()
getText()
