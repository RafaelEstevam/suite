`use strict`;


window.onload = async function(){

    const chatIframe = document.createElement("div")
    chatIframe.setAttribute("id", "root")
    document.body.appendChild(chatIframe);

    const chatStyle = document.createElement("link")
    chatStyle.setAttribute("rel", "stylesheet")
    chatStyle.setAttribute("href", "http://localhost:8082/assets/chat.css")
    document.body.appendChild(chatStyle);

    const chatScript = document.createElement("script")
    chatScript.setAttribute("src", "http://localhost:8082/assets/chat.js")
    document.body.appendChild(chatScript);

    const headers = {
        "Content-Type": "text/javascript",
        Accept: "text/javascript"
    }

    fetch("http://localhost:8082/assets/chat.js", headers).then((response) => {
        return response.text
    }).then((response) => {
        console.log(response)
    }).catch((e) => {
        console.log(e)
    }).finally(() => {
        setUpChat();
    })
}

function setUpChat() {

    const script = document.getElementById("chat-script");
    const scriptCompanyId = script.getAttribute(`data-companyId`);

    const setup = {
        clientId: localStorage.getItem("clientId"),
        companyId: scriptCompanyId
    }

    setTimeout(() => {
        window.postMessage(setup, "http://localhost:8080")
    }, 1000)
}