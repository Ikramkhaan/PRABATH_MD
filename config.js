const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "Enter-MongoURI-HERE"
global.port= process.env.PORT || 5000
global.email = 'sam@sec.live'
global.github = 'https://github.com/prabathLK/PRABATH-MD'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.devs = '92193619280';
global.website = 'https://github.com/prabathLK/PRABATH-MD' //wa.me/+923193619280
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/8f47e19670ac810b4dd58.jpg'
module.exports = {
  OPENAI_API_KEY:process.env.OPENAI_API_KEY || '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',
  botname: process.env.BOT_NAME || '𝛨𝛯𝛥𝑅𝑇-𝛨𝛥𝐶𝛫𝛯𝑅 ❤️',
  dl_limit: process.env.DL_SIZE || '300',
  art: process.env.AUTO_RESTART || 'true',
  sudo: process.env.SUDO || '923189063603',
  alivepic: process.env.ALIVE_IMG || 'https://telegra.ph/file/8f47e19670ac810b4dd58.jpg',
  alivemsj: process.env.ALIVE_MSJ || '*POWERD BY 𝛪𝛫𝑅𝛥𝛭-𝛫𝛨𝛥𝛮 ❤️* 🎊',
  ownername:process.env.OWNER_NAME || '𝛪𝛫𝑅𝛥𝛭-𝛫𝛨𝛥𝛮 ❤️',
  sessionName: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0tYRzJ4Vnh6b0NpMlhLckVNaGlsYnFKazgyT0NrSGlhaWVtbHM1NXNtdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSDRZVGVuQ0NqSGZPVjE3QmpkemM2OU0wZTJteFM5VS9oYi9qa1VtYlhuaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJTmhPUytDY0xYTTM0c08zZWVIWTBvM1FLcWVlM0RvamNaOXNCRXplUDN3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvUElRSGtLSXpVRjFKaXMrdEdQU3pTTkQzd3BFZW9yeVhMcndCT2NYOWcwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVHT3dxekJQQUlmR1EwOHdxbjhIQUdmeGxudndtbmZvMzI3TVZHaXJwMk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVaR1ZRR0FHQ01VOG9xRWJqNnJ0V2pZVnhtZkpYYjFoYlhCRm9KcDFvUlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0lxUVFFWXJnc2tIV1QxbGd4YlVJQ01IaTZMMTl4M1FHSWc3QzFNd1NXND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUJLcnNtSEJFUHc0OGtNQkh2bUJMdHZnNE50aEk0dlh2VS9Da3dEbHhXbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IisreU4zUExGc0JLSzFoaUdwcEUxNHUxS1lZQjFFYVJRNTF5SEJEMGpUaWttZWNKcTNVY3JzQUpoR1AyZVBJTWRiM0JkbGJpR0dsZ1VFYmovYnJSV0F3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDUsImFkdlNlY3JldEtleSI6IjdDZXIyUitCMG9nYzdoaGRRK0ZJVTlDYWhSMit1S21NQ3dvM3JyaHErQjA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTg5MDYzNjAzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjdDMDdEQTE0MjdGRjRCQzI5QjNCQjEyRjczMDFCRjg2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjQ2MTA1NzF9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzE4OTA2MzYwM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0N0ExNURFRkFGNDc0QkZGM0Q0REM1MDFFQkVGNzcyMyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI0NjEwNTcxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI5RGpOZzhvZVFNaW5jNU1mbkU3REJ3IiwicGhvbmVJZCI6IjljZTdhZWYzLTg0MmUtNGQ1MS04Y2E2LWFhYjQzZGE1M2UxYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZbVhsNlI1OVhZSnA3aURpVS9mcEpjQlU3a0k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWjJqdUVLQlRBbXlDT3FOZFF2SWJaY3hzZUY0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNDQ0szSkJEIiwibWUiOnsiaWQiOiI5MjMxODkwNjM2MDM6MzJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2bqPCdm6/wnZul8J2RhfCdkYct8J2bqPCdm6XwnZC28J2bq/Cdm6/wnZGFIiwibGlkIjoiNTAxNTcwNDc1MTcyNTk6MzJAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNNlAwSWtGRUlId3JiWUdHQVlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJIR0hSN0poaWVnZmJJUmMvaTdDZmlDNndpV0VEbVYrTEhEYXZ6bjNiVlhvPSIsImFjY291bnRTaWduYXR1cmUiOiJnbnVOdFAxblpmdy9SMTVJZjV3b2dHOVh0VTdZQ2lMNHNRTUpVcFNDUzFKMlhRaUdEZGI5V3JrbFZ6a0hmUmJLMnFpMHVZemlLZmFRT2trbEFJYlZBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiM2JJNzY2eEFKeVoyUEhoY0VFaFRiUy9vRW1PL211RFI1MVFsM0loVlpvSE5HWUN1Qi9NU3hPNnA4dHp5c01SOERnYUJLaHV6ZzNJRnZqSzdxT0Z3Q3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxODkwNjM2MDM6MzJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUnhoMGV5WVlub0gyeUVYUDR1d240Z3VzSWxoQTVsZml4dzJyODU5MjFWNiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDYxMDU2NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIV2QifQ==',
  author: process.env.PACK_INFO.split(";")[0] || 'author', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'true',
  packname: process.env.PACK_INFO.split(";")[1] || 'Name',
  autoreaction: process.env.AUTO_REACTION || 'off',
  antibadword : process.env.ANTI_BAD_WORD || 'fuck,huth,fucking,huththa,huththo,hukanna,fucked,pakaya,pako,ponnaya,ponnayo,kariya,kariyo,huththaa,hutta',
  alwaysonline: process.env.ALWAYS_ONLINE || 'true',
  antifake : process.env.FAKE_COUNTRY_CODE || 'true',
  readmessage: process.env.READ_MESSAGE || true,
  HANDLERS: process.env.PREFIX || ['.'],
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || 'put your herokuapp name',
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || 'put your heroku_api_key',
  BRANCH: 'main',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || '',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'put-key-here',
  VERSION: process.env.VERSION === undefined ? 'v.5.0.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'PRABATH-MD',
  WORKTYPE: process.env.WORK_TYPE === undefined ? 'public' : process.env.WORK_TYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
