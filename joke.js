const fetch = require('node-fetch')
const Discord = require('discord.js');
const embed = require('./embed.js')
//color,title,autho,description,image,operation) 
exports.joke =(ab)=>{fetch('https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,racist')
.then(res=>res.json())
.then(data=>{
 // console.log(data)
  if(data.delivery){
  ab.send({embed:embed.embedded('',data.delivery,data.setup,'','','Joke by madad :)')})
    
  }
  else{
    
   ab.send({embed:embed.embedded('',data.joke,'','','','Joke by madad :)')})
  }
})
.catch(x => {
  fetch('https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,racist')
.then(res=>res.json())
.then(data=>{
 // console.log(data)
  if(data.delivery){
  ab.send({embed:embed.embedded('',data.delivery,data.setup,'','','Joke by madad :)')})
    
  }
  else{
    
   ab.send({embed:embed.embedded('',data.joke,'','','','Joke by madad :)')})
  }
})
})

}