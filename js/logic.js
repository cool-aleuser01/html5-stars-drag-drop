// more details about JavaScript module patterns are here:
// http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html
var AnimationModule = (function($) {

  /**
   * Initialize module and register click events on div elements with animatable
   * class set.
   */
  this.init = function() {

    var $animatables = $('div.animatable');

    // need to set position to relative or absolute, otherwise animation does
    // not work
    $animatables.css('position', 'relative');

    // add event to animate elements
    $animatables.on('click', function(e) {

      console.log('clicked on div element');

      // get the clicked element
      var target = e.currentTarget;
      $(target).animate({
        left: '+=50'
      }, 3000, function() {
        console.log('animation complete');
      });
    });
  };

  return this;
}).call({}, jQuery); //sweet! we can set this in an IIFE by passing in a blank object literal using the call method

// example how to call module code
$(function() {
  console.log(AnimationModule);
  var module = AnimationModule.init();
});
