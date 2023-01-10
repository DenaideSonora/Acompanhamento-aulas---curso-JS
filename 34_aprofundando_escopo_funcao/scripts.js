let x = 10; //escopo global

if(x>5) {
    let x = 20;
    x++;
    console.log(x); //escopo da funcao
}

console.log(x);

