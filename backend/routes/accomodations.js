const router = require('express').Router();
let Accomodation = require('../models/accomodation.model');

router.route('/').get((req, res) => {
    Accomodation.find()
    .then(accomodations => res.json(accomodations))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const gender = req.body.gender;
    const areaname = req.body.areaname;
    const locationOfAcc = req.body.locationOfAcc;
    const category = req.body.category;
    const contact = req.body.contact;
    const isFull = req.body.isFull;

    const newAccomodation = new Accomodation({
        gender,
        areaname,
        locationOfAcc,
        category,
        contact,
        isFull
    });

    newAccomodation.save()
    .then(() => res.json('Accomodation added!'))
    .catch(err => res.status(400).json('Error ' + err));
});

module.exports = router;