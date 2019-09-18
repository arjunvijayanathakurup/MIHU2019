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

module.exports = router;