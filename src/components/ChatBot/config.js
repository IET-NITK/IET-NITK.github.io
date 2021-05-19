// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
    botName: "IET Bot",
  initialMessages: [createChatBotMessage(`Welcome to IET NITK, how may I help you?`)],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#332450",
      color: "#ffffff"
    }
}
}

export default config