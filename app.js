// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let simbol = ["!", "#", "$", "%", "&", "/", "(", ")", "=", "?", "¿", "¡", "¨", "*", "[", "]", "{", "}", "^", "<", ">", ";", ",", ":", "_", "-", "+", "´", "`", "¨",".", "°", "|", "¬", "]", "}"];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === "" || num.some(char => nombre.includes(char)) || simbol.some(char => nombre.includes(char))) {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    amigos.push(nombre);
    mostrarLista();
    input.value = "";
}

function mostrarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista de amigos está vacía. Agregue al menos un nombre.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo secreto es: ${amigoSecreto}`;
}
