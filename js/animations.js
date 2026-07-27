/*==================================================
PORTFÓLIO - IGOR CRUZ
animations.js
==================================================*/


const reveals = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right"
);


function revealOnScroll(){

    const windowHeight = window.innerHeight;


    reveals.forEach(element => {


        const elementTop = element.getBoundingClientRect().top;


        const revealPoint = 120;


        if(elementTop < windowHeight - revealPoint){

            element.classList.add("active");

        }


    });


}


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();