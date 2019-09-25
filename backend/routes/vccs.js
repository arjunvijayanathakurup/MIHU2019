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

router.route('/update/:id').post((req, res) => {
    VCC.findById(req.params.id)
        .then(users => {
        users.name = req.body.name;
        users.email = req.body.email;
        users.password = req.body.password;
        users.token = req.body.token;

        users.save()
        .then(() => res.json('VCC details updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').delete((req, res) => {
    VCC.findByIdAndDelete(req.params.id)
      .then(() => res.json('VCC details deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;