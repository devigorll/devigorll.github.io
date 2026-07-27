document.addEventListener("DOMContentLoaded", () => {
    const projectsContainer = document.getElementById("projects-container");

    if (!projectsContainer) return;

    const defaultStacks = [
        "SQL Server", "Python", "Pandas", "NumPy", "Faker", 
        "Matplotlib", "Seaborn", "Power BI", "Streamlit", "GitHub"
    ];

    const projectsData = [
        {
            title: "People Analytics - Análise Atrito",
            badge: "Data Science",
            description: "Este projeto aplica técnicas avançadas de Ciência de Dados e Estatística para antecipar a evasão de talentos (turnover/atrito) e otimizar o planejamento de sucessão nas empresas.",
            githubUrl: "https://github.com/devigorll/analise_atrito",
            images: [
                "assets/images/people_analytcs/codigo.jpg",
                "assets/images/people_analytcs/dashboard.jpg",
                "assets/images/people_analytcs/documentacao.jpg",
                "assets/images/people_analytcs/tela_inicial.jpg"

            ],
            stacks: defaultStacks
        },
        {
            title: "Análise Monitoramento Logística",
            badge: "Data Science",
            description: "Projeto focado na estruturação e monitoramento de indicadores logísticos para análise de dados operacionais e de transporte.",
            githubUrl: "https://github.com/devigorll/analise_monitoramento",
            images: [
                "assets/images/analise_monitoramento/join_vw_envio.png",
                "assets/images/analise_monitoramento/financeiro.png",
                "assets/images/analise_monitoramento/codigo.png",
                "assets/images/analise_monitoramento/dashpower.png"
            ],
            stacks: defaultStacks
        },
        {
            title: "Help Desk",
            badge: "Suporte & TI",
            description: "O Help Desk é um sistema desenvolvido para centralizar e gerenciar chamados de suporte técnico, proporcionando maior organização e acompanhamento em tempo real.",
            githubUrl: "https://github.com/devigorll/help_desk",
            images: [
                "assets/images/projects/helpdesk-1.png",
                "assets/images/projects/helpdesk-2.png"
            ],
            stacks: defaultStacks
        },
        {
            title: "Smart Stock",
            badge: "Modelos Preditivos",
            description: "O Smart Stock utiliza Ciência de Dados e modelos preditivos para automatizar o controle de inventário, antecipando demandas e otimizando níveis de estoque.",
            githubUrl: "https://github.com/devigorll/smart_stock",
            images: [
                "assets/images/projects/smart-stock-1.png",
                "assets/images/projects/smart-stock-2.png"
            ],
            stacks: defaultStacks
        },
        {
            title: "Análise Brasileirão 2024",
            badge: "Estrutura de Dados",
            description: "Projeto desenvolvido como trabalho final para a disciplina de Estrutura de Dados no 2º semestre do curso de Ciência de Dados na FATEC Jundiaí.",
            githubUrl: "https://github.com/devigorll/analise_brasileirao",
            images: [
                "assets/images/projects/brasileirao-1.png",
                "assets/images/projects/brasileirao-2.png"
            ],
            stacks: defaultStacks
        },
        {
            title: "Estudos Ciência de Dados",
            badge: "Repositório",
            description: "Repositório dedicado a estudos, projetos e desafios de Ciência de Dados utilizando Python, Pandas, Matplotlib, Seaborn e outras bibliotecas.",
            githubUrl: "https://github.com/devigorll/cursocienciadedados",
            images: [
                "assets/images/projects/estudos-1.png",
                "assets/images/projects/estudos-2.png"
            ],
            stacks: defaultStacks
        }
    ];

    function renderProjects() {
        projectsContainer.innerHTML = "";

        projectsData.forEach((project, index) => {
            const card = document.createElement("div");
            card.className = "project-card reveal active-reveal"; 

            const slidesHtml = project.images.map((imgUrl, imgIndex) => `
                <div class="carousel-slide ${imgIndex === 0 ? 'active' : ''}">
                    <img src="${imgUrl}" alt="${project.title}" onerror="this.onerror=null; this.src='assets/images/perfil/foto01.jpeg';">                </div>
            `).join("");

            const dotsHtml = project.images.map((_, imgIndex) => `
                <span class="carousel-dot ${imgIndex === 0 ? 'active' : ''}" data-project="${index}" data-slide="${imgIndex}"></span>
            `).join("");

            const stacksHtml = project.stacks.map(stack => `<span>${stack}</span>`).join("");

            card.innerHTML = `
                <div class="project-carousel" id="carousel-${index}">
                    <div class="carousel-track">
                        ${slidesHtml}
                    </div>
                    ${project.images.length > 1 ? `
                        <button class="carousel-btn prev" data-project="${index}" aria-label="Anterior"><i class="fa-solid fa-chevron-left"></i></button>
                        <button class="carousel-btn next" data-project="${index}" aria-label="Próximo"><i class="fa-solid fa-chevron-right"></i></button>
                        <div class="carousel-dots">
                            ${dotsHtml}
                        </div>
                    ` : ''}
                </div>
                <div class="project-content">
                    <div>
                        <div class="project-header">
                            <h3>${project.title}</h3>
                            <span class="project-badge">${project.badge}</span>
                        </div>
                        <p>${project.description}</p>
                    </div>
                    <div>
                        <div class="project-tech">
                            ${stacksHtml}
                        </div>
                        <div class="project-buttons">
                            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn primary btn-portfolio">
                                <i class="fa-brands fa-github"></i> Ver no GitHub
                            </a>
                        </div>
                    </div>
                </div>
            `;

            projectsContainer.appendChild(card);
        });

        initCarousels();
    }

    function initCarousels() {
        projectsData.forEach((project, pIndex) => {
            const carousel = document.getElementById(`carousel-${pIndex}`);
            if (!carousel) return;

            const slides = carousel.querySelectorAll(".carousel-slide");
            const dots = carousel.querySelectorAll(".carousel-dot");
            const prevBtn = carousel.querySelector(".carousel-btn.prev");
            const nextBtn = carousel.querySelector(".carousel-btn.next");

            let currentSlide = 0;

            function updateCarousel(newIndex) {
                slides[currentSlide].classList.remove("active");
                if (dots[currentSlide]) dots[currentSlide].classList.remove("active");

                currentSlide = (newIndex + slides.length) % slides.length;

                slides[currentSlide].classList.add("active");
                if (dots[currentSlide]) dots[currentSlide].classList.add("active");
            }

            if (nextBtn) {
                nextBtn.addEventListener("click", (e) => {
                    e.preventDefault();
                    updateCarousel(currentSlide + 1);
                });
            }

            if (prevBtn) {
                prevBtn.addEventListener("click", (e) => {
                    e.preventDefault();
                    updateCarousel(currentSlide - 1);
                });
            }

            dots.forEach(dot => {
                dot.addEventListener("click", (e) => {
                    const slideIdx = parseInt(e.target.getAttribute("data-slide"));
                    updateCarousel(slideIdx);
                });
            });
        });
    }

    renderProjects();
});