const dia = /\d\d/;

console.log(dia.test("2019"));
console.log(dia.test("asd"));
console.log(dia.test("05"));
console.log(dia.test("asd1"));

//no exemplo acima, o sistema tb irá validar a sentença que contém 2019, pois ela tb possui 2 
//dígitos, para realmente verificar a sentença que corresponde ao dia, podemos fazer o modelo
//abaixo

// const dia = /\d\d/;

// console.log(dia.test("2019") && "2019".length == 2);
// console.log(dia.test("asd"));
// console.log(dia.test("05") && "05".length == 2);
// console.log(dia.test("asd1"));


const palavrasPeloMenosTresLetras = /\w\w\w/;

console.log(palavrasPeloMenosTresLetras.test("asd"));
console.log(palavrasPeloMenosTresLetras.test("asdd"));
console.log(palavrasPeloMenosTresLetras.test("as"));