let amigos = []


function agregarAmigo () {
    let inputHTML = (document.getElementById('espacioEscribir').value.trim());
    if  ( inputHTML == "" ) { alert ('El espacio esta en blanco')
        return 
    }
    amigos.push(inputHTML) 
    document.querySelector('#espacioEscribir').value = ''
    console.log(amigos)
    console.log (inputHTML)
    mostarListaAmigos();
}

function mostarListaAmigos(){
    let listaAmigosHTML = document.getElementById("listaAmigos")
    listaAmigosHTML.innerHTML = "";

    amigos.forEach((amigo) => {
        let li = document.createElement("li")
        li.textContent = amigo;
        listaAmigosHTML.appendChild(li)
    })

}

function sortearAmigo () {
    if (amigos.length <= 1) {
        alert("No hay amigos suficiente en la lista, agregar un minimo de 2 para continuar")
        return;
    }
    let indiceAleatorio = Math.floor(Math.random()* amigos.length)
    let nombreGenerado = amigos[indiceAleatorio];
    console.log(nombreGenerado)
    mostrarResultado(nombreGenerado)

}

function mostrarResultado(nombreGenerado){ 
    let listaResultados = document.getElementById('resultado');
    listaResultados.innerHTML = "El amigo sorteado es:" + nombreGenerado

}
