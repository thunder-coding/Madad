const fetch = require('node-fetch')
const Discord = require('discord.js');
const embed = require('./embed.js')
///color,title,autho,description,image,operation
exports.apod=(ab)=>{
fetch('https://api.nasa.gov/planetary/apod?api_key=KTNFzSauWbaURYcZmvAsDN5SHiul7rxwZ2NxNNFC')
.then(res=>res.json())
.then(data=>{
  
  //console.log(data)
ab.send({embed:embed.embedded('#0099ff',data.title,data.date,data.explanation,data.url,'Nasa Pic of the day')})
  
})

}