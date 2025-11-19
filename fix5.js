const prompt=require("prompt-sync")({sigint:true});

let pedidos=[];

pedidos.push("Pizza")
pedidos.push("Hambúrguer")
pedidos.push("Refrigerante")
pedidos.push("Batata frita")

pedidos.pop()
pedidos.pop()

console.log("Pedidos restantes", pedidos);