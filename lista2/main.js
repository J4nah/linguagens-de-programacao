//DEIXEI TODOS OS EXERCICIOS COMENTADOS PARA SER MAIS FACIL NA HORA DE RODAR CADA UM PROFESSOR

// exercicio 1
/*
let nomeCompleto = function (nome, sobrenome) {
    return `${nome} ${sobrenome}`
}

console.log(nomeCompleto("Fabio", "Colombini"));
*/


// exercicio 2
/*
let calcularAreaRetangulo = (base, altura) => "A area do retangulo é: " + base * altura;
console.log(calcularAreaRetangulo(10, 5));
*/


// exercicio 3
/*
let numeros = [10, 20, 30, 40, 50]
let soma = 0
function somaArray() {
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i]
    }
    return soma;
}

console.log(somaArray());
*/


//exercicio 4
/*
let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function impares() {
    for (let i = 0; i < numeros2.length; i++) {
        if (numeros2[i] % 2) {
        } else {
            console.log([i]);
        }
    }
}

impares();
*/


// exercicio 5
/*
let cidades = ["Sorocaba", "Piedade", "Votorantim"];
console.log(cidades);
cidades.unshift("Itu");
console.log(cidades);
cidades.pop();
console.log(cidades);
*/


// exercicio 6
/*
let aluno = {
    "nome": "Janaina",
    "idade": 33,
    "curso": "ADS",
    "matricula": 123456,

    info: function () {
        return `Aluno(a): ${this.nome}
Idade: ${this.idade}
Curso: ${this.curso}
Matricula: ${this.matricula}`;
    }
};

console.log(aluno.info());
*/


//exercicio 7
/*
let numeros3 = [13, 55, 89, 199, 20, 105];
function maiorNumero() {
    let maior = 0;
    for (let i = 0; i < numeros3.length; i++) {
        if (numeros3[i] > maior) {
            maior = numeros3[i];
        }

    }
    return maior;
}

console.log(maiorNumero());
*/


//exercicio 8
/*
let produto = {
    "nome": "Computador",
    "preco": 4500,
    "quantidade": 4,


    calcularTotal: function () {
        return `Produto: ${this.nome}
Valor unitário: R$ ${this.preco}
Quantidade de itens na compra: ${this.quantidade}
Valor total: R$` + this.preco * this.quantidade;
    }
}

console.log(produto.calcularTotal());
*/


//exercicio 9
/*
let endereco = {
    "Rua": "Dom Aguirre",
    "Numero": 99,
    "Bairro": "Centro",
    "Cidade": "Sorocaba"
}

for (let prop in endereco) {
    console.log(prop + " " + endereco[prop])
}
*/


//exercicio 10
/*
function alunosMaior() {
    let aluno = [
        { "nome": "Janaina", "idade": 33, "curso": "ADS", "matricula": 123456 },
        { "nome": "José", "idade": 17, "curso": "ADS", "matricula": 123457 },
        { "nome": "Joana", "idade": 18, "curso": "ADS", "matricula": 123458 },
        { "nome": "Ana", "idade": 17, "curso": "ADS", "matricula": 123459 },
    ];

    let alunosMaiores = [];
    for (let i = 0; i < aluno.length; i++) {
        if (aluno[i].idade >= 18) {
            alunosMaiores.push(aluno[i]);
        }
    }
    return console.log(alunosMaiores)
}

alunosMaior();
*/