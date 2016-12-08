
exports.seed = function(knex, Promise) {

  return knex('wizard').del()
    .then(function () {
      const wizards = [{
        Name: "Gandalf",
        Color: "Grey",
        Morality: true
      },{
        Name: "Sauron",
        Color: "White",
        Morality: false
      },{
        Name: "Radagast",
        Color: "Brown",
        Morality: true
      },{
        Name: "Harry Potter",
        Color: "Red/Gold",
        Morality: true
      },{
        Name: "Voldemore",
        Color: "Black",
        Morality: false
      }];
return knex("wizard").insert(wizards);
    });
};
