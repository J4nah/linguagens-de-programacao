const main = new Main();
main.addPessoa(new Pessoa(1, "Janaina"));
main.addAutomovelPessoa(1, 1, "Jeep", "Compass");
main.addAutomovelPessoa(1, 2, "Hyundai", "Zr-V");
main.mostrarTodasAsPessoas();
main.addPessoa(new Pessoa(2, "Priscila"));
main.transfereAutomovel(1, 2, 1);
main.mostrarTodasAsPessoas();