const db = require('quick.db');
const Discord = module.require("discord.js");
module.exports = {
  name: "clearuserdata",
  aliases: ["cud","cleardata"],
  execute: async(client, message, args, data, db) => {
      const user = message.mentions.members.first();
      if(!user) return message.channel.send("Please mention a user!");

    try{
        const idKey = db.delete({ID:`messagee_${user.id}`})
        console.log(idKey)
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