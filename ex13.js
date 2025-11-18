const prompt=require("prompt-sync")({sigint:true});
let prova1=Number(prompt("Digite os pontos da prova 1:"));
let prova2=Number(prompt("Digite os pontos da prova 2:"));
let redacao=Number(prompt("Digite os pontos da redacao:"));

let soma=prova1+prova2+redacao;
console.log("Total de pontos:", soma);

if(soma>1500){
    console.log("Você pode estudar na UFLA.");  
}else if(soma>=1000){
    console.log("Você pode estudar no Unilavras.");
}else{
    console.log("Volte ano que vem.");
}