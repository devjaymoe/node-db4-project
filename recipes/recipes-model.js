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
  console.log('db', id)
  return db('recipe_detail as rd')
    .join('ingredients as i', 'i.id', '=', 'rd.ingredient_id')
    .join('recipes as r', 'r.id', '=', 'rd.recipe_id')
    .select('r.name', 'i.name', 'rd.quantity')
    .where('r.id', '=', id)
}

// select distinct r.name, i.name, rd.quantity
// from recipe_detail as rd
// join ingredients as i on i.id = rd.ingredient_id
// join recipes as r on r.id = rd.recipe_id
// where r.id = 2;

function getInstructions() {
  
}