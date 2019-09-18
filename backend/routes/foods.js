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

module.exports = router;