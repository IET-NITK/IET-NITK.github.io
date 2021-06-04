// ActionProvider  code
import React from "react"
import { graphql, Link } from "gatsby"

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }
    
    
    blog = () =>{
        const message = this.createChatBotMessage(<Link to="/blog">Click here for blogs</Link>);
        this.addMessageToState(message);
        
    }
    contact = () =>{
        const message = this.createChatBotMessage(<Link to="/contact">Connect with us here!</Link>);
        this.addMessageToState(message);
    }
    emptyMessage = () =>{
        const message = this.createChatBotMessage("Sorry, I don't seem to understand you");
        this.addMessageToState(message);
    }
    events = (event)=>{
        if(event !== "event"){
            const message = this.createChatBotMessage(<Link to={"/events/"+ event}>Click here for {event} 2021</Link>);
            this.addMessageToState(message);
        }
        else{
            const message = this.createChatBotMessage(<Link to={"/events"}> Click here for current events</Link>);
            this.addMessageToState(message);
        }
    }
    greet = () =>{
        const message = this.createChatBotMessage("Hello, how may I help you?")
        this.addMessageToState(message);
    }
    members = ()=>{
        const message = this.createChatBotMessage(<Link to="/about">click here for about the club & members</Link>);
        this.addMessageToState(message);
    }
    projects = (sig) =>{
        if(sig !== "projects"){
            const message = this.createChatBotMessage(<Link to={"/sigs/"+ sig}>Click here for {sig} projects</Link>);
            this.addMessageToState(message);
        }
        else{
            const message = this.createChatBotMessage(<Link to={"/projects/"}> Click here for projects</Link>);
            this.addMessageToState(message);
        }
        
    }
    replyText = (reply) =>{
        const message = this.createChatBotMessage(reply);
        this.addMessageToState(message);
    }

    addMessageToState = (message) =>{
        this.setState(prevState =>  ({
            ...prevState,
            messages : [...prevState.messages, message],
        }));
    }
  }
  
  export default ActionProvider;