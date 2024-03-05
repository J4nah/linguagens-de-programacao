class Automovel {
    #_codigo;
    #marca;
    #modelo;

    constructor(codigo, marca, modelo){
        this.#_codigo = codigo;
        this.#marca = marca;
        this.#modelo = modelo;
    }

    get codigo(){
        return this.#_codigo;
    }

    imprimir(){
        return `Código: ${this.#_codigo} - Marca: ${this.#marca} - Modelo: ${this.#modelo}`;
    }
}