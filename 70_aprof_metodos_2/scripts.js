const cachorro = {
    raca: 'SRD',
    uivar: function() {
        console.log("Auuuuuuuuuuu");
    },
    rosnar: function() {
        console.log("grrr");
    },
    setRaca: function(raca) {
        this.raca = raca;
    },
    getRaca: function() {
        return "A raça é " + this.raca;
    }
}

cachorro.uivar();
cachorro.rosnar();

console.log(cachorro.raca);

cachorro.setRaca('Pastor Alemão');

console.log(cachorro.raca);

console.log(cachorro.getRaca());