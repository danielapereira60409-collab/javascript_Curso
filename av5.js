const prompt=require("prompt-sync")({sigint:true});

const carros=[
    {modelo:"Onix", marca:"Chevrolet"},
    {modelo:"Argo", marca:"Fiat"},
    {modelo:"Mobi", marca:"Fiat"},
    {modelo:"HB20", marca:"Hyundai"}

];

const resultado = carros.filter(u=>u.marca.includes("Fiat"));
console.log(resultado)