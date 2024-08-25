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
global.devs = '94762280384';
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
  sessionName: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFBTbHJUOXVBd253WFdVQ0hXaHJpUS9aL2JZczBnWmR6TFRiUVlwTWswZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNVYkJ0VGZ2N280eFYyaUZ6aFc1N0xYREFoS3p6eTlweEFlNEN1UXREUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5Qm9QempUMHdVeEZZemQxR1JmR0hEMFBETW1PTlNVRXp2WGs5cU1UTDI4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmYjZ3ZFUrWjJ5QXZpZXFBUFlyejRMRXJQcUFuMDJ4Vjl2dU5Ba1NlOWhVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNLYjBwZmYwdzdGM3YxZEdIYVhHcS9sY1lQeE5SUTREcnZSM1BpZHhRMm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRNM3BFaDZzeDZiYlJ2bXE0bk1WbG83bytiVUNyY2xRbDAwSmcrRmliblE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUROc1NkTGJ3Y3lWWHREdmVhcGE1eWQ3VmwvOHRNZkE5bVg1dUhjMHBVMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicFhQWEJNbnp5V2IybENoVE16T2duL3F3SDNPUkNLNW9TaHZ3RXBBMkN3Zz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlPQzA4WlB1V1lRY3NtVlhQRWtyKzB3Mklvd3lwQVZlUTdnb0hxRC9tcmJabEI5amltMlBSV1dqRGJqMUZDNTM1Vkx6Mk91YUZGZ2tpc041czdNTkFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODgsImFkdlNlY3JldEtleSI6InpQVVBtQWhtYXB0ajhtN1hGMGFHNzVkdnJHQ3AzTFUxRm9rMWRxejJrenc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTkzNjE5MjgwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjY2RkEwOUI5RTA2QTExQkI5MDA4QjVEQzVBRDUzMUM0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjQ2MDE0NDd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzE5MzYxOTI4MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwMDAyNDFCMzE4MDFFNDJBQzMwODNGQzZBODJCQ0RBNSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI0NjAxNDQ4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI2dXU4MWFWX1NZdVhpUHVkUW1iRGZRIiwicGhvbmVJZCI6IjRjY2I1NDZhLWNjZjYtNDk0My04OTU4LWUxY2QzYzM1NzJlNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyN294anFUdy83YUtVbDhSazVZSmFESVZLRmc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSTFMWlNZMlovS0htc2JWcHRhREdGV0tEc2E0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlFNN0FTMVA4IiwibWUiOnsiaWQiOiI5MjMxOTM2MTkyODA6NDlAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyMjYzNjY2MzcyNTY3MjQ6NDlAbGlkIiwibmFtZSI6InNpfF9lz4B0IPCfpKsifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05UTSt1Y0ZFTjZvcmJZR0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkZNSkY5NXczTHAzWVJJMllhZ3dFd2xuUm0rdGQ3aTZNcHE2VHZpbU5FWEE9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImlQbmhRTWVZT2kyWlVVSGlPYjFxbDZvbHZ6WGk4WU5JMjkzQmtnZWtsZGJDN0UwRFZYUmw4VHhpQ0Jpc2NaWjlMK0NNamRuN0hUVmo5ZlZsd1dTSkRnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJyUTVaVFRMMWNXbEsyWnZFT29pOVpZcDFnaXA0eDE2d0F3eE14TXREUnlvU2p5VnpPMTlyeURZZnVqWlZDRmtGYnZ6QVFya2htYjIzc1dWYnhWYXpDZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzE5MzYxOTI4MDo0OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSVENSZmVjTnk2ZDJFU05tR29NQk1KWjBadnJYZTR1akthdWs3NHBqUkZ3In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI0NjAxNDQyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUV4MCJ9',
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
