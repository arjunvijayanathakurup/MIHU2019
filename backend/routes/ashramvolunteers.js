const router = require('express').Router();
let Ashram = require('../models/ashramVolunteer.model');

router.route('/').get((req, res) => {
    Ashram.find()
    .then(ashram => res.json(ashram))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const section = req.body.section;
    const sevaPlace = req.body.sevaPlace;
    const incharge = req.body.incharge;
    const contact = req.body.contact;

    const newAshram = new Ashram({
        section,
        sevaPlace,
        incharge,
        contact,
    });

    newAshram.save()
    .then(() => res.json('Ashram Volunteer added!'))
    .catch(err => res.status(400).json('Error ' + err));
});

module.exports = router;