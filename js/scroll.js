/*==================================================
PORTFÓLIO - IGOR CRUZ
scroll.js
==================================================*/

document.addEventListener("DOMContentLoaded", () => {
    // ---------- BARRA DE PROGRESSO DO SCROLL ----------
    const progressBar = document.getElementById("progress-bar");

    function updateProgressBar() {
        if (!progressBar) return;
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + "%";
    }

    // ---------- LINK ATIVO CONFORME SEÇÃO ----------
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("#nav a");

    function highlightNavOnScroll() {
        const scrollY = window.scrollY;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 120;
            const sectionId = section.getAttribute("id");

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    // ---------- ANIMAÇÃO DOS CONTADORES DA SEÇÃO DE ESTATÍSTICAS ----------
    const counters = document.querySelectorAll(".counter");
    let animatedCounters = false;

    function animateCounters() {
        const statsSection = document.getElementById("stats");
        if (!statsSection || animatedCounters) return;

        const sectionTop = statsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            counters.forEach(counter => {
                const target = +counter.getAttribute("data-target");
                const duration = 1500; // Duração em ms
                const stepTime = 20;
                const increment = target / (duration / stepTime);

                let current = 0;
                const updateCount = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.ceil(current);
                        setTimeout(updateCount, stepTime);
                    } else {
                        counter.textContent = target;
                    }
                };

                updateCount();
            });
            animatedCounters = true;
        }
    }

    // ---------- LISTENER UNIFICADO DE SCROLL ----------
    window.addEventListener("scroll", () => {
        updateProgressBar();
        highlightNavOnScroll();
        animateCounters();
    });

    // Executa uma vez no carregamento para sincronizar
    updateProgressBar();
    highlightNavOnScroll();
    animateCounters();
});