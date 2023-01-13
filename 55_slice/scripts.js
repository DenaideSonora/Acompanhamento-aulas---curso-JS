let nums = [0,1,2,3,4,5,6,7,8,9];

console.log(nums.slice(4,5));
console.log(nums.slice(4,6));

/*quando colocamos 2 parâmetros, vai sempre pegar o primerio índice e o segundo -1), ou seja, no
primeiro caso vai indicar como resultado o elemento 4 e no segundo caso, o elemento 4 e 5.*/

console.log(nums.slice(2));

/*quando o índice final não é determinado, irá pegar até o final do array, ou seja, pega o nº 
correspondente ao índice que determinamos até o final, no caso acima, irá pegar do elemento
2 até o 9*/

console.log(nums.slice(-2));

/*podemos começar de trás para frente, ou seja, pegar os elementos finais do arrays, basta
determinar a quantidade de elementos que queremos pegar, escrevendo essa quantidade na forma
negativa, no exemplo acima, pegaremos os elementos 8 e 9*/

console.log(nums.slice(3,-2));

/*dessa forma podemos pegar o elemento 3 e os elementos após ele sem os dois últimos, nesse 
exemplo teremos como resultado os elementos 3,4,5,6,7*/





