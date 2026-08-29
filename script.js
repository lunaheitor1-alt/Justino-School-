/*
======================================
PROTEÇÃO DA PÁGINA
======================================
*/

const usuarioLogado =
    localStorage.getItem("usuarioLogado");

if (usuarioLogado !== "true") {
    window.location.replace("index.htm");
}


/*
======================================
MODO NOTURNO
======================================
*/

const modoNoturno =
    localStorage.getItem("modoNoturno") === "true";

const btnTema =
    document.getElementById("btnTema");


function atualizarBotaoTema() {

    if (document.body.classList.contains("dark-mode")) {

        btnTema.innerHTML = "☀️ Modo claro";

        btnTema.setAttribute(
            "aria-label",
            "Desativar modo noturno"
        );

    } else {

        btnTema.innerHTML = "🌙 Modo noturno";

        btnTema.setAttribute(
            "aria-label",
            "Ativar modo noturno"
        );
    }
}


function alternarModo() {

    const ativado =
        document.body.classList.toggle("dark-mode");

    localStorage.setItem(
        "modoNoturno",
        ativado ? "true" : "false"
    );

    atualizarBotaoTema();
}


if (modoNoturno) {
    document.body.classList.add("dark-mode");
}

atualizarBotaoTema();


/*
======================================
SAIR DA CONTA
======================================
*/

function sair() {

    // Remove somente a sessão.
    // A conta continua cadastrada.

    localStorage.removeItem("usuarioLogado");

    // Volta para o arquivo correto.

    window.location.replace("index.htm");
}
