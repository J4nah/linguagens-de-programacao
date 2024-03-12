class Animal {
    constructor (nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.animais = [];
    }


    addAnimal(animal){
        this.animais.push(animal);
    }
}


