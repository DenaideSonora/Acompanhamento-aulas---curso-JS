let a = document.querySelector("footer a");

console.log(a.getAttribute('href'));

let link = 'https://www.horadecodar.com.br';

a.setAttribute('href', link);

console.log(a.getAttribute('href'));

//ao clicar na palavra site do texto exibido na tela, encaminha para o site acima