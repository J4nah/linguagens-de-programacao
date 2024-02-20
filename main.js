/* 
alt + shift + a 
*/

//declarando variaveis

const pi = 3.14; //constante

var x = 5; //variavel global 
var x = 10;

let nome = "Janaina"; // variavel local


console.log(typeof nome);

console.log(typeof pi);

let sobrenome = "Gomes";

console.log(nome + " " + sobrenome) //concatenação

console.log(`${nome} ${sobrenome}`) //interpolação (se der enter ele também irá para a linha de baixo)

function mostrarNome () {
    console.log("Janaina");
}

mostrarNome();

function mostrarNome2 (nome) {
    console.log(nome);
}

mostrarNome2("Jana");

function soma( a, b) {
    return a + b;
}

console.log(soma(5, 5))