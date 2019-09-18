const router = require('express').Router();
let StaffDetail = require('../models/staffDetails.model');

router.route('/').get((req, res) => {
    StaffDetail.find()
    .then(staffDetails => res.json(staffDetails))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const seva = req.body.seva;
    const department = req.body.department;
    const contact = req.body.contact;

    const newStaffDetails = new StaffDetail({
        name,
        seva,
        department,
        contact
    });

    newStaffDetails.save()
    .then(() => res.json('New log added!'))
    .catch(err => res.status(400).json('Error ' + err));
});

module.exports = router;