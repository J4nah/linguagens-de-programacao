class Main{
    #pessoas;

    constructor(){
        this.#pessoas = [];
    }

    addPessoa(pessoa){
        this.#pessoas.push(pessoa);
    }

    addAutomovelPessoa(codPessoa, codAuto, marca, modelo){
        const pessoa = this.#pessoas.find(p => p.codigo === codPessoa);
        if(pessoa){
            const automovel = new Automovel(codAuto, marca, modelo);
            pessoa.addAutomovel(automovel);
        } else {
            console.log("Pessoa não encontrada!");
        }
    }

    transfereAutomovel(codPessoaOrigem, codPessoaDestino, codAutomovel){
        const pessoaOrigem = this.#pessoas.find(p => p.codigo === codPessoaOrigem);
        const pessoaDestino = this.#pessoas.find(p => p.codigo === codPessoaDestino);
        if(pessoaOrigem && pessoaDestino){
            const automovel = pessoaOrigem.getAutomovel(codAutomovel);
            if(automovel){
                pessoaOrigem.removeAutomovel(codAutomovel);
                pessoaDestino.addAutomovel(automovel);
            } else {
                console.log("Automovel não encontrado!")
            }
        } else{
            console.log("Pessoa de origem ou destino não encontrada!")
        }
    }

    mostrarTodasAsPessoas(){
        console.log("Pessoas: ");
        this.#pessoas.forEach(pessoa => {
            console.log(pessoa.imprimirCompleto());
        })
    }
}

Na função addLivroUsuario, você está passando codigo para criar um novo livro, mas codigo não está definido em lugar algum. Provavelmente você quer passar codigoLivro em vez disso.
Na mesma função addLivroUsuario, você está chamando usuario.addUsuario(usuario) ao invés de usuario.addLivro(livro). Parece que você quer adicionar um livro ao usuário, então a chamada deve ser corrigida.
No método transferirLivro, você está usando codigo em vez de codigoLivro ao buscar e remover o livro de usuarioOrigem.
Parece que você está tentando usar uma classe Usuario que não está definida no código fornecido. Você precisará definir essa classe ou garantir que ela seja importada de outro lugar.
Aqui está o código corrigido: