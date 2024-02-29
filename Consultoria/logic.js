// Obtener elementos del DOM
const aboutLink = document.getElementById("aboutLink");
const servicesLink = document.getElementById("servicesLink");
const goalLink = document.getElementById("goalLink");
const biographyLink = document.getElementById("biographyLink");
const eduardoLink = document.getElementById("eduardoLink");
const eduardoImg = document.getElementById("eduardoImg");

// Asignar eventos de clic a los enlaces
aboutLink.addEventListener("click", () => {
    // Aquí puedes agregar el comportamiento deseado para el enlace ¿Qué somos?
    console.log("Clic en ¿Qué somos?");
});

servicesLink.addEventListener("click", () => {
    // Aquí puedes agregar el comportamiento deseado para el enlace Servicios
    console.log("Clic en Servicios");
});

goalLink.addEventListener("click", () => {
    // Aquí puedes agregar el comportamiento deseado para el enlace Objetivo
    console.log("Clic en Objetivo");
});

biographyLink.addEventListener("click", () => {
    // Aquí puedes agregar el comportamiento deseado para el enlace Biografías
    console.log("Clic en Biografías");
});

eduardoLink.addEventListener("click", () => {
    // Aquí puedes agregar el comportamiento deseado para el enlace de Eduardo Vargas Coutiño
    console.log("Clic en Eduardo Vargas Coutiño");
});

eduardoImg.addEventListener("click", () => {
    // Aquí puedes agregar el comportamiento deseado para la imagen de Eduardo Vargas Coutiño
    console.log("Clic en la imagen de Eduardo Vargas Coutiño");
});