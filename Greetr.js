(function(global,$){
  var Greeter = function(firstName, lastName , language) {
      return new Greeter.init(firstName, lastName, language);
  }
  
  Greeter.prototype = {}
  
  Greeter.init = function(firstName, lastName, language){
      var self = this;
      self.firstName = firstName || '';
      self.lastName = firstName || '';
      self.language = firstName || 'en';      
  }
  
  Greeter.init.prototype = Greeter.prototype;
    
    global.Greeter = global.G$ = Greeter;
  
}(window,jQuery));