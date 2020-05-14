const db = require('../data/db-config.js');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
}

function getRecipes() {
  return db('recipes')
}

function getShoppingList(id) {
  return db('recipe_detail as rd')
    .join('ingredients as i', 'i.id', '=', 'rd.ingredient_id')
    .join('recipes as r', 'r.id', '=', 'rd.recipe_id')
    .select('r.name', 'i.name', 'rd.quantity')
    .where('r.id', '=', id)
}

function getInstructions(id) {
  return db('steps as s')
    .join('recipes as r', 'r.id', '=', 's.recipe_id')
    .select('r.name', 's.step_number', 's.instructions')
    .where('r.id', '=', id)
}