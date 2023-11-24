///Deslizaje de menu
alert("BIENVENIDO A LA PAGINA");
let menu = document.querySelector("#icono-menu");
let navegacion = document.querySelector(".navegacion");

menu.addEventListener("click", function(){
    navegacion.classList.toggle("active");
});

window.onscroll=()=>{
    navegacion.classList.remove("active")
};

///Juego extra de Adivinanza
function adivinarNumero() {
    const numeroAleatorio = Math.floor(Math.random() * 100);

    let intento = 1;

    while (intento <= 10 ) {
        const numeroIngresado = prompt("Adivine el número entre 1 y 100:");

        if (numeroIngresado == numeroAleatorio) {
            alert("¡Acertaste! El número era " + numeroAleatorio);
            return;
        } else if (numeroIngresado > numeroAleatorio) {
            alert("El número es menor.");
        } else {
            alert("El número es mayor.");
        }

        intento++;
    }

    alert("Has agotado tus intentos. El número era " + numeroAleatorio);
}
