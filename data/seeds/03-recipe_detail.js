
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_detail').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_detail').insert([
        {
          recipe_id: 1,
          ingredient_id: 1,
          quantity: 2
        },
        {
          recipe_id: 1,
          ingredient_id: 2,
          quantity: 2
        },
      ]);
    });
};
