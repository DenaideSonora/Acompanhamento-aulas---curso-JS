const validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("denaide@gmail.com"));
console.log(validarEmail.test("denaide@gmail"));
console.log(validarEmail.test("gmail.com"));
console.log(validarEmail.test("denaide@gmail.com.br"));
console.log(validarEmail.test("gmail.@gmail.gmail.gmail"));
