const prompt=require("prompt-sync")({sigint:true});

const mensagens=[
    {id:1, frase:"Hoje o dia está lindo!"},
    {id:2, frase:"Não gostei desse trabalho"},
    {id:3, frase:"A aula foi muito divertida"},
    {id:4, frase:"Que tarefa chata"}

];
const resultado = mensagens.filter(u=>u.frase.includes("chata","Não gostei"))
console.log(resultado)
