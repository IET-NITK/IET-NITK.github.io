// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message)
      if(message == null){
        this.actionProvider.emptyMessage();
      }
      const lowercase = message.toLowerCase();
      
      if(lowercase.includes("hello") || lowercase.includes("hey")){
          this.actionProvider.greet();
      }
      else if(lowercase.includes("blog") || lowercase.includes("article")){
        this.actionProvider.blog();
      }
      else if(lowercase.includes("event") || lowercase.includes("bfme") || lowercase.includes("patn")){
        if(lowercase.includes("bfme")){
          this.actionProvider.events("bfme");
        }
        else if(lowercase.includes("patn")){
          this.actionProvider.events("patn");
        }
        else{
          this.actionProvider.events("event");
        }
      }
      else if(lowercase.includes("cipher")){
        if(lowercase.includes("projects")){
          this.actionProvider.projects("cipher");
        }
        else{
          this.actionProvider.replyText("It is a SIG that mainly focuses on computers and various technologies.");
        }
      }
      else if(lowercase.includes("rovisp")){
        if(lowercase.includes("projects")){
          this.actionProvider.projects("rovisp");
        }
        else{
          this.actionProvider.replyText("It is a SIG that mainly focuses in electronics and technological applications.");
        }
      }
      else if(lowercase.includes("torsion")){
        if(lowercase.includes("projects")){
          this.actionProvider.projects("torsion");
        }
        else{
          this.actionProvider.replyText("It is a SIG that mainly focuses in mechanics and applications.");
        }
      }
      else if(lowercase.includes("inkheart")){
        this.actionProvider.replyText("Inkheart is our new Lit&Phil SIG for people who are passionate about literature, music etc");
      }
      else if(lowercase.includes("medium")){
        this.actionProvider.replyText("This is a recently introduced SIG. Medium SIG is dedicated to people interested in Media and Marketing.");
      }
      else if(lowercase.includes("sig")){
        this.actionProvider.replyText("The sigs present in the club are: Cipher, Rovisp, Torsion, Inkheart, Medium");
      }
      else if(lowercase.includes("projects")){
        this.actionProvider.projects("projects");
      }
      else if(lowercase.includes("contact")){
        this.actionProvider.contact();
      }
      else if(lowercase.includes("bye")){
        this.actionProvider.replyText("Have a nice day!!");
      }
      else if(lowercase.includes("members")){
        this.actionProvider.members();
      }
      else{
        this.actionProvider.emptyMessage();
      }
    
    }
  }
  
  export default MessageParser;