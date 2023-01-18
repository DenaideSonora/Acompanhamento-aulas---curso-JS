//let b = 2;

try {

    let a = 2 + b;

} catch(e) {

    console.log(e);

} finally {

    console.log("Executou");

}



//Finally é executada independente do resultado do try/catch, ou seja, mesmo se der erro o código
//é executado

//pode existir com try e catch ou apenas try