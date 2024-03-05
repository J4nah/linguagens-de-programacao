class contaBancaria {

    constructor(valorInicial) {
        this.saldo = valorInicial;
    }

    depositar(valor) {
        this.saldo += valor

    }

    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        }
    }


    saldoAtual() {
        console.log(`Seu saldo atual é: R$${this.saldo}`)
    }
}
