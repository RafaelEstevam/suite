`use strict`;


window.onload = async function(){
    await fetch('http://localhost:8081/tasks').then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
    }).catch((e) => {
        console.log(e)
    })
}

function myFunction() {
    console.log("teste")
}