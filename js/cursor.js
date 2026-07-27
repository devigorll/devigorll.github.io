/*==================================================
PORTFÓLIO - IGOR CRUZ
cursor.js
==================================================*/

document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".cursor");
    const cursorDot = document.querySelector(".cursor-dot");

    if (!cursor || !cursorDot || window.matchMedia("(pointer: coarse)").matches) {
        if (cursor) cursor.style.display = "none";
        if (cursorDot) cursorDot.style.display = "none";
        return;
    }

    let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;

    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
    });

    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;

        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    const interactiveElements = document.querySelectorAll(
        "a, button, input, textarea, .card, .skill-card, .project-card"
    );

    interactiveElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
            cursor.style.transform = "translate(-50%, -50%) scale(1.6)";
            cursor.style.borderColor = "var(--color-primary-light)";
            cursor.style.backgroundColor = "rgba(120, 120, 120, 0.15)";
        });

        element.addEventListener("mouseleave", () => {
            cursor.style.transform = "translate(-50%, -50%) scale(1)";
            cursor.style.borderColor = "var(--color-primary)";
            cursor.style.backgroundColor = "transparent";
        });
    });
});