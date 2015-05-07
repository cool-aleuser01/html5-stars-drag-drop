// Everything inside of this function is called after the document is ready and
// is short for $(document).ready(function() {});
$(function() {

  console.log($('blue'));
  console.log($('class1'));
  console.log($('div'));

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
});
