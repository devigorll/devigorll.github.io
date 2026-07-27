/*==================================================
PORTFÓLIO - IGOR CRUZ
loader.js
==================================================*/

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        // Transição suave de opacidade
        loader.style.transition = "opacity 0.6s ease, visibility 0.6s ease";
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

        // Remove do fluxo do documento após terminar a animação
        setTimeout(() => {
            loader.style.display = "none";
        }, 600);
    }
});