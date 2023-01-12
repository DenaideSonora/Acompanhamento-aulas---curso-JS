let pessoa = {
    nome: "Denaide"
}

let pessoa2 = pessoa;

console.log(pessoa == pessoa2);

pessoa2.nome = "Giovanna";

console.log(pessoa.nome);

pessoa.nome = "Apollo";

console.log(pessoa2.nome);