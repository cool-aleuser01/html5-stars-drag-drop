var person = {
  firstName: "Basti",
  lastName: "Schweinsteiger",
  showFullName: function(format) {
    if (format && format === "last,first") {
      console.log("2: " + this.lastName + ", " + this.firstName);
    }
    else {
      console.log("1: " + this.firstName + " " + this.lastName);
    }
  }
};

var anotherPerson = {
  firstName: "Manuel",
  lastName: "Neuer"
};

var yetAnotherPerson = {
  firstName: "Mario",
  lastName: "Götze"
};

// show full name of person
person.showFullName();
person.showFullName('last,first');

// call function of an object with another context object
person.showFullName.apply(anotherPerson);
person.showFullName.apply(anotherPerson, ['last,first']);

person.showFullName.call(anotherPerson);
person.showFullName.call(anotherPerson, 'last,first');

// use function of another object
yetAnotherPerson.showFullName = person.showFullName;
yetAnotherPerson.showFullName();
yetAnotherPerson.showFullName('last,first');
