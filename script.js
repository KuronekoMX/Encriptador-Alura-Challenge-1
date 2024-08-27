// Función para mostrar el mensaje en el área de resultado
function mostrar(mensaje) {
    document.querySelector("#resultado").value = mensaje; // Asegura que el mensaje se muestre en el textarea
}

// Función para actualizar la visibilidad de los elementos en la pantalla
function actualizarPantalla() {
    // Oculta los elementos que no se necesitan al principio
    document.querySelector("#vacio").style.display = "none";
    document.querySelector("#imagenSinMensaje").style.display = "none";
    document.querySelector("#sinMensaje").style.display = "none";
    document.querySelector("#descripcionSinMensaje").style.display = "none";

    // Muestra los elementos
    document.querySelector("#resultado").style.display = "block";
    document.querySelector("#copiar").style.display = "inline-block";
}

// Función para encriptar el mensaje
function botonEncriptar() {
    let mensaje = document.querySelector("#texto").value.trim(); // Recoge el texto del textarea y elimina espacios al principio y al final

    // Validación del texto: solo letras minúsculas y espacios
    if (mensaje && /^[a-z\s]*$/.test(mensaje)) { 
        // Reemplazo de caracteres con las secuencias encriptadas correspondientes
        mensaje = mensaje
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

        actualizarPantalla(); // Actualiza la pantalla para mostrar el resultado
        mostrar(mensaje); // Muestra el mensaje encriptado en el textarea de resultado
        document.querySelector('#texto').value = ''; // Limpia el campo de entrada
    } else {
        alert("Ingresa un texto con sólo minúsculas y sin acentos"); // Mensaje de error si el texto no es válido
    }
}

// Función para desencriptar el mensaje
function botonDesencriptar() {
    let mensaje = document.querySelector("#texto").value.trim();

    if (mensaje && /^[a-z\s]*$/.test(mensaje)) { 
        // Para evitar problemas de reemplazo, primero se reemplazan las secuencias más largas
        mensaje = mensaje
            .replace(/ufat/g, "u")
            .replace(/ober/g, "o")
            .replace(/imes/g, "i")
            .replace(/enter/g, "e")
            .replace(/ai/g, "a");

        actualizarPantalla();
        mostrar(mensaje);
        document.querySelector('#texto').value = ''; 
    } else {
        alert("Por favor, escribe un mensaje en minúsculas y sin acentos");
    }
}

// Función para copiar el texto en el portapapeles
function botonCopiar() {
    const texto = document.querySelector("#resultado");
    texto.select();
    texto.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(texto.value)
        .then(() => {
            alert("El texto ha sido copiado al portapapeles.");
        })
        .catch(err => {
            console.error("Error al copiar el texto: ", err);
        });
}

// Asignación de eventos a botones
document.querySelector("#encriptar").addEventListener("click", botonEncriptar);
document.querySelector("#desencriptar").addEventListener("click", botonDesencriptar);
document.querySelector("#copiar").addEventListener("click", botonCopiar);
