// ação de botão login
function logbt() {
    // variavel de usuario
    let usuario = document.getElementById("user").value
    // variavel de senha
    let senha = document.getElementById("sen").value

    // condição de senha
    if (usuario == "admin" && senha == 123456) {
        alert("Bem Vindo Usuario")
        window.location.href = 'dashboard.html'
    } else {
        alert("usuario incorreto, tente novamente");
    }
}


// variavel modal
const modal = document.querySelector(".container-modal");
// moldura modal
const boxmodal = document.querySelector(".modal");
// botão modal fechar
const cancel = document.querySelector("#cancel")
// criar tarefa
const criar = document.querySelectorAll("#adicao")
// Ação do modal