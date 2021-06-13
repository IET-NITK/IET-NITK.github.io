// Config starter code
var chat;
if(typeof window !== "undefined"){
  chat=require("react-chatbot-kit").createChatBotMessage;
}
const config = {
    botName: "IET Bot",
  initialMessages: [chat && chat(`Welcome to IET NITK, how may I help you?`)],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#332450",
      color: "#ffffff"
    }
}
}

export default config