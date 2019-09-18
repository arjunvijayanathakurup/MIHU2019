const router = require('express').Router();
let Information = require('../models/information.model');

router.route('/').get((req, res) => {
    Information.find()
    .then(informations => res.json(informations))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const message = req.body.message;

    const newInformation = new Information({
       message
    });

    newInformation.save()
    .then(() => res.json('New Information added!'))
    .catch(err => res.status(400).json('Error ' + err));
});

module.exports = router;