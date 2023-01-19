function verificarNumero(num) {
    return new Promise((resolve, reject) => {
        if(num == 2) {
            resolve(console.log(`O numero é ${num}`));
        } else {
            reject(new Error('Falhou'));
        }
    });
}

verificarNumero(2);
verificarNumero(3);

//o método reject rejeita a promessa, quando por exemplo determinada lógica não satisfaz o 
//programa, podemos rejeitar ao invés de resolver