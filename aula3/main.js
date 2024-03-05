

/*const cliente = new Cliente("Janaina", 33);
cliente.print();

cliente.nome = "José";
cliente.idade = 50;
cliente.print();
*/


let listClientes = [];
listClientes.push(new Cliente("Janaina", 33));
listClientes.push(new Cliente("Juliana", 32));
listClientes.push(new Cliente("Nilza", 60));
listClientes.push(new Cliente("Priscila", 35));

function mostrarClientes(){
    for (let item of listClientes){
        item.print();
    }
}

mostrarClientes();


/*
class Animal {
    constructor(_nome, _idade, _raca) {
        this.nome = _nome;
        this.idade = _idade;
        this.raca = _raca;
    }

    print() {
        console.log(`Nome: ${this.nome}\nIdade: ${this.idade} anos\nRaça: ${this.raca}`)
    }
}

const animal = new Animal("Cookie", 5, "Spitz Alemão")
animal.print();
*/