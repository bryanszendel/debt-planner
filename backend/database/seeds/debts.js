exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("debts")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("debts").insert([
        {
          name: "Student Loan",
          description: "For Education, we pay",
          balance_due: 14000,
          category: "Education",
        },
        {
          name: "Vehicle",
          description: "For Transportation, we pay",
          balance_due: 11800,
          category: "Transportation",
        },
        {
          name: "Personal Loan",
          description: "For Quality of Life, we pay",
          balance_due: 4800,
          category: "Life",
        },
      ]);
    });
};
