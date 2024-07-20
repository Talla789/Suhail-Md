const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "VRAI"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_41_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDg2LFxuICAgICAgICA3NCxcbiAgICAgICAgODUsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjgsXG4gICAgICAgIDQwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgNixcbiAgICAgICAgODAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDg2LFxuICAgICAgICAyNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTY1LFxuICAgICAgICA0NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTYxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDc5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE1LFxuICAgICAgICA1OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQxLFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI5LFxuICAgICAgICA1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDkyLFxuICAgICAgICA3NixcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDczLFxuICAgICAgICAyNTQsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjksXG4gICAgICAgIDIwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDY3LFxuICAgICAgICAyOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODAsXG4gICAgICAgIDY4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAzLFxuICAgICAgICAxODcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjcsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDYyLFxuICAgICAgICA3MixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYyLFxuICAgICAgICA2MixcbiAgICAgICAgMTIwLFxuICAgICAgICA5OSxcbiAgICAgICAgNixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODMsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjIxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjAyLFxuICAgICAgICA3NyxcbiAgICAgICAgODcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDk5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDY1LFxuICAgICAgICAxNixcbiAgICAgICAgMzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTksXG4gICAgICAgIDI2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDg3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTQwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQzLFxuICAgICAgICA1MixcbiAgICAgICAgMjE4LFxuICAgICAgICAzMixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ1LFxuICAgICAgICA4NCxcbiAgICAgICAgNDksXG4gICAgICAgIDYxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDgzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUnBOZFVyV1kzMGFRWU1aS2xyM3RzSW1SOGVjdHdzNktwUDVLTlllSGw3RT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzc2OTUwMTU2NjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjBERTMwNkUxMjIzMTEzMTk4MDcyQUQ3MjlEMkQyQTM1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTQ3OTMxMVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNzY5NTAxNTY2NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjEzMjdERkY5RUUwM0QyMTMzMzRFQzM0NjMyNzRBMjZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNDc5MzExXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM3Njk1MDE1NjY0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwQkYyNTUwMTVCRDdEMTEzOTVGRjE1MEZERDBBRTdGRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE0NzkzMTRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzc2OTUwMTU2NjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkMyRjI5Q0IxQTQyMDdGREMxMzQwQ0M0MkU3M0ExRkY1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTQ3OTMxNFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJmS2pPcFRXY1RVT3ZjNFJHVFBHV1JBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjBiOTVkYWY3LWVkMTItNDBmMy05Yjk3LTg1NThlNzhiOTIyZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMCxcbiAgICAgIDEzMSxcbiAgICAgIDgxLFxuICAgICAgMTQxLFxuICAgICAgOTcsXG4gICAgICAxNDYsXG4gICAgICAyMTAsXG4gICAgICAxMzMsXG4gICAgICAxNCxcbiAgICAgIDE4LFxuICAgICAgMTgsXG4gICAgICAxMDUsXG4gICAgICAxMixcbiAgICAgIDE3NyxcbiAgICAgIDE4MCxcbiAgICAgIDE2OSxcbiAgICAgIDg4LFxuICAgICAgNTcsXG4gICAgICAyMzcsXG4gICAgICAyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNyxcbiAgICAgIDI0MyxcbiAgICAgIDI0NyxcbiAgICAgIDExNSxcbiAgICAgIDIwMixcbiAgICAgIDU0LFxuICAgICAgMixcbiAgICAgIDEyOCxcbiAgICAgIDk2LFxuICAgICAgMTk0LFxuICAgICAgMjM3LFxuICAgICAgMTg1LFxuICAgICAgMTI2LFxuICAgICAgMjIsXG4gICAgICAxOTIsXG4gICAgICAxMTEsXG4gICAgICAxMTQsXG4gICAgICAyNixcbiAgICAgIDE1OSxcbiAgICAgIDIyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0o2VDYrc0VFSW5oN3JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUTZuK21NajFPcGUvU1ZhVzV6NVBNbmJuaXphWjJleU5JekI1emtrV3JRVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJGSzNydjdwV2dNTFJSNFR6NW5LaDVla3VWRkplbitTQzRvalVXTEdEZ29QN3JNZ1JYTDhic2RGM1c0R2lvdWV1VXp5VVVHTzdtTkdWWXhjREhid0tBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJrQlluOW5DRmVCc1dTekNuMG9BK0NVVnZMVFF4RENuZjViaWVDRmtXTlpaWm9lbG41VzErRkVCZnVDdnhHeFhxUzJHSkxkMFFPbXZPZTdmNEVaOXdBQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY5NTAxNTY2NDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVGFsYVwiLFxuICAgIFwibGlkXCI6IFwiNTcwODQ5MTM2ODg2MTA6MUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY5NTAxNTY2NDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTQ3OTMxMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUplQlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSmVCLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZ0lHYUUzVFpRaTRwZ28zQjJROGxGT2I4dGVRcElNN1Z1b1JFNzN0cnJTdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjk5ODkyNjM4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE0NzkzMDk3NzFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
