
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {
          step_number: 1,
          instructions: 'Cook Eggs',
          recipe_id: 1
        },
        {
          step_number: 2,
          instructions: 'Toast Bread',
          recipe_id: 1
        }
      ]);
    });
};
