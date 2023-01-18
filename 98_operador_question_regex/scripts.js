const padrao = /Abacax?i/;

console.log(padrao.test("Abacaxi"));
console.log(padrao.test("Abacai"));

//ambas as palavras são aceitas, pois o sinal de '?' indica que aquele caracter ou condição
//são opcionais

const padrao2 = /\d+\w?/;
console.log(padrao2.test("123"));
console.log(padrao2.test("123a"));
console.log(padrao2.test("123 "));