
/* 
case sensitive

por tag: getElementByTagName()
por id: getElementById()
por nome: getElementByName()
por classe: getElementsByClassName()
por seletor: querySelector()

*/

let nome = window.document.getElementById('nome');
let nomeok = false;
let email = document.querySelector("#email");
let emailok = false;
let assunto = document.querySelector("#assunto");
let assuntook = false;
nome.style.width = "100%";
email.style.width = "100%";
assunto.style.width = "100%"
let mapa = document.querySelector("#mapa");


function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.style.color = "red";
        txtNome.style.fontSize = 10;
        txtNome.innerHTML = "Nome Inválido";

    } else {

        txtNome.style.color = "green";
        txtNome.style.fontSize = 10;
        txtNome.innerHTML = "Nome valido";
        nomeok = true

    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail");

    if (email.value.indexOf("@") == -1) {
        txtEmail.innerHTML = "Email Inválido";
        txtEmail.style.color = "red";
    } else {
        txtEmail.innerHTML = "Email válido";
        txtEmail.style.color = "green";
        emailok = true
    }

}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto");

    if (assunto.value.length > 100) {
        txtAssunto.innerHTML = "máximo 100 caracteres";
        txtAssunto.style.color = "red";
    } else {
        txtAssunto.innerHTML = "Correto";
        assuntook = true
    }
}

function enviar() {

    if (emailok == true && assuntook == true && nomeok == true) {
        alert("tudo ok, formulário enviado com sucesso")
    } else if (assuntook == false) {
        alert("assunto incorreto")
    } else if (emailok == false) {
        alert("email incorreto")
    } else if (nomeok == false) {
        alert("nome incorreto")
    }
}

function mapaZoom() {
   mapa.style.width="800px" 
    mapa.style.height="500px"
}

function mapaNormal(params) {
    mapa.style.width="500px" 
    mapa.style.height="300px"
}
function enviado() {
    alert("Dúvida enviada com sucesso");
}

function goHome(){
    
}