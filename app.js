// nueva version con tiempo y contando
// descagada la base, vinculado el git, trabajar el java
// luego el array amigos
// implementar funciones para agregar amigos, actualizar la lista, sortear amigos.
// crear un readme "interesante?????"

let amigos = [];

//problema del git solucionado. error en el master y main
// continuamos


function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    if (nombre) {
       amigos.push(nombre);
       actualizarLista();
       input.value = '';
       // insertamos una alerta nueva
       mostrarNotificacion(`Amigo añadido`);

    }  
}       
        //correccion de la funcion, creo que tenia elementos de mas
// no estaba bien escrito. al parecer se me pasó
// ahora funcion de actualizar lista. esto lo puse encima del anterior

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
    // ahora si creo que esta solucionado.... vamos a probar
        //esta parte esta bien. seguimos revisando abajo


//sortear nombres.. 

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear. Por favor inserte un nombre válido');
        return;
    }
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo sorteado es: <strong>${amigoSorteado}</strong></li>`;
}

function mostrarNotificacion(mensaje) {
    const notificacion = document.getElementById('notificacion');
    notificacion.textContent = mensaje;
    notificacion.style.display = 'block';

    setTimeout(() => {
        notificacion.textContent = '';
        notificacion.style.display = 'none';
    }, 0750); // El mensaje desaparece después de .75 segundos
}


// funcion para el boton de enter
document.getElementById('amigo').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        agregarAmigo();
        
    }      
});

// no esta jalando nombres :(
    // vamos a correr de nuevo v. 2.0
        // corremos nuevamente
        // intento algo nuevo para que funcione el alert al añadir nuevo nombre
