document.addEventListener("DOMContentLoaded", function() {
    // Nome do amigo
    const nomeAmigo = "Bel e João"; // Aqui você pode definir o nome do amigo ou pegar de algum campo de input
    document.getElementById("nome-amigo").textContent = nomeAmigo;

    // Ações para os botões
    const aceitarBtn = document.getElementById("aceitar-btn");
    const recusarBtn = document.getElementById("recusar-btn");
    const mensagemResposta = document.getElementById("mensagem-resposta");

    aceitarBtn.addEventListener("click", function() {
        mensagemResposta.textContent = "Que alegria! Estamos muito felizes que vocês aceitaram serem padrinhos do nosso bem mais precioso!";
        mensagemResposta.style.color = "#4CAF50";
        mensagemResposta.style.display = "block";
    });

    recusarBtn.addEventListener("click", function() {
        mensagemResposta.textContent = "Escolha errada, volte e aceite!";
        mensagemResposta.style.color = "#f44336";
        mensagemResposta.style.display = "block";
    });
});