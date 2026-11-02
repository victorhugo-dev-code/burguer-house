/* ========================================================
   BURGUER HOUSE - JAVASCRIPT BÁSICO
   Funcionalidades:
   1. Abertura e fechamento do menu no celular
   2. Confirmação e verificação simples do formulário de contato
======================================================== */

// Espera todo o documento HTML carregar antes de rodar os scripts
document.addEventListener("DOMContentLoaded", function () {
    
    /* ----------------------------------------------------
       1. MENU RESPONSIVO PARA CELULARES
    ---------------------------------------------------- */
    const botaoMenu = document.getElementById("btn-menu-mobile");
    const menuNavegacao = document.getElementById("menu-navegacao");

    // Se o botão e o menu existirem na página
    if (botaoMenu && menuNavegacao) {
        botaoMenu.addEventListener("click", function () {
            // Alterna a classe 'ativo' no menu (abre ou fecha)
            menuNavegacao.classList.toggle("ativo");
        });

        // Fecha o menu quando o usuário clicar em qualquer link
        const linksMenu = menuNavegacao.querySelectorAll("a");
        linksMenu.forEach(function (link) {
            link.addEventListener("click", function () {
                menuNavegacao.classList.remove("ativo");
            });
        });
    }

    /* ----------------------------------------------------
       2. VALIDAÇÃO DO FORMULÁRIO DE CONTATO (contato.html)
    ---------------------------------------------------- */
    const formContato = document.getElementById("form-contato");
    const respostaFormulario = document.getElementById("resposta-formulario");

    if (formContato) {
        formContato.addEventListener("submit", function (evento) {
            // Evita que a página recarregue ao enviar o formulário
            evento.preventDefault();

            // Pega os valores digitados pelo usuário
            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();

            // Verificação simples: se algum campo estiver em branco
            if (nome === "" || email === "" || mensagem === "") {
                alert("Por favor, preencha todos os campos obrigatórios!");
                return;
            }

            // Se tudo estiver certo, exibe a mensagem de sucesso
            if (respostaFormulario) {
                respostaFormulario.innerHTML = `Obrigado, <strong>${nome}</strong>! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve!`;
                respostaFormulario.className = "resposta-formulario sucesso";
            }

            // Limpa os campos do formulário para um próximo envio
            formContato.reset();
        });
    }

});
