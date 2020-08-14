const fetch = require('node-fetch')
const Discord = require('discord.js');
const embed = require('./embed.js')

exports.apod2=(ab,date)=>{
  fetch('https://api.nasa.gov/planetary/apod?api_key=KTNFzSauWbaURYcZmvAsDN5SHiul7rxwZ2NxNNFC&date='+date.toString())
.then(res=>res.json())
.then(data=>{
  
 // console.log(data)
  if(!data.code){
ab.send({embed:embed.embedded('#0099ff',data.title,data.date,data.explanation,data.url,'Nasa Pic of the day')})}
else{
  ab.send('Invalid data format YYYY-MM-DD < SHOULD BE THE FORMAT')
}
  
})

}