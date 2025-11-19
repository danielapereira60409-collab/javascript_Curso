const prompt=require("prompt-sync")({sigint:true});

let nomes=["Ana","Carlos","Maria"];

nomes.push("Christopher")
nomes.push("Diego")
    console.log(nomes)

let removido= nomes.pop()
console.log(removido)
console.log(nomes)