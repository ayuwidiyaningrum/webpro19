    let nama = document.getElementById("nama")
    let email  = document.getElementById("email")
    let jam = document.getElementById("jam")
    let tujuan = document.getElementById("tujuan")
    let tiket = document.getElementById("tiket")
    let output = document.getElementById("output")

    document.getElementById("submit").addEventListener("click",function(event){
        event.preventDefault()
        cekform()
    });

    function cekform(){
        if(nama.value == ""){
            error(nama, "*Isi nama kamu");
            }
            else if(nama.value.length >= 30){
            error(nama, "*nama tidak boleh lebih dari 30 huruf");
            return false;
            }
            else{
            sukses(nama);
        }
        
        if(email.value == ""){
             error(email, "*jangan lupa email kamu");
            }
            else if(!iniEmail(email.value)){
            error(email, "*email tidak valid");
            return false;
            }
            else{
            sukses(email);
        }
        
        if(jam.value == ""){
            error(jam, "*jam tidak boleh kosong");
            }
            else{
            sukses(jam);
        }
        
        if(tujuan.value == ""){
            error(tujuan, "*Isi tujuanmu");
            }
            else{
            sukses(tujuan);
        }

        if(tiket.value == ""){
            error(tiket, "*jangan lupa isi jumlah tiketnya");
            }
            else if(parseInt (tiket.value) < 1 ){
            error (tiket, "*jumlah tiket hanya bisa 1-10 tiket saja")
            return false;
            }   
            else if (parseInt (tiket.value) > 10){
            error (tiket, "*jumlah tiket hanya bisa 1-10 tiket saja")
            return false;
            }   
            else{
            sukses(tiket);
        }
        output.innerHTML= `<p>${nama.value}</p>
                          <p>${email.value}</p>
                          <p>${jam.value}</p>
                          <p>${tujuan.value}</p>
                          <p>${tiket.value}</p>`
        }
    function error(input, pesan){
    const inputan = input.parentElement;
    const span = inputan.querySelector("span");
    span.className = 'error';
    span.innerText = pesan;
    }

    function sukses(input){
    const li = input.parentElement;
    const span = li.querySelector("span");
    span.className = 'sukses';
    }

    function iniEmail(email){
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
