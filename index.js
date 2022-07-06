const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    client.user.setStatus('dnd')
    console.log('Run Bot | Go to Discord Bot | Server Bxz')

    console.log("|Secverit| ==> Bug Fikes")

    console.log("Voic Join Shod To Bot")
    const channel = client.channels.cache.get("965227387329609749");
    if (!channel) return console.error("The channel does not exist!");
    channel.join().then(connection => {
        console.log("(Successfully) BXZ IS RUNBOT!");
    }).catch(e => {

        console.error(e);
    });

    function YousamPower() {
        let targetguild0 = client.guilds.cache.get("899714742619349122")
        let status = [`${targetguild0.memberCount} 👥Membrs|Server`, 'Bot|Bxz', 'Updating ...']
        let Power = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[Power], { type: "WATCHING" });
    }; setInterval(YousamPower, 4000)

    function AliveVoice() {
        const targetguild = client.guilds.cache.get("899714742619349122")
        const voiceChannels = targetguild.channels.cache.filter(c => c.type === 'voice');
        let count = 0;

        for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
        client.user.setActivity(`🔊Hami To Voic | ${count}`, { type: "WATCHING"})
    }; setInterval(AliveVoice, 5000)
});

client.login('OTkzOTMwNzI3MDc2OTI5NjA3.GBbapX.sGU1koRvKzoNwyxXdJFG9M1tbHIolMdBlMiMVs')