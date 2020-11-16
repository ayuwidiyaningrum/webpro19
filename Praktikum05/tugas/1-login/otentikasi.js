function login(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if( username == "ayuwidiyaningrum" && password == "1"){
      alert("Login Sukses");
    return window.location.href ="login_sukses.html";
  }
  else{
    return alert("Username atau Password yang Anda masukan SALAH");
  }
}
