const prompt = require("prompt-sync")({ sigint: true });

//Almacenar tareas
let tareas = [];

let categoriasNombre = [
    "Trabajo",
    "Personal",
    //Agregar mas categorias segun sea necesario
];

//function que muestra categorias
function mostrarCategorias () {
    console.log("Categorias son:");
    categoriasNombre.forEach(function(categoria,indice){
        console.log(indice + ":" + categoria);
    })
}

function agregarCategorias (nombreCategoria){
    categoriasNombre.push(nombreCategoria);
    console.log("Categoria agregada correctamente:" + nombreCategoria)
}

function addTarea (nombreRecibido, fechaLimiteRecibida = null ) {

    mostrarCategorias();
    
    let numeroCategoria = parseInt(prompt("Ingrese el numero de la categoria para la nueva tarea"));

    if(numeroCategoria >= 0 && numeroCategoria < categoriasNombre.length){
        tareas.push({
            nombre: nombreRecibido,
            completada: false,
            fechaLimite: fechaLimiteRecibida,
            categoria: numeroCategoria
        });
        console.log("Tarea agregada con exito")
    }else{
        console.log("Numero de categoria incorrecto");
    }

}

function eliminarTarea (indice) {
    if(indice >= 0 && indice < tareas.length){
        tareas.splice(indice,1)
        console.log("Tarea eliminada")
    }else {
        console.log("Indice incorrecto")
    }
}

function completarTarea (indice) {
    if(indice >= 0 && indice < tareas.length){
        tareas[indice].completada = true
        console.log("Tarea completada");
    }else {
        console.log("Indice invalido");
    }
}

function modificarTarea (indice, palabra, nuevaFecha = null, nuevoNumeroCategoria) {
    if(indice >= 0 && indice < tareas.length){
        tareas[indice].nombre = palabra !== undefined ? palabra : tareas[indice].nombre
        tareas[indice].nuevaFecha = nuevaFecha !== undefined ? nuevaFecha : tareas[indice].nuevaFecha
        tareas[indice].nuevoNumeroCategoria = nuevoNumeroCategoria !== undefined ? nuevoNumeroCategoria : tareas[indice].nuevoNumeroCategoria
        console.log("Tarea modificada");
    }else {
        console.log("Indice invalido");
    }
}

function filtrarTareasCategoria(numeroCategoria){
    let tareasFiltradas = tareas.filter(function(tarea){
        return tarea.categoria === numeroCategoria;
    });
    return tareasFiltradas;
}

function contarTareasCompletadasPorCategoria(numeroCategoria){
    let tareasCategoria = filtrarTareasCategoria(numeroCategoria);
    let tareasCompletadas = tareasCategoria.reduce(function(contador, tarea){
        return tarea.completada ? contador + 1 : contador;
    }, 0);
    let tareasEnTotal = tareasCategoria.length;
    console.log("Tareas completadas de la categoria" + numeroCategoria + ":" + tareasCompletadas + "de" + tareasEnTotal)
}

function tareasNoCompletadas(){
    console.log("Tareas no completadas");
    tareas.forEach(function(tarea){
        if(!tarea.completada){
            console.log("Nombre"+ tarea.nombre + "Categoria:" + categoriasNombre[tarea.categoria])
        }
    })
}


function ordenarTareasPorNombre (){
    let total = tareas.length;
    for (let j = 0; j < total; j++) {
        for(let i = 0; i < total - 1; i++){
            if(tareas[i].nombre > tareas[i + 1].nombre){
                let temp = tareas[i];
                tareas[i] = tareas[i+1];
                tareas[i+1] = temp;
            }
        }
    }
}

function ordenarTareasPorFecha (){
    let total = tareas.length;
    for (let j = 0; j < total; j++) {
        for(let i = 0; i < total - 1; i++){
            if(tareas[i].fechaLimite > tareas[i + 1].fechaLimite){
                let temp = tareas[i];
                tareas[i] = tareas[i+1];
                tareas[i+1] = temp;
            }
        }
    }
}

