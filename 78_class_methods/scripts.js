class Cachorro {
  constructor(raca, cor) {
    this.raca = raca;
    this.cor = cor;
  }


latir() {
  console.log("Au au");
  }
}

Cachorro.prototype.patas = "patas: 4"

let labrador = new Cachorro('Labrador', 'amarelo');

console.log(labrador);
console.log(labrador.patas);

labrador.latir();



