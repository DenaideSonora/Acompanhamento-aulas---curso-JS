const umOuMaisNumeros = /\d+/;

console.log(umOuMaisNumeros.test("1518"));
console.log(umOuMaisNumeros.test(""));
console.log(umOuMaisNumeros.test("dsjahdjks"));
console.log(umOuMaisNumeros.test("1"));
console.log(umOuMaisNumeros.test("178743874837518"));

//esse padrão 'd' aceita quantos dígitos for colocado, só não aceita espaço vazio e letras

