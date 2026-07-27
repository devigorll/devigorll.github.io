/*==================================================
PORTFÓLIO - IGOR CRUZ
typing.js
==================================================*/

document.addEventListener("DOMContentLoaded", () => {
    const typingElement = document.getElementById("typing");

    if (!typingElement) return;

    // Textos que vão se alternando na tela
    const words = [
        "Estudante de Ciência de Dados",
        "Auxiliar de TI",
        "Entusiasta de Python & SQL",
        "Desenvolvedor Web"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 100;    // Velocidade ao digitar (ms)
    const eraseSpeed = 50;    // Velocidade ao apagar (ms)
    const delayNext = 2000;   // Pausa após terminar de digitar a palavra (ms)

    function typeEffect() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            // Remove um caractere
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Adiciona um caractere
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let currentSpeed = isDeleting ? eraseSpeed : typeSpeed;

        // Quando termina de digitar a palavra inteira
        if (!isDeleting && charIndex === currentWord.length) {
            currentSpeed = delayNext;
            isDeleting = true;
        } 
        // Quando termina de apagar a palavra
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; // Passa para a próxima palavra
            currentSpeed = 500;
        }

        setTimeout(typeEffect, currentSpeed);
    }

    typeEffect();
});