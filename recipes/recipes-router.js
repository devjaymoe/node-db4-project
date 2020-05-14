const express = require('express');
const Recipes = require('./recipes-model.js');
const router = express.Router();

router.get('/', (req, res) => {
  // get all recipes from the database
  Recipes.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get('/:id/shoppinglist', (req, res) => {
  const { id } = req.params
  Recipes.getShoppingList(id)
    .then(shoppinglist => {
      res.status(200).json(shoppinglist);
    })
    .catch(error => {
      res.status(500).json(error);
    });
})

router.get('/:id/steps', (req, res) => {
  const { id } = req.params
  Recipes.getInstructions(id)
    .then(steps => {
      res.status(200).json(steps);
    })
    .catch(error => {
      res.status(500).json(error);
    });
})

// create recipe
router.post('/', (req, res) => {
  db('recipes').insert(req.body)
  .then(ids => {
    const id = ids[0];

    db('recipes')
      .where({ id })
      .first()
    .then(recipe => {
      res.status(201).json(recipe);
    });
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

// remove recipes
router.delete('/:id', (req, res) => {
  db('recipes')
    .where({ id: req.params.id })
    .del()
  .then(count => {
    if (count > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'Record not found' });
    }
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

module.exports = router;