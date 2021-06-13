import React, { useState } from "react"
import Chatbot from "react-chatbot-kit"

import config from "../ChatBot/config"
import MessageParser from "../ChatBot/MessageParser"
import ActionProvider from "../ChatBot/ActionProvider"

import ButtonIcon from "../ChatBot/robot.js"
import "../ChatBot/app.css"

function MyChatBot() {
  const [showChatbot, toggleChatbot] = useState(false)
  return (
    <div className="cont">
      <div className="app-chatbot-container">
        {showChatbot ? (
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        ) : null}
      </div>

      <button
        className="app-chatbot-button"
        onClick={() => toggleChatbot(prev => !prev)}
      >
        <ButtonIcon
          className="app-chatbot-button-icon"
          style={{ color: "#ffffff" }}
        />
      </button>
    </div>
  )
}

export default MyChatBot
