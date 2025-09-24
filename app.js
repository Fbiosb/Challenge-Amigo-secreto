// nueva version con tiempo y contando
// descagada la base, vinculado el git, trabajar el java
// luego el array amigos
// implementar funciones para agregar amigos, actualizar la lista, sortear amigos.
// crear un readme "interesante?????"

let amigos = [];

//problema del git solucionado. error en el master y main
// continuamos


function agregarAmigo() {
    const lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

//sortear nombres.. 