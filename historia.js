// ===============================
// MODO NOTURNO
// ===============================

function alternarModo() {

    document.body.classList.toggle("modo-noturno");

    const modoNoturnoAtivo =
        document.body.classList.contains("modo-noturno");

    const botao = document.getElementById("btnTema");

    if (modoNoturnoAtivo) {

        botao.innerHTML = "☀️ Modo claro";

        localStorage.setItem("modoNoturno", "ativo");

    } else {

        botao.innerHTML = "🌙 Modo noturno";

        localStorage.setItem("modoNoturno", "desativado");

    }
}


// ===============================
// MANTER O MODO ESCOLHIDO
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const modoSalvo = localStorage.getItem("modoNoturno");

    const botao = document.getElementById("btnTema");

    if (modoSalvo === "ativo") {

        document.body.classList.add("modo-noturno");

        if (botao) {
            botao.innerHTML = "☀️ Modo claro";
        }

    } else {

        if (botao) {
            botao.innerHTML = "🌙 Modo noturno";
        }

    }

});
