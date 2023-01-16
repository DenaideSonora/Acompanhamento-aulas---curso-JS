class Cachorro {
  constructor(raca, cor) {
    this.raca = raca;
    this.cor = cor;
  }


latir() {
  console.log("Au au");
  }
}

let patas = Symbol();
Cachorro.prototype[patas] = 4;

let labrador = new Cachorro('Labrador', 'amarelo');

console.log(labrador);
console.log(labrador.patas);

labrador.latir();

// acessando symbol

console.log(Cachorro.prototype[patas]);

console.log(labrador[patas]);



