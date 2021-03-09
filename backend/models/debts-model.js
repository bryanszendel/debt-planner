const db = require("../database/dbConfig");

module.exports = {
  find,
  findById,
  add,
  edit,
  remove,
};

function find() {
  return db("debts");
}

function findById(id) {
  return db("debts").where("id", id).first();
}

function add(item) {
  return db("debts").insert(item);
}

function edit(id, item) {
  return db("debts").update(item).where("id", id);
}

function remove(id) {
  return db("debts").del().where("id", id);
}
