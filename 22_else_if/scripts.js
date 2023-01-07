let velocidade = 70;

if(velocidade < 80) {
 console.log("Não foi multado!"); 
} else if (velocidade == 80) {
  console.log("Está na velocidade correta");
} else {
  console.log("Foi multado!");
}


let media = 6.00;

if(media > 7.00) {
console.log('Você foi aprovado');
}
else if(media == 7.00) {
console.log('Você passou na média');
}
else {
console.log('Você foi reprovado');
}


let nome = 'Denaide';
let idade = 44;

if(nome != undefined && nome == "Apollo") {
  console.log('Nome está definido');
} else if(nome == "Denaide" && nome.length > 5 && idade == 50) {
  console.log('O nome é Denaide');
} else {
  console.log('Não é Denaide');
}


if(1 > 2) {
  console.log('Teste');
} else if(1 == 1) {
  console.log('Testando');
}