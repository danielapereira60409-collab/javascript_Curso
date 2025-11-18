const prompt=require("prompt-sync")({sigint:true});
let lanches=["X-Burguer", "Pizza","Sushi","Açai"];

let removido= lanches.pop();
console.log(removido);
console.log(lanches);