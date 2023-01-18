const notab = /[^ab]/;

console.log(notab.test("a"));
console.log(notab.test("Aqui tem a"));

//não aceita nada que tenha a e b isoladas, mas se houver uma outra string maior com a ou b 
//contidas, vai aceitar

const notaz = /[^a-z]/;

console.log(notaz.test("ahd"));
console.log(notaz.test("123"));
console.log(notaz.test("ahdd3dddd"));

//quando é colocado um intervalo, como no exemplo acima, no caso das letras vai ser false, porém
//os números vão ser true, pois não está dentro do intervalo, assim como no 3 exemplo, quando
//tem um número na setença vai ser true, pois tem algo diferente do intervalo que foi determinado