/**
   * Create By THE JO BOT
   * Base by Dika Ardnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '944b3f8f65',
}


global.ownername = 'Lenlen.'
global.autorecording = false //status auto merekam ( auto record )
global.autoketik = false //status auto mengetik (auto typing)
global.available = false //status online (online)
// Other
global.owner = ['4915166237236']
global.premium = ['4915166237236']
global.packname = '❤️,Terror'
global.author = 'Tiinchen'
global.wlcm = []
global.sessionName = 'session'
global.prefa = ['.']
global.sp = '⭔'
global.mess = {
    success: '✓ Erledigt',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Lenlen!',
    owner: 'Karnevalsverein',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Tina',
    wait: 'Loading...',
    endLimit: 'Is nich!',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/jo.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
