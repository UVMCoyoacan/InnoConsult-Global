document.addEventListener("DOMContentLoaded", function() {

    const registrationFormSection = document.getElementById("registration-form");
    const showRegistrationBoton = document.getElementById("show-registration-boton");
    const registeredDataSection = document.getElementById("registered-data");
    const displayNombre = document.getElementById("display-nombre");
    const displayCorreo = document.getElementById("display-correo");
    const displayCarrera = document.getElementById("display-carrera");

    showRegistrationBoton.addEventListener("click", function() {
        registrationFormSection.style.display = "block";
        registeredDataSection.style.display = "none"; 
    });

    const registrationForm = document.getElementById("registration-form");
    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();


        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;
        const carrera = document.getElementById("carrera").value;

        displayNombre.textContent = "Nombre: " + nombre;
        displayCorreo.textContent = "Correo: " + correo;
        displayCarrera.textContent = "Carrera: " + carrera;


        registeredDataSection.style.display = "block";
        registrationFormSection.style.display = "none";

        registrationForm.reset();
    });
});