"use strict"


//deixa o JS mais rigoroso na hora de programar; deve ser declarado no topo de arquivos ou funções;
//ao optar pelo uso do strict, o mesmo já indica no console, o erro que possue no código, caso
//esse erro ocorra. Alguns exemplos abaixo:

// nesse exemplo não utilizei nenhuma variável antes da palavra opa, esse erro é indicado no
//console

opa = 'teste';

//nesse exemplo informa no console que o prototype não pode ser deletado, pois é nativo da 
//linguagem


delete Object.prototype