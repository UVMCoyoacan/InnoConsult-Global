function mostrarFormulario() {
    var containerFormulario = document.getElementById('ContainterFormulario'); // Corregido el ID
    containerFormulario.innerHTML = `
    <div id="formularioRegistro">
      <h2>Registro</h2>
      <form id="registroForm"> <!-- Agregamos un ID al formulario -->
        <label for="nombres">Nombres:</label>
        <input type="text" id="nombres" name="nombres" required><br><br>
        
        <label for="apellidos">Apellidos:</label>
        <input type="text" id="apellidos" name="apellidos" required><br><br>
        
        <label for="edad">Edad:</label>
        <input type="text" id="edad" name="edad" required><br><br>

        <input type="submit" value="Enviar">

      </form>
    </div>
    `;
    // Agregamos el evento de envío al formulario
    document.getElementById('registroForm').addEventListener('submit', mostrarDatosRegistrados);
}

document.getElementById('MostrarFormulario').addEventListener('click', mostrarFormulario); // Ajustado el ID del botón

function mostrarDatosRegistrados(event) {
    event.preventDefault(); // Prevenimos el envío del formulario para manejarlo manualmente
    
    // Capturamos los valores de los campos del formulario
    var nombres = document.getElementById('nombres').value;
    var apellidos = document.getElementById('apellidos').value;
    var edad = document.getElementById('edad').value;
    
    // Mostramos los datos capturados en algún lugar de la página
    var datosRegistrados = document.getElementById('datosRegistrados');
    datosRegistrados.innerHTML = `
    <h2>Datos Registrados:</h2>
    <p>Nombres: ${nombres}</p>
    <p>Apellidos: ${apellidos}</p>
    <p>Edad: ${edad}</p>
    `;
}
