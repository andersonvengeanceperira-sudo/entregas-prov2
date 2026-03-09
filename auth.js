function cadastrar(){

let nome = document.getElementById("nome").value
let email = document.getElementById("email").value
let senha = document.getElementById("senha").value

localStorage.setItem("usuario", JSON.stringify({nome,email,senha}))

alert("Conta criada")

window.location="login.html"

}

function login(){

window.location="dashboard.html"

}
