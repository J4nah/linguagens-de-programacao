//exercicio 1
function operacoes(a, b) {
    let soma = a + b;
    let subtracao = a - b;
    let multiplicacao = a * b;
    let divisao = a / b;
    console.log(`${a} + ${b} = ${soma}
${a} - ${b} = ${subtracao}
${a} * ${b} = ${multiplicacao}
${a} / ${b} = ${divisao}`);
}

operacoes(2, 3);

//exercicio 2
for (let i = 0; i < 100; i++) {
    if (i % 2) {
        console.log(i);
    }
}

//exercicio 3
let texto = "Disciplina de Programação para Web";
console.log(texto.length);

//exercicio 4
function criarEmail(nomeCompleto) {
    const divNome = nomeCompleto.split(' ');
    const nome = divNome[0];
    const sobrenome = divNome[divNome.length - 1];
    const email = `${nome}.${sobrenome}@facens.br`;
    console.log(email.toLocaleLowerCase());
}

criarEmail("Janaina Fransine Gomes");

//exercicio 5
let linha = '';
for (let i = 1; i < 11; i++) {
    linha += i;
    if (i != 10) {
        linha += ' - ';
    }
}

console.log(linha);

// exercicio 6
function dobro(num) {

    if (num > 0) {
        console.log(num * 2)
    } else {
        console.log("Só é aceito números positivos maiores que 0!")
    }
}

dobro(55);

//exercicio 7
function inverter(string) {
    console.log(string.split('').reverse().join(''));

}

inverter("Janaina");

//exercicio 8
function contadorVogais(palavra) {
    const vogais = new Set(['a', 'e', 'i', 'o', 'u']);
    let contador = 0;
    for (let char of palavra) {
        if (vogais.has(char)) {
            contador++;
        }
    }

    return contador;


}

console.log(contadorVogais("Hello World"));

//exercicio 9
function validarEmail(email) {
    const arroba = email.indexOf('@');
    if (arroba === -1 || email.indexOf('@', arroba + 1) !== -1) {
        return false
    }

    const divEmail = email.split('@');
    if (divEmail.length !== 2 || divEmail[0].length === 0 || divEmail[1].length === 0) {
        return false;
    }

    if (divEmail[1].indexOf('.') === -1) {
        return false;
    }

    return true;
}

console.log(validarEmail("usuario@exemplo.com"));
console.log(validarEmail("usuario@@exemplo.com"));
console.log(validarEmail("usuario@exemplocom"));
console.log(validarEmail("usuarioexemplo.com"));

//exercicio 10

function palindromo(palavra){
    palavra = palavra.toLocaleLowerCase();
    let palavraInvert = palavra.split('').reverse().join('');

    if(palavra === palavraInvert){
        return `"${palavra}" - "${palavraInvert}": é um palíndromo`;
    }else{
        return `"${palavra}" - "${palavraInvert}": não é um palíndromo`;
    }
}

console.log(palindromo("Arara"));
console.log(palindromo("Amor"));
console.log(palindromo("Radar"));
console.log(palindromo("Roma é amor"));