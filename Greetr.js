// called using IIFEs
(function(global,$){
    
    // new object creation
  var Greeter = function(firstName, lastName , language) {
      return new Greeter.init(firstName, lastName, language);
  }
  
  // hidden within the scope of the IIFE
  var supportedLangs = ['en','es'];
    
    // logger messages
  var logMessages = {
      en: 'Logged in',
      es: 'Inicion sesion'
  };
  

  var greetings = {
    en: 'Hello',
    es: 'Hola'
  };
    
  var formalGreetings = {
    en: 'Greetings' ,
    es: 'Saludos'
  };
    
  
  Greeter.prototype = {
      setLanguage: function(lang){
          this.lanuage = lang;
          this.validate();
          return this;
      },
      
      fullName: function() {
          return this.firstName + ' ' + this.lastName          
      },
      
      validate: function() {
          // check if this is a valid languagge
          // referece to the array of supportedLangs
          
          if (supportedLangs.indexOf(this.language) === -1){
              throw "Invalid language";
          }
      },
      
      greeting: function(){
          return greetings[this.language] + ' ' + this.firstName + '!';
      },
      
      greetingFormal: function(){
          return formalGreetings[this.language] + ', '+ this.fullName();
      },
      
      greet: function(formal){
       var msg;
          
        if (formal) {
            msg = this.greetingFormal();
        }
        else {
            msg = this.greeting();
        }
          
        if(console){
            console.log(msg);
        } 
          // this refers tot the calling object at the execution time and allows method chaining
          return this;
      },
      
      log: function(){
      if(console){
          console.log(logMessages[this.languages] + ': ' + this.fullName());
          
        }
          //make chainable
          return this;
      },
      
      //
      HTMLGreeting: function(selector, formal){
          if(!$){
              throw 'jQuery not loaded';
          }
          
          if(!selector){
              throw 'Missing jQuery selector';
          }
          
          var msg;
          if(formal){
              msg = this.greetingFormal();
          }
          
          else{
              msg = this.greeting;
          }
          
          $(selector).html(msg);
          //make chainable
          return this;
      }
  }
  
    
    // the actual object is created here, allowing us to use construct the object without using the new keyword
  Greeter.init = function(firstName, lastName, language){
      var self = this;
      self.firstName = firstName || '';
      self.lastName = lastName || '';
      self.language = language || 'en';      
  }
  
  Greeter.init.prototype = Greeter.prototype;
    
    // attached out Greeter to the global object, and provide it an alias $G for easier typing
 global.Greeter = global.G$ = Greeter;
  
}(window,jQuery));