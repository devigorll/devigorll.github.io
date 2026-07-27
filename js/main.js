/*==================================================
PORTFÓLIO - IGOR CRUZ
main.js
==================================================*/

document.addEventListener("DOMContentLoaded", () => {
    // ---------- SELEÇÃO DE ELEMENTOS ----------
    const header = document.getElementById("header");
    const menuBtn = document.getElementById("menu-btn");
    const nav = document.getElementById("nav");
    const backToTopBtn = document.getElementById("back-to-top");
    const navLinks = document.querySelectorAll("#nav a");

    // ---------- MENU MOBILE ----------
    if (menuBtn && nav) {
        menuBtn.addEventListener("click", () => {
            nav.classList.toggle("active");
            
            // Alterna o ícone entre barras e 'X'
            const icon = menuBtn.querySelector("i");
            if (icon) {
                icon.classList.toggle("fa-bars");
                icon.classList.toggle("fa-xmark");
            }
        });

        // Fecha o menu ao clicar em um link
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("active");
                const icon = menuBtn.querySelector("i");
                if (icon) {
                    icon.classList.add("fa-bars");
                    icon.classList.remove("fa-xmark");
                }
            });
        });
    }

    // ---------- SCROLL DO HEADER E BOTÃO "VOLTAR AO TOPO" ----------
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;

        // Efeito glass/sombra no Header ao rolar
        if (header) {
            if (scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        }

        // Exibir/ocultar botão de voltar ao topo
        if (backToTopBtn) {
            if (scrollY > 400) {
                backToTopBtn.classList.add("active");
            } else {
                backToTopBtn.classList.remove("active");
            }
        }
    });

    // ---------- AÇÃO DO BOTÃO VOLTAR AO TOPO ----------
    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});