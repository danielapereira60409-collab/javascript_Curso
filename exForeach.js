const prompt=require("prompt-sync")({sigint:true});

let games=["Minecraft","Fortnite","Roblox"];
games.forEach((game, index)=> {
    console.log(`${index +1}.${game}`);
    
});