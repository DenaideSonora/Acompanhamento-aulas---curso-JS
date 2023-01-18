const reg1 = /[12345]/;

console.log(reg1.test("Temos o número 6"));
console.log(reg1.test("Temos o número 2"));
console.log(reg1.test("Temos o número 23"));
console.log(reg1.test("Temos o número 60"));
 
//o número 23 é dado como true, pois está na composição dos números declarados entre colchetes


const reg2 = /[0-9]/;

console.log(reg1.test("Temos o número 65478865646"));
console.log(reg1.test("Temos o número"));

//o número 65478865646 tb dá como true, pois o sistema identifica que possui um nº declarado