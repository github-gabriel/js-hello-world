import axios from "axios";

console.log("test 123")

const getDataBtn = document.getElementById("get")
const sendDataBtn = document.getElementById("send")

const getData = () => {
    axios.get("https://reqres.in/api/user/1")
        .then(response => console.log(response))
};

const sendData = () => {
    axios
        .post("https://reqres.in/api/register", {
            email: 'eve.holt@reqres.in',
            password: 'pistol'
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            console.log(response)
        }).catch(err => {
        console.log(err, err.response)
    })
};

getDataBtn.addEventListener("click", getData)
sendDataBtn.addEventListener("click", sendData)
