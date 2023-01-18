const pontoRegex = /./;

console.log('.');
console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("123sad"));

//considera como true qualquer caracter


const dRegex = /\d/; // [0-9]

console.log('d');
console.log(dRegex.test("asd"));
console.log(dRegex.test(" "));
console.log(dRegex.test("123"));
console.log(dRegex.test("123sad"));

//considera como true qualquer dígito de caractere


const dRegex2 = /\D/; // [^0-9]

console.log('D');
console.log(dRegex2.test("asd"));
console.log(dRegex2.test(" "));
console.log(dRegex2.test("123"));
console.log(dRegex2.test("123sad"));

//considera como true caracteres que não são dígitos

const sRegex = /\s/; 

console.log('s');
console.log(sRegex.test("asd"));
console.log(sRegex.test(" "));
console.log(sRegex.test("123"));
console.log(sRegex.test("123sad"));

//considera como true qualquer caracter de espaço em branco


const wRegex = /\w/; 

console.log('w');
console.log(wRegex.test("asd"));
console.log(wRegex.test(" "));
console.log(wRegex.test("123"));
console.log(wRegex.test("123sad"));

//considera como true um caracter alfanumérico