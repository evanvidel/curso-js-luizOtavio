const numero = Number(prompt("Digite um numero"));
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p> A raiz quadrada é: ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p> E inteiro? ${Number.isInteger(numero)} </p>`;
texto.innerHTML += `<p> É NaN ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p> Arrendondado para baixo ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p> Arredondado para cima ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p> com duas casas decimais ${numero.toFixed(2)}.</p>`;
