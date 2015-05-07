/**
 * This function is called once the document/body has loaded completely. After this
 * event was called the DOM is ready. See body tag onload!
 */
function documentLoaded() {
  console.log(document.getElementById('blue'));
  console.log(document.getElementsByClassName('class1'));
  console.log(document.getElementsByTagName('div'));

  var blue = document.getElementById('blue');
  blue.style.color = 'orange';
  blue.style.fontSize = '24px';
  blue.style.width = '200px';
  blue.style.height = '160px';

  var class1s = document.getElementsByClassName('class1');
  for (var i = 0; i < class1s.length; i++) {
    var class1 = class1s[i];
    class1.style.backgroundColor = 'orange';
  }
};
