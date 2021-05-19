import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import { ConditionallyRender } from "react-util-kit";

import config from "../ChatBot/config"
import MessageParser from "../ChatBot/MessageParser"
import ActionProvider from "../ChatBot/ActionProvider"

import "../ChatBot/app.css";

import ButtonIcon  from "../ChatBot/robot.js";

function ChatBot() {
    const [showChatbot, toggleChatbot] = useState(false);
  
    return (
        <div className = "cont">
          <div className="app-chatbot-container">
            <ConditionallyRender
              ifTrue={showChatbot}
              show={
                <Chatbot
                  config={config}
                  messageParser={MessageParser}
                  actionProvider={ActionProvider}
                />
              }
            />
          </div>
  
          <button
            className="app-chatbot-button"
            onClick={() => toggleChatbot((prev) => !prev)}
          >
            <ButtonIcon className="app-chatbot-button-icon" style={{color: "#ffffff"}}/>
          </button>
          </div>
          );
}

export default ChatBot
