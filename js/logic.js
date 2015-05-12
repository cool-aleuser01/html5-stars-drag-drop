var salad = {
  type: 'fruit',
  made: new Date(),
  by: 'Horst Lichter',
  ingredients: ['apple', 'banana', 'lemon', 'grape', 'pear']
};

var serialized = JSON.stringify(salad);
console.log(serialized);
console.log(JSON.parse(serialized));
