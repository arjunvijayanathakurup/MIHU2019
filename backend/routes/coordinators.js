const router = require('express').Router();
let Coordinator = require('../models/coordinator.model');

router.route('/').get((req, res) => {
    Coordinator.find()
    .then(coordinators => res.json(coordinators))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const seva = req.body.seva;
    const department = req.body.department;
    const contact = req.body.contact;

    const newCoordinator = new Coordinator({
        name,
        seva,
        department,
        contact
    });

    newCoordinator.save()
    .then(() => res.json('Coordinator added!'))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/update/:id').post((req, res) => {
    Coordinator.findById(req.params.id)
      .then(coordinators => {
        coordinators.name = req.body.name;
        coordinators.seva = req.body.seva;
        coordinators.department = req.body.department;
        coordinators.contact = req.body.contact;

        coordinators.save()
          .then(() => res.json('Coordinator details updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').delete((req, res) => {
    Coordinator.findByIdAndDelete(req.params.id)
      .then(() => res.json('Coordinator details deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;