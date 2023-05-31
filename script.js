let listaTareas = new Array();
let itemList = document.getElementById("itemTarea");

const agregarTarea = ()=>{    
    listaTareas.push(itemList.value);
    mostrarLista();
}; 

let liListTarea = document.getElementById("listTareas");

function mostrarLista() {
    liListTarea.innerHTML = "";
    for (let i = 0; i < listaTareas.length; i++) {
        let elementoLista = document.createElement("li");
        elementoLista.textContent = listaTareas[i];
        liListTarea.appendChild(elementoLista);
    }
}

function limpiarInput(){
    itemList.value = "";
}

limpiarInput();


/*
    El elemento listaTareas es un Objeto tipo Array que almacenara los datos
    itemList es una variable que obtiene el valor del input dentro del html 
    En la funcion agregarTarea mediante el nombre del Array y con el metodo push, agregamos el valor obtenido en el input del html
    Despues llamamos a la función mostrar lista, al inicio lo que hace es reiniciar el div que contiene la lista de datos
    despues mediante un for, manda a llamar cada uno de los elementos dentro del Array y mediante una variable, creamos un elemento li por cada elemento dentro del array para al final ingresar el valor de cada elemento dentro de el
*/
