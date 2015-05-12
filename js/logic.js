var person = {
  team: "FC Bayern München",
  players: [
    "Basti Schweinsteiger",
    "Manuel Neuer",
    "Mario Götze"
  ],
  showTeamPlayers: function() {

    // store this in outer variable to access it in anonymous function below
    var that = this;

    // jQuery $.each information: https://api.jquery.com/jquery.each/
    $.each(this.players, function(index, player) {
      console.log(this); // this is not referring to person object
      console.log(index + ": " + player + " plays for " + that.team);
    });
  }
};

person.showTeamPlayers();
