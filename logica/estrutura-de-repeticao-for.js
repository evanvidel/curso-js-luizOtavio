/* console.log("linha 0");
console.log("linha 1");
console.log("linha 2");
console.log("linha 3");
console.log("linha 4");
console.log("linha 5"); */

//i = index
for (let i = 0; i <= 10; i++) {
  const par = i % 2 === 0 ? '= par': '= impar';
  console.log(i, par);
}
console.log('--------------------------------');
const frutas = ['maçã','Pêra', 'Uva','banana', 'manga','goiaba'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Indice ${i}`, frutas[i]);
}
