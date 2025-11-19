const prompt=require("prompt-sync")({sigint:true});

let numeros=[5,15,8,25,3,18];
let contador= 0;

numeros.forEach((numero,n)=>{
    if(numero>10){
        contador=contador +1
    }
});
console.log("Quantidade maior que 10:", contador)