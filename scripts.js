document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    login-form.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita o envio padrão do formulário

        //Realizar a autenticação do usuário verificando as credenciais localmente.

        if (email === "email" && text === "endereco" && password === "senha") {
             alert("Login bem-sucedido!");
            // Redirecionar o usuário para a página de destino
            window.location.href = "menu_principal.html";
        } else {
            alert("Credenciais inválidas. Tente novamente.");
        }
    });
});