const db = require('quick.db');
const Discord = module.require("discord.js");
module.exports = {
  name: "clearuserdata",
  aliases: ["cud","cleardata"],
  execute: async(client, message, args, data, db) => {
      const user = message.mentions.members.first();
      if(!user) return message.channel.send("Please mention a user!");

    try{
        const idKey = db.get('ID')
        console.log(idKey.messages_929210013212377108_795708708562272277);

    }
    catch(e) {
        console.log(e.stack)
    }
        



    }
}
module.exports.help = {
    name: " learuserdata",
    description: "Deletes all a users data from the database",
    usage: "clearuserdata <mentionuser>",
    type: "Moderation"  
}