// http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/
function doSomething() {
  var args = Array.prototype.slice.call(arguments);
  console.log(args);
}

doSomething("Water", "Salt", "Glue"); // ["Water", "Salt", "Glue"]​