function busquedaTarea(nombreTarea){
    let inicio = 0;
    let fin = tareas.length - 1;

    while (inicio <= fin) {
        let posicionMedio = Math.round((inicio + fin) / 2);

        if(tareas[posicionMedio].nombre === nombreTarea){
            return posicionMedio
        }else if(tareas[posicionMedio].nombre < nombreTarea){
            inicio = posicionMedio + 1;
        }else {
            fin = posicionMedio - 1;
        }
    }   

    return -1;

}

function mostrarMenu () {
    console.log("Menu");
    console.log("1. Agregar tarea");
    console.log("2. Elmiinar");
    console.log("3. Marcara tarea");
    console.log("4. Modificar tarea");
    console.log("5. Mostrar tareas");
    console.log("6. Ver todas las categorias");
    console.log("7. Agregar categorias");
    console.log("8. Filtrar tareas por categorias");
    console.log("9. Visualizar cantida de tareas completadas");
    console.log("10. Visualizar todas las tareas no completadas");
    console.log("11. Ordenar por nombre");
    console.log("12. Ordenar por fecha");
    console.log("13. Buscar tarea por nombre");
    console.log("0. Salir");
}

function interactuarUsuario(){
    let opcion = -1;
    while(opcion != 0){
        mostrarMenu();
        opcion = parseInt(prompt("Ingrese la opcion"))
        switch (opcion) {
            case 1:
                let nombreTarea = prompt("Ingrese nombre de la tarea a agregar: ");
                addTarea(nombreTarea)
                break;
            case 2:
                let indiceTareaEliminada = parseInt(prompt("Ingrese el indice: "));
                eliminarTarea(indiceTareaEliminada)
                break;
            case 3:
                let indiceTareaCompletada = parseInt(prompt("Ingrese el indice: "));
                completarTarea(indiceTareaCompletada)
                break;
            case 4:
                let indiceTareaMod = parseInt(prompt("Ingrese el indice: "));
                if(indiceTareaMod >= 0 && indiceTareaMod < tareas.length){
                    let opcion = parseInt(prompt("Que propiedad deseas modificar: 1. Nombre, 2. Fecha Limite, 3.Numero de categoria "));
                    switch(opcion){
                        case 1:
                            let nombreNuevo = prompt("Ingrese el nuevo nombre");
                            modificarTarea(indiceTareaMod,nombreNuevo);
                            break;
                        case 2:
                            let nuevaFecha = prompt("Ingrese fecha");
                            modificarTarea(indiceTareaMod,undefined,nuevaFecha);
                            break;
                        case 3:
                            let nuevaCate = parseInt(prompt("Ingrese nueva categoria"));
                            (nuevaCate >= 0 && nuevaCate < categoriasNombre.length)? 
                            modificarTarea(indiceTareaMod,undefined,undefined,nuevaCate) : 
                            console.log("Categoria erronea")
                            break;
                    }
                }else{
                    console.log("Indice de tarea incorrecta");
                }
                break;
            case 5:
                console.log(tareas)
                break;
            case 6:
                mostrarCategorias()
                break;
            case 7:
                let nuevaCategoria = prompt("Ingrese nombre de la categoria a agregar: ");
                agregarCategorias(nuevaCategoria);
                break;
            case 8:
                mostrarCategorias();
                let nroCategoria = parseInt(prompt("Ingrese el numero de la categoria a filtrar"));
                let tareasCategorias = filtrarTareasCategoria(nroCategoria);
                console.log("Tareas de la categoria seleccionada:")
                console.log(tareasCategorias);
                break;
            case 9:
                mostrarCategorias();
                let nroCateg = parseInt(prompt("Ingrese el numero de la categoria a visualizar"));
                contarTareasCompletadasPorCategoria(nroCateg);
                break;
            case 10:
                tareasNoCompletadas();
                break;
            case 11:
                ordenarTareasPorNombre();
                break;
            case 12:
                ordenarTareasPorFecha();
                break;
            case 13:
                ordenarTareasPorNombre();
                let nombreBuscar = prompt("Ingrese el nombre a buscar");
                let indiceTarea = busquedaTarea(nombreBuscar);
                (indiceTarea !== -1) ? console.log("Tarea encontrada en" + indiceTarea) : console.log("Tarea no encontrada");
                break;
            default:
                console.log("Opcion invalida")
                break;
        }
    }
}

interactuarUsuario();

