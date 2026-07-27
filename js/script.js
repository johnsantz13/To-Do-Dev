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