document.addEventListener("DOMContentLoaded", function() {
    // Obtener elementos del DOM
    const registrationFormSection = document.getElementById("registration-form");
    const showRegistrationBtn = document.getElementById("show-registration-btn");
    const registeredDataSection = document.getElementById("registered-data");
    const displayNombre = document.getElementById("display-nombre");
    const displayApellidoP = document.getElementById("display-apellidoP");
    const displayApellidoM = document.getElementById("display-apellidoM");
    const displayCorreo = document.getElementById("display-correo");
    const displayTelefono = document.getElementById("display-telefono");

    // Agregar evento al botón para mostrar el formulario
    showRegistrationBtn.addEventListener("click", function() {
        registrationFormSection.style.display = "block";
        registeredDataSection.style.display = "none"; // Oculta la sección de datos registrados
    });

    // Agregar evento al formulario para prevenir el envío por defecto
    const registrationForm = document.getElementById("registration-form");
    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Obtener los valores de los campos del formulario
        const nombre = document.getElementById("nombre").value;
        const apellidoP = document.getElementById("apellidoP").value;
        const apellidoM = document.getElementById("apellidoM").value;
        const correo = document.getElementById("correo").value;
        const telefono = document.getElementById("telefono").value;

        // Mostrar datos registrados en la otra sección
        displayNombre.textContent = "Nombre: " + nombre;
        displayApellidoP.textContent = "Apellido Paterno: " + apellidoP;
        displayApellidoM.textContent = "Apellido Materno: " + apellidoM;
        displayCorreo.textContent = "Correo: " + correo;
        displayTelefono.textContent = "Teléfono: " + telefono;

        // Mostrar la sección de datos registrados y ocultar el formulario
        registeredDataSection.style.display = "block";
        registrationFormSection.style.display = "none";

        // Limpiar campos del formulario
        registrationForm.reset();
    });
});