const router = require('express').Router();
let Coordinator = require('../models/accomodation.model');

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

module.exports = router;