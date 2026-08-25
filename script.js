function mostrarCadastro() {

            document.getElementById("areaLogin").style.display =
                "none";

            document.getElementById("areaCadastro").style.display =
                "block";

            document.getElementById("titulo").innerText =
                "Criar conta";

            document.querySelector(".subtitulo").innerText =
                "Preencha os dados para criar sua conta";

            document.getElementById("mensagem").innerText =
                "";
        }


        function voltarLogin() {

            document.getElementById("areaLogin").style.display =
                "block";

            document.getElementById("areaCadastro").style.display =
                "none";

            document.getElementById("titulo").innerText =
                "Login";

            document.querySelector(".subtitulo").innerText =
                "Acesse sua conta para continuar";

            document.getElementById("mensagem").innerText =
                "";
        }


        function criarConta() {

            let email =
                document.getElementById("emailCadastro").value.trim();

            let senha =
                document.getElementById("senhaCadastro").value;

            let confirmar =
                document.getElementById("confirmarSenha").value;


            if (
                email === "" ||
                senha === "" ||
                confirmar === ""
            ) {

                document.getElementById("mensagem").innerText =
                    "Preencha todos os campos.";

                return;
            }


            if (senha !== confirmar) {

                document.getElementById("mensagem").innerText =
                    "As senhas não são iguais.";

                return;
            }


            let contaExistente =
                localStorage.getItem("conta");


            if (contaExistente !== null) {

                let conta =
                    JSON.parse(contaExistente);

                if (conta.email === email) {

                    document.getElementById("mensagem").innerText =
                        "Esse email já possui uma conta.";

                    return;
                }
            }


            let conta = {

                email: email,
                senha: senha

            };


            localStorage.setItem(
                "conta",
                JSON.stringify(conta)
            );


            document.getElementById("mensagem").style.color =
                "#16a34a";

            document.getElementById("mensagem").innerText =
                "Conta criada com sucesso!";


            document.getElementById("emailCadastro").value =
                "";

            document.getElementById("senhaCadastro").value =
                "";

            document.getElementById("confirmarSenha").value =
                "";


            setTimeout(function () {

                document.getElementById("mensagem").style.color =
                    "#dc2626";

                voltarLogin();

            }, 1000);
        }


        function entrar() {

            let email =
                document.getElementById("emailLogin").value.trim();

            let senha =
                document.getElementById("senhaLogin").value;


            if (email === "" || senha === "") {

                document.getElementById("mensagem").innerText =
                    "Digite seu email e sua senha.";

                return;
            }


            let contaSalva =
                localStorage.getItem("conta");


            if (contaSalva === null) {

                document.getElementById("mensagem").innerText =
                    "Nenhuma conta cadastrada.";

                return;
            }


            let conta =
                JSON.parse(contaSalva);


            if (
                email === conta.email &&
                senha === conta.senha
            ) {

                document.getElementById("mensagem").style.color =
                    "#16a34a";

                document.getElementById("mensagem").innerText =
                    "Login bem-sucedido!";


                localStorage.setItem(
                    "usuarioLogado",
                    "true"
                );


                setTimeout(function () {

                    window.location.href =
                        "escola.html";

                }, 500);


            } else {

                document.getElementById("mensagem").style.color =
                    "#dc2626";

                document.getElementById("mensagem").innerText =
                    "Email ou senha incorreto.";
            }
        }


        document
            .getElementById("senhaLogin")
            .addEventListener(
                "keydown",
                function (event) {

                    if (event.key === "Enter") {
                        entrar();
                    }

                }
            );
