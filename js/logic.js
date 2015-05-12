var person = {
  firstName: "Basti",
  lastName: "Schweinsteiger",
  showFullName: function(e) {
    console.log('showFullName');
    console.log(this.firstName + " " + this.lastName); // undefined undefined
  }
};

// jQuery on document ready
$(function() {
  $('#blue').click(person.showFullName);

  $('#red').click(person.showFullName.bind(person));
});
