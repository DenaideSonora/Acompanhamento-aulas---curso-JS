//o exec realiza a mesma validação do test, só que o exec nos retorna um objeto com algumas informações
//a mais que o true ou false, como por exemplo o index e se nada for encontrado em vez de 
//false, retorna um null.

const digitos = /\d+/;

console.log(digitos.exec("Tem o número 100 aqui"));
console.log(digitos.exec("Tem o número aqui"));