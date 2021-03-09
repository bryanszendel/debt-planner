exports.up = function (knex) {
  return knex.schema.createTable("debts", (debts) => {
    debts.increments();
    debts.string("name", 255).notNullable().unique();
    debts.text("description").notNullable();
    debts.integer("balance_due").notNullable();
    debts.string("category").notNullable();
    debts.text("image");
    debts.timestamps(); // will create two columns: created_at, updated_at
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("debts");
};
