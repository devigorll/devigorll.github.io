/*==================================================
PORTFÓLIO - IGOR CRUZ
theme.js
==================================================*/

document.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.getElementById("theme-toggle");
    const body = document.body;

    // Verifica se já existe um tema salvo no localStorage
    const savedTheme = localStorage.getItem("portfolio-theme");

    // Aplica o tema salvo se existir
    if (savedTheme === "light") {
        body.classList.add("light-theme");
        updateIcon(true);
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            // Alterna a classe light-theme no body
            const isLight = body.classList.toggle("light-theme");

            // Salva a escolha do usuário
            localStorage.setItem("portfolio-theme", isLight ? "light" : "dark");

            // Atualiza o ícone do botão
            updateIcon(isLight);
        });
    }

    function updateIcon(isLight) {
        if (!themeToggleBtn) return;
        const icon = themeToggleBtn.querySelector("i");
        if (icon) {
            if (isLight) {
                icon.classList.remove("fa-moon");
                icon.classList.add("fa-sun");
            } else {
                icon.classList.remove("fa-sun");
                icon.classList.add("fa-moon");
            }
        }
    }
});