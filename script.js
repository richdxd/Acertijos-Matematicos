// Acertijo Matemático
function verificarRespuesta1() {
    const respuesta = document.getElementById("respuesta1").value.trim();
    const resultado = document.getElementById("resultado1");

    if (respuesta === "13") {
        resultado.innerHTML = "✅ ¡Correcto! Es la secuencia de Fibonacci.";
        resultado.style.color = "#00e676";
    } else {
        resultado.innerHTML = "❌ Incorrecto. ¡Intenta de nuevo!";
        resultado.style.color = "#ff5252";
    }
}

// Acertijo Informático
function verificarRespuesta2() {
    const respuesta = document.getElementById("respuesta2").value.trim();
    const resultado = document.getElementById("resultado2");

    if (respuesta === "8") {
        resultado.innerHTML = "✅ ¡Correcto! Un árbol binario de altura 3 puede tener hasta 8 hojas.";
        resultado.style.color = "#00e676";
    } else {
        resultado.innerHTML = "❌ Incorrecto. ¡Intenta de nuevo!";
        resultado.style.color = "#ff5252";
    }
}