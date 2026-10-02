// ======================================
// MODO NOTURNO - PÁGINA HISTÓRIA
// ======================================

document.addEventListener("DOMContentLoaded", function () {

    const botaoTema = document.getElementById("btnTema");

    // Verifica se o botão existe
    if (!botaoTema) {
        return;
    }

    // Recupera a preferência salva
    const modoSalvo = localStorage.getItem("modoNoturno");

    if (modoSalvo === "ativo") {
        document.body.classList.add("modo-noturno");
        botaoTema.textContent = "☀️ Modo claro";
    } else {
        botaoTema.textContent = "🌙 Modo noturno";
    }

    // Quando clicar no botão
    botaoTema.addEventListener("click", function () {

        document.body.classList.toggle("modo-noturno");

        if (document.body.classList.contains("modo-noturno")) {

            botaoTema.textContent = "☀️ Modo claro";

            localStorage.setItem("modoNoturno", "ativo");

        } else {

            botaoTema.textContent = "🌙 Modo noturno";

            localStorage.setItem("modoNoturno", "desativado");

        }

    });

});
