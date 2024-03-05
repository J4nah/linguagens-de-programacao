class Pessoa {
    #codigo;
    #nome;
    #automoveis;

    constructor(codigo, nome) {
        this.#codigo = codigo;
        this.#nome = nome;
        this.#automoveis = []

    }

    get codigo() {
        return this.#codigo;
    }

    addAutomovel(automovel) {
        this.#automoveis.push(automovel)
    }

    removeAutomovel(codigo) {
        this.#automoveis = this.#automoveis.filter(auto => auto.codigo !== codigo);
    }


    getAutomovel(codigo) {
        return this.#automoveis.find(auto => auto.codigo === codigo);
    }

    imprimir() {
        return `Código: ${this.#codigo}\nNome: ${this.#nome}`
    }

    imprimirCompleto() {
        let info = this.imprimir();
        info += "\nAutomoveis: ";
        this.#automoveis.forEach(auto => {
            info += `\n${auto.imprimir()}`;
        })
        return info;
    }
}