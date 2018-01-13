(function(global,$){
  var Greeter = function(firstName, lastName , language) {
      return new Greeter.init(firstName, lastName, language);
  }
  
  var logMessages = {
      en: 'Logged in',
      es 'Inicion sesion'
  };
  
  var supportedLangs = ['en','es']
  
  greetings = {
    en: 'Hello',
    es: 'Hola'
  };
    
  formalGreetings = {
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
          console.log(logMessages[this.languages] + ': ' + this.fullName();
          )
        }
          return this;
      }
  }
  
  Greeter.init = function(firstName, lastName, language){
      var self = this;
      self.firstName = firstName || '';
      self.lastName = lastName || '';
      self.language = language || 'en';      
  }
  
  Greeter.init.prototype = Greeter.prototype;
    
    global.Greeter = global.G$ = Greeter;
  
}(window,jQuery));