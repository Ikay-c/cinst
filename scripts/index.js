function Chatbot(){
 this.message = [
  ['hello', "hey, what's up", "who are you?", " what's your name"],
  ["who made you?", "how much does it cost?", "how do you want it?"],
  ["are you there?", "are you going?"]];
  
 this.replies = [
  ['hi, how are you doing?', "I'm good", "I'm your new digital assistance", " I'm Cinst"],
  ["my master made me", "it cost $500", " through mobile transfer"],
  ["yes, I'm here", "I should be there"]];
  
  //here, I'm trying to create elements that would contain the chat body, the message box in which the message will appear after been sent, the box that'd contain message while still typing and the send button.
  this.chatBody = document.createElement('div');
  this.chatBody.setAttribute('class', 'chat-body');
  document.body.appendChild(this.chatBody);
  this.messageBody = document.createElement('div');
  this.messageBody.setAttribute('class', 'message-body');
  this.chatBody.appendChild(this.messageBody);
  this.inputBox = document.createElement('input');
  this.inputBox.setAttribute('class', 'input-box');
  this.inputBox.setAttribute('type', 'text');
  this.chatBody.appendChild(this.inputBox);
  this.sendButton = document.createElement('button');
  this.sendButton.setAttribute('class', 'send-button');
  this.sendButton.innerHTML = 'Send';
  this.chatBody.appendChild(this.sendButton);
  
  this.messages = "";
  this.start = function(){
  };
  // here's a constructor function that serves like a house to the message body.
  function createMessage(messages, messageBody, type = 'output'){
    var box = document.createElement('div');
    box.setAttribute('class', 'chat-box')
    var text = document.createElement('span');
    if (type == 'output'){
      text.style.color = 'violet';
      text.setAttribute('class', 'text-output');
    }else{
      text.style.color = 'pink';
      text.setAttribute('class', 'text-receive');
    }
    box.appendChild(text);
    self.messageBody.appendChild(box);
    text.innerHTML = self.messages;
  }
  //here the method receives the message from the user and send to the message bdy.
  this.receive = function(messages){
    this.messages = messages;
    createMessage(messages, this.messageBody, 'receive');
  };
  var self = this;
  function chat(){// here is a function that tries to loop through the items in the array.
    var inputMessage = self.inputBox.value;
    if(self.messages != inputMessage){//here we try to compare the user's input to the 
      self.receive(inputMessage);//passing the input message through the receive method.
      /* i here is for the arrays inside the outermost array with length of 3*/
      var i = 0;
      while(i < self.message.length){
        self.innerMessages = self.message[i];
        /* k is for the elements inside the inner arrays*/
        k = 0;
        while (k < self.innerMessages.length){
         self.userInput = self.innerMessages[k];
         var confirm = self.messages.includes(self.userInput);
         if (confirm == true){
          self.innerReplies = self.replies[i];
          self.output(self.innerReplies[k]);//passing the response to thr user
          break;
         }else{
          k++;
         }
        }
      i++;
     }
   }
  }
  
  this.output= function(messages){//here is a method that replies a user with a matched response through the user interface.
    createMessage(messages, this.messageBody, 'output');
  };
  this.sendButton.onclick = function(events){//here is an event that sends the user's message once clicked.
    events.preventDefault();
    chat();
  };
 }
var chater = new Chatbot();//creating an object
chater.start();//starting the new object function.
// the whole code works like this: a user interface where the user interacts with the bot is created. it has a box that houses every other thing and that box is the chat body. inside the chat body, there's another box thaf contains the messages from the user and the bot and that box is called the message body. inside thag chat body, there's another box that allows a user to type his or her message and that box is called the input box. beside the input box is another box that sends the input message and that box is called the send button. When the user types, it compares the input to the array, sends it to the bot through the receive method form the create message function.