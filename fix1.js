const prompt=require("prompt-sync")({sigint:true});

let mercado=[];
mercado.push("Arroz");
mercado.push("Feijão");
mercado.push("Farofa");
mercado.push("Uva");
mercado.push("Laranja");
mercado.push("Chocolate");
mercado.push("Doce");
mercado.push("Maça");
mercado.push("Cookie");
mercado.push("Batata");

mercado.forEach((mercado, index) => {
console.log(`${index+1}. ${mercado}`);
});