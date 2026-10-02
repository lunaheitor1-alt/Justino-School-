// ==========================================
// LOGIN - PEI JUSTINO MARCONS RANGEL
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // Elementos
    const areaLogin = document.getElementById("areaLogin");
    const areaCadastro = document.getElementById("areaCadastro");

    const titulo = document.getElementById("titulo");
    const subtitulo = document.querySelector(".subtitulo");
    const mensagem = document.getElementById("mensagem");

    const emailLogin = document.getElementById("emailLogin");
    const senhaLogin = document.getElementById("senhaLogin");

    const emailCadastro = document.getElementById("emailCadastro");
    const senhaCadastro = document.getElementById("senhaCadastro");
    const confirmarSenha = document.getElementById("confirmarSenha");


    // ==========================================
    // MOSTRAR MENSAGEM
    // ==========================================

    function mostrarMensagem(texto, sucesso = false) {

        mensagem.textContent = texto;

        mensagem.style.color = sucesso
            ? "#16a34a"
            : "#dc2626";
    }


    // ==========================================
    // MOSTRAR CADASTRO
    // ==========================================

    window.mostrarCadastro = function () {

        areaLogin.style.display = "none";
        areaCadastro.style.display = "block";

        titulo.textContent = "Criar conta";

        subtitulo.textContent =
            "Cadastre-se para continuar";

        mostrarMensagem("");

        emailCadastro.focus();
    };


    // ==========================================
    // VOLTAR PARA LOGIN
    // ==========================================

    window.voltarLogin = function () {

        areaCadastro.style.display = "none";
        areaLogin.style.display = "block";

        titulo.textContent = "Login";

        subtitulo.textContent =
            "Acesse sua conta para continuar";

        mostrarMensagem("");

        emailLogin.focus();
    };


    // ==========================================
    // CRIAR CONTA
    // ==========================================

    window.criarConta = function () {

        const email = emailCadastro.value.trim();
        const senha = senhaCadastro.value;
        const confirmar = confirmarSenha.value;


        if (email === "" || senha === "" || confirmar === "") {

            mostrarMensagem(
                "Preencha todos os campos."
            );

            return;
        }


        if (!email.includes("@")) {

            mostrarMensagem(
                "Digite um e-mail válido."
            );

            return;
        }


        if (senha.length < 6) {

            mostrarMensagem(
                "A senha precisa ter pelo menos 6 caracteres."
            );

            return;
        }


        if (senha !== confirmar) {

            mostrarMensagem(
                "As senhas não são iguais."
            );

            return;
        }


        // Salvar conta
        const conta = {
            email: email,
            senha: senha
        };

        localStorage.setItem(
            "contaJustino",
            JSON.stringify(conta)
        );


        mostrarMensagem(
            "Conta criada com sucesso!",
            true
        );


        // Limpar cadastro
        emailCadastro.value = "";
        senhaCadastro.value = "";
        confirmarSenha.value = "";


        // Voltar para login
        setTimeout(function () {

            voltarLogin();

            emailLogin.value = email;

            mostrarMensagem(
                "Agora digite sua senha para entrar.",
                true
            );

            senhaLogin.focus();

        }, 1000);
    };


    // ==========================================
    // ENTRAR
    // ==========================================

    window.entrar = function () {

        const email = emailLogin.value.trim();
        const senha = senhaLogin.value;


        if (email === "" || senha === "") {

            mostrarMensagem(
                "Digite seu e-mail e sua senha."
            );

            return;
        }


        const dados =
            localStorage.getItem("contaJustino");


        if (!dados) {

            mostrarMensagem(
                "Você ainda não possui uma conta."
            );

            return;
        }


        const conta = JSON.parse(dados);


        if (
            email === conta.email &&
            senha === conta.senha
        ) {

            mostrarMensagem(
                "Login realizado com sucesso!",
                true
            );


            localStorage.setItem(
                "usuarioLogado",
                "true"
            );


            // Redirecionamento
            setTimeout(function () {

                window.location.href = "escola.html";

            }, 800);

        } else {

            mostrarMensagem(
                "E-mail ou senha incorretos."
            );
        }
    };


    // ==========================================
    // ENTER NOS CAMPOS
    // ==========================================

    emailLogin.addEventListener("keydown", function (evento) {

        if (evento.key === "Enter") {
            entrar();
        }

    });


    senhaLogin.addEventListener("keydown", function (evento) {

        if (evento.key === "Enter") {
            entrar();
        }

    });


    emailCadastro.addEventListener("keydown", function (evento) {

        if (evento.key === "Enter") {
            criarConta();
        }

    });


    senhaCadastro.addEventListener("keydown", function (evento) {

        if (evento.key === "Enter") {
            criarConta();
        }

    });


    confirmarSenha.addEventListener("keydown", function (evento) {

        if (evento.key === "Enter") {
            criarConta();
        }

    });

});
