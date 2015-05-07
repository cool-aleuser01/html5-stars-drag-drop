// more details about JavaScript module patterns are here:
// http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html
var MyModule = (function($) {

  var privateVar = "secret";
  this.publicVar1 = "public1";

  var privateFunction = function() {
    console.log('Pssst! Don\' tell anyone! It is ' + privateVar + '!');
  };

  this.publicFunction = function() {
    this.publicVar2 = "public2";
    console.log('This is a JavaScript module pattern: ' + this.publicVar1 + ' and ' + this.publicVar2);
  };

  this.callPrivateFunction = function() {
    privateFunction();
    console.log('This is the private variable: ' + privateVar);
  };

  this.listElements = function() {
    console.log($('blue'));
    console.log($('class1'));
    console.log($('div'));
  };

  this.manipulateElements = function() {
    var $blue = $('#blue');
    // single css value
    $blue.css('color', 'orange');

    // multple values at once
    $blue.css({
      'fontSize': '24px',
      'width': '200px',
      'height': '160px'
    });

    $('.class1').each(function(el) {
      var $class1 = $(el);
      $class1.css('background-color', 'orange');
    });
  };

  return this;
}).call({}, jQuery); //sweet! we can set this in an IIFE by passing in a blank object literal using the call method

// example how to call module code
$(function() {
  console.log(MyModule);
  MyModule.publicFunction();
  MyModule.callPrivateFunction();

  MyModule.listElements();
  MyModule.manipulateElements();

  // this function call will result in an error because privateFunction is not
  // publicly visible.
  MyModule.privateFunction();
});
