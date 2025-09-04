// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


//Creando la lista que se usara

let nombreAmigos = []

//Creando la funcion de agregar amigo, usando el boton Añadir
function agregarAmigo() {
    //Creando la variable donde se guarda el texto actual
    let nombreAdd = document.getElementById('amigo').value;
    //Se verifica si la condicion se cumple (Se deja el campo vacio) y lanza un aviso
    if (nombreAdd === '') {
        alert('No puedes dejar el campo vacio, intentalo de nuevo')
    }//De lo contrario se procede a validar el nombre y añadirlo a la lista
    else {
        nombreAmigos.push(nombreAdd);
        limpiarTexto();
    }

    //Se prosigue con la actualizacion de la lista
    updateLista(nombreAmigos);
    
}

//Creando la funcion de actualizar lista y mostrarla en la pagina
function updateLista(nombreAmigos) {
    let listaHTML = document.getElementById('listaAmigos');
    //Limpia la lista existente

    listaHTML.innerHTML = '';

    //Itera la informacion en el arreglo
    for (let i = 0; i < nombreAmigos.length; i++) {
        //Agrega nombres a la lista
        let elementoHTML = document.createElement('li');
        elementoHTML.textContent = nombreAmigos[i];
        listaHTML.appendChild(elementoHTML);
    }

}

//Creo una variable donde se guardara la variable ganadora
let amigoGanador = document.getElementById('resultado');
//Crea la funcion donde se hara el sorteo
function sortearAmigo() {
    if (nombreAmigos.length < 2) {
        alert('Necesitas añadir al menos 2 amigos para jugar. Añade mas :D')
    } else {
        //Generar el indice aleatorio
        let indiceRandom = Math.floor(Math.random() * nombreAmigos.length);
        //Obtener el nombre ganador
        let nombreGanador = nombreAmigos[indiceRandom];
        //Muestra el resultado
        amigoGanador.innerHTML = `El amigo ganador es: ${nombreGanador}`;
    }

}

//Funcion para limpiar el campo de texto
function limpiarTexto() {
    let textoInput = document.getElementById('amigo')
    textoInput.value = '';
}

