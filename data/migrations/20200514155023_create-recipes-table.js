
exports.up = function(knex) {
  return knex.schema.createTable('recipes', recipes => {
    recipes.increments();
    recipes
      .string('Name', 255)
      .notNullable();
  })
  .createTable('ingredients', ingredients => {
    ingredients.increments();
    ingredients
      .string('Name', 255)
      .notNullable();
  })
  .createTable('recipe_detail', recipe_detail => {
    recipe_detail.increments();
    recipe_detail
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');
    recipe_detail
      .integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');
    recipe_detail
      .integer('quantity')
      .unsigned()
      .notNullable();
  })
  .createTable('steps', steps => {
    steps.increments();
    steps
      .integer('step_number')
      .unsigned()
      .notNullable();
    steps
      .string('instructions', 255)
      .notNullable();
    steps
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');
  })
};

exports.down = function(knex) {
  return knex.schema  
    .dropTableIfExists('steps')
    .dropTableIfExists('recipe_detail')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
