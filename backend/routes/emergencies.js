const router = require('express').Router();
let Emergency = require('../models/emergency.model');

router.route('/').get((req, res) => {
    Emergency.find()
    .then(emergencies => res.json(emergencies))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const service = req.body.service;
    const name = req.body.name;
    const contact = req.body.contact;

    const newEmergency = new Emergency({
        service,
        name,
        contact
    });

    newEmergency.save()
    .then(() => res.json('Emergency details added!'))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/update/:id').post((req, res) => {
    Emergency.findById(req.params.id)
      .then(emergencies => {
        emergencies.service = req.body.service;
        emergencies.name = req.body.name;
        emergencies.contact = req.body.contact;

        emergencies.save()
          .then(() => res.json('Emergency details updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').delete((req, res) => {
    Emergency.findByIdAndDelete(req.params.id)
      .then(() => res.json('Emergency details deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;