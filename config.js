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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348104994684";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_16_06_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDc2LFxuICAgICAgICAzMixcbiAgICAgICAgOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzksXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMSxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzksXG4gICAgICAgIDEsXG4gICAgICAgIDk1LFxuICAgICAgICAxOCxcbiAgICAgICAgMixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTksXG4gICAgICAgIDI4LFxuICAgICAgICA5MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxMSxcbiAgICAgICAgMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTYwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDk3LFxuICAgICAgICAxNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDY4LFxuICAgICAgICA5MixcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDUwLFxuICAgICAgICA4NixcbiAgICAgICAgMzUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDcwLFxuICAgICAgICA2NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAzMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDczLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE4LFxuICAgICAgICA4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDc5LFxuICAgICAgICA3OCxcbiAgICAgICAgNTksXG4gICAgICAgIDExNixcbiAgICAgICAgNTksXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA1MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxLFxuICAgICAgICA5NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA1NixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzgsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTYyLFxuICAgICAgICAxODksXG4gICAgICAgIDc0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAxLFxuICAgICAgICA0NyxcbiAgICAgICAgODIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU2LFxuICAgICAgICA0NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNixcbiAgICAgICAgMTkwLFxuICAgICAgICA5MixcbiAgICAgICAgNzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjksXG4gICAgICAgIDExMixcbiAgICAgICAgNjgsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTkwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImk2UGRaYWZhRkZDTjhWS0IyaHF1WTc2dkFvemRXSUNnMWg2bUtBelJUc009XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImluVjd0S28tUXZxenlvSEk1RV92TEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTI4ZTIwODMtODA2Yi00YTAzLTgxNTQtMDVjOGM5ZDk5YjIzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMyxcbiAgICAgIDEyLFxuICAgICAgNzAsXG4gICAgICAxNDMsXG4gICAgICAxNDAsXG4gICAgICAxNzEsXG4gICAgICAxNDgsXG4gICAgICAxODMsXG4gICAgICA0MCxcbiAgICAgIDIzOCxcbiAgICAgIDE0NyxcbiAgICAgIDIyMyxcbiAgICAgIDE2OSxcbiAgICAgIDUyLFxuICAgICAgMjQ0LFxuICAgICAgMjAwLFxuICAgICAgNzksXG4gICAgICAyMjYsXG4gICAgICAxMTcsXG4gICAgICAyNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU0LFxuICAgICAgMTQ1LFxuICAgICAgMTQsXG4gICAgICAxMDUsXG4gICAgICAxNTAsXG4gICAgICA0MSxcbiAgICAgIDMyLFxuICAgICAgNTIsXG4gICAgICAxMDAsXG4gICAgICA0MSxcbiAgICAgIDIzLFxuICAgICAgMTM3LFxuICAgICAgMjEyLFxuICAgICAgMTE1LFxuICAgICAgMjQzLFxuICAgICAgMTE5LFxuICAgICAgMTc4LFxuICAgICAgNDQsXG4gICAgICA2NCxcbiAgICAgIDE1OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5U0xTVDVTRFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEwNDk5NDY4NDoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlRlY2ggRGUgUHJvbWl0aG9cIixcbiAgICBcImxpZFwiOiBcIjM3NTAzNjcxMjMwNjE5OjEwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p6NWthOEVFTDIweTdNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiejJ5MlRrZzF5OVhaZk9rOVBnQUZpTkNDbGw3UStOU1ExcXNiMm5zMFAwYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ6eWhNOU9CeERRblRVR2s3NG0xWlBDOW4rSW9vM3BtanBzWDRMQk92ZDBlcys4NVlVUFA4SitXYUFyTE9QZ3RZV25HTmd5Q3d6dk8rZVZHcndFTlRCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJZWlJ6TE5pS1NpWkc0Y0xFZEtlZ0RRM0NuTngvRWlVQXdBRzcrdWh1THFaWXdKMDJWUTBqeUx4ZzBKR0hUQkVXY3NLc2JqdUowM3Vxamo2T3BvSzBodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTA0OTk0Njg0OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODgwMzAwOVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
