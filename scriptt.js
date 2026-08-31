// ================================
// SISTEMA DE LOGIN - PEI JUSTINO
// ================================

// Mostrar mensagem na tela
function mostrarMensagem(texto, tipo = "erro") {
    const mensagem = document.getElementById("mensagem");

    mensagem.textContent = texto;

    if (tipo === "sucesso") {
        mensagem.style.color = "#16a34a";
    } else {
        mensagem.style.color = "#dc2626";
    }
}


// ================================
// MOSTRAR CADASTRO
// ================================

function mostrarCadastro() {

    document.getElementById("areaLogin").style.display = "none";
    document.getElementById("areaCadastro").style.display = "block";

    document.getElementById("titulo").textContent = "Criar conta";

    document.querySelector(".subtitulo").textContent =
        "Cadastre-se para continuar";

    mostrarMensagem("");
}


// ================================
// VOLTAR PARA LOGIN
// ================================

function voltarLogin() {

    document.getElementById("areaCadastro").style.display = "none";
    document.getElementById("areaLogin").style.display = "block";

    document.getElementById("titulo").textContent = "Login";

    document.querySelector(".subtitulo").textContent =
        "Acesse sua conta para continuar";

    mostrarMensagem("");
}


// ================================
// CRIAR CONTA
// ================================

function criarConta() {

    const email = document
        .getElementById("emailCadastro")
        .value
        .trim();

    const senha = document
        .getElementById("senhaCadastro")
        .value;

    const confirmarSenha = document
        .getElementById("confirmarSenha")
        .value;


    // Verificar campos vazios
    if (!email || !senha || !confirmarSenha) {

        mostrarMensagem(
            "Preencha todos os campos."
        );

        return;
    }


    // Verificar e-mail
    if (!email.includes("@")) {

        mostrarMensagem(
            "Digite um e-mail válido."
        );

        return;
    }


    // Verificar tamanho da senha
    if (senha.length < 6) {

        mostrarMensagem(
            "A senha precisa ter pelo menos 6 caracteres."
        );

        return;
    }


    // Confirmar senha
    if (senha !== confirmarSenha) {

        mostrarMensagem(
            "As senhas não coincidem."
        );

        return;
    }


    // Verificar se já existe uma conta
    const contaExistente =
        localStorage.getItem("contaJustino");

    if (contaExistente) {

        const conta =
            JSON.parse(contaExistente);

        if (conta.email === email) {

            mostrarMensagem(
                "Este e-mail já está cadastrado."
            );

            return;
        }
    }


    // Criar conta
    const novaConta = {
        email: email,
        senha: senha
    };


    localStorage.setItem(
        "contaJustino",
        JSON.stringify(novaConta)
    );


    mostrarMensagem(
        "Conta criada com sucesso!",
        "sucesso"
    );


    // Limpar campos
    document.getElementById("emailCadastro").value = "";
    document.getElementById("senhaCadastro").value = "";
    document.getElementById("confirmarSenha").value = "";


    // Voltar para login depois de um pequeno intervalo
    setTimeout(() => {

        voltarLogin();

        mostrarMensagem(
            "Agora você pode entrar na sua conta.",
            "sucesso"
        );

    }, 1200);
}


// ================================
// ENTRAR
// ================================

function entrar() {

    const email = document
        .getElementById("emailLogin")
        .value
        .trim();

    const senha = document
        .getElementById("senhaLogin")
        .value;


    // Verificar campos
    if (!email || !senha) {

        mostrarMensagem(
            "Digite seu e-mail e sua senha."
        );

        return;
    }


    // Procurar conta
    const dadosConta =
        localStorage.getItem("contaJustino");


    if (!dadosConta) {

        mostrarMensagem(
            "Nenhuma conta cadastrada. Crie uma conta primeiro."
        );

        return;
    }


    const conta =
        JSON.parse(dadosConta);


    // Verificar login
    if (
        email === conta.email &&
        senha === conta.senha
    ) {

        mostrarMensagem(
            "Login realizado com sucesso!",
            "sucesso"
        );


        // Salvar estado de login
        localStorage.setItem(
            "usuarioLogado",
            "true"
        );


        // Redirecionar para a página principal
        setTimeout(() => {

            window.location.href = "escola.html";

        }, 1000);

        return;
    }


    // Login incorreto
    mostrarMensagem(
        "E-mail ou senha incorretos."
    );
}


// ================================
// PERMITIR ENTER PARA ENTRAR
// ================================

document.addEventListener(
    "keydown",
    function (evento) {

        if (evento.key !== "Enter") {
            return;
        }

        const areaLogin =
            document.getElementById("areaLogin");

        const areaCadastro =
            document.getElementById("areaCadastro");


        if (
            areaLogin.style.display !== "none" &&
            areaCadastro.style.display === "none"
        ) {

            entrar();

        } else {

            criarConta();

        }

    }
);
