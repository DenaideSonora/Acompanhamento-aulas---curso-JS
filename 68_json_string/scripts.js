let pessoa = {
    "nome": "Denaide",
    "idade": 44,
    "profissao": "Tester",
    "hobbies": ["ler", "caminhar", "assistir filmes"]
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);


let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON);

console.log(pessoaJSON.hobbies[0]);
