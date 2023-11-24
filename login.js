// Obtener el formulario y el botón
var form = document.getElementById("login-form");
var button = document.getElementById("submit");

// Agregar un evento al botón para validar el formulario
button.addEventListener("click", function(event) {
    // Evitar que el formulario se envíe por defecto
    event.preventDefault();

    // Obtener los valores de los campos de usuario y contraseña
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verificar si los campos están vacíos
    if (username == "" || password == "") {
        // Mostrar una alerta indicando que hay espacios en blanco
        alert("Hay espacios en blanco que deben ser llenados.");
    } else {
        // Redirigir a otro archivo HTML
        window.location.href = "guia.html";
    }
});
