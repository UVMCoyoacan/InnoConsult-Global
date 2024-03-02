function saludo() {
    alert("HOLAAA");
}

function numeracion(n) {
    for (i = 1; i <= n; i++) { // Ajustado el límite de la iteración
        alert(i);
    }
}

function fondoParrafos() {
    var parrafos = document.getElementsByTagName("p");
    parrafos[0].innerHTML = "REEMPLAZADO";
    parrafos[1].style.color = "blue"; // Ajustada la asignación del estilo
    var listItems = document.getElementsByTagName("li"); // Cambiado a listItems para evitar redefinición de la variable
    listItems[0].style.color = "red"; // Ajustado a listItems
    listItems[1].style.color = "green"; // Ajustado a listItems
    listItems[2].style.color = "blue"; // Ajustado a listItems
}

function noStyles() {
    var numStylesheets = document.styleSheets.length;
    for (var i = 0; i < numStylesheets; i++) {
        document.styleSheets[i].disabled = true;
    }
}

function activarStyles(n) {
    noStyles();
    document.styleSheets[n].disabled = false;
}

function mostrarFormulario() {
    var containerFormulario = document.getElementById('ContainterFormulario');
    containerFormulario.innerHTML = `
    <div id="formularioRegistro">
      <h2>Registro</h2>
      <form id="registroForm">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required><br><br>
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br><br>
        
        <label for:"edad">Edad:</label>
        <input type="text" id="edad" name="edad" required><br><br>

        <input type="submit" value="Enviar">

      </form>
    </div>
    `;
    document.getElementById('registroForm').addEventListener('submit', mostrarDatosRegistrados);
}

document.getElementById('MostrarFormulario').addEventListener('click', mostrarFormulario); // Ajustado el ID del botón

function mostrarDatosRegistrados(event) {
    event.preventDefault(); 
    
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    
    var datosRegistrados = document.getElementById('datosRegistrados');
    datosRegistrados.innerHTML = `
    <h2>Datos Registrados:</h2>
    <p>Nombre: ${nombre}</p>
    <p>Email: ${email}</p>
    `;
}
