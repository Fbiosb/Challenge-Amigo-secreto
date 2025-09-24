// nueva version con tiempo y contando
// descagada la base, vinculado el git, trabajar el java
// luego el array amigos
// implementar funciones para agregar amigos, actualizar la lista, sortear amigos.
// crear un readme "interesante?????"

const { act } = require("react");

let amigos = [];

//problema del git solucionado. error en el master y main
// continuamos


function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    if (nombre === '') {
       amigos. push(nombre);
       actualizarLista();
       input.value = '';
    }   
}       

// no estaba bien escrito. al parecer se me pasó
// ahora funcion de actualizar lista. esto lo puse encima del anterior

function actualizarLista() {
    const lista = document.getElementById('listaamigos');
    lista.innerHTML = '';
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
    // ahora si creo que esta solucionado.... vamos a probar



//sortear nombres.. 

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear. Por favor inserte un nombre válido');
        return;
    }
    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indice];
    alert(`El amigo sorteado es: ${amigoSorteado}`);
}

// funcion para el boton de enter

document.getElementById('nombre-amigo').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault(); // Evita que se envíe el formulario si está dentro de uno
        document.getElementById('agregar-btn').click(); // Simula el clic en el botón
    }      
});

// no esta jalando nombres :(
    // vamos a correr de nuevo v. 2.0
