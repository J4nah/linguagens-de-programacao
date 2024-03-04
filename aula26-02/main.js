//Função anonima

let soma = function (a, b) {
    let result = a + b;
    console.log(`O resultado é: ${result}`)
}

soma(2, 3);

//Arrow Function
let soma2 = (a, b) => a + b;
let nomeCompleto = (primeiroNome, sobrenome) => `${primeiroNome} ${sobrenome}`;

console.log(soma2(1, 2));
console.log(nomeCompleto("Janaina", "Gomes"));

//Array
let myArray = ["Sorocaba", "Piedade", "Tatuí"];
console.log(myArray);

//adicionando item no fim do array
myArray.push("Bofete");
console.log(myArray);

//adicionando item no inicio do Array
myArray.unshift("São Paulo");
console.log(myArray);

let cidade = ["Sorocaba", 60345, true];
console.log(cidade);
console.log(cidade[2]);
console.log(cidade.length);

let matriz = [["Janaina", 33], ["João", 18], ["Maria", 35]];
console.log(matriz);
console.log(matriz[0]);
console.log(matriz[0][1]);

//objeto
let pessoa = {
    "nome": "Janaina",
    "sobrenome": "Gomes",
    "idade": 33,
    "isActivo": true, 

    nomeCompleto: () => `${this.nome} ${this.sobrenome}`
    
}

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa["idade"]);

for (let prop in pessoa) {
    console.log(prop + " = " + pessoa[prop])
}

