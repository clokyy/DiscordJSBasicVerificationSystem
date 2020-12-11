require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.TOKEN;
const prefix = process.env.PREFIX;
var datef = require('dateformat');

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}`);
})


bot.on('guildMemberAdd', member => {

    const channel = member.guild.channels.cache.find(ch => ch.id === '785317312700874752');

    if(!channel) return;

    let welcomeembed = new Discord.MessageEmbed()
    .setColor('#FFFF00')
    .setAuthor('MineCast Bot', 'https://media.discordapp.net/attachments/785191629568475157/785332899435249684/server-icon.png')
    .setTitle('**Welcome to MineCast!**')
    .setDescription(`**${member.user.username}** has joined Minecast!`)
    .setThumbnail('https://media.discordapp.net/attachments/785191629568475157/785332899435249684/server-icon.png')
    .addField('Date Joined', datef(member.user.createdAt, "mm:dd:yyyy h:MM"), true)
    .addField('Total Members', member.guild.memberCount, true)
    .addField('Server IP', 'play.minecast.club')
    .addField('Website', 'https://minecast.club/')
    .addField('Store', 'http://minecastmc.tebex.io/')
    .setFooter('MineCast Bot')

    member.roles.add('786782748630581259');

    channel.send(welcomeembed);
})

bot.on('message', message => {
    if(message.content.startsWith(prefix + 'verify')){
           const guildMember = message.member;
           const everyonerole = message.member.roles.cache.has('786782748630581259');
           const verifyrole = message.member.roles.cache.has('786778426014826497');
           

            // Verified Embed
            let verifiedembed = new Discord.MessageEmbed()
            .setColor('#008000')
            .setTitle('**Verified**')
            .setDescription(`**${message.author.username}** you are now verified!`)
            .setThumbnail('https://media.discordapp.net/attachments/785191629568475157/785332899435249684/server-icon.png')
            .setAuthor('MineCast Bot', 'https://media.discordapp.net/attachments/785191629568475157/785332899435249684/server-icon.png')
            .setFooter('MineCast Bot')

            if(everyonerole){
                message.member.roles.add('786778426014826497');
                message.member.roles.add('786783348864843828');
                message.channel.send(verifiedembed);
                message.member.roles.remove('786782748630581259');
            } else {
                let verifyerror = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle(`**Error**`)
                .setDescription(`**${message.author.username}** you are already verified!`)
                .setThumbnail('https://media.discordapp.net/attachments/785191629568475157/785332899435249684/server-icon.png')
                .setAuthor('MineCast Bot', 'https://media.discordapp.net/attachments/785191629568475157/785332899435249684/server-icon.png')
                .setFooter('MineCast Bot')

                message.channel.send(verifyerror);
            }

            

            
    }
})

bot.on('messaage', message => {
    if(message.content.startsWith(prefix + 'poll')){
        message.channel.send('hi');
    }
})


bot.login(token);