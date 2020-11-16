function pesan() {
    let kotak = document.getElementById("Box")
    let chat = document.getElementById("text")
    
    if(!chat == " ") {
        kotak.innerHTML += `<p>${chat.value}</p>`
    }
    return false;

}