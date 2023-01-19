console.log("1");

setTimeout(function() {
    console.log("5");
}, 2000);

//2000 corresponde a 2 segundo, que é o tempo que o serTimeout espera para ser executado. A linha
//console.log("5"); só será executada 2 segundos depois que o código cair no navegador
//o setTimeout não trava o código, ele executa em um ponto futuro


console.log("2");
console.log("3");
console.log("4");




