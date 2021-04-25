const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: [Product],
  }).then(results => {
    res.json(results);
  });
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [Product],
  }).then(results => {
    res.json(results);
  })
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    id: req.body.id,
    category_name: req.body.category_name,
  }).then(results => {
    res.json(results);
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  // console.log(req);
  // console.log(req.params.category_name)
  Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      //Dictates what to look for
      where: {
        id: req.params.id,
      },
    }
  ).then( results => {
    res.json(results);
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  }).then(results => {
    res.json(results);
  });
});

module.exports = router;
