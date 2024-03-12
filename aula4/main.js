// find()

let myArray = [5, 10, 20, 3, 18, 11, 55, 40];

let result = myArray.find(myFunction18);

function myFunction18(value){
    return value > 18;
}

console.log(result);

let nomes = ['ana', 'maria', 'joana', 'jose', 'joao'];

let resultado = nomes.find(nomeComA);

function nomeComA(nome){
    return nome.includes("a");
}

console.log(resultado);

