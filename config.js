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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237697824510";




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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_53_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTksXG4gICAgICAgIDkzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjI1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE5LFxuICAgICAgICA2OCxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjEyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTMzLFxuICAgICAgICA4MyxcbiAgICAgICAgODAsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE4LFxuICAgICAgICA1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc5LFxuICAgICAgICA4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTksXG4gICAgICAgIDM2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgODksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDMsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODQsXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTI2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTc4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMCxcbiAgICAgICAgODcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTE4LFxuICAgICAgICA3NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODksXG4gICAgICAgIDExOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE2LFxuICAgICAgICAxMixcbiAgICAgICAgNzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjksXG4gICAgICAgIDkxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTMxLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI2LFxuICAgICAgICAyNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDY0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDgyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTc2LFxuICAgICAgICA5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDY2LFxuICAgICAgICA1MyxcbiAgICAgICAgNTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAxLFxuICAgICAgICA1NyxcbiAgICAgICAgNDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMCxcbiAgICAgICAgMjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIi9ZVDcvVW54VTdXUmhHUGtUbEpQRUFzQUxxMXlNTFRWZUkwdVdSMm5tU0k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM3Njc3OTQxMjc5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyODk5N0ZEMjdEQTUzNDAyQkJFNTdBOTNEQTk2NTgwOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIwODgzODZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiXzhLSTNDaHdSQldKR25hSGw5Zkg2Z1wiLFxuICBcInBob25lSWRcIjogXCI2YzJjYWY1YS1jZTIwLTRiZmItYTUzZi1hNTJiNzk5MjcwMTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM2LFxuICAgICAgNjcsXG4gICAgICAyMDEsXG4gICAgICAxMTQsXG4gICAgICAyMTcsXG4gICAgICAyMjYsXG4gICAgICAxODYsXG4gICAgICAxMDMsXG4gICAgICAyMyxcbiAgICAgIDE4OSxcbiAgICAgIDE4NixcbiAgICAgIDE2NixcbiAgICAgIDc2LFxuICAgICAgMTQwLFxuICAgICAgNTcsXG4gICAgICAxMTMsXG4gICAgICAxMixcbiAgICAgIDIzNixcbiAgICAgIDYsXG4gICAgICA1MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOCxcbiAgICAgIDEyLFxuICAgICAgMTc1LFxuICAgICAgNzIsXG4gICAgICAzMSxcbiAgICAgIDE1MSxcbiAgICAgIDIxNyxcbiAgICAgIDE0NCxcbiAgICAgIDE3MCxcbiAgICAgIDI0NixcbiAgICAgIDIzNyxcbiAgICAgIDExNixcbiAgICAgIDE0NixcbiAgICAgIDMsXG4gICAgICAxMDYsXG4gICAgICAxMzYsXG4gICAgICAxNTAsXG4gICAgICAxODgsXG4gICAgICAyNDgsXG4gICAgICAyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCU1dLUDJOQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM3Njc3OTQxMjc5OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1ODgxMDgzNjk3OTc0MzoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0k3Z252UUdFTFAzazdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSFdFRFI3a2dTMnlDV1NZRmlEODg3T1RXYlZRaVZiZ3BlYmtNN3ZTNzZVUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJoWXdSeFhqQXBPNk5SRHpsWjNLR1NtVEpSVjB0UFI0dnc3QzZCUmdta0RBVlNNbExsRjMvRDRNTElxYWw3YXlyaWo0RnMrU0pxVEVucnhDZkM4ekVBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJxY1B4bHVyN0NtQ0NTM3lWKytzUUxFRzAzZnQ3YUl3NS83M1I4ZWNNZHRiMFZ4K2JLemIrMXozellzdDBtcHN4THhDSXk5allhTExUTFhaZDhjOU1DUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2Nzc5NDEyNzk6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMDg4Mzc4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTmdQXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOZ1AuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI4K1FUU2pkMmNNYkhhQWNtVVRYWHhCcEpPZkFYbHBZUFZZR3dZaEhCY2s0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NTQzODYxOTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjA4ODM4MDY3NFwifSIKfQ=="  // PUT your SESSION_ID 


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
