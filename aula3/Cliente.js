class Cliente {

    constructor(_nome, _idade) {
        this.nome = _nome;
        this.idade = _idade;
    }


    print() {
        console.log(`Nome: ${this.nome}\nIdade: ${this.idade}`)
    }

}