const prompt=require("prompt-sync")({sigint:true});

const amigos=[
    {nome:"Ana", cidade: "São Paulo"},
    {nome:"Bruno", cidade: "Rio de Janeiro"},
    {nome:"Diego", cidade: "Minas gerais"},
    {nome:"Christopher", cidade: "Curitiba"},
    {nome:"Lavínia", cidade: "Rio grande do sul"}

];

const deSaoPaulo= amigos.filter(a=>a.cidade.includes("São Paulo"));
console.log(deSaoPaulo)

const letra="C"
const nomesComC=amigos.filter(a=>a.nome.includes("C")
);
console.log(nomesComC);