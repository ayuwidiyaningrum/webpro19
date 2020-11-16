function binatang(){
    let wadah = document.getElementById("image");
    let hewan = document.getElementById("hewan");
  
    if(!hewan.value == " "){
      wadah.innerHTML = `<img src = "img/${hewan.value}.jpg"></img>`
        alert(`Ini gambar ${hewan.value}.jpg`)
    }
    return false;
  }





 