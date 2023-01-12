let pessoa = {
    nome: "Denaide",
    idade: 29,
profissão: "Testador"
}

console.log(pessoa.nome);
console.log(pessoa.idade);

delete pessoa.nome;

console.log(pessoa.nome);

console.log(pessoa);

pessoa.casado = false;

console.log(pessoa.casado);