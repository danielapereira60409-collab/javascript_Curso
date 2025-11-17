const prompt=require("prompt-sync")();
let emails=[];

for(let i=0;i<5;i++){
    let email=prompt(`Digite o ${i} \n`) ;
    emails[i]=email;

}
console.log("Emails adicionados:");
console.log(emails);