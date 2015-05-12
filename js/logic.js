// more details about JavaScript module patterns are here:
// http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html
var AnimationModule = (function($) {

  /**
   * Initialize module.
   */
  this.init = function() {
    console.log('init');
    console.log(this);

    // init name
    this.name = 'Maria';

    // call unbound function
    unboundFunction();

    // call bound function
    boundFunction();
  };

  /**
   * In unbound functions this keyword usually refers to window object.
   */
  var unboundFunction = function() {
    console.log('unboundFunction');
    console.log(this); // window object
  };

  /**
   * In bound functions this refers to the bound object.
   */
  var boundFunction = function() {
    console.log('boundFunction');
    console.log(this); // animation module object
  }.bind(this);

  return this;
}).call({}, jQuery); //sweet! we can set this in an IIFE by passing in a blank object literal using the call method

// example how to call module code
$(function() {
  var module = AnimationModule.init();
});
