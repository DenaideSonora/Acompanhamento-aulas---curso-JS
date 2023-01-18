const reg = /\w+: (Mateus|João|Maria)/; // Nome: abcdef

console.log(reg.test("Nome: Mateus"));
console.log(reg.test("Nome: José"));
console.log(reg.test("Nome: Maria"));