exports.up = function (knex) {
  return knex.schema.createTable("users", (users) => {
    users.increments();
    users.string("first_name", 255).notNullable();
    users.string("last_name", 255).notNullable();
    users.string("email").notNullable();
    users.string("picture");
    users.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
