/*let titulo = document.getElementById('titulo');
console.log(titulo);

//let titulo = document.querySelector('#titulo');
//console.log(titulo);

let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = "Novo Texto";

let button = document.querySelector('.btn');
console.log(button.innerHTML);

let item2 = document.querySelector('#item2');
item2.innerHTML = "Morango";

function changeImg(){

    document.querySelector('img').src = 'imagens/camel.png';

}

document.querySelector('.btn1').onclick = function(){
    document.querySelector('audio').play();
}

document.querySelector('.btn2').onclick = function(){
    paragrafo.style.color = 'red';
    paragrafo.style.fontSize = '20px';
}
*/
let listaClientes = [];

function adicionarCliente() {
    let nome = document.querySelector('#nome').value;
   
    listaClientes.push(nome);
    AtualizarLista();
}


function AtualizarLista() {
    let lista = document.querySelector('#listaClientes');


    lista.innerHTML = '';


    listaClientes.forEach((cliente, index) => {
        lista.innerHTML += `<li id="${index}">${cliente} <button onClick="apagar('${index}')">Apagar</button></li>`;
    });


    document.querySelector('#nome').value = '';
}


function apagar(index) {
    listaClientes.splice(index, 1);


    AtualizarLista();
}
