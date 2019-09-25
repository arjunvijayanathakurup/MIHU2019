const router = require('express').Router();
let Food = require('../models/food.model');

router.route('/').get((req, res) => {
    Food.find()
    .then(foods => res.json(foods))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const meal = req.body.meal;
    const time = req.body.time;
    const place = req.body.place;
    const counter = req.body.counter;

    const newFood = new Food({
        meal,
        time,
        place,
        counter
    });

    newFood.save()
    .then(() => res.json('New Food details added!'))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/update/:id').post((req, res) => {
    Food.findById(req.params.id)
      .then(foods => {
        foods.meal = req.body.meal;
        foods.time = req.body.time;
        foods.place = req.body.place;
        foods.counter = req.body.counter;


        foods.save()
          .then(() => res.json('Food details updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').delete((req, res) => {
    Food.findByIdAndDelete(req.params.id)
      .then(() => res.json('Food details deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;