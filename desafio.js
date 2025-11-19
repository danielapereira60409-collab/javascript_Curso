const prompt=require("prompt-sync")({sigint:true});
let playlist=["Dua lipa-Dance the night", "The weeknd-Blinding lights"];
console.log(playlist);
playlist.push=["Coldplay-yellow"];
console.log(playlist);
playlist.push["Luan santana-tímida"];
console.log(playlist);
playlist.pop();
console.log(playlist);

playlist.forEach((playlist, i)=>{

    console.log(i+1)+playlist[i];

}
    
);


