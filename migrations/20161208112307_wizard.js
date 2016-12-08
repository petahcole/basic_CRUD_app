
exports.up = function(knex, Promise) {
  return knex.schema.createTable("wizard", table =>   {
      table.increments();
      table.text("Name");
      table.text("Color");
      table.boolean("Morality")
  })
};

exports.down = function(knex, Promise) {
  
};
