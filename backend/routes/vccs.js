const router = require('express').Router();
let VCC = require('../models/vcc.model');

router.route('/').get((req, res) => {
    VCC.find()
    .then(vcc => res.json(vcc))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
   const food = req.body.food;
   const time = req.body.time;
   const place = req.body.place;

    const newVcc = new VCC({
        food,
        time,
        place
    });

    newVcc.save()
    .then(() => res.json('New VCC detail added!'))
    .catch(err => res.status(400).json('Error ' + err));
});

module.exports = router;