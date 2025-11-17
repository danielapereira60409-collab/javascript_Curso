//Meu documento inicial
const prompt=require("prompt-sync")();
let numeros=[]

for(let i=0;i<10;i++){
    let numero=Number(prompt(`Digite o ${i} numero`));
    numeros[i] = numero;
}
console.log("\n Os números adicionados foram:");
console.log(numeros);